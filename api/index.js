let config = {
  PostLogout: '/api/v1/auth/logout',
  PostLogin: '/api/v1/auth/login',
  GetProfile: '/api/v1/admin/profile',

  // Categories
  ListCategories: "/api/v1/admin/categories",
  CreateCategory: "/api/v1/admin/categories",
  GetCategory: "/api/v1/admin/categories/{id}",
  UpdateCategory: "/api/v1/admin/categories/{id}",
  DeleteCategory: "/api/v1/admin/categories/{id}"

}

let api = new Proxy(config, {
  get(target, name) {

    // return Reflect.get(target, name)

    if (name !== 'params') {
      return Reflect.get(target, name)
    } else {
      return Reflect.get(target, name)
    }
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
