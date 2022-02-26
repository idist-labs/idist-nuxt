export default {
  data: () => ({
    pagination: {
      page: 1,
      length: 12,
      search: ""
    }
  }),
  methods: {
   getData() {}
  },
  created() {
    this.getData()
  }
}
