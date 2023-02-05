let config = {
  PostLogout: '/api/v1/admin/logout',
  PostLogin: '/api/v1/auth/login',
  GetProfile: '/api/v1/admin/profile',

  // Categories
  ListCategories: '/api/v1/admin/categories',
  CreateCategory: '/api/v1/admin/categories',
  GetCategory: '/api/v1/admin/categories/{id}',
  UpdateCategory: '/api/v1/admin/categories/{id}',
  DeleteCategory: '/api/v1/admin/categories/{id}',

  // Tags
  ListTags: '/api/v1/admin/tags',
  CreateTag: '/api/v1/admin/tags',
  GetTag: '/api/v1/admin/tags/{id}',
  UpdateTag: '/api/v1/admin/tags/{id}',
  DeleteTag: '/api/v1/admin/tags/{id}',

  // Tags
  ListProvinces: '/api/v1/common/provinces',
  CreateProvince: '/api/v1/admin/provinces',
  GetProvince: '/api/v1/admin/provinces/{id}',
  UpdateProvince: '/api/v1/admin/provinces/{id}',
  DeleteProvince: '/api/v1/admin/provinces/{id}',

  // Articles
  ListArticles: '/api/v1/admin/articles',
  CreateArticle: '/api/v1/admin/articles',
  GetArticle: '/api/v1/admin/articles/{id}',
  UpdateArticle: '/api/v1/admin/articles/{id}',
  DeleteArticle: '/api/v1/admin/articles/{id}',

  // Schools
  ListSchools: '/api/v1/admin/schools',
  CreateSchool: '/api/v1/admin/schools',
  GetSchool: '/api/v1/admin/schools/{id}',
  UpdateSchool: '/api/v1/admin/schools/{id}',
  DeleteSchool: '/api/v1/admin/schools/{id}',

  // Admissions
  ListAdmissions: '/api/v1/admin/admissions',
  CreateAdmission: '/api/v1/admin/admissions',
  GetAdmission: '/api/v1/admin/admissions/{id}',
  UpdateAdmission: '/api/v1/admin/admissions/{id}',
  DeleteAdmission: '/api/v1/admin/admissions/{id}',

  CreateTuyenSinh: '/api/v1/common/tuyen-sinh',
}

let api = new Proxy(config, {
  get(target, name) {
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
