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
import Animations from "textify.js";
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
import Animations from "textify.js";

const { Textify } = Animations;
new Textify()
```

<p>By default textify use default configurations for text animations. You can pass an configuration object during initialization to tweak it.</p>

#
## Configuration options

#
| Option | Default value | Description |
| ------ | ------ | ------ |
| duration | 1450 | Duration of text animation in ms |
| stagger | 100 | Delay between animation of two lines. Value between 0 to 500 ms |
| fade | false | For fade animation. |
| fadeDuration | 1000 | Duration of fade animation in ms |
| top | false | Text reveal direction. Default is bottom to top |
| reveal | true | Text reveal animation
| once | true | Whether animation should happen only once - while scrolling down |
| rotation | 0 | Add rotation on word in animation |
| scale | 1 | Add scaling on word in animation |
| easing | Default | Set easing function for animation |
| fadeEasing | Default | fade animation ease value |
| selector | data-textify | css selector for selecting elements from DOM |
| threshold | 0.5 | Threshold of the text animation |
| transformOrigin | center center | transform origin of animation's elements |


#
# Plugins

Textify.js have a plugin system. You can use it separate the code and make it more readable. You can use it to create custom animations of texts. currently, Textify.js have only 1 plugin. TextifyTitle plugin. we will add more plugins in the future.

## TextifyTitle()
#
TextifyTitle plugin is used to create a title animation. it's a simple plugin. you can use it to create cool title animations. this plugin is used only for the title elements like ```H1, H2, H3, H4, H5 & H6```. this plugin have same methods like Textify object. you can use them to control the animation. all methods are chainable. like show(), hide() & onRefresh().
 ```html
    <h1 data-textify-title>
        Hello World!!!
    </h1>

    <script>
        new TextifyTitle();
    </script>

```


#
# Documentation
Check main documentation of Textify.js here:

- [Site](https://maggix1404.github.io/Textify-js/)
- [Documentation & Examples](https://maggix1404.github.io/Textify-js/guide/index.html)
- [Demo](https://maggix1404.github.io/Textify-js/index.html)

#
# Methods
Textify object and it's all plugins have same methods.
* `show` - Reveal animation.
* `hide` - Hide animation.
* `onRefresh` - Re-calulate all texts position and offset (call on DOM changes and resize event)

Example:
```javascript
const textObj = new Textify();

// reveal all animations of textObj
textObj.show();

// hide all animations of textObj
textObj.hide();

// Re-calulate all texts position and offset
textObj.onRefresh();

```

# Easing functions
* easeInOut
* easeOut
* easeIn
* ease
* sharp
* linear
* back
* backIn
* backOut
* backInOut
* elasticIn
* elasticOut
* elasticInOut
* bounceIn
* bounceOut
* bounceInOut
* circIn
* circOut
* circInOut


## License

Released under [MIT](/LICENSE) by [@MAGGIx1404](https://github.com/MAGGIx1404).

## Rate us

Enjoying textify.js? [Please leave a short review on Openbase](https://openbase.com/js/textify.js#rate)
