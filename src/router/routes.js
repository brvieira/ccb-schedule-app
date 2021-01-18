const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("layouts/InitialView.vue"),
    meta: {
      guest: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("layouts/login.vue"),
    meta: {
      guest: true
    }
  },
  {
    path: "/senha",
    name: "senha",
    component: () => import("layouts/General.vue"),
    props: { tipo: "Culto Oficial" },
    meta: {
      guest: true
    }
  },
  {
    path: "/senha/devolver",
    name: "devolver_senha",
    component: () => import("layouts/ReturnNumber.vue"),
    meta: {
      guest: true
    }
  },
  {
    path: "/senha/editar",
    name: "editar_senha",
    component: () => import("layouts/EditNumber.vue"),
    meta: {
      guest: true
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Culto Oficial" },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/cultos",
    name: "cultos",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Culto Oficial" },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/reunioes",
    name: "reunioes",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Reunião de Jovens e Menores" },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/ensaios",
    name: "ensaios",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Ensaio" },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/outros",
    name: "outros",
    component: () => import("layouts/AdminLayout.vue"),
    props: { tipo: "Outros" },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/servico/novo",
    name: "novo_servico",
    component: () => import("layouts/ServiceForm.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/servico/editar/:id",
    name: "editar_servico",
    component: () => import("layouts/ServiceForm.vue"),
    props: true,
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
    meta: {
      guest: true
    }
  }
];

export default routes;
