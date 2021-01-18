<template>
  <div class="row justify-center">
    <template v-if="loading">
      <q-inner-loading showing color="blue-grey-6" />
    </template>
    <div v-else-if="mensagem" class="q-pa-md q-mt-lg">
      <q-card class="my-card q-pa-lg">
        <q-card-section class="text-blue-grey-10 text-center q-gutter-md">
          <div class="text-h5 text-weight-bold">
            {{ mensagem }}
          </div>
          <div class="text-h6">{{ sub_mensagem }}</div>
          <q-btn
            :dense="$q.screen.lt.md"
            label="Voltar ao início"
            @click="$router.go(-1)"
            color="blue-grey-8"
            class="q-ml-sm"
          />
        </q-card-section>
      </q-card>
    </div>
    <div v-else-if="!senhas" class="q-pa-md q-mt-lg col">
      <q-card class="my-card">
        <q-card-section class="bg-blue-grey-6 text-white">
          <div class="text-h6">
            Retirar Senha
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-form class="q-gutter-md">
            <q-select
              :dense="$q.screen.lt.md"
              filled
              disable
              v-model="servico.tipo_servico"
              :options="options"
              color="blue-grey-10"
              label="Tipo de Serviço"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, selecione o tipo de serviço'
              ]"
            />

            <q-input
              :dense="$q.screen.lt.md"
              filled
              disable
              v-model="servico.data"
              mask="##/##/####"
              label="Data"
              color="blue-grey-10"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') || 'Por favor, preencha a data'
              ]"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="servico.data" mask="DD/MM/YYYY">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Fechar"
                          color="blue-grey-10"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              :dense="$q.screen.lt.md"
              filled
              disable
              v-model="servico.horario"
              color="blue-grey-10"
              mask="time"
              label="Horário"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, preencha o horário'
              ]"
            >
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time v-model="servico.horario">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Fechar"
                          color="blue-grey-10"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-select
              :dense="$q.screen.lt.md"
              v-model="quantidade_irmaos"
              :options="getOptions(availBrothers)"
              label="Quantidade de Irmãos"
              color="blue-grey-10"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, informe a quantidade de irmãos'
              ]"
            >
              <template v-slot:append>
                <q-icon name="people_alt" />
              </template>
              <template v-slot:hint>
                Senhas disponíveis:
                {{ availBrothers - quantidade_irmaos }}
              </template>
            </q-select>

            <q-select
              :dense="$q.screen.lt.md"
              v-model="quantidade_irmas"
              :options="getOptions(availSisters)"
              label="Quantidade de Irmãs"
              color="blue-grey-10"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, informe a quantidade de irmãs'
              ]"
            >
              <template v-slot:append>
                <q-icon name="people_alt" />
              </template>
              <template v-slot:hint>
                Senhas disponíveis:
                {{ availSisters - quantidade_irmas }}
              </template>
            </q-select>

            <div class="q-mt-lg">
              <q-btn
                :dense="$q.screen.lt.md"
                label="Solicitar"
                @click="createNewNumber"
                color="blue-grey-10"
              />
              <q-btn
                :dense="$q.screen.lt.md"
                label="Cancelar"
                @click="$router.go(-1)"
                color="blue-grey-10"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
    <Number v-else :senhas="senhas" />
  </div>
</template>
<script>
import { getAvailableByType } from "../data/services";
import { createNumberToService } from "../data/lane";
import Number from "../components/Number";
export default {
  name: "General",
  props: ["tipo"],
  components: { Number },
  data() {
    return {
      mensagem: null,
      sub_mensagem: null,
      loading: true,
      quantidade_irmaos: null,
      quantidade_irmas: null,
      options: [
        "Culto Oficial",
        "Reunião de Jovens e Menores",
        "Ensaio",
        "Outros"
      ],
      servico: null,
      senhas: null
    };
  },
  computed: {
    availSisters() {
      return this.servico.irmas - this.servico.senhas_irmas;
    },
    availBrothers() {
      return this.servico.irmaos - this.servico.senhas_irmaos;
    }
  },
  methods: {
    getOptions(max) {
      let item = 0,
        options = [];

      for (item; item <= max && item <= 5; item++) {
        options.push(item);
      }

      return options;
    },
    async getAvailableService(tipo) {
      try {
        const data = await getAvailableByType(tipo);
        if (Object.keys(data).length > 0) this.servico = { ...data };
        else {
          this.mensagem = "Não existem senhas disponíveis";
          this.sub_mensagem = "Tente novamente mais tarde";
        }
      } catch (error) {
        this.mensagem = "Não existem senhas disponíveis";
        this.sub_mensagem = "Tente novamente mais tarde";
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro ao carregar serviços disponíveis!"
        });
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async createNewNumber() {
      this.loading = true;
      try {
        if (this.quantidade_irmaos > 0 || this.quantidade_irmas > 0) {
          const body = {
            culto_id: this.servico._id,
            irmaos: this.quantidade_irmaos,
            irmas: this.quantidade_irmas,
            data: this.servico.data,
            horario: this.servico.horario
          };

          const numbers = await createNumberToService(body);
          this.senhas = { ...numbers };
        } else {
          this.mensagem =
            "A quantidade de irmãos ou irmãs deve ser maior que 0";
        }

        this.loading = false;
      } catch (error) {
        this.mensagem = "Houve um erro ao criar a senha";
        this.sub_mensagem = "Tente novamente mais tarde";
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro ao criar senha!"
        });
        console.error(error);
      }
    }
  },
  mounted() {
    this.getAvailableService(this.tipo);
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  margin: auto
</style>
