<template>
    <tr>
        <td>{{ user.id }}</td>
        <td>
            <img
                :src="user.image.url_xs"
                width="40"
                height="40"
                alt="">
        </td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>
            <NuxtLink :to="user.url">
                {{ user.url }}
            </NuxtLink>
        </td>
        <td>
            {{ timeAgo(user.created_at) }}
        </td>
    </tr>
</template>
<script setup>
import { t, timeAgo } from "~/i18n/i18n2"
</script>
<script>
export default {
    props: ["user"]
}
</script>
