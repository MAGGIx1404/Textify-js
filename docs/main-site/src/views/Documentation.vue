<template>
  <MainLayout class="docs">
    <section class="banner" id="banner">
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
        <div class="doc-box flex-column-start" id="start">
          <h1 class="small-title">Getting Started</h1>
          <p class="content">
            Start playing around with your own Textify demo on CodePen with this template that
            includes all of the essentials!
          </p>
          <a href="/" target="_blank" class="bg-link bg-link-dark">Open in CodePen</a>
        </div>
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start" id="usage">
          <h1 class="small-title">Basic Usage</h1>
          <p class="content">
            Textify can be called without parameters, but only define
            <span class="tag">engine</span> and it will use the default options. Textify converts
            the text into a small <span class="tag">div</span> & <span class="tag">span</span> and
            add a class to each. You can use the class to create css animations.
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
          <p class="content bold green">GSAP (Engine) :</p>
          <CodeBox tag="HTML">
            <code class="content">
              https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js</code
            >
          </CodeBox>
        </div>
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start" id="install">
          <h1 class="small-title">Installation</h1>
          <p class="content bold">Install Textify.js from NPM:</p>
          <CodeBox tag="BASH">
            <code class="content">npm install textify.js gsap --save</code>
          </CodeBox>
          <p class="content bold">
            import Textify.js and gsap in your project and use it like this:
          </p>
          <CodeBox tag="JS">
            <code class="content">import gsap from "gsap";</code>
            <code class="content">import Textify from "textify.js";</code>
            <br />
            <code class="content"> new Textify({}, gsap); </code>
          </CodeBox>
          <p class="content bold">
            Or you can use the CDN link in your project and use it like this: (default)
          </p>
          <CodeBox tag="HTML">
            <code class="content">
              https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.js
            </code>
            <code class="content">
              https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js
            </code>
          </CodeBox>
          <p class="content bold">
            And then you can use it as a <span class="tag">Module</span> in a modern web browsers,
            node.js, and deno. This is the recommended way to use Textify.js.
          </p>
          <CodeBox tag="JS">
            <code class="content">import gsap from "gsap";</code>
            <code class="content">import Textify from "textify.js";</code>
            <br />
            <code class="content"> new Textify({}, gsap); </code>
          </CodeBox>
          <p class="note content">
            Note: Textify.js's animations are not working properly without
            <span class="tag green">Textify.min.css</span>. So make sure to include it in your
            project.
          </p>
        </div>
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start" id="how">
          <h1 class="small-title">How to use Textify.js?</h1>
          <p class="content bold">Intialize Textify.js : (connect gsap with it)</p>
          <CodeBox tag="JS">
            <code class="content">new Textify({ }, gsap);</code>
          </CodeBox>
          <p class="content bold">
            Textify.js default selector is <span class="tag">data-textify</span>. So you can use it
            in your HTML like this:
          </p>
          <CodeBox tag="HTML">
            <code class="content"> &lt;h1 data-textify&gt;Hello World&lt;/h1&gt; </code>
          </CodeBox>
          <p class="content green">Then, see the magic! and animation will start automatically.</p>
        </div>
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start" id="config">
          <h1 class="small-title">Config :</h1>
          <ul class="options-list">
            <li class="options-list-item">
              <p class="content option-name"><span class="tag green">el</span></p>
              <div class="context">
                <p class="content">
                  This option is used to select the elements that you want to animate. The default
                  value is <span class="tag">data-textify</span>.
                </p>
              </div>
            </li>
            <li class="options-list-item">
              <p class="content option-name"><span class="tag green">splitType</span></p>
              <div class="context">
                <p class="content">
                  This option is used to select the type of split that you want to use. The default
                  value is
                  <span class="tag">lines words chars</span>. You can use one of them or all of them
                  at the same time.
                </p>
                <p class="note content">
                  Note: we dont recommend to change the <span class="tag green">splitType</span>'s
                  value, if you want to animate small & large paragraphs, then you can change that
                  value to <span class="tag green">lines</span>. otherwise, default value is the
                  best for headings or titles.
                </p>
              </div>
            </li>
            <li class="options-list-item">
              <p class="content option-name"><span class="tag green">largeText</span></p>
              <div class="context">
                <p class="content">
                  This option is used to inform Textify.js's engine that you are using small & large
                  paragraphs or not. The default value is <span class="tag">false</span>. If you are
                  using small & large paragraphs, then you should change this value to
                  <span class="tag">true</span>. that will make Textify.js engine to split the
                  paragraphs into lines. and make the animation smooth without affecting the page's
                  performance.
                </p>
                <p class="content note">
                  Note: if you are using small & large paragraphs, then you should change the
                  <span class="tag green">splitType</span>'s value to
                  <span class="tag green">lines</span>. otherwise, Textify.js throw an error.
                </p>
              </div>
            </li>
            <li class="options-list-item">
              <p class="content option-name">
                <span class="tag green"> Observer </span>
              </p>
              <div class="context">
                <p class="content">
                  This option is a <span class="tag">object</span> that contains the observer
                  options. this option is used to set animation states or repeatation. this option
                  is optional. this option contain following properties:
                </p>
                <div class="bg-line-full"></div>
                <ul class="options-list">
                  <li class="options-list-item">
                    <p class="content option-name">
                      <span class="tag green">repeat</span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property is used to set the repeatation of the animation. the default
                        value is <span class="tag">false</span>. if you want to repeat the
                        animation, then you should change this value to
                        <span class="tag">true</span>.
                      </p>
                    </div>
                  </li>
                  <li class="options-list-item no-border">
                    <p class="content option-name">
                      <span class="tag green">threshold</span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property is used to set the threshold of the animation. the default
                        value is <span class="tag">0.5</span>. the value should be between
                        <span class="tag">0</span> and <span class="tag">1</span>. this property is
                        set the percentage of the element's visibility in the viewport to start the
                        animation.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="options-list-item no-border">
              <p class="content">
                <span class="tag green">animation</span>
              </p>
              <div class="context">
                <p class="content">
                  This option is a <span class="tag">object</span> that contains the animation
                  options. this option is used to set the animation's duration, delay, and easing
                  etc. this option contain following properties:
                </p>
                <div class="bg-line-full"></div>
                <ul class="options-list">
                  <li class="options-list-item">
                    <p class="content">
                      <span class="tag green">by</span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property use to set animation type. the default value is
                        <span class="tag">chars</span>. this default value is used to animate
                        headings or titles. if you want to animate small & large paragraphs, then
                        you should change this value to <span class="tag">lines</span>.
                      </p>
                      <p class="note content">
                        Note: if you are using animate small & large paragraphs, then you should
                        change the
                        <span class="tag green">splitType</span>'s value to
                        <span class="tag green">lines</span>. otherwise, Textify.js throw an error.
                        and also, you should change the <span class="tag green">largeText</span>'s
                        value to <span class="tag green">true</span>. that will make Textify.js
                        engine to split the paragraphs into lines. and make the animation smooth
                        without affecting the page's performance.
                      </p>
                    </div>
                  </li>
                  <li class="options-list-item">
                    <p class="content">
                      <span class="tag green">duration</span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property is used to set the animation's duration. the default value is
                        <span class="tag">1</span>. this property is set in
                        <span class="tag">seconds</span>.
                      </p>
                    </div>
                  </li>
                  <li class="options-list-item">
                    <p class="content">
                      <span class="tag green">delay</span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property is used to set the animation's delay. the default value is
                        <span class="tag">0</span>. this property is set in
                        <span class="tag">seconds</span>.
                      </p>
                    </div>
                  </li>
                  <li class="options-list-item">
                    <p class="content">
                      <span class="tag green">stagger</span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property is used to set the delay between every micro animations of one
                        animation. the default value is
                        <span class="tag">0</span>. this property is set in
                        <span class="tag">seconds</span>.
                      </p>
                    </div>
                  </li>
                  <li class="options-list-item">
                    <p class="content">
                      <span class="tag green">ease</span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property is used to set the animation's easing. the default value is
                        <span class="tag">ease</span>. you can use any easing function from
                        <a
                          href="https://easings.net/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="tag green"
                          >easings.net</a
                        >.
                      </p>
                    </div>
                  </li>
                  <li class="options-list-item">
                    <p class="content">
                      <span class="tag green"> transformOrigin </span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property is used to set the transform origin of the animation.
                      </p>
                    </div>
                  </li>
                  <li class="options-list-item">
                    <p class="content">
                      <span class="tag green"> customAnimation </span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property is used to <span class="tag">off</span> the javascript
                        animation. the default value is <span class="tag">false</span>. if you want
                        to animate the text with css animation, then you should change this value to
                        <span class="tag">true</span>. and add your css style on the selector's
                        class name.
                      </p>
                      <p class="note content">
                        Note: if you set this property to <span class="tag green">true</span>, after
                        that you can animate text with css style by adding your css style on these
                        class names: <span class="tag green">.textify</span>,
                        <span class="tag green">.is-animated</span>
                      </p>
                    </div>
                  </li>
                  <li class="options-list-item no-border">
                    <p class="content">
                      <span class="tag green"> animateProps </span>
                    </p>
                    <div class="context">
                      <p class="content">
                        This property is a <span class="tag">object</span> that contains the
                        animation properties. this option contain following properties:
                      </p>
                      <div class="bg-line-full"></div>
                      <ul class="options-list">
                        <li class="options-list">
                          <p class="content">
                            <span class="tag green"> opacity </span>
                          </p>
                          <div class="context">
                            <p class="content">
                              This property is used to set the opacity of the animation. the default
                              value is <span class="tag">1</span>. you can set the opacity value
                              between <span class="tag">0</span> to <span class="tag">1</span>.
                            </p>
                          </div>
                        </li>
                        <li class="options-list">
                          <p class="content">
                            <span class="tag green"> scale </span>
                          </p>
                          <div class="context">
                            <p class="content">
                              This property is used to set the scale of the animation. the default
                              value is <span class="tag">1</span>. you can set the scale value
                              between <span class="tag">0</span> to <span class="tag">2</span>.
                            </p>
                          </div>
                        </li>
                        <li class="options-list">
                          <p class="content">
                            <span class="tag green"> x </span>
                          </p>
                          <div class="context">
                            <p class="content">
                              This property is used to set the translateX of the animation. the
                              default value is <span class="tag">0</span>. you can set the
                              translateX value between <span class="tag">-100</span> to
                              <span class="tag">100</span> in <span class="tag green">%</span>.
                            </p>
                          </div>
                        </li>
                        <li class="options-list">
                          <p class="content">
                            <span class="tag green"> y </span>
                          </p>
                          <div class="context">
                            <p class="content">
                              This property is used to set the translateY of the animation. the
                              default value is <span class="tag">100%</span>. you can set the
                              translateY value between <span class="tag">-100</span> to
                              <span class="tag">100</span> in <span class="tag green">%</span>.
                            </p>
                          </div>
                        </li>
                        <li class="options-list">
                          <p class="content">
                            <span class="tag green"> rotate </span>
                          </p>
                          <div class="context">
                            <p class="content">
                              This property is used to set the rotate of the animation. the default
                              value is <span class="tag">0</span>. you can set the rotate value
                              between <span class="tag">-360</span> to <span class="tag">360</span>.
                            </p>
                          </div>
                        </li>
                        <li class="options-list">
                          <p class="content">
                            <span class="tag green"> skewX </span>
                          </p>
                          <div class="context">
                            <p class="content">
                              This property is used to set the skewX of the animation. the default
                              value is <span class="tag">0</span>. you can set the skewX value
                              between <span class="tag">-360</span> to <span class="tag">360</span>.
                            </p>
                          </div>
                        </li>
                        <li class="options-list">
                          <p class="content">
                            <span class="tag green"> skewY </span>
                          </p>
                          <div class="context">
                            <p class="content">
                              This property is used to set the skewY of the animation. the default
                              value is <span class="tag">0</span>. you can set the skewY value
                              between <span class="tag">-360</span> to <span class="tag">360</span>.
                            </p>
                          </div>
                        </li>
                        <li class="options-list no-border">
                          <p class="content note">
                            Note : these properties value are set animation's starting(from) state.
                            if you set the <span class="tag green">customAnimation</span> property
                            to <span class="tag">true</span>, then these properties value are not
                            usable.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start" id="methods">
          <h1 class="small-title">Instance Methods</h1>
          <p class="content">
            <span class="tag gren">Textify</span> contains instance methods. these are used to
            control the animation. these methods are help to maintain animation stability. these
            methods are following:
          </p>
          <ul class="options-list">
            <li class="options-list-item">
              <p class="content option-name">
                <span class="tag green"> animateIn </span>
              </p>
              <div class="context">
                <p class="content">
                  This <span class="tag">method</span> is used reveal the animation and use to
                  create custom reveal animations on specific events.
                </p>
              </div>
            </li>
            <li class="options-list-item">
              <p class="content option-name">
                <span class="tag green"> animateOut </span>
              </p>
              <div class="context">
                <p class="content">
                  This <span class="tag">method</span> is used hide the animation and use to create
                  custom hide animations on specific events.
                </p>
              </div>
            </li>
            <li class="options-list-item no-border">
              <p class="content option-name">
                <span class="tag green"> reset </span>
              </p>
              <div class="context">
                <p class="content">
                  This <span class="tag">method</span> is used to reset the animation. this method
                  is used to reset the animation to its initial state. this method is used to update
                  the animated text's <span class="green">bounds</span> on window resize.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg-line-full"></div>
        <div class="doc-box flex-column-start" id="tips">
          <h1 class="small-title">Extra Tips</h1>
          <p class="content">
            Using <span class="tag green">Textify</span> you can create custom
            <span class="tag green">CSS</span> animations. Textify's
            <span class="tag">CSS</span> provide some default and helpfull
            <span class="tag">CSS</span> styles for selector and it's pseudo elements. you can use
            these styles to create custom animations.
          </p>
          <p class="content">
            <span class="tag green">Textify</span>'s selector get some default data attributes.
            these data attributes are used to create custom animations. you can use these data
            attributes in your <span class="tag">CSS</span> to create custom animations.
          </p>
          <h1 class="small-title">Important Tip</h1>
          <p class="content">
            When you are using <span class="tag green">Textify</span> in your project, make sure
            call the <span class="tag green">Textify</span>'s instance methods after the webpage's
            all <span class="tag green">fonts</span> or
            <span class="tag green">font-family</span> are loaded. otherwise, animation will broke
            the animation.
          </p>
          <p class="content">
            We recommend to use
            <a
              class="tag html-color"
              href="https://www.npmjs.com/package/fontfaceobserver"
              target="_blank"
            >
              fontfaceobserver</a
            >
            to detect the fonts are loaded or not. and then call the
            <span class="tag green">Textify</span>'s instance methods. you can use
            <span class="tag green">Textify</span> like this:
          </p>
          <CodeBox tag="JS">
            <code class="content">
              import Textify from "textify.js";
              <br />
              import FontFaceObserver from "fontfaceobserver";
              <br />
              <br />
              const font = new FontFaceObserver("Roboto");
              <br />
              <br />
              font.load().then(() => {
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;new Textify();
              <br />
              });
            </code>
          </CodeBox>
        </div>
        <div class="bg-line-full"></div>
      </div>
    </section>
    <section class="thanks">
      <div class="container">
        <h1 class="sub-title green">Thanks for using Textify</h1>
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
