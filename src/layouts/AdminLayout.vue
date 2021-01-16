<template>
  <div class="container">
    <div class="row justify-center">
      <div class="q-pa-md q-px-sm-xl q-px-xs q-mt-lg col-12">
        <q-table
          :dense="$q.screen.lt.md"
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
      <div class="q-pa-md col q-px-sm-xl q-px-xs">
        <q-btn
          :dense="$q.screen.lt.md"
          color="blue-grey-10"
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
          headerClasses: "bg-blue-grey-8 text-white"
        },
        {
          name: "horario",
          label: "Horário",
          field: "horario",
          align: "center",
          sortable: false,
          headerClasses: "bg-blue-grey-8 text-white"
        },
        {
          name: "tipo_servico",
          label: "Tipo de Serviço",
          field: "tipo_servico",
          align: "center",
          sortable: false,
          headerClasses: "bg-blue-grey-8 text-white"
        },
        {
          name: "irmaos",
          label: "Irmãos",
          field: "irmaos",
          align: "center",
          sortable: false,
          classes: "mobile-hide",
          headerClasses: "bg-blue-grey-8 text-white mobile-hide"
        },
        {
          name: "irmas",
          label: "Irmãs",
          field: "irmas",
          align: "center",
          sortable: false,
          classes: "mobile-hide",
          headerClasses: "bg-blue-grey-8 text-white mobile-hide"
        },
        {
          name: "musicos",
          label: "Músicos",
          field: "musicos",
          align: "center",
          sortable: false,
          classes: "mobile-hide",
          headerClasses: "bg-blue-grey-8 text-white mobile-hide"
        },
        {
          name: "outros",
          label: "Colaboradores",
          field: "outros",
          align: "center",
          sortable: false,
          classes: "mobile-hide",
          headerClasses: "bg-blue-grey-8 text-white mobile-hide"
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
      this.$router.push({
        name: "novo_servico"
      });
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
