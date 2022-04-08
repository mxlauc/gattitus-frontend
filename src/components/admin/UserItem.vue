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
            <router-link :to="user.url">
                {{ user.url }}
            </router-link>
        </td>
        <td>
            {{ timeAgo(user.created_at) }}
        </td>
    </tr>
</template>
<script>
export default {
    props: ["user"]
}
</script>
