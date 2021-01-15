<template>
  <div class="row justify-center">
    <template v-if="loading">
      <q-inner-loading showing color="primary" />
    </template>
    <div v-else class="q-pa-md q-mt-xl col">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h5">Distribuição de Senhas</div>
          <div class="text-subtitle2">Cultos Oficiais</div>
        </q-card-section>

        <q-card-actions align="around" class="q-py-xl q-px-sm-xl q-px-xs-sm">
          <q-btn
            label="Retire sua Senha"
            rounded
            @click="$router.push('/senha')"
            color="primary"
          />
          <q-btn
            label="Devolva sua Senha"
            rounded
            @click="$router.go(-1)"
            color="primary"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
import { getAvailableByType } from "../data/services";

export default {
  name: "InitialView",
  props: ["tipo"],
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
      }
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
    async createNewOrder() {}
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
