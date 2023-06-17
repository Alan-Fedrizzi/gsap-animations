gsap.from(".b2 h2", {
  duration: 1,
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".b2 h2",
    start: "top 80%",
    end: "bottom 30%",
    toggleActions: "play pause reserve reset",
    onEnter: () => console.log("ENTER"),
    onLeave: () => console.log("LEAVE"),
    onEnterBack: () => console.log("ENTER BACK"),
    onLeaveBack: () => console.log("LEAVE BACK"),
    scrub: 0.5,
  },
});

ScrollTrigger.create({
  trigger: ".b2",
  pin: true,
  // markers: true,
  end: "bottom 50%",
});
