export default {
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition
        }
        return { top: 0 }
    },
}
