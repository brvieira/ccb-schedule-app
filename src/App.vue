<template id="q-app">
  <q-layout view="hhh lpR lfr">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Congregação Cristã no Brasil
        </q-toolbar-title>
        <q-space class="touch-hide" />
        <div class="touch-hide">
          Parque Industrial - Campinas/SP
        </div>
      </q-toolbar>

      <q-tabs v-if="showNav" align="center" class="bg-white text-blue-10">
        <q-route-tab to="/cultos" label="Cultos Oficiais" />
        <q-route-tab to="/reunioes" label="Reuniões de Jovens e Menores" />
        <q-route-tab to="/ensaios" label="Ensaios" />
        <q-route-tab to="/outros" label="Outros Serviços" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "App",
  computed: {
    showNav() {
      return this.$route.path !== "/";
    }
  }
};
</script>
