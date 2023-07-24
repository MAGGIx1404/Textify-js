<template>
  <MainLayout class="docs">
    <section class="banner">
      <div class="container">
        <h1 class="title title-green">TEXTIFY.JS</h1>
      </div>
    </section>
    <section class="doc-section">
      <div class="container flex-column-start">
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start">
          <h1 class="small-title">What is Textify.js?</h1>
          <p class="content">
            Textify.js is a JavaScript library that allows you to animate text in a web page. It is
            a simple and easy to use library that provides you with a variety of animations to
            choose from and allows you to customize them to your liking. It is also very easy to
            install and use.
          </p>
        </div>
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start">
          <h1 class="small-title">Getting Started</h1>
          <p class="content">
            Start playing around with your own Textify demo on CodePen with this template that
            includes all of the essentials!
          </p>
          <a href="/" target="_blank" class="bg-link bg-link-dark">Open in CodePen</a>
        </div>
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start">
          <h1 class="small-title">Basic Usage</h1>
          <p class="content">
            Textify can be called without parameters, and it will use the default options. Textify
            converts the text into a small <span class="tag">div</span> &
            <span class="tag">span</span> and add a class to each. You can use the class to create
            css animations.
          </p>
          <p class="note content">
            Note: Textify.js's animations are not working properly without
            <span class="tag green">Textify.min.css</span>. So make sure to include it in your
            project.
          </p>
          <p class="content bold">CSS link :</p>
          <CodeBox tag="HTML">
            <code class="content">
              https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css</code
            >
          </CodeBox>
          <p class="content bold">JavaScript link :</p>
          <CodeBox tag="HTML">
            <code class="content">
              https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.js</code
            >
          </CodeBox>
        </div>
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start">
          <h1 class="small-title">Installation</h1>
          <p class="content bold">Install Textify.js from NPM:</p>
          <CodeBox tag="BASH">
            <code class="content">npm install textify.js --save</code>
          </CodeBox>
          <p class="content bold">import Textify.js in your project and use it like this:</p>
          <CodeBox tag="JS">
            <code class="content">import Textify from "textify.js";</code>
            <br />
            <code class="content"> new Textify(); </code>
          </CodeBox>
          <p class="content bold">
            Or you can use the CDN link in your project and use it like this:
          </p>
          <CodeBox tag="HTML">
            <code class="content">
              https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.js
            </code>
          </CodeBox>
          <p class="content bold">
            And then you can use it as a <span class="tag">Module</span> in a modern web browsers,
            node.js, and deno. This is the recommended way to use Textify.js.
          </p>
          <CodeBox tag="JS">
            <code class="content">import Textify from "textify.js";</code>
            <br />
            <code class="content"> new Textify(); </code>
          </CodeBox>
          <p class="note content">
            Note: Textify.js's animations are not working properly without
            <span class="tag green">Textify.min.css</span>. So make sure to include it in your
            project.
          </p>
        </div>
        <div class="bg-line-full"></div>
      </div>
    </section>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import CodeBox from '@/components/CodeBox.vue'

export default {
  name: 'Documentation',
  components: {
    MainLayout,
    CodeBox
  }
}
</script>

<style lang="scss" scoped></style>
