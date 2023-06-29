// HERO SECTION

gsap.from(".heros", {
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "power1.out",
  stagger: 0.5,
});
gsap.from(".hero-right h1", {
  duration: 0.5,
  opacity: 0,
  x: 100,
  ease: "power1.out",
});
gsap.from(".hero-right p", {
  duration: 0.5,
  opacity: 0,
  x: 100,
  ease: "power1.out",
  delay: 0.3,
});
gsap.from(".hero-right .button-content", {
  duration: 0.5,
  opacity: 0,
  y: 100,
  ease: "power1.out",
  delay: 0.3,
});

// DINERO EN CUENTA SECTION

// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".dinero-en-cuenta",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   }
// });
