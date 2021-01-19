<template>
  <q-layout>
    <AdminNavBar />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
import AdminNavBar from "../components/AdminNavBar";
export default {
  name: "AdminView",
  components: { AdminNavBar }
};
</script>
