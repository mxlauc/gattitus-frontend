import cookie from "cookie"
export const fetchWithCookie = async (url, method = "get", replaceCookies = true) => {
    const cookie_to_modify = useCookie("XSRF-TOKEN")
    const cookie_to_modify2 = useCookie("gattitus_session")

    let response = null
    const headers = useRequestHeaders()

    if (process.server) {
        response = await $fetch.raw(url, {
            credentials: "include",
            headers: {
                cookie: headers.cookie,
                referer: "https://www.donotify.com",
                "X-XSRF-TOKEN": cookie_to_modify.value,
            },
            method: method === "post" ? "POST" : "GET",
        })
    } else {
        response = await $fetch(url, {
            credentials: "include",
            headers: {
                "X-XSRF-TOKEN": cookie_to_modify.value,
            },
            method: method === "post" ? "POST" : "GET",
        })
    }

    if (replaceCookies && process.server && response.headers && response.headers.get("set-cookie")) {
        const cookies = cookie.parse(response.headers.get("set-cookie"))

        for (const key in cookies) {
            let k = "XSRF-TOKEN"
            if (key.includes(k)) {
                cookie_to_modify.value = cookies[key]
                cookie_to_modify.domain = ".donotify.com"
                cookie_to_modify.maxAge = cookies["Max-Age"]
                cookie_to_modify.expires = cookies.expires
                cookie_to_modify.path = cookies.path
                cookie_to_modify.sameSite = cookies.samesite
                cookie_to_modify.secure = true
            }

            k = "gattitus_session"
            if (key.includes(k)) {
                cookie_to_modify2.value = cookies[key]
                cookie_to_modify2.domain = ".donotify.com"
                cookie_to_modify2.maxAge = cookies["Max-Age"]
                cookie_to_modify2.expires = cookies.expires
                cookie_to_modify2.path = cookies.path
                cookie_to_modify2.sameSite = cookies.samesite
                cookie_to_modify2.secure = true
            }
        }
    }
    if (process.server) {
        return response._data
    } else {
        return response
    }
}
