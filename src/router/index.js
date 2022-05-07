import { createWebHistory, createRouter } from "vue-router"
import VueRouterMetaTags from "@bachdgvn/vue-router-meta-tags"

const routes = [
    {
        path: "/",
        component: () => import(/* webpackChunkName: "main-layout" */ "../layouts/MainLayout.vue"),
        meta: {
            title: "Gattitus",
        },
        children: [
            {
                path: "/",
                component: () => import(/* webpackChunkName: "home" */ "../components/sections/HomeComponent.vue"),
                children: [
                    {
                        path: "/posts/:id/fullscreen",
                        component: () => import(/* webpackChunkName: "postfullscreen" */ "../components/images/ImageFullscreen.vue"),
                    },
                ]
            },

            {
                path: "/editor",
                component: () => import(/* webpackChunkName: "editor" */ "../components/sections/EditorComponent.vue"),
            },
            {
                path: "/posts/create",
                component: () => import(/* webpackChunkName: "editor" */ "../components/posts/CreatePost.vue"),
            },
            {
                path: "/posts/:id/edit",
                component: () => import(/* webpackChunkName: "editor" */ "../components/posts/EditPost.vue"),
            },
            {
                path: "/posts/:id",
                component: () => import(/* webpackChunkName: "posts" */ "../components/posts/ViewPost.vue"),
            },
            {
                path: "/users",
                component: () => import(/* webpackChunkName: "user" */ "../components/user/UsersComponent.vue"),
            },
            {
                path: "/@:user",
                component: () => import(/* webpackChunkName: "user" */ "../components/user/UserShowComponent.vue"),
            },
            {
                path: "/pets",
                component: () => import(/* webpackChunkName: "pets" */ "../components/pet/PetsComponent.vue"),
            },
            {
                path: "/pets/:slug",
                component: () => import(/* webpackChunkName: "pets" */ "../components/pet/PetShowComponent.vue"),
            },
            {
                path: "admin",
                component: () => import(/* webpackChunkName: "admin" */ "../components/admin/DashboardComponent.vue"),
                children: [
                    {
                        path: "users",
                        component: () => import(/* webpackChunkName: "admin.users" */ "../components/admin/UsersList.vue"),
                    },
                    {
                        path: "reports/types",
                        component: () => import(/* webpackChunkName: "admin.users" */ "@/components/admin/reports/ReportTypesList.vue"),
                    },
                    {
                        path: "reports/posts",
                        component: () => import(/* webpackChunkName: "admin.users" */ "@/components/admin/reports/ReportedPostsList.vue"),
                    },

                    {
                        path: "reports/types/create",
                        component: () => import(/* webpackChunkName: "admin.users" */ "@/components/admin/reports/CreateReportType.vue"),
                    },
                    {
                        path: "pages",
                        component: () => import(/* webpackChunkName: "admin.users" */ "@/components/admin/pages/PagesList.vue"),
                    },
                    {
                        path: "pages/create",
                        component: () => import(/* webpackChunkName: "admin.users" */ "@/components/admin/pages/PageCreate.vue"),
                    },
                    {
                        path: "pages/:slug/edit",
                        component: () => import(/* webpackChunkName: "admin.users" */ "@/components/admin/pages/PageEdit.vue"),
                    },
                ]
            },
            {
                path: "pages/:slug",
                component: () => import(/* webpackChunkName: "admin.users" */ "@/components/PageShow.vue"),
            },
            {
                path: "/offline",
                component: () => import(/* webpackChunkName: "not-found" */ "../components/errors/OffLine.vue"),
                name: "Offline",
                meta: {
                    title: "No hay internet"
                }
            },
            {
                path: "/:catchAll(.*)",
                component: () => import(/* webpackChunkName: "not-found" */ "../components/errors/NotFound.vue"),
                name: "NotFound",
                meta: {
                    title: "La pagina no existe"
                }
            }
        ],
    },
    {
        path: "/landing",
        component: () => import(/* webpackChunkName: "landing" */ "../components/sections/LandingPageComponent.vue"),
        meta: {
            title: "Gattitus | Sube una foto de tu gato hoy",
        }
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },

})

router.beforeEach(VueRouterMetaTags.update)

export default router
