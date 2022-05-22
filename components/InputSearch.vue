<template>
    <input
        type="text"
        ref="input"
        @input="onType">
</template>
<script >
export default {
    data () {
        return {
            timeOut: null,
        }
    },
    emits: ["onSearch"],
    methods: {
        onType () {
            if (this.timeOut) {
                window.clearTimeout(this.timeOut)
            }
            this.timeOut = window.setTimeout(this.emitEvent, 1500)
        },
        emitEvent () {
            this.$emit("onSearch", this.$refs.input.value)
            this.timeOut = null
        },
    }
}
</script>
