let config = {
  RefreshToken: '/api/v1/auth/refresh-token',
  GetOidc: '/api/v1/auth/oidc',
  CodeAuthorization: '/api/v1/auth/code-authorization',
  PostLogout: '/api/v1/auth/logout',

  PostLogin: '/api/v1/auth/login',
  GetProfile: '/api/v1/admin/profile'
}

let api = new Proxy(config, {
  get(target, name) {

    return Reflect.get(target, name)
    //
    // if (name !== 'params') {
    //   return Reflect.get(target, name)
    // } else {
    //   return Reflect.get(target, name)
    // }
  }

})

api.params = (name, options) => {
  try {
    let endpoint = api[name]
    for (let value in options) {
      endpoint = endpoint.replace(`{${value}}`, options[value])
    }
    return endpoint
  } catch (e) {
    console.log(e)
  }
}

export default api
