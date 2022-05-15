<template>
    <ol>
        <li
            v-for="p in pages"
            :key="p.id">
            <NuxtLink :to="'/pages/' + p.slug">
                {{ p.title }}
            </NuxtLink>
            <NuxtLink :to="'/admin/pages/' + p.slug + '/edit'">
                editar
            </NuxtLink>
        </li>
    </ol>
    <NuxtLink
        :to="'/admin/pages/create'"
        class="btn btn-primary">
        Crear
    </NuxtLink>
</template>
<script>
import { useMainStore } from "~/store/mainStore"
import axios from "axios"

export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            pages: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/pages`)
            .then(response => {
                this.pages = response.data
            })
    }
}
</script>
