const tl = gsap.timeline();
tl.to(".sidebar", {
  right: 0,
  duration: 0.5,
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
      duration: 0.3,
    },
    "nav"
  );
  tl.from(
    ".menu-btn",
    {
      y: -30,
      opacity: 0,
      duration: 0.3,
    },
    "nav"
  );

  tl.from(".hero-heading", {
    y: 100,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".hero-btn-holder > a", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  });
}

heroAnimation();
