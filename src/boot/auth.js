// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ router }) => {
  router.beforeEach((to, from, next) => {
    console.log(localStorage.getItem("usuario"));
    if (to.matched.some(record => record.meta.requiresAuth)) {
      console.log("tem q autenticar");
      if (localStorage.getItem("usuario") != null) {
        next();
      } else {
        next({ name: "login" });
      }
    } else if (to.matched.some(record => record.meta.guest)) {
      console.log("nao tem q autenticar");
      if (localStorage.getItem("usuario") == null) {
        next();
      } else {
        next({ name: "admin" });
      }
    }
  });
};
