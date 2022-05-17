<template>
    <template v-if="is_mounted">
        <slot />
    </template>
</template>
<script>
export default {
    data () {
        return {
            is_mounted: false,
        }
    },
    mounted () {
        this.is_mounted = true
    }
}
</script>
