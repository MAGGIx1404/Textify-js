<template>
  <MainLayout class="example">
    <section class="banner">
      <div class="container flex-column-center-center">
        <h1 class="title banner-title">CREATE SMOOTH &</h1>
        <h1 class="title banner-title title-green">POWERFULL ANIMATIONS</h1>
        <p class="paragraph banner-text">
          You can create multiple, different or creative typography animations with Textify.js. you
          can get here some selected or creative animations for your project. also you can create
          your custom animations use in your project.
        </p>
        <div class="bg-line"></div>
      </div>
    </section>
    <section class="animation-section">
      <p class="content top-content">
        These are some selected animations for your project. you can get code from here and use it
        in your project.
      </p>
      <div class="container flex-row-start">
        <div class="animationbox-wrapper" v-for="(item, index) in config" :key="index">
          <AnimationBox :title="animationTitle" :config="item" :className="`animation-` + index" />
        </div>
      </div>
    </section>
    <div class="bg-line-full"></div>
    <section class="animation-section">
      <p class="content top-content">
        These animations are large text animations for small & large paragraphs. you can get code
        from here and use it
      </p>
      <div class="container flex-row-start">
        <div class="animationbox-wrapper" v-for="(item, index) in contentConfig" :key="index">
          <LargeAnimationBox
            :content="content"
            :config="item"
            :className="`large-animation-` + index"
          />
        </div>
      </div>
    </section>
    <div class="bg-line-full"></div>
    <div class="animation-section">
      <h1 class="sub-title">More animations coming soon...</h1>
    </div>
  </MainLayout>
</template>

<script>
import Textify from 'textify.js'
import gsap from 'gsap'

import MainLayout from '@/layouts/MainLayout.vue'
import AnimationBox from '@/components/AnimationBox.vue'
import LargeAnimationBox from '@/components/LargeAnimationBox.vue'

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
        },
        {
          duration: 0.7,
          stagger: 0.05,
          ease: 'expo.inOut',
          animateProps: {
            y: '-100%',
            opacity: 0,
            skewX: -45
          }
        },
        {
          duration: 0.7,
          stagger: 0.05,
          ease: 'expo.inOut',
          animateProps: {
            rotate: 60,
            scale: 0,
            y: 0
          }
        }
      ],
      content:
        'Textify.js is a javascript library for creating smooth and powerful animations for your text. using this library you can create multiple, different or creative typography animations for your project. you can get here some selected or creative animations for your project.',
      contentConfig: [
        {
          duration: 0.7,
          stagger: 0.075,
          ease: 'power2',
          transformOrigin: 'center center',
          animateProps: {
            scale: 0,
            opacity: 0
          }
        },
        {
          duration: 0.7,
          stagger: 0.075,
          ease: 'power2',
          transformOrigin: 'left top',
          animateProps: {
            rotate: 30,
            opacity: 0
          }
        },
        {
          duration: 0.7,
          stagger: 0.1,
          ease: 'expo.inOut',
          transformOrigin: 'left top',
          animateProps: {
            y: '-100%',
            rotate: -30
          }
        },
        {
          duration: 0.7,
          stagger: 0.1,
          ease: 'expo.inOut',
          transformOrigin: 'left top',
          animateProps: {
            y: '0',
            opacity: 0
          }
        }
      ],
      isOpen: false
    }
  },
  components: {
    MainLayout,
    AnimationBox,
    LargeAnimationBox
  },
  mounted() {
    new Textify(
      {
        el: '.banner-title',
        animation: {
          stagger: 0.025,
          duration: 0.7,
          ease: 'expo.inOut'
        }
      },
      gsap
    )

    new Textify(
      {
        el: '.banner-text',
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
      },
      gsap
    )
  }
}
</script>

<style lang="scss" scoped></style>
