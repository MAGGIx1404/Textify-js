<template>
  <pre class="codebox flex-column-start" :tag="tag" :data-tag="tag">
        <slot></slot>
    </pre>
</template>

<script>
export default {
  name: 'CodeBox',
  props: {
    tag: {
      type: String,
      default: 'code'
    }
  }
}
</script>

<style lang="scss" scoped></style>
