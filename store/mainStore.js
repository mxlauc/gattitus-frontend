import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
    state: () => {
        return {
            posts: null,
            userLogged: null,
            backendUrl: "https://api.donotify.com",
            toasts: []
        }
    },
    actions: {
        async login () {
            await fetchWithCookie(`${this.backendUrl}/sanctum/csrf-cookie`)
        },
        setUser () {
            return fetchWithCookie(`${this.backendUrl}/api/user`)
                .then(result => {
                    this.userLogged = result.data
                })
        },
        async loadPosts () {
            console.log("cargando posts...")
            const result = await fetchWithCookie(`${this.backendUrl}/api/posts`)
            this.posts = result.data
        },
        async deletePost (id) {
            await fetchWithCookie(`${this.backendUrl}/api/posts/${id}`)
            const indice = this.posts.findIndex(
                (post) => post.id === id
            )
            this.posts.splice(indice, 1)
        },
        showToast (msg) {
            this.toasts.push({ message: msg })
            window.setTimeout(() => {
                this.toasts.splice(0, 1)
            }, 5000)
        }
    }
})
