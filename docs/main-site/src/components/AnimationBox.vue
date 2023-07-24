<template>
  <div class="animation-box">
    <h1 :class="['sub-title', className]">{{ title }}</h1>

    <button class="code-btn" title="RESTART ANIMATION" @click.prevent="restartAnimation">
      <img src="@/assets/restart.svg" alt="code" class="code-icon" />
    </button>
    <button class="code-btn" title="GET CODE" @click.prevent="copyCode">
      <img src="@/assets/copy.svg" alt="code" class="code-icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AnimationBox',
  props: {
    title: {
      type: String,
      required: true
    },
    config: {
      type: Object,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      animation: null
    }
  },
  methods: {
    restartAnimation() {
      this.animation.reset()
      this.animation.animateIn()
    },

    copyCode() {
      const code = `new Textify({
            el: '.${this.className}',
            animation: {
            stagger: ${this.config.stagger},
            duration: ${this.config.duration},
            ease: '${this.config.ease}',
            animateProps: ${JSON.stringify(this.config.animateProps)}
            }
        })`
      navigator.clipboard.writeText(code)
    }
  },
  mounted() {
    this.animation = new Textify({
      el: `.${this.className}`,
      animation: {
        stagger: this.config.stagger,
        duration: this.config.duration,
        ease: this.config.ease,
        animateProps: this.config.animateProps
      }
    })
  }
}
</script>

<style lang="scss" scoped></style>
