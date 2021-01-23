let logo = document.querySelector("#Layer_1");

let tl = gsap.timeline({ repeat: -1 });

function hoverAnimationIn() {
  gsap.to("#logo-1", 0.5, {
    scale: 0,
    transformOrigin: "center",
    ease: "back.out(2)",
  });
  gsap.to("#logo-2", 0.5, {
    scale: 1,
    transformOrigin: "center",
    ease: "back.out(2)",
    visibility: "visible",
  });
}

function hoverAnimationOut() {
  gsap.to("#logo-2", 0.2, {
    scale: 0,
    transformOrigin: "center",
    ease: "back.out(1)",
    visibility: "hidden",
  });
  gsap.to("#logo-1", 0.5, {
    scale: 1,
    transformOrigin: "center",
    ease: "back.out(1.5)",
  });
}

function animationOnMobile() {
  tl.to("#logo-1", 0.5, {
    delay: 5,
    scale: 0,
    transformOrigin: "center",
    ease: "back.out(2)",
  })
    .to("#logo-2", 0.5, {
      scale: 1,
      transformOrigin: "center",
      ease: "back.out(2)",
      visibility: "visible",
    })
    .to("#logo-2", 0.2, {
      delay: 5,
      scale: 0,
      transformOrigin: "center",
      ease: "back.out(1)",
      visibility: "hidden",
    })
    .to("#logo-1", 0.5, {
      scale: 1,
      transformOrigin: "center",
      ease: "back.out(1.5)",
    });
}

if (window.matchMedia("(max-width: 1000px)").matches) {
  /* The viewport is less than, or equal to, 700 pixels wide */

  logo.removeEventListener("mouseenter", () => {
    hoverAnimationIn();
  });

  logo.removeEventListener("mouseleave", () => {
    hoverAnimationOut();
  });

  animationOnMobile();
} else {
  /* The viewport is greater than 700 pixels wide */
  logo.addEventListener("mouseenter", () => {
    hoverAnimationIn();
  });

  logo.addEventListener("mouseleave", () => {
    hoverAnimationOut();
  });
}
