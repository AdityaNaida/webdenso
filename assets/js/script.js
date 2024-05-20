const tl = gsap.timeline();
tl.to(".sidebar", {
  right: 0,
  duration: 0.3,
});

tl.from(".menu-container > p", {
  y: 30,
  opacity: 0,
  duration: 0.3,
});

tl.from(
  ".menu-container > a",
  {
    y: 50,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  },
  "menulinks"
);

tl.from(
  ".menu-links",
  {
    y: 70,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  },
  "menulinks"
);

tl.from(".close-btn", {
  opacity: 0,
  duration: 0.3,
});

tl.pause();

function showMenu() {
  tl.play();
}

function reverseMenu() {
  tl.reverse();
}

function heroAnimation() {
  const tl = gsap.timeline();
  tl.from(
    ".logo",
    {
      y: -30,
      opacity: 0,
      duration: 0.4,
    },
    "nav"
  );
  tl.from(
    ".menu-btn",
    {
      y: -30,
      opacity: 0,
      duration: 0.4,
    },
    "nav"
  );
  tl.from(".hero-text > h1", {
    y: 50,
    opacity: 0,
    duration: 0.3,
  });
  tl.from(".hero-text > p", {
    y: 50,
    opacity: 0,
    duration: 0.3,
  });

  tl.from(".hero_form", {
    x: -200,
    opacity: 0,
    duration: 0.3,
  });

  tl.from(".heroimg_holder > img", {
    opacity: 0,
    duration: 0.2,
  });
}

heroAnimation();

function servicesAnimation() {
  const smallScreen = window.matchMedia("(max-width: 768px)");

  gsap.from(".webdev-textbox", {
    x: smallScreen.matches ? -100 : -200,
    opacity: 0,
    duration: smallScreen.matches ? 0.7 : 0.5,
    scrollTrigger: {
      trigger: ".webdev-textbox",
      scroller: "body",
      start: smallScreen.matches ? "top 90%" : "top 80%",
      end: smallScreen.matches ? "top 80%" : "top 70%",
      scrub: 1,
    },
  });

  gsap.from(".webdevelopment-illustration", {
    x: smallScreen.matches ? 100 : 200,
    opacity: 0,
    duration: smallScreen.matches ? 0.7 : 0.3,
    scrollTrigger: {
      trigger: ".webdev-image",
      scroller: "body",
      start: smallScreen.matches ? "top 90%" : "top 80%",
      end: smallScreen.matches ? "top 80%" : "top 70%",
      scrub: 1,
    },
  });

  gsap.from(".seo-textbox", {
    x: smallScreen.matches ? 100 : 200,
    opacity: 0,
    duration: smallScreen.matches ? 0.7 : 0.5,
    scrollTrigger: {
      trigger: ".seo-textbox",
      scroller: "body",
      start: smallScreen.matches ? "top 90%" : "top 80%",
      end: smallScreen.matches ? "top 80%" : "top 70%",
      scrub: 1,
    },
  });

  gsap.from(".seo-illustration", {
    x: smallScreen.matches ? -100 : -200,
    opacity: 0,
    duration: smallScreen.matches ? 0.7 : 0.3,
    scrollTrigger: {
      trigger: ".seo-image",
      scroller: "body",
      start: smallScreen.matches ? "top 90%" : "top 80%",
      end: smallScreen.matches ? "top 80%" : "top 70%",
      scrub: 1,
    },
  });

  gsap.from(".appdev-textbox", {
    x: smallScreen.matches ? -100 : -200,
    opacity: 0,
    duration: smallScreen.matches ? 0.7 : 0.5,
    scrollTrigger: {
      trigger: ".appdev-textbox",
      scroller: "body",
      start: smallScreen.matches ? "top 90%" : "top 80%",
      end: smallScreen.matches ? "top 80%" : "top 70%",
      scrub: 1,
    },
  });

  gsap.from(".appdev-illustration", {
    x: smallScreen.matches ? 100 : 200,
    opacity: 0,
    duration: smallScreen.matches ? 0.7 : 0.3,
    scrollTrigger: {
      trigger: ".appdev-image",
      scroller: "body",
      start: smallScreen.matches ? "top 90%" : "top 80%",
      end: smallScreen.matches ? "top 80%" : "top 70%",
      scrub: 1,
    },
  });
}

servicesAnimation();
