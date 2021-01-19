<template>
  <div class="container q-mt-lg q-pa-md">
    <template v-if="loading">
      <q-inner-loading showing color="blue-grey-6" />
    </template>

    <q-card v-else-if="!senhas" class="my-card q-mx-sm">
      <q-card-section class="bg-blue-grey-6 text-white">
        <div class="text-h6">
          Selecione o Culto
        </div>
      </q-card-section>

      <q-separator />
      <q-card-section v-if="message">
        <div class="my-section q-pa-md">
          <div class="text-h5 text-weight-bold text-center">
            {{ message }}
          </div>
          <q-btn
            color="blue-grey-10"
            @click="$router.go()"
            label="Voltar"
            class="full-width q-mt-xl"
          />
        </div>
      </q-card-section>
      <q-card-section v-else>
        <q-form
          class="q-gutter-md q-pa-md"
          @submit="getServiceLane(servico._id, tipo)"
        >
          <q-select
            :dense="$q.screen.lt.md"
            :disable="servicos.length == 0"
            filled
            v-model="servico"
            :options="servicos"
            option-label="data"
            label="Data do culto"
            color="blue-grey-10"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') ||
                'Por favor, selecione a data do culto'
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="event" />
            </template>
            <template v-if="servicos.length == 0" v-slot:hint>
              Não existem cultos disponíveis
            </template>
          </q-select>

          <div>
            <q-btn
              :disable="!servico"
              label="Buscar Lista de Senhas"
              type="submit"
              color="blue-grey-10 full-width"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <div v-else class="row justify-center">
      <q-tabs
        v-model="tab"
        align="center"
        class="text-blue-grey-10 col-12"
        no-caps
        outside-arrows
        mobile-arrows
      >
        <q-tab
          name="not-confirmed"
          :label="
            tipo == 'irmao'
              ? 'IRMÃOS QUE NÃO CHEGARAM'
              : 'IRMÃS QUE NÃO CHEGARAM'
          "
        />
        <q-tab
          name="confirmed"
          :label="
            tipo == 'irmao' ? 'IRMÃOS QUE JÁ CHEGARAM' : 'IRMÃS QUE JÁ CHEGARAM'
          "
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="tab"
        class="col-12 no-background q-px-sm-xl q-px-xs"
      >
        <q-tab-panel name="not-confirmed">
          <q-table
            :data="notConfirmed"
            :columns="columns"
            :title="'Lista de Presença'"
            row-key="_id"
            :pagination="pagination"
            selection="multiple"
            :selected.sync="selected_not_confirmed"
            :loading="loading"
            :filter="filter_not_confirmed"
          >
            <template v-slot:loading>
              <q-inner-loading showing color="blue-grey-8" />
            </template>
            <template v-slot:top-right>
              <q-input
                debounce="300"
                v-model="filter_not_confirmed"
                placeholder="Pesquisar pela senha"
                color="blue-grey-10"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
          <q-btn
            color="blue-grey-10"
            :disable="loading"
            label="Confirmar presença"
            @click="updateNumbers(true)"
            class="q-mt-md"
          />
        </q-tab-panel>

        <q-tab-panel name="confirmed">
          <q-table
            :data="confirmed"
            :columns="columns"
            :title="'Lista de Presença'"
            row-key="_id"
            :pagination="pagination"
            selection="multiple"
            :selected.sync="selected_confirmed"
            :loading="loading"
            :filter="filter_confirmed"
          >
            <template v-slot:loading>
              <q-inner-loading showing color="blue-grey-8" />
            </template>
            <template v-slot:top-right>
              <q-input
                debounce="300"
                v-model="filter_confirmed"
                placeholder="Pesquisar pela senha"
                color="blue-grey-10"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
          <q-btn
            color="blue-grey-10"
            :disable="loading"
            label="Desconfirmar presença"
            @click="updateNumbers(false)"
            class="q-mt-md"
          />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script>
import { getNextByType } from "../data/services";
import { getNumbersByServiceAndType, updateNumbers } from "../data/lane";
export default {
  name: "ControlView",
  props: ["tipo"],
  data() {
    return {
      tab: "not-confirmed",
      pagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 10
      },
      filter_not_confirmed: "",
      filter_confirmed: "",
      servicos: [],
      servico: null,
      loading: false,
      message: null,
      senhas: null,
      selected_not_confirmed: [],
      selected_confirmed: [],
      columns: [
        {
          name: "senha",
          label: "Senha",
          field: "senha",
          align: "center"
        },
        {
          name: "tipo",
          label: "Tipo",
          field: row => (row.tipo === "irmao" ? "Irmão" : "Irmã"),
          align: "center",
          sortable: false
        },
        {
          name: "status",
          label: "Chegou?",
          field: row => (row.status ? "Sim" : "Não"),
          align: "center",
          sortable: false
        }
      ]
    };
  },
  computed: {
    serviceDates() {
      return this.servicos.map(s => s.data);
    },
    notConfirmed() {
      return this.senhas.filter(s => !s.status);
    },
    confirmed() {
      return this.senhas.filter(s => s.status);
    }
  },
  methods: {
    async getServices() {
      try {
        this.loading = true;
        const data = await getNextByType("Culto Oficial");
        this.servicos = [...data];
      } catch (error) {
        console.error(error);
        this.message = "Erro ao buscar próximos cultos";
      } finally {
        this.loading = false;
      }
    },
    async getServiceLane(serviceId, type) {
      try {
        this.loading = true;

        const data = await getNumbersByServiceAndType(serviceId, type);

        if (data.length == 0) {
          this.message = "Não existe nenhuma senha para o culto informado";
        } else {
          this.senhas = [...data];
        }
      } catch (error) {
        console.error(error);
        this.message = "Erro ao buscar lista de senhas para o culto";
      } finally {
        this.loading = false;
      }
    },

    async updateNumbers(status) {
      try {
        this.loading = true;
        const selected = status
          ? this.selected_not_confirmed
          : this.selected_confirmed;
        const ids = selected.map(s => s._id);

        const body = {
          ids,
          field: "status",
          value: status
        };

        const data = await updateNumbers(body);
        await this.getServiceLane(this.servico._id, this.tipo);
      } catch (error) {
      } finally {
        this.selected_not_confirmed = [];
        this.selected_confirmed = [];
        this.filter_not_confirmed = "";
        this.filter_confirmed = "";
        this.loading = false;
      }
    }
  },
  mounted() {
    this.getServices();
  }
};
</script>
<style lang="sass" scoped>
.my-card
  max-width: 450px
  width: 100%
  margin: auto

.no-background
  background-color: transparent
</style>
