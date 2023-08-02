<div align="center">
  <h1>
    <img width="600" src="./logo.svg" alt="logo">
  </h1>
  <p>Next Generation Text Animation Library.</p>
  <p>
    <img src="https://data.jsdelivr.com/v1/package/npm/textify.js/badge?style=rounded">
    <img src="https://img.shields.io/npm/v/textify.js?color=green&label=version">
    <img src="https://img.shields.io/badge/License-MIT-green">
    <img src="https://img.shields.io/badge/maintained-yes-green" alt="maintained - yes">
    <a href="/CONTRIBUTING.md" title="Go to contributions doc"><img src="https://img.shields.io/badge/contributions-welcome-green" alt="contributions - welcome"></a>
    <a href="https://www.javascript.com/" title="Go to JavaScript homepage"><img src="https://img.shields.io/badge/Made_with-JavaScript-green?logo=javascript&logoColor=yellow" alt="Made with JavaScript"></a>
  </p>
  <p>
    <a href="https://maggix1404.github.io/Textify-js/" target="_blank">
    <img src="./mini-logo.svg" alt='mini-logo' width='30px'>
    <br>
    <b style='color:#3FCF8E; text-decoration: 1px underline #3FCF8E;'>Live Examples</b></a>
  </p>
</div>
<br>

## Getting Started
Textify.js is a animation engine for web typography animations, which are use to create smooth, creative or seamless animations of typography. Also it’s provide multiple
animations types or custom animations on <a href="https://greensock.com/gsap/" target="_blank" style="color:#3FCF8E;">GSAP</a>'s power.

#
## Using packge manager

#### NPM
Install textify using npm:
```sh
npm install textify.js
```

#### yarn
Install textify using yarn
```sh
yarn add textify.js
```

#
## Using CDN:
```html
<link src="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css" rel="stylesheet"/>

<script src="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.js"></script>
```

#
## ES6 module
```html
<script type="module">
    import Textify from 'https://cdn.jsdelivr.net/npm/textify.js/+esm';

    new Textify();
</script>
```

#
## Usage
Import Textify.js:
```javascript
import Textify from "textify.js";
```

Link ```Textify.min.css``` to document:

```html
<link src="https://cdn.jsdelivr.net/npm/textify.js/dist/Textify.min.css" rel="stylesheet"/>
```

Add `data-textify` attribute to your paragraph or an element that contain text.
```html
<p data-textify>Some cool text.😎😎</p>
```

Initialize textify to see magic.
```javascript
import Textify from "textify.js";

new Textify()
```

<p>By default textify use default configurations for text animations. You can pass an configuration object during initialization to tweak it.</p>

#
## Configuration options

```javascript
  splitType: "lines words chars", // chars or words or lines
  largeText: false, // true or false
  observer: {
    repeat: false, // true or false
    threshold: 0.5 // 0.0 ~ 1.0
  },
  animation: {
    by: "chars", // chars or words or lines
    duration: 0.5, // seconds
    stagger: 0.05, // seconds
    delay: 0.0, // seconds
    ease: "ease", // ease or linear or cubic-bezier
    customAnimation: false, // true or false
    transformOrigin: "center center", // center center or top left or top center or top right or center right or bottom right or bottom center or bottom left or center left
    animateProps: {
      opacity: 1, // 0 ~ 1
      y: "100%", // -100 ~ 100 (%)
      x: 0, // -100 ~ 100 (%)
      scale: 1, // 0 ~ 1
      rotate: 0, // -360 ~ 360
      skewX: 0, // -360 ~ 360
      skewY: 0 // -360 ~ 360
    }
  }
```

For, more information about configs, check <a href="/" target="_blank" style="color:#3FCF8E;">Documentation</a>

#
# Documentation
Check main documentation of Textify.js here:

- [Site](https://maggix1404.github.io/Textify-js/)
- [Documentation & Examples](https://maggix1404.github.io/Textify-js/guide/index.html)
- [Demo](https://maggix1404.github.io/Textify-js/index.html)

#
# Methods
    Textify contains instance methods. these are used to control the animation. these methods are help to maintain animation stability. these
    methods are following:

* `animateIn` - Reveal animation.
* `animateOut` - Hide animation.
* `reset` - Re-calulate all texts position and offset (call on DOM changes and resize event)

Example:
```javascript
const textObj = new Textify();

// reveal all animations of textObj
textObj.animateIn();

// hide all animations of textObj
textObj.animateOut();

// Re-calulate all texts position and offset
textObj.reset();

```

## License

Released under [MIT](/LICENSE) by [@MAGGIx1404](https://github.com/MAGGIx1404).

## Rate us

Enjoying textify.js? [Please leave a short review on Openbase](https://openbase.com/js/textify.js#rate)
