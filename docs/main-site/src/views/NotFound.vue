<template>
  <MainLayout class="notfound">
    <section class="banner flex-column-center-center">
      <h1 class="title">Page <span class="green bold">Not</span> Found</h1>
      <p class="content">
        The page you are looking for might have been removed had its name changed or is temporarily
        unavailable.
      </p>
      <router-link to="/" class="bg-link"> Go to Homepage </router-link>
    </section>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'

export default {
  name: 'NotFound',
  components: {
    MainLayout
  }
}
</script>

<style lang="scss" scoped></style>
