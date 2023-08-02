<template>
  <div class="main-layout">
    <div class="main-layout-scroller" ref="wrapper">
      <slot></slot>

      <FooterBox />
    </div>
  </div>
</template>

<script>
import FooterBox from '@/components/FooterBox.vue'

export default {
  name: 'MainLayout',
  components: {
    FooterBox
  }
}
</script>

<style lang="scss" scoped></style>
