<template>
  <i :class='classes' v-html='activity()' style='line-height: 0'>
  </i>
</template>

<script>
import { icons } from 'feather-icons'

export default {
  name: 'IdistFeatherIcons',
  components: { icons },
  props: {
    type: {
      type: String,
      default: () => ('activity')
    },
    size: {
      type: Number || String,
      default: 16
    },
    stroke: {
      type: Number || String,
      default: 2
    },
    classes: String,
    color: String,
    fill: {
      type: String,
      default: () => ('transparent')
    }
  },
  methods: {
    activity() {
      return icons[this.type].toSvg({
        'stroke-width': this.stroke,
        width: this.size,
        height: this.size,
        color: this.color,
        fill: this.fill,
        class: this.classes
      })
    }
  }
}
</script>

<style lang='scss' scoped></style>
