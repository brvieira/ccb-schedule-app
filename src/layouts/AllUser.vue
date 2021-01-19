<template>
  <q-layout>
    <GeneralNavBar :showLogout="isUserLogged" />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
import GeneralNavBar from "../components/GeneralNavBar";
export default {
  name: "AllUser",
  components: { GeneralNavBar },
  computed: {
    isUserLogged() {
      return localStorage.getItem("usuario") != null;
    }
  }
};
</script>
