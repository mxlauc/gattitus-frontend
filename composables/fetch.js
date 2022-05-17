import axios from "axios"

export function fetchWithCookie (url) {
    if (process.client) {
        return axios.get(url, {
            withCredentials: true,
        })
    } else {
        const headers = useRequestHeaders()

        const hds = {
            referer: headers.host,
        }

        if (headers.cookie) {
            hds.cookie = headers.cookie
        }
        const cookie_to_modify = useCookie("XSRF-TOKEN")
        if (cookie_to_modify.value) {
            hds["X-XSRF-TOKEN"] = cookie_to_modify.value
        }

        return new Promise((resolve, reject) => {
            axios.get(url, {
                headers: hds,
            }).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
