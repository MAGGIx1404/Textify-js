<div align="center">
  <h1>
    <img width="600" src="./logo.png" alt="">
  </h1>
  <p>Simple scroll based text reveal animation library.</p>
  <p>
    <img src="https://img.shields.io/github/tag/MAGGIx1404/Textify.js?include_prereleases=&sort=semver&color=orange">
    <img src="https://img.shields.io/badge/License-MIT-orange">
    <img src="https://img.shields.io/badge/maintained-yes-orange" alt="maintained - yes">
    <a href="/CONTRIBUTING.md" title="Go to contributions doc"><img src="https://img.shields.io/badge/contributions-welcome-orange" alt="contributions - welcome"></a>
    <a href="https://www.javascript.com/" title="Go to JavaScript homepage"><img src="https://img.shields.io/badge/Made_with-JavaScript-orange?logo=javascript&logoColor=white" alt="Made with JavaScript"></a>
  </p>
  <p>
    <a href="https://maggix1404.github.io/Textify.js/" target="_blank">
    ⛰️<br>
    <b>DEMO</b></a>
  </p>
</div>
<br>

## Getting Started

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

## Using CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/textify.js@1.2.0/dist/Textify.min.js"></script>
```

## Usage
Import Textify.js:
```javascript
import Textify from "textify.js";
```

Add `data-textify` attribute to your paragraph or an element that contain text.
```html
<p data-textify>Some cool text.😎😎</p>
```

Initialize textify to see magic.
```javascript
new Textify()
```

<p>By default textify use default configurations for text animations. You can pass an configuration object during initialization to tweak it.</p>

## Configuration options

| Option | Default value | Description |
| ------ | ------ | ------ |
| duration | 1450 | Duration of text animation in ms |
| delay | 100 | Delay between animation of two lines. Value between 0 to 500 ms |
| fade | false | For fade animation. |
| top | false | Text reveal direction. Default is bottom to top |
| once | true | Whether animation should happen only once - while scrolling down |
| rotation | 0 | Add rotation on word in animation |
| scale | 1 | Add scaling on word in animation |
| easing | Default | Set easing function for animation |
| fadeEasing | Default | fade animation ease value |
| selector | data-textify | css selector for selecting elements from DOM |

# API
Textify object exposed following methods.
* `show` - Reveal animation.
* `hide` - Hide animation.
* `onRefresh` - Re-calulate all texts position and offset (call on DOM changes and resize event)

Example:
```javascript
const textObj = new Textify();

document.getElementById("btn").addEventListener("click", () => {
    textObj.show();
})
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
