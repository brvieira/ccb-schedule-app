<template>
  <q-header elevated class="bg-blue-grey-8 text-white" height-hint="98">
    <q-toolbar>
      <q-btn flat stretch label="Congregação Cristã no Brasil" to="/" />

      <q-space class="touch-hide" />
      <q-btn stretch flat @click="logout" label="Sair" icon="exit_to_app" />
    </q-toolbar>

    <q-tabs
      align="center"
      class="bg-blue-grey-10 text-white"
      no-caps
      outside-arrows
      mobile-arrows
    >
      <q-route-tab :to="goTo('mensagem')" label="Aviso" />
      <q-route-tab :to="goTo('cultos')" label="Cultos Oficiais" />
      <q-route-tab
        :to="goTo('reunioes')"
        label="Reuniões de Jovens e Menores"
      />
      <q-route-tab :to="goTo('ensaios')" label="Ensaios" />
      <q-route-tab :to="goTo('outros')" label="Outros Serviços" />
    </q-tabs>
  </q-header>
</template>
<script>
export default {
  name: "AdminNavBar",
  methods: {
    goTo(name) {
      return { name };
    },
    logout() {
      localStorage.removeItem("usuario");
      this.$router.push("/");
    }
  }
};
</script>
