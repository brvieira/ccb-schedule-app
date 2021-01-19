<template>
  <q-header elevated class="bg-blue-grey-8 text-white" height-hint="98">
    <q-toolbar>
      <q-btn flat stretch label="Congregação Cristã no Brasil" to="/" />

      <q-space class="touch-hide" />
      <q-btn
        v-if="showLogout"
        stretch
        flat
        @click="logout"
        label="Sair"
        icon="exit_to_app"
      />
    </q-toolbar>
  </q-header>
</template>
<script>
export default {
  name: "GeneralNavBar",
  props: ["showLogout"],
  methods: {
    logout() {
      localStorage.removeItem("usuario");
      this.$router.push("/");
    }
  }
};
</script>
