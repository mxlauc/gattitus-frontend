<template>
    <div>
        <ReportedPostItem
            v-for="post in postsPaginate?.data"
            :key="post.id"
            :post="post" />
    </div>
</template>
<script>
import axios from "axios"
import { useMainStore } from "~/store/mainStore"
import ReportedPostItem from "~/components/admin/reports/ReportedPostItem.vue"

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
            })
    },
}
</script>
