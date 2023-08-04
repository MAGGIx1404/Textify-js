<template>
  <div class="animation-box content-animation-box">
    <p :class="['content', className]">{{ content }}</p>

    <button class="code-btn" title="RESTART ANIMATION" @click.prevent="restartAnimation">
      <img src="@/assets/restart.svg" alt="code" class="code-icon" />
    </button>
    <button class="code-btn" title="GET CODE" @click.prevent="copyCode">
      <img src="@/assets/copy.svg" alt="code" class="code-icon" />
    </button>
  </div>
</template>

<script>
import Textify from 'textify.js'
import gsap from 'gsap'

export default {
  name: 'LargeAnimationBox',
  props: {
    content: {
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
            splitType: 'lines',
            largeText: true,
            animation: {
            by: 'lines',
            stagger: ${this.config.stagger},
            duration: ${this.config.duration},
            ease: '${this.config.ease}',
            transformOrigin: '${this.config.transformOrigin}',
            animateProps: ${JSON.stringify(this.config.animateProps)}
            }
        }, gsap)`
      navigator.clipboard.writeText(code)
    }
  },
  mounted() {
    this.animation = new Textify(
      {
        el: `.${this.className}`,
        splitType: 'lines',
        largeText: true,
        animation: {
          by: 'lines',
          stagger: this.config.stagger,
          duration: this.config.duration,
          ease: this.config.ease,
          transformOrigin: this.config.transformOrigin,
          animateProps: this.config.animateProps
        }
      },
      gsap
    )
  }
}
</script>

<style lang="scss" scoped></style>
