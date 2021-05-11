<template>
  <div class="row justify-center">
    <template v-if="loading">
      <q-inner-loading showing color="blue-grey-6" />
    </template>

    <div v-else class="q-pa-md q-mt-md col">
      <div v-if="text.length > 0" class="aviso">
        <q-card>
          <q-card-section class="text-white bg-orange-9">
            <div class="text-h6 text-weight-bolder">Aviso à Irmandade</div>
          </q-card-section>
          <q-card-section v-html="text" class="bg-orange-2" />
        </q-card>
      </div>

      <q-card class="my-card q-pa-lg">
        <q-card-section class="text-blue-grey-10 text-center">
          <div class="text-h4 text-weight-bold">Distribuição de Senhas</div>
          <div class="text-h6">Cultos Oficiais</div>
        </q-card-section>

        <q-card-actions align="center" class="q-pa-lg" vertical>
          <q-btn
            label="Retirar Senha"
            @click="$router.push({ name: 'senha' })"
            color="blue-grey-8"
            class="full-width"
          />
          <!-- <q-btn
            label="Devolução parcial de Senha"
            @click="$router.push({ name: 'editar_senha' })"
            color="blue-grey-8"
            class="full-width"
            style="margin-top: 24px !important"
          /> -->
          <q-btn
            label="Cancelar Senha"
            @click="$router.push({ name: 'devolver_senha' })"
            color="blue-grey-8"
            class="full-width"
            style="margin-top: 24px !important"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
import { getLastMessage } from "../data/messages";
export default {
  name: "InitialView",
  data() {
    return {
      loading: false,
      text: ""
    };
  },
  methods: {
    async getMessage() {
      try {
        this.loading = true;

        const data = await getLastMessage();
        this.text = data.text || "";
      } catch (error) {
        console.error(error);
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro ao carregar mensagem!"
        });
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.getMessage();
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  margin: auto

.aviso
  width: 100%
  max-width: 650px
  margin: auto
  margin-bottom: 2rem
</style>
