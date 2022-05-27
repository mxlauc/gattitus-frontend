<template>
    <NuxtLayout name="help">
        <Head>
            <Title>Acerca de | Gattitus</Title>
        </Head>
        <div class="card">
            <div class="card-body">
                <div class="my-3 text-secondary">
                    <h2 class="mb-5 text-primary">
                        ¿Qué es <strong>Gattitus</strong>?
                    </h2>
                    <div class="row">
                        <div class="col col-12 col-md-7 order-2 order-md-1">
                            <p>
                                <strong>Gattitus</strong> es un sitio web donde los usuarios pueden compartir fotos de gatos con otros usuarios.
                            </p>
                            <p>
                                Además de ciertas funciones, como la posibilidad crear un perfil para sus gatos y etiquetarlos en las
                                fotos que aparecen.
                            </p>

                            <hr class="mb-5">

                            <h3 class="text-primary">
                                Creditos
                            </h3>
                            <img
                                src="/img/cat_sad.png"
                                class="img-credito">
                            <br>
                            <a
                                href="http://www.freepik.com"
                                class="text-decoration-none"
                                target="_blank">Diseñado por Freepik</a>
                            <br>
                            <br>

                            <img
                                src="/img/cat_happy.png"
                                class="img-credito">

                            <img
                                src="/img/cat_sleeping.png"
                                class="img-credito">

                            <img
                                src="/img/three_cats.png"
                                class="img-credito">
                            <br>

                            <a
                                href="http://www.freepik.com"
                                class="text-decoration-none"
                                target="_blank">Diseñado por Catalyststuff / Freepik</a>
                            <br>
                            <br>
                            <a
                                href="https://www.freepik.com/catalyststuff"
                                class="text-decoration-none"
                                target="_blank">Ver más contenido de Catalyststuff en Freepik</a>
                        </div>
                        <div class="col col-12 col-md-5 order-1 order-md-2">
                            <img
                                src="/img/three_cats.png"
                                class="img-fluid mb-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script>
export default {

}
</script>
<style scoped>
.img-credito{
    max-height: 70px;
    background-color: #fff;
    margin: 4px;
    padding: 10px;
    border-radius: 5px;
}
</style>
