window.addEventListener("load", animation);

function animation() {
  const tl = gsap.timeline({ repeat: -1 });

  tl.from(".vertical-slider p", {
    y: 100,
    autoAlpha: 0,
    duration: 0.75,
    stagger: 0.75,
  }).to(
    ".vertical-slider p",
    {
      y: -100,
      autoAlpha: 0,
      duration: 0.75,
      stagger: 0.75,
    },
    0.75
  );
}
