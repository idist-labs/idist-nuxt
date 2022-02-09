import api from '~/api'

export default {
  async PostLogin(_, entry) {
      let response = await this.$axios.request({
        method: 'POST',
        url: api.PostLogin,
        data: entry
      })
      console.log(response.data)
      return response.data
  },
  async GetProfile({ commit }) {
    let response = await this.$axios.request({
      method: 'GET',
      url: api.GetProfile
    })

    commit("SetProfile", response.data)
    return response.data
  }
}
