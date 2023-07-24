<template>
  <router-view v-slot="{ Component }">
    <Navigation />
    <transition :name="transition" mode="out-in">
      <component :is="Component" :key="$route.name" />
    </transition>
  </router-view>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  data() {
    return {
      transition: ''
    }
  },
  components: {
    Navigation
  },
  mounted() {
    setTimeout(() => {
      this.transition = 'fade'
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
