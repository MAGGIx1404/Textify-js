<template>
  <MainLayout class="example">
    <section class="banner">
      <div class="container flex-column-center-center">
        <h1 class="title banner-title">CREATE SMOOTH &</h1>
        <h1 class="title banner-title title-green">POWERFULL ANIMATIONS</h1>
        <p class="paragraph">
          You can create multiple, different or creative typography animations with Textify.js. you
          can get here some selected or creative animations for your project. also you can create
          your custom animations and get code from our
          <router-link to="/" class="bold green">Animation creator</router-link>.
        </p>
        <div class="btns">
          <router-link to="/" class="bg-link">Animation creator</router-link>
        </div>
        <div class="bg-line"></div>
      </div>
    </section>
    <section class="animation-section">
      <div class="container flex-row-start">
        <div class="animationbox-wrapper" v-for="(item, index) in config" :key="index">
          <AnimationBox
            :title="animationTitle"
            :config="item"
            :className="`animation-` + index"
            @click.prevent="getCode(index)"
          />
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import AnimationBox from '@/components/AnimationBox.vue'

export default {
  name: 'Example',
  data() {
    return {
      animationTitle: 'Textify.js',
      config: [
        {
          duration: 0.7,
          stagger: 0.025,
          ease: 'expo.inOut',
          animateProps: {
            opacity: 0,
            scale: 0
          }
        },
        {
          duration: 0.7,
          stagger: 0.05,
          ease: 'power2',
          animateProps: {
            y: '0',
            x: '100%',
            opacity: 0,
            skewX: -45
          }
        }
      ],
      codeConfig: '',
      isOpen: false
    }
  },
  components: {
    MainLayout,
    AnimationBox
  },
  methods: {
    getCode(index) {
      this.codeConfig = this.config[index]
    }
  },
  mounted() {
    new Textify({
      el: '.banner-title',
      animation: {
        stagger: 0.025,
        duration: 0.7,
        ease: 'expo.inOut'
      }
    })

    new Textify({
      el: '.paragraph',
      splitType: 'lines',
      largeText: true,
      animation: {
        by: 'lines',
        ease: 'power2',
        stagger: 0.075,
        animateProps: {
          y: '-100%'
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped></style>
