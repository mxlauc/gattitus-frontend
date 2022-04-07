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
                        component: () => import(/* webpackChunkName: "postfullscreen" */ "../components/ImageFullscreen.vue"),
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
                path: "/@:user",
                component: () => import(/* webpackChunkName: "user" */ "../components/user/UserShowComponent.vue"),
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
        component: () => import(/* webpackChunkName: "landing" */ "../components/LandingPageComponent.vue"),
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
