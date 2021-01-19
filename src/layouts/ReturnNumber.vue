<template>
  <div class="row justify-center">
    <template v-if="loading">
      <q-inner-loading showing color="blue-grey-6" />
    </template>
    <div v-else class="q-pa-md q-mt-lg col">
      <q-card class="my-card">
        <q-card-section class="bg-blue-grey-6 text-white">
          <div class="text-h6">
            Devolver Senha
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-form class="q-gutter-md q-pa-sm">
            <q-input
              filled
              :dense="$q.screen.lt.md"
              v-model="senha"
              color="blue-grey-10"
              type="number"
              label="Senha"
              lazy-rules
              :rules="[
                val =>
                  (val !== null && val !== '') ||
                  'Por favor, informe a senha que deseja devolver',
                val =>
                  val > 0 ||
                  'Por favor, informe corretamente a senha, a mesma deve ser maior que 0'
              ]"
            >
              <template v-slot:append>
                <q-icon name="confirmation_number" class="cursor-pointer">
                </q-icon>
              </template>
            </q-input>

            <div class="q-mt-md">
              <q-btn
                :dense="$q.screen.lt.md"
                label="Devolver"
                @click="returnNumber"
                color="blue-grey-10"
              />
              <q-btn
                label="Cancelar"
                :dense="$q.screen.lt.md"
                @click="$router.push({ name: 'index' })"
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
import { deleteNumberToService } from "../data/lane";

export default {
  name: "ReturnNumber",
  data() {
    return {
      senha: null,
      loading: false
    };
  },
  methods: {
    async returnNumber() {
      try {
        this.loading = true;
        const senha = this.senha;
        const data = await deleteNumberToService(senha);
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Senha devolvida com sucesso!"
        });
        this.$router.push("/");
      } catch (error) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Erro ao devolver senha! Tente novamente mais tarde!"
        });
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  margin: auto
</style>
