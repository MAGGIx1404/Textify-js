<template>
  <footer class="footer">
    <div class="container flex-row-center-between">
      <p class="small-paragraph">
        &copy; 2022 - {{ year }} All rights reserved by <span class="bold green"> Textify.js </span>
      </p>
      <p class="small-paragraph">
        Made with <span class="green">❤</span> by
        <a href="https://github.com/MAGGIx1404" target="_blank" class="bold green">MAGGIx1404</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBox',
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped></style>
