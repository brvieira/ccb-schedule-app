<template>
  <div class="container">
    <div class="row justify-center">
      <div class="q-pa-md q-mt-xl col-12">
        <q-table
          :data="rows"
          :columns="columns"
          row-key="dia"
          :pagination="pagination"
          :loading="loading"
          @row-click="onRowClick"
        >
          <template v-slot:loading>
            <q-inner-loading showing color="primary" />
          </template>
        </q-table>
      </div>
    </div>
    <div class="row">
      <div class="q-pa-sm col">
        <q-btn
          class="q-ml-sm"
          color="primary"
          :disable="loading"
          label="Novo"
          @click="addRow"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getDataByType } from "../data/services";
export default {
  name: "AdminLayout",
  props: ["tipo"],
  data() {
    return {
      loading: true,
      pagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 10
      },
      columns: [
        {
          name: "data",
          label: "Data",
          field: "data",
          align: "left",
          sortable: true,
          classes: "bg-grey-4 ellipsis",
          headerClasses: "bg-primary text-white"
        },
        {
          name: "horario",
          label: "Horário",
          field: "horario",
          align: "center",
          sortable: false,
          headerClasses: "bg-primary text-white"
        },
        {
          name: "tipo_servico",
          label: "Tipo de Serviço",
          field: "tipo_servico",
          align: "center",
          sortable: false,
          headerClasses: "bg-primary text-white"
        },
        {
          name: "irmaos",
          label: "Irmãos",
          field: "irmaos",
          align: "center",
          sortable: false,
          headerClasses: "bg-primary text-white"
        },
        {
          name: "irmas",
          label: "Irmãs",
          field: "irmas",
          align: "center",
          sortable: false,
          headerClasses: "bg-primary text-white"
        },
        {
          name: "musicos",
          label: "Músicos",
          field: "musicos",
          align: "center",
          sortable: false,
          headerClasses: "bg-primary text-white"
        },
        {
          name: "outros",
          label: "Colaboradores",
          field: "outros",
          align: "center",
          sortable: false,
          headerClasses: "bg-primary text-white"
        }
      ],
      rows: []
    };
  },
  methods: {
    onRowClick(evt, row) {
      this.$router.push({
        name: "editar_servico",
        params: {
          id: row._id
        }
      });
    },
    addRow() {
      this.$router.push("servico/novo");
    },
    async getData(tipo) {
      try {
        const data = await getDataByType(tipo);
        this.rows = [...data];
        this.loading = false;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getData(this.tipo);
    console.log(this.tipo);
  }
};
</script>
