<template>
    <div
        ref="col"
        style="align-self: flex-start; position:sticky;">
        <slot />
    </div>
</template>
<script>
export default {
    data () {
        return {
            scrollPos: 0,
            maxTop: this.top ?? 0,
            minTop: 0,
            topScroll: 0,
            sizeObserver: null,
        }
    },
    props: {
        top: {
            type: Number,
        }
    },
    mounted () {
        this.startEvents()
    },
    unmounted () {
        this.finishEvents()
    },
    methods: {
        startEvents () {
            window.addEventListener("scroll", this.onScroll)
            window.addEventListener("resize", this.onWindowResize)
            this.sizeObserver = new ResizeObserver(this.calcMinTop)
            this.sizeObserver.observe(this.$refs.col)

            // timeOut necesario porque Nuxt usa Suspense
            window.setTimeout(() => {
                this.onWindowResize()
            }, 500)
        },
        finishEvents () {
            window.removeEventListener("scroll", this.onScroll)
            window.removeEventListener("resize", this.onWindowResize)
            this.sizeObserver.disconnect()
        },
        onWindowResize () {
            if (window.innerWidth > 767) {
                this.$refs.col.style.position = "sticky"
            } else {
                this.$refs.col.style.position = null
            }
        },
        onScroll () {
            if (this.$refs.col.clientHeight + this.maxTop > window.innerHeight) {
                const diffScroll = document.documentElement.scrollTop - this.scrollPos
                if (diffScroll > 0) { // scroll bajando
                    this.topScroll -= diffScroll
                    if (this.topScroll < this.minTop) {
                        this.topScroll = this.minTop
                    }
                } else { // scroll subiendo
                    this.topScroll -= diffScroll
                    if (this.topScroll > this.maxTop) {
                        this.topScroll = this.maxTop
                    }
                }
            } else {
                this.topScroll = this.maxTop
            }
            this.$refs.col.style.top = `${this.topScroll}px`

            this.scrollPos = document.documentElement.scrollTop
        },
        calcMinTop () {
            this.minTop = window.innerHeight - this.$refs.col.clientHeight
        }
    }
}
</script>
