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
    opacity: 1,
  });
}

function hoverAnimationOut() {
  gsap.to("#logo-2", 0.5, {
    scale: 0,
    transformOrigin: "center",
    ease: "back.out(1)",
    opacity: 0,
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
    .to("#logo-2", 0, {
      opacity: 1,
      scale: 0,
      transformOrigin: "center",
    })
    .to("#logo-2", 0.5, {
      scale: 1,
      transformOrigin: "center",
      ease: "back.out(2)",
    })
    .to("#logo-2", 0.5, {
      delay: 5,
      scale: 0,
      transformOrigin: "center",
      ease: "back.out(1)",
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
