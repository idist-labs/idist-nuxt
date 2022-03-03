import api from '~/api'

export default {
  async ListArticles(_, pagination) {
    let response = await this.$axios.request({
      method: 'GET',
      url: api.ListArticles,
      data: pagination
    })
    return response.data
  },
  async CreateArticle(_, entry) {
    let response = await this.$axios.request({
      method: 'POST',
      url: api.CreateArticle,
      data: entry
    })

    return response.data
  },
  async GetArticle(_, entryId) {
    let response = await this.$axios.request({
      method: 'GET',
      url: api.params('GetArticle', { id: entryId })
    })

    return response.data
  },
  async UpdateArticle(_, entry) {
    let response = await this.$axios.request({
      method: 'PUT',
      url: api.params('UpdateArticle', { id: entry.id }),
      data: entry
    })

    return response.data
  },
  async DeleteArticle(_, entry) {
    let response = await this.$axios.request({
      method: 'Delete',
      url: api.params('DeleteArticle', { id: entry.id }),
      data: entry
    })

    return response.data
  }
}
