<template>
  <div class="row justify-center">
    <template v-if="loading">
      <q-inner-loading showing color="blue-grey-6" />
    </template>
    <div v-else class="q-pa-md q-mt-lg col">
      <q-card class="my-card">
        <q-card-section class="bg-blue-grey-6 text-white">
          <div class="text-h6">
            {{ id ? "Editar Serviço" : "Novo Serviço" }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-form class="q-gutter-md">
            <q-select
              :dense="$q.screen.lt.md"
              filled
              v-model="servico.tipo_servico"
              :options="options"
              label="Tipo de Serviço"
              color="blue-grey-10"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, selecione o tipo de serviço'
              ]"
            />

            <q-input
              filled
              :dense="$q.screen.lt.md"
              v-model="servico.data"
              color="blue-grey-10"
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
                    <q-date
                      v-model="servico.data"
                      mask="DD/MM/YYYY"
                      color="blue-grey-8"
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Fechar"
                          color="blue-grey-8"
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
              :dense="$q.screen.lt.md"
              v-model="servico.horario"
              mask="time"
              color="blue-grey-10"
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
                    <q-time v-model="servico.horario" color="blue-grey-8">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Fechar"
                          color="blue-grey-8"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              :dense="$q.screen.lt.md"
              v-model.number="servico.irmaos"
              type="number"
              label="Lugares disponíveis para Irmãos"
              color="blue-grey-10"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, preencha a quantidade de lugares disponíveis',
                val =>
                  val > 0 ||
                  'A quantidade de lugares disponíveis deve ser maior que 0'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="people_alt" />
              </template>
            </q-input>
            <q-input
              :dense="$q.screen.lt.md"
              color="blue-grey-10"
              v-model.number="servico.irmas"
              type="number"
              label="Lugares disponíveis para Irmãs"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, preencha a quantidade de lugares disponíveis',
                val =>
                  val > 0 ||
                  'A quantidade de lugares disponíveis deve ser maior que 0'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="people_alt" />
              </template>
            </q-input>

            <q-input
              :dense="$q.screen.lt.md"
              v-model.number="servico.musicos"
              type="number"
              color="blue-grey-10"
              label="Lugares reservados para Músicos"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, preencha a quantidade de lugares reservados',
                val =>
                  val > 0 ||
                  'A quantidade de lugares reservados deve ser maior que 0'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="music_note" />
              </template>
            </q-input>

            <q-input
              :dense="$q.screen.lt.md"
              v-model.number="servico.outros"
              type="number"
              color="blue-grey-10"
              label="Lugares reservados para Outros Colaboradores"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, preencha a quantidade de lugares reservados',
                val =>
                  val > 0 ||
                  'A quantidade de lugares reservados deve ser maior que 0'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="groups" />
              </template>
            </q-input>

            <div class="q-mt-lg">
              <q-btn
                :dense="$q.screen.lt.md"
                v-if="id"
                label="Salvar"
                @click="saveEdition"
                color="blue-grey-10"
              />
              <q-btn
                v-else
                :dense="$q.screen.lt.md"
                label="Criar"
                @click="createNew"
                color="blue-grey-10"
              />
              <q-btn
                label="Cancelar"
                :dense="$q.screen.lt.md"
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
  </div>
</template>

<script>
import { createNew, getDataById, editData } from "../data/services";
export default {
  name: "ServiceForm",
  props: ["id"],
  data() {
    return {
      loading: true,
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
        irmas: null,
        musicos: null,
        outros: null,
        senhas_irmaos: [],
        senhas_irmas: []
      }
    };
  },
  methods: {
    optionsFn(date) {
      const dayOfWeek = new Date(date).getDay();

      return (
        date >= this.getDate(new Date()) &&
        (dayOfWeek == 0 || dayOfWeek == 3 || dayOfWeek == 5)
      );
    },
    getDate(date) {
      const day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getYear() + 1900,
        convDat = day < 10 ? `0${day}` : day,
        convMonth = month < 10 ? `0${month}` : month;

      return `${year}/${convMonth}/${convDat}`;
    },
    async createNew() {
      const body = { ...this.servico };

      try {
        const response = await createNew(body);
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Serviço criado com sucesso!"
        });
        this.$router.go(-1);
      } catch (error) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro ao criar serviço!"
        });
        console.error(error);
      }
    },
    async saveEdition() {
      let body = { ...this.servico };

      delete body.senhas_irmaos;
      delete body.senhas_irmas;

      try {
        const response = await editData(body);
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Serviço editado com sucesso!"
        });
        this.$router.go(-1);
      } catch (error) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro ao editar serviço!"
        });
        console.error(error);
      }
    },
    async getServiceData(id) {
      try {
        const data = await getDataById(id);
        if (data.length > 0) {
          let service = data.find(serv => serv._id === id);
          this.servico = { ...service };
          this.loading = false;
        }
      } catch (error) {
        console.error(error);
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro ao carregar informações do serviço!"
        });
        this.loading = false;
      }
    }
  },
  mounted() {
    if (this.id) {
      this.getServiceData(this.id);
    } else {
      this.loading = false;
    }
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
  margin: auto
</style>
