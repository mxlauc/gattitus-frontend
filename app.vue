<template>
    <div>
        <Head>
            <Link
                rel="manifest"
                href="/gattitus.webmanifest" />
            <Script src="/app.js"></Script>
            <Link
                rel="icon"
                href="/img/icons/icon-72x72.png"
                type="image/png" />
        </Head>
        <NuxtPage />
    </div>
</template>
<script setup>
import { useMainStore } from "~/store/mainStore"
const mainStore = useMainStore()

if (process.server) {
    await mainStore.login()
}
if (process.server) {
    await mainStore.setUser()
}

if (process.client) {
    await import("bootstrap")
}
</script>
