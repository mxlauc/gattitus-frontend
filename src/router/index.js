import { createRouter, createWebHistory } from "vue-router"

const routes = [
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
    routes
})

export default router
