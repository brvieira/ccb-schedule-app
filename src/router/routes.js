const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("layouts/InitialView.vue")
  },
  {
    path: "/senha",
    name: "senha",
    component: () => import("layouts/General.vue"),
    props: { tipo: "Culto Oficial" }
  },
  {
    path: "/senha/devolver",
    name: "devolver_senha",
    component: () => import("layouts/ReturnNumber.vue"),
    props: { devolver: true }
  },
  {
    path: "/senha/editar",
    name: "editar_senha",
    component: () => import("layouts/ReturnNumber.vue"),
    props: { devolver: false }
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Culto Oficial" }
  },
  {
    path: "/admin/cultos",
    name: "cultos",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Culto Oficial" }
  },
  {
    path: "/admin/reunioes",
    name: "reunioes",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Reunião de Jovens e Menores" }
  },
  {
    path: "/admin/ensaios",
    name: "ensaios",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Ensaio" }
  },
  {
    path: "/admin/outros",
    name: "outros",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Outros" }
  },
  {
    path: "/admin/servico/novo",
    name: "novo_servico",
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
