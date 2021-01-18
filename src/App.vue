<template id="q-app">
  <q-layout view="hhh lpR lfr" class="bg-grey-4">
    <q-header
      v-if="showNav"
      elevated
      class="bg-blue-grey-8 text-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-btn flat stretch label="Congregação Cristã no Brasil" to="/" />

        <!-- <q-space class="touch-hide" />
        <q-btn
          class="touch-hide"
          stretch
          flat
          @click="openMap"
          label="Parque Industrial - Campinas/SP"
          icon="room"
        /> -->
      </q-toolbar>

      <q-tabs
        v-if="showTabs"
        align="center"
        class="bg-blue-grey-10 text-white"
        no-caps
        outside-arrows
        mobile-arrows
      >
        <q-route-tab :to="goTo('cultos')" label="Cultos Oficiais" />
        <q-route-tab
          :to="goTo('reunioes')"
          label="Reuniões de Jovens e Menores"
        />
        <q-route-tab :to="goTo('ensaios')" label="Ensaios" />
        <q-route-tab :to="goTo('outros')" label="Outros Serviços" />
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
  methods: {
    openMap() {
      window.open(
        "https://www.google.com/maps/dir//Congrega%C3%A7%C3%A3o+Crist%C3%A3+no+Brasil+-+Parque+Industrial+-+R.+Jacinta+Rosa+de+S%C3%A3o+Jos%C3%A9,+212+-+Parque+Industrial,+Campinas+-+SP,+13031-670/@-22.9246149,-47.0860335,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94c8c8ef2001a8b9:0x535890c5b4557cd8!2m2!1d-47.0838448!2d-22.9246149!3e0",
        "_blank"
      );
    },
    goTo(name) {
      return { name };
    }
  },
  computed: {
    showTabs() {
      return this.$route.path.includes("admin");
    },
    showNav() {
      return !this.$route.path.includes("login");
    }
  }
};
</script>
