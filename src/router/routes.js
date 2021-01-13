const routes = [
  {
    path: "/",
    component: () => import("layouts/General.vue"),
    props: { tipo: "Culto Oficial" }
  },
  {
    path: "/cultos",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Culto Oficial" }
  },
  {
    path: "/reunioes",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Reunião de Jovens e Menores" }
  },
  {
    path: "/ensaios",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Ensaio" }
  },
  {
    path: "/outros",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Outros" }
  },
  {
    path: "/servico/novo",
    component: () => import("layouts/ServiceForm.vue")
  },
  {
    path: "/servico/editar/:id",
    name: "editar_servico",
    component: () => import("layouts/ServiceForm.vue"),
    props: true
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
