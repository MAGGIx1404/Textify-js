<template>
  <nav class="navigation">
    <div class="container flex-row-center-between">
      <div class="navigation-links flex-row-center-start">
        <router-link to="/" class="logo"> Textify.js </router-link>
        <router-link to="/documentation" class="navigation-link">Documentation</router-link>
        <router-link to="/tutorial" class="navigation-link">Tutorials</router-link>
        <router-link to="/example" class="navigation-link">Example</router-link>
      </div>
      <a href="https://github.com/MAGGIx1404/Textify-js" target="_blank" class="bg-link">Github</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped></style>
