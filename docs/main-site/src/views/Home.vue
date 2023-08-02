<template>
  <MainLayout class="home">
    <section class="banner">
      <div class="container flex-column-center-center">
        <h1 class="title banner-title">MAKE WEB TYPOGRAPHY WITH</h1>
        <h1 class="title banner-title title-green">SEAMLESS ANIMATIONS</h1>
        <p class="paragraph">
          Textify.js is a animation engine for web typography animations, which are use to create
          smooth, creative or seamless animations of typography. Also it’s provide multiple
          animations types or custom animations on
          <a href="https://greensock.com/gsap/" target="_blank" class="bold green">GSAP</a>'s power.
        </p>
        <div class="btns flex-row-center">
          <router-link to="/example" class="bg-link">Live Example</router-link>
          <router-link to="/documentation" class="bg-link bg-link-dark">Documentation</router-link>
        </div>
        <div class="bg-line"></div>
      </div>
    </section>
    <section class="guide">
      <div class="container">
        <h1 class="sub-title">Features</h1>
        <ul class="feature-list flex-row-start-between">
          <li class="feature-list-item">
            <h1 class="small-title">Powerful animations engine</h1>
            <p class="small-paragraph">
              Textify.js have a powerful animations engine, which are use to create smooth, creative
              or seamless animations of typography.
            </p>
          </li>
          <li class="feature-list-item">
            <h1 class="small-title">Multiple animations types</h1>
            <p class="small-paragraph">
              Textify.js provide multiple animations types or custom animations on GSAP's power.
            </p>
          </li>
          <li class="feature-list-item">
            <h1 class="small-title">Easy to use</h1>
            <p class="small-paragraph">
              Textify.js is easy to use, you can create animations with just a few lines of code.
            </p>
          </li>
          <li class="feature-list-item">
            <h1 class="small-title">No dependencies</h1>
            <p class="small-paragraph">
              Textify.js is no dependencies, it's only use
              <a href="/" class="bold green">GSAP</a> for animations.
            </p>
          </li>
        </ul>
        <p class="small-paragraph extra">Working on other features, stay tuned!</p>
      </div>
    </section>
    <section class="extra-section">
      <div class="container">
        <h1 class="sub-title">Let's build <span class="bold green">animations</span></h1>
        <router-link to="/documentation" class="bg-link"> Get Started </router-link>
      </div>
    </section>
  </MainLayout>
</template>

<script>
import Textify from 'textify.js'
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'Home',
  data() {
    return {
      animations: []
    }
  },
  components: {
    MainLayout
  },
  mounted() {
    var animationsTitle = new Textify({
      el: '.banner-title',
      animation: {
        animateProps: {
          y: '-100%'
        },
        stagger: 0.025,
        duration: 0.7,
        ease: 'expo.inOut'
      }
    })

    var animationsText = new Textify({
      el: '.paragraph',
      splitType: 'lines',
      largeText: true,
      animation: {
        by: 'lines',
        ease: 'power2',
        stagger: 0.075
      }
    })

    this.animations.push(animationsTitle, animationsText)
  }
}
</script>
