<template>
  <a-menu
    v-model:openKeys='openKeys'
    v-model:selectedKeys='selectedKeys'
    :mode='mode'
    :theme='theme'
  >

    <a-menu-item-group key='general'>
      <template v-slot:title>
        <p class='sidebar-nav-title'>Quản lý</p>
      </template>
      <a-menu-item @click='toggleCollapsed' key='admin-homepage'>
        <nuxt-link :to="{name: 'admin-homepage'}">
          <a-icon type='home' />
          <span>
          Trang chủ
        </span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item @click='toggleCollapsed' key='admin-categories'>
        <nuxt-link :to="{name:'admin-categories-list'}">
          <a-icon type='folder' />
          <span>
            Danh mục
          </span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item @click='toggleCollapsed' key='admin-tags'>
        <nuxt-link :to="{name:'admin-tags-list'}">
          <a-icon type='tag' />
          <span>
            Từ khoá
          </span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item @click='toggleCollapsed' key='admin-articles'>
        <nuxt-link :to="{name:'admin-articles-list'}">
          <a-icon type='file' />
          <span>
            Bài viết
          </span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item @click='toggleCollapsed' key='admin-redirects'>
        <nuxt-link :to="{name:'admin-redirects-list'}">
          <a-icon type='branches' />
          <span>
            Điều hướng
          </span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item @click='toggleCollapsed' key='admin-menus'>
        <nuxt-link :to="{name:'admin-menus-list'}">
          <a-icon type='menu' />
          <span>
            Menu
          </span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item @click='toggleCollapsed' key='admin-comments'>
        <nuxt-link :to="{name:'admin-comments-list'}">
          <a-icon type='message' />
          <span>
            Bình luận
          </span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item @click='toggleCollapsed' key='admin-users'>
        <nuxt-link :to="{name:'admin-users-list'}">
          <a-icon type='team' />
          <span>
            Người dùng
          </span>
        </nuxt-link>
      </a-menu-item>

      <a-menu-item @click='toggleCollapsed' key='admin-analytics'>
        <nuxt-link :to="{name:'admin-analytics-list'}">
          <a-icon type='area-chart' />
          <span>
            Thống kê
          </span>
        </nuxt-link>
      </a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>
<script>

export default {
  name: 'AsideItems',
  props: {
    toggleCollapsed: Function,
    events: Object,
    theme: {
      type: String,
      default: () => ('light')
    }
  },
  data: () => ({
    mode: 'inline',
    selectedKeys: ['admin-homepage'],
    openKeys: ['admin-homepage'],
    preOpenKeys: ['admin-homepage']
  }),
  watch: {
    openKeys: {
      handler: function(val, oldVal) {
        this.preOpenKeys = oldVal
      },
      deep: true
    },
    '$route.matched': {
      handler: function() {
        this.checkRoute()
      },
      deep: true
    }
  },
  methods: {
    checkRoute() {
      if (this.$route.matched.length) {
        console.log(this.$route.matched.length, this.$route.matched[0].name)
        this.selectedKeys = [this.$route.matched[0].name]
        this.openKeys = [this.$route.matched[0].name]
        this.preOpenKeys = [this.$route.matched[0].name]
      }
    }
  },
  mounted() {
    this.checkRoute()
  }
}
</script>
