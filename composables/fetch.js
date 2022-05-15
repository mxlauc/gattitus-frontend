export const fetchWithCookie = async (url, method = 'get', replaceCookies=true) => {
  let cookie_to_modify = useCookie("XSRF-TOKEN")
  let cookie_to_modify2 = useCookie("gattitus_session")
  
  let response = null
  let headers =  useRequestHeaders();
  headers["referer"] = headers.host;

  if(process.server){
    response = await $fetch.raw(url,{
      credentials: "include",
      headers,
      method: method === 'post' ? 'POST' : 'GET',
    })
  }else{
    response = await $fetch(url,{
      credentials: 'include',
      method: method === 'post' ? 'POST' : 'GET',
    })
  }

  if ( replaceCookies && process.server && response.headers && response.headers.get('set-cookie')) {
    const cookies = Object.fromEntries(
      response.headers.get('set-cookie')?.split(',').map((a) => a.trim().split('='))
    )

    if ("XSRF-TOKEN" in cookies) {
      cookie_to_modify.value = cookies["XSRF-TOKEN"]
    }
    if("gattitus_session" in cookies){
      cookie_to_modify2.value = cookies["gattitus_session"]
    }
  }
  if(process.server){
    return response._data
  }else{
    return response
  }
}