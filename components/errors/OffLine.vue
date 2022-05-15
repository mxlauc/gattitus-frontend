<template>
    no hya itnernet
    <br>
    <p style="height: 100px;">
        velocidad: {{ player?.velocidad }}, aceleracion: {{ player?.aceleracion }}
    </p>
    <br>
    <canvas id="canvas" />
</template>
<script>
class Cuadrado {
    color = "red"

    constructor (ctx, x, y, width, height) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Player {
    color = "blue"
    width = 10
    height = 20
    velocidad = 0
    aceleracion = 0

    constructor (ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
    }

    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

export default {
    data () {
        return {
            canvas: null,
            ctx: null,
            player: null,
            g: 0.05
        }
    },
    mounted () {
        window.addEventListener("keydown", this.jump)

        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")

        const cuadrado = new Cuadrado(this.ctx, 10, 10, 100, 200)
        cuadrado.draw()
        this.player = new Player(this.ctx, 30, 30)
        this.player.draw()

        window.setInterval(this.gravedad, 16)
    },
    unmounted () {
        window.removeEventListener("keydown", this.jump)
    },
    methods: {
        jump (e) {
            if (e.keyCode === 32) {
                this.player.aceleracion = 0
                this.player.velocidad = -10
                console.log(e.keyCode)
                console.log("-")
            }
        },
        gravedad () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

            this.player.aceleracion += this.g
            this.player.velocidad += this.player.aceleracion
            if (this.player.y + this.player.velocidad < 130) {
                this.player.y += this.player.velocidad
            } else {
                this.player.aceleracion = 10
                this.player.velocidad = 0
            }
            this.player.draw()
        }
    }
}
</script>
<style scoped>
canvas{
    border: 1px solid;
}
</style>
