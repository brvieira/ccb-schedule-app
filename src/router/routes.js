const routes = [
  {
    path: "/",
    component: () => import("layouts/AllUser.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("layouts/InitialView.vue")
      },
      {
        path: "login",
        name: "login",
        component: () => import("layouts/login.vue")
      },
      {
        path: "senha",
        name: "senha",
        component: () => import("layouts/General.vue"),
        props: { tipo: "Culto Oficial" }
      },
      {
        path: "senha/devolver",
        name: "devolver_senha",
        component: () => import("layouts/ReturnNumber.vue")
      },
      {
        path: "senha/editar",
        name: "editar_senha",
        component: () => import("layouts/EditNumber.vue")
      },
      {
        path: "porteiro/:tipo",
        name: "porteiro",
        component: () => import("layouts/ControlView.vue"),
        props: true,
        meta: {
          authorize: ["admin", "porteiro-irmas", "porteiro-irmaos"]
        }
      }
    ]
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminView.vue"),
    props: { tipo: "Culto Oficial" },
    meta: {
      authorize: ["admin"]
    },
    children: [
      {
        path: "",
        name: "cultos",
        component: () => import("layouts/AdminLayout.vue"),
        props: { tipo: "Culto Oficial" },
        meta: {
          authorize: ["admin"]
        }
      },
      {
        path: "reunioes",
        name: "reunioes",
        component: () => import("layouts/AdminLayout.vue"),
        props: { tipo: "Reunião de Jovens e Menores" },
        meta: {
          authorize: ["admin"]
        }
      },
      {
        path: "ensaios",
        name: "ensaios",
        component: () => import("layouts/AdminLayout.vue"),
        props: { tipo: "Ensaio" },
        meta: {
          authorize: ["admin"]
        }
      },
      {
        path: "outros",
        name: "outros",
        component: () => import("layouts/AdminLayout.vue"),
        props: { tipo: "Outros" },
        meta: {
          authorize: ["admin"]
        }
      },
      {
        path: "servico/novo",
        name: "novo_servico",
        component: () => import("layouts/ServiceForm.vue"),
        meta: {
          authorize: ["admin"]
        }
      },
      {
        path: "servico/editar/:id",
        name: "editar_servico",
        component: () => import("layouts/ServiceForm.vue"),
        props: true,
        meta: {
          authorize: ["admin"]
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
