import { defineStore } from "pinia"
import axios from "axios"

axios.defaults.withCredentials = true

export const useMainStore = defineStore("main", {
    state: () => {
        return {
            posts: null,
            userLogged: null,
            backendUrl: "http://localhost:8000",
            toasts: []
        }
    },
    actions: {
        login () {
            axios.get(`${this.backendUrl}/sanctum/csrf-cookie`).then(() => {
                axios.get(`${this.backendUrl}/api/user`).then(response => {
                    this.userLogged = response.data.data
                })
            })
        },
        loadPosts () {
            axios.get(`${this.backendUrl}/api/posts`)
                .then(response => {
                    this.posts = response.data.data
                })
        },
        deletePost (id) {
            return axios.delete(`${this.backendUrl}/api/posts/${id}`).then(r => {
                const indice = this.posts.findIndex(
                    (post) => post.id === id
                )
                this.posts.splice(indice, 1)
            })
        },
        showToast (msg) {
            this.toasts.push({ message: msg })
            window.setTimeout(() => {
                this.toasts.splice(0, 1)
            }, 5000)
        }
    }
})
