<template>
  <div class="absolute-center q-px-sm">
    <template v-if="loading">
      <q-inner-loading showing color="blue-grey-6" />
    </template>

    <q-card v-else class="my-card q-mx-sm">
      <q-card-section class="bg-blue-grey-6 text-white">
        <div class="text-h6">
          Fazer Login
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
            label="Tentar novamente"
            class="full-width q-mt-xl"
          />
        </div>
      </q-card-section>
      <q-card-section v-else>
        <q-form class="q-gutter-md q-pa-md" @submit="doLogin" @reset="onCancel">
          <q-input
            v-model="login.username"
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
            v-model="login.password"
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
import { login } from "../data/auth";
export default {
  name: "login",
  data() {
    return {
      login: {
        username: null,
        password: null
      },
      loading: false,
      message: null,
      isPwd: true,
      returnUrl: null
    };
  },
  methods: {
    async doLogin() {
      try {
        this.loading = true;

        const body = { ...this.login };
        const data = await login(body);

        if (data.status) {
          localStorage.setItem("usuario", JSON.stringify(data.usuario));
          this.$router.push(this.returnUrl);
        } else {
          this.message = data.message;
        }
      } catch (error) {
        this.message = "Erro ao logar no sistema";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    onCancel() {
      this.$router.push("/");
    }
  },
  created() {
    if (
      localStorage.getItem("usuario") &&
      localStorage.getItem("usuario") != ""
    ) {
      this.$router.push("/");
    }

    // get return url from route parameters or default to '/'
    this.returnUrl = this.$route.query.returnUrl || "/";
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
