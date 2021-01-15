<template>
  <div class="row justify-center">
    <template v-if="loading">
      <q-inner-loading showing color="primary" />
    </template>
    <div v-else-if="!senhas" class="q-pa-md q-mt-lg col">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">
            Retirar Senha
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-form class="q-gutter-md">
            <q-select
              filled
              disable
              v-model="servico.tipo_servico"
              :options="options"
              label="Tipo de Serviço"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, selecione o tipo de serviço'
              ]"
            />

            <q-input
              filled
              disable
              v-model="servico.data"
              mask="##/##/####"
              label="Data"
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
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              filled
              disable
              v-model="servico.horario"
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
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-select
              v-model="quantidade_irmaos"
              :options="[0, 1, 2, 3, 4, 5]"
              label="Quantidade de Irmãos"
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
            </q-select>

            <q-select
              v-model="quantidade_irmas"
              :options="[0, 1, 2, 3, 4, 5]"
              label="Quantidade de Irmãs"
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
            </q-select>

            <div class="q-mt-xl">
              <q-btn
                label="Solicitar"
                @click="createNewNumber"
                color="primary"
              />
              <q-btn
                label="Cancelar"
                @click="$router.go(-1)"
                color="primary"
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
      loading: false,
      quantidade_irmaos: null,
      quantidade_irmas: null,
      options: [
        "Culto Oficial",
        "Reunião de Jovens e Menores",
        "Ensaio",
        "Outros"
      ],
      servico: {
        tipo_servico: null,
        data: null,
        horario: null,
        irmaos: null,
        irmas: null
      },
      senhas: null
    };
  },
  methods: {
    async getAvailableService(tipo) {
      try {
        const data = await getAvailableByType(tipo);
        this.servico = { ...data };
      } catch (error) {
        console.error(error);
      }
    },
    async createNewNumber() {
      this.loading = true;
      try {
        const body = {
          culto_id: this.servico._id,
          irmaos: this.quantidade_irmaos,
          irmas: this.quantidade_irmas,
          data: this.servico.data,
          horario: this.servico.horario
        };

        const numbers = await createNumberToService(body);
        this.senhas = { ...numbers };
        this.loading = false;
      } catch (error) {
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
