<template id="q-app">
  <q-layout view="hhh lpR lfr" class="bg-grey-4">
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script>
import GeneralNavBar from "./components/GeneralNavBar";
import AdminNavBar from "./components/AdminNavBar";
export default {
  name: "App",
  components: { GeneralNavBar, AdminNavBar },
  computed: {
    isUserLogged() {
      return localStorage.getItem("usuario") != null;
    }
  }
};
</script>
