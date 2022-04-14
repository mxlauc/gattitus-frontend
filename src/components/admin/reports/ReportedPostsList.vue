<template>
    <ReportedPostItem
        v-for="post in postsPaginate?.data"
        :key="post.id"
        :post="post" />
</template>
<script>
import axios from "axios"
import { useMainStore } from "@/stores/mainStore"
import ReportedPostItem from "@/components/admin/reports/ReportedPostItem.vue"

export default {
    components: {
        ReportedPostItem,
    },
    setup () {
        const mainStore = useMainStore()
        return {
            mainStore
        }
    },
    data () {
        return {
            postsPaginate: null,
        }
    },
    mounted () {
        axios.get(`${this.mainStore.backendUrl}/api/admin/reports/posts`)
            .then(response => {
                this.postsPaginate = response.data
                console.log(response.data)
            })
    },
}
</script>
