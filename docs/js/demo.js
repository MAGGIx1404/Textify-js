const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 2,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const title = document.querySelector(".title");
const moveTitle = document.querySelector(".move-title");
const moveTitle2 = document.querySelector(".move-title-2");
const moveTitle3 = document.querySelector(".move-title-3");
const moveTitle4 = document.querySelector(".move-title-4");

lenis.on("scroll", ({ scroll }) => {
  title.style.transform = `scaleX(${1 + scroll * 0.005})`;
  moveTitle.style.transform = `translateX(${-scroll * 2}px)`;
  moveTitle2.style.transform = `translateX(${-scroll * 2}px)`;
  moveTitle3.style.transform = `translateX(${-scroll * 2}px)`;
  moveTitle4.style.transform = `translateX(${-scroll * 2}px)`;
});

// text animation-1
new TextifyTitle({
  selector: ".title-1",
  duration: 800,
  stagger: 50,
  once: false,
  threshold: 0
});

new Textify({
  selector: ".p-1",
  duration: 1000,
  once: false
});

// text animation-2
new TextifyTitle({
  selector: ".title-2",
  duration: 500,
  stagger: 100,
  once: false,
  reveal: false,
  scale: 0,
  fade: true,
  fadeDuration: 500,
  ease: "bounceInOut"
});

new Textify({
  selector: ".p-2",
  duration: 1000,
  once: false,
  scale: 0,
  ease: "bounceInOut"
});

// text animation-3
new TextifyTitle({
  selector: ".title-3",
  duration: 1000,
  stagger: 50,
  once: false,
  rotation: 90,
  scale: 0,
  fade: true
});

new Textify({
  selector: ".p-3",
  duration: 1000,
  once: false,
  top: true,
  rotation: -15,
  fade: true,
  ease: "bounceIn"
});

new Textify({
  selector: ".t-5",
  duration: 1000,
  once: false
});

new TextifyTitle({
  selector: ".scroll-title",
  duration: 1000,
  stagger: 50,
  once: false,
  scale: 0,
  fade: true,
  fadeDuration: 500,
  ease: "elasticInOut"
});
