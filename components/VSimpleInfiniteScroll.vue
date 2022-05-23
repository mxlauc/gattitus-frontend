<template>
    <div ref="container">
        <slot></slot>
        <div ref="bottom"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loading: false,
            completed: false,
            bottom: null,
            container: null,
            scroll: null,
        }
    },
    props: {
        distance: {
            type: Number,
            default: 100
        },
        loadToFill: {
            type: Boolean,
            default: true
        }
    },
    emits: [
        "load"
    ],
    mounted () {
        const parentNode = this.$refs.container.parentNode
        this.container = parentNode.classList.contains("v-simple-infinite-scroll-container")
            ? parentNode
            : window

        this.bottom = this.$refs.container.querySelector(".v-simple-infinite-scroll-bottom") ?? this.$refs.bottom

        const thisComponent = this
        this.scroll = {
            loaded () {
                thisComponent.loaded()
            },
            complete () {
                thisComponent.complete()
            }
        }

        this.addListeners()
        this.handleScroll()
    },
    unmounted () {
        this.removeListeners()
    },
    methods: {
        handleScroll () {
            if (!this.loading && this.isTheBottom()) {
                this.loadMore()
            }
        },

        addListeners () {
            this.container.addEventListener("scroll", this.handleScroll)
        },

        removeListeners () {
            this.container.removeEventListener("scroll", this.handleScroll)
        },

        loadMore () {
            this.loading = true
            this.$emit("load", this.scroll)
        },

        loaded () {
            // waiting 300 ms for items to be rendered
            setTimeout(() => {
                this.loading = false
                if (this.loadToFill) {
                    this.tryToFill()
                }
            }, 300)
        },

        complete () {
            this.removeListeners()
            this.loading = false
            this.completed = true
        },

        tryToFill () {
            this.handleScroll()
        },

        isTheBottom () {
            if (this.container === window) {
                return this.bottom.getBoundingClientRect().bottom <= (this.container.innerHeight + this.distance)
            } else {
                return this.bottom.getBoundingClientRect().bottom <= (this.container.getBoundingClientRect().bottom + this.distance)
            }
        },

    }
}
</script>
