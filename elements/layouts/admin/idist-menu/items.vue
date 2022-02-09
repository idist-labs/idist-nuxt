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
      <a-sub-menu key='admin-users'>
        <span slot='title'>
          <a-icon type='user' />
          <span>Người dùng và quyền</span>
        </span>
        <a-menu-item @click='toggleCollapsed' key='admin-users-list'>
          <nuxt-link :to="{name:'admin-users-list'}">
            Danh sách người dùng
          </nuxt-link>
        </a-menu-item>
        <a-menu-item @click='toggleCollapsed' key='admin-users-groups'>
          <nuxt-link :to="{name:'admin-groups-list'}">
            Danh sách nhóm người dùng
          </nuxt-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key='admin-user-interfaces'>
        <span slot='title'>
          <a-icon type='user' />
          <span>Quản lý giao diện</span>
        </span>
        <a-menu-item @click='toggleCollapsed' key='admin-users-list'>
          <nuxt-link :to="{name:'admin-users-list'}">
            Danh sách người dùng
          </nuxt-link>
        </a-menu-item>
        <a-menu-item @click='toggleCollapsed' key='admin-users-groups'>
          <nuxt-link :to="{name:'admin-groups-list'}">
            Danh sách nhóm người dùng
          </nuxt-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key='admin-configurations'>
        <span slot='title'>
          <a-icon type='user' />
          <span>Cấu hình và tuỳ chọn</span>
        </span>
        <a-menu-item @click='toggleCollapsed' key='admin-users-list'>
          <nuxt-link :to="{name:'admin-users-list'}">
            Danh sách người dùng
          </nuxt-link>
        </a-menu-item>
        <a-menu-item @click='toggleCollapsed' key='admin-users-groups'>
          <nuxt-link :to="{name:'admin-groups-list'}">
            Danh sách nhóm người dùng
          </nuxt-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key='admin-categories'>
        <span slot='title'>
          <a-icon type='folder' />
          <span>Danh mục</span>
        </span>

        <a-sub-menu title='Danh mục dùng chung' key='admin-categories-general'>
          <a-menu-item @click='toggleCollapsed' key='admin-categories-general-documents'>
            <nuxt-link :to="{name:'admin-categories-general-documents'}">
              Giấy tờ nộp kèm CCHN
            </nuxt-link>
          </a-menu-item>
          <a-menu-item @click='toggleCollapsed' key='admin-categories-general-training-facilities'>
            <nuxt-link :to="{name:'admin-categories-general-training-facilities'}">
              Đơn vị đào tạo
            </nuxt-link>
          </a-menu-item>
          <a-menu-item @click='toggleCollapsed' key='admin-categories-general-countries'>
            <nuxt-link :to="{name:'admin-categories-general-countries'}">
              Quốc gia
            </nuxt-link>
          </a-menu-item>
          <a-menu-item @click='toggleCollapsed' key='admin-categories-general-provinces'>
            <nuxt-link :to="{name:'admin-categories-general-provinces'}">
              Tỉnh thành
            </nuxt-link>
          </a-menu-item>
          <a-menu-item @click='toggleCollapsed' key='admin-categories-general-districts'>
            <nuxt-link :to="{name:'admin-categories-general-districts'}">
              Phường xã
            </nuxt-link>
          </a-menu-item>
          <a-menu-item @click='toggleCollapsed' key='admin-categories-general-ethnics'>
            <nuxt-link :to="{name:'admin-categories-general-ethnics'}">
              Dân tộc
            </nuxt-link>
          </a-menu-item>
          <a-menu-item @click='toggleCollapsed' key='admin-categories-general-ethnics'>
            <nuxt-link :to="{name:'admin-categories-general-ethnics'}">
              Nhóm đối tượng
            </nuxt-link>
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu-item-group>

    <a-menu-item-group key='system'>
      <template v-slot:title>
        <p class='sidebar-nav-title'>Hệ thống</p>
      </template>
      <a-sub-menu key='admin-utilities'>
        <span slot='title'>
          <a-icon type='tool' />
          <span>Công cụ</span>
        </span>
        <a-menu-item @click='toggleCollapsed' key='admin-utilities-logs'>
          <nuxt-link :to="{name:'admin-utilities-logs'}">
            Lịch sử hoạt động
          </nuxt-link>
        </a-menu-item>
      </a-sub-menu>

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
        // if (this.$route.matched.length > 2) {
        //   this.selectedKeys = [this.$route.matched[2].name]
        //   this.openKeys = [this.$route.matched[1].name]
        //   this.preOpenKeys = [this.$route.matched[1].name]
        // } else if (this.$route.matched.length > 3) {
        //   this.selectedKeys = [this.$route.matched[3].name]
        //   this.openKeys = [this.$route.matched[1].name]
        //   this.preOpenKeys = [this.$route.matched[1].name]
        // } else {
        //   this.selectedKeys = [this.$route.matched[1].name]
        //   this.openKeys = [this.$route.matched[1].name]
        //   this.preOpenKeys = [this.$route.matched[1].name]
        // }
      }
    }
  },
  mounted() {
    this.checkRoute()
  }
}
</script>
