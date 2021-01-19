// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ router }) => {
  router.beforeEach((to, from, next) => {
    const { authorize } = to.meta;
    const currentUser = JSON.parse(localStorage.getItem("usuario"));

    if (authorize) {
      if (!currentUser) {
        return next({ path: "/login", query: { returnUrl: to.path } });
      } else if (authorize.length && !authorize.includes(currentUser.role)) {
        return next({ path: "/" });
      }
    }

    next();
  });
};
