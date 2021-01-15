const routes = [
  {
    path: "/",
    component: () => import("layouts/InitialView.vue")
  },
  {
    path: "/senha",
    component: () => import("layouts/General.vue"),
    props: { tipo: "Culto Oficial" }
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Culto Oficial" }
  },
  {
    path: "/admin/cultos",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Culto Oficial" }
  },
  {
    path: "/admin/reunioes",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Reunião de Jovens e Menores" }
  },
  {
    path: "/admin/ensaios",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Ensaio" }
  },
  {
    path: "/admin/outros",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Outros" }
  },
  {
    path: "/admin/servico/novo",
    component: () => import("layouts/ServiceForm.vue")
  },
  {
    path: "/admin/servico/editar/:id",
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
