<template>
    <router-link
        to="/admin/reports/types/create"
        class="btn btn-primary">
        Crear reporte
    </router-link>
    lista de reportes
    <ol>
        <li
            v-for="report in reportsPaginate?.data"
            :key="report.id">
            {{ report.title }}
        </li>
    </ol>
</template>
<script>
import axios from "axios"
import { useMainStore } from "@/stores/mainStore"
export default {
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            reportsPaginate: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/admin/reports/types`)
            .then(response => {
                this.reportsPaginate = response.data
            })
    }
}
</script>
