<template>
    <div>
        <NuxtLink
            to="/admin/reports/types/create"
            class="btn btn-primary">
            Crear reporte
        </NuxtLink>
        lista de reportes
        <ol>
            <li
                v-for="report in reportsPaginate?.data"
                :key="report.id">
                {{ report.title }}
            </li>
        </ol>
    </div>
</template>
<script>
import axios from "axios"
import { useMainStore } from "~/store/mainStore"
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
