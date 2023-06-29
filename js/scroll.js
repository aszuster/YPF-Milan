// SCROLL FIXED

if (window.innerWidth > 992) {
  ScrollTrigger.defaults({
    markers: false,
  });

  const arrowFirst = document.querySelector(".arrow.first");
  const arrowLast = document.querySelector(".arrow.last");

  var slides = gsap.utils.toArray(".scroll-slide");
  var indicators = gsap.utils.toArray(".indicator");

  var height = 100 * slides.length;

  gsap.set(".indicators", { display: "flex" });

  var tl = gsap.timeline({
    duration: slides.length,
    scrollTrigger: {
      trigger: ".scroll-fixed",
      start: "top center",
      end: "+=" + height + "%",
      scrub: true,
      id: "slides",
    },
    onStart: function () {
      (arrowFirst.style.fill = "rgb(198, 198, 198)"),
        (arrowLast.style.fill = "#3965b9");
    },
    onReverseStart: function () {
      (arrowLast.style.fill = "rgb(198, 198, 198)"),
        (arrowFirst.style.fill = "#3965b9");
    },
  });

  var pinner = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-fixed .container-scroll",
      start: "top top",
      end: "+=" + height + "%",
      scrub: true,
      pin: ".scroll-fixed .container-scroll",
      pinSpacing: true,
      id: "pinning",
      // markers: true,
    },
  });

  slides.forEach(function (elem, i) {
    gsap.set(elem, { position: "absolute", top: 0 });

    tl.to(
      indicators[i],
      {
        color: "#3965b9",
        opacity: 1,
        duration: 0.25,
        onStart: function () {
          if (i === 5) {
            arrowLast.style.fill = "rgb(198, 198, 198)";
          }
        },
        onReverseStart: function () {
          if (i === 0) {
            arrowFirst.style.fill = "rgb(198, 198, 198)";
          }
        },
      },
      i
    );

    tl.from(
      elem.querySelector(".scroll-middle-side-container"),
      { autoAlpha: 0 },
      i
    );
    tl.from(
      elem.querySelector(".scroll-left-side-container"),
      { autoAlpha: 0, translateY: 100 },
      i
    );

    if (i != slides.length - 1) {
      tl.to(
        indicators[i],
        {
          color: "rgb(198, 198, 198)",
          duration: 0.25,
          onComplete: function () {
            if (i === 0) {
              arrowFirst.style.fill = "#3965b9";
            }
          },
          onReverseComplete: function () {
            if (i !== 0) {
              arrowLast.style.fill = "#3965b9";
            }
          },
        },
        i + 0.75
      );
      tl.to(
        elem.querySelector(".scroll-left-side-container"),
        { autoAlpha: 0, translateY: -100 },
        i + 0.75
      );
      tl.to(
        elem.querySelector(".scroll-middle-side-container"),
        { autoAlpha: 0 },
        i + 0.75
      );
    }
  });
}


// STANDARD_SIZE = 992;
// window.addEventListener('resize', function(event){
//     if(window.innerWidth < STANDARD_SIZE ){
//        alert('bajó papá');
//     }
//     else{
//       alert('subió papá');      
//     }
// });


// window.onresize = () => {
//   location.reload();
// }

if (window.innerWidth > 992) {
  // DINERO EN CUENTA

  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".dinero-en-cuenta",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    },
  });
}
