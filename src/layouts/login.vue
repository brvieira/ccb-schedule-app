<template>
  <div class="absolute-center q-px-sm">
    <q-card class="my-card q-mx-sm">
      <q-card-section class="bg-blue-grey-6 text-white">
        <div class="text-h6">
          Fazer Login
        </div>
      </q-card-section>

      <q-separator />
      <q-card-section>
        <q-form class="q-gutter-md q-pa-md" @submit="doLogin" @reset="onCancel">
          <q-input
            v-model="login.userid"
            type="text"
            filled
            color="blue-grey-10"
            label="Nome do Usuário"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') ||
                'Por favor, preencha o nome do usuário'
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            v-model="login.senha"
            filled
            :type="isPwd ? 'password' : 'text'"
            color="blue-grey-10"
            label="Senha"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Por favor, informe a senha'
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div class="q-mt-lg">
            <q-btn label="Entrar" type="submit" color="blue-grey-10" />

            <q-btn
              label="Cancelar"
              type="reset"
              color="blue-grey-10"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      login: {
        userid: null,
        senha: null
      },
      isPwd: true
    };
  },
  methods: {
    doLogin() {
      localStorage.setItem("usuario", JSON.stringify("teste"));
      this.$router.push({ name: "admin" });
    },
    onCancel() {
      this.$router.push({ name: "index" });
    }
  }
};
</script>
<style lang="sass" scoped>
.my-card
  max-width: 450px
  width: 100%
  margin: auto

.absolute-center
  width: 100%
</style>
