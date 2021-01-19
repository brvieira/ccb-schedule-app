<template>
  <div class="container">
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
            @click="$router.push({ name: 'index' })"
            label="Sair"
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
      <div class="q-pa-md q-px-sm-xl q-px-xs q-mt-lg col-12">
        <q-table
          :data="senhas"
          :columns="columns"
          :title="'Lista de Presença'"
          row-key="_id"
          :pagination="pagination"
          selection="multiple"
          :selected.sync="selected"
          :loading="loading"
          :filter="filter"
        >
          <template v-slot:loading>
            <q-inner-loading showing color="blue-grey-8" />
          </template>
          <template v-slot:top-right>
            <q-input
              debounce="300"
              v-model="filter"
              placeholder="Pesquisar"
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
          @click="addRow"
          class="q-mt-md"
        />
        <q-space />
      </div>
    </div>
  </div>
</template>
<script>
import { getNextByType } from "../data/services";
import { getNumbersByServiceAndType } from "../data/lane";
export default {
  name: "ControlView",
  props: ["tipo"],
  data() {
    return {
      pagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 10
      },
      filter: "",
      servicos: [],
      servico: null,
      loading: false,
      message: null,
      senhas: null,
      selected: [],
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
</style>
