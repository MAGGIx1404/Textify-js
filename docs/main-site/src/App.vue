<template>
  <router-view v-slot="{ Component }" v-if="!isMobile">
    <Navigation />
    <SideBar v-if="$route.name === 'documentation'" />
    <transition :name="transition" mode="out-in">
      <component :is="Component" :key="$route.name" />
    </transition>
  </router-view>

  <router-view v-else>
    <section class="responsive flex-column-center-center">
      <h1 class="sub-title">Pages are <span class="green bold">not</span> responsive yet :(</h1>
      <p class="content">
        The pages are not responsive yet. Please view this site on a desktop or laptop for now. we
        are working on it. Thank you for your patience.
      </p>
      <p class="content green">
        We are looking for contributors to help us with this. If you are interested, please check
        out project's github repo and create a pull request. Thank you.
      </p>
      <a
        href="https://github.com/MAGGIx1404/Textify-js"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-link"
      >
        Go to Github
      </a>
    </section>
  </router-view>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  data() {
    return {
      transition: '',
      isMobile: window.innerWidth <= 812 ? true : false
    }
  },
  components: {
    Navigation,
    SideBar
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
