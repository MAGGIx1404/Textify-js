// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   direction: "vertical",
//   gestureDirection: "vertical",
//   smooth: true,
//   mouseMultiplier: 2,
//   smoothTouch: false,
//   touchMultiplier: 2,
//   infinite: false
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// const title = document.querySelector(".title");
// const moveTitle = document.querySelector(".move-title");
// const shape1 = document.querySelector(".shape1");
// const shape2 = document.querySelector(".shape2");
// const shape3 = document.querySelector(".shape3");
// const moveTitle2 = document.querySelector(".move-title-2");

// lenis.on("scroll", ({ scroll }) => {
//   title.style.transform = `scaleY(${1 + scroll * 0.005})`;
//   shape1.style.transform = `rotate(${scroll * 0.5}deg)`;
//   shape2.style.transform = `translateX(${-scroll * 0.5}px) scale(${1 + scroll * 0.0005})`;
//   shape3.style.transform = `rotate(${scroll * 0.3}deg)`;
//   moveTitle.style.transform = `translateX(${-scroll}px)`;
//   moveTitle2.style.transform = `translateX(${-scroll}px)`;
// });

// // text animation

// new TextifyTitle({
//   selector: ".scroll-title",
//   duration: 500,
//   threshold: 0,
//   stagger: 20,
//   once: false
// });

// new Textify({
//   selector: ".paragraph",
//   duration: 1000,
//   threshold: 0,
//   once: false,
//   fade: true
// });
