import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
    state: () => {
        return {
            posts: [],
            postsPaginate: null,
            userLogged: null,
            backendUrl: process.env.BACKEND_URL,
            toasts: []
        }
    },
    actions: {
        async login () {
            await fetchWithCookie(`${this.backendUrl}/sanctum/csrf-cookie`)
        },
        async setUser () {
            await fetchWithCookie(`${this.backendUrl}/api/user`)
                .then(result => {
                    this.userLogged = result.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async loadPosts () {
            await fetchWithCookie(`${this.backendUrl}/api/posts`)
                .then(result => {
                    this.postsPaginate = result.data
                    this.posts = result.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async loadMorePosts () {
            await fetchWithCookie(this.postsPaginate.links.next)
                .then(result => {
                    this.postsPaginate = result.data
                    this.posts = this.posts.concat(result.data.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        removePost (id) {
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
