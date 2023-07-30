<template>
  <MainLayout class="tutorial">
    <div class="banner">
      <div class="container flex-column-center-center">
        <h1 class="sub-title">Tutorials are <span class="green"> coming soon... </span></h1>
        <p class="paragraph">
          We are working hard to bring you the best tutorials to help you get started with your
          projects.
        </p>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'

export default {
  name: 'Tutorial',
  components: {
    MainLayout
  }
}
</script>

<style lang="scss" scoped></style>
