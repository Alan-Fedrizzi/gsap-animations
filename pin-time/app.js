const src = [
  "ressources/spartan.svg",
  "ressources/castle.svg",
  "ressources/da-vinci.svg",
  "ressources/airplane.svg",
];

const dates = ["-3300 | 476", "476 | 1492", "1492 | 1792", "1792 | AJD"];

ScrollTrigger.create({
  trigger: ".sections",
  pin: ".tooltip",
  // trigger scroller
  start: "top 40%",
  end: "bottom 55%",
  // markers: true,
});

const sections = document.querySelectorAll(".section");

const setImgAndParagraph = (index) => {
  gsap.set(".tooltip-img", {
    attr: { src: src[index] },
  });
  gsap.set(".tooltip p", {
    innerText: dates[index],
  });
};

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    // markers: true,
    onEnter: () => {
      setImgAndParagraph(index);
    },
    onEnterBack: () => {
      setImgAndParagraph(index);
    },
  });
});
