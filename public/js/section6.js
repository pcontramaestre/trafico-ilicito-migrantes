const controllerSection6A = new ScrollMagic.Controller();
const controllerSection6B = new ScrollMagic.Controller();
const controllerSection6C = new ScrollMagic.Controller();
const controllerSection6D = new ScrollMagic.Controller();
const controllerSection6E = new ScrollMagic.Controller();
const controllerSection6F = new ScrollMagic.Controller();


//Animacion manos
var wipeAnimation = new TimelineMax()
      // animate to second panel
      .to(".mano1", 0.5, { scale: 8, x: "-40%", opacity: 1 })
      .to(".mano1", 1, { scale: 1, x: "0%", opacity: 1 })
      .to(".mano2", 0.5, { scale: 8, opacity: 1 })
      .to(".mano2", 1, { scale: 1, opacity: 1 })
      .to(".mano3", 0.5, { scale: 8, opacity: 1 })
      .to(".mano3", 1, { scale: 1, opacity: 1 })
      .to(".mano4", 0.5, { scale: 10, opacity: 1 })
      .to(".mano4", 1, { scale: 1, opacity: 1 })
      .to(".mano5", 0.5, { scale: 14, opacity: 1 })
      .to(".mano5", 1, { scale: 1, opacity: 1 })


new ScrollMagic.Scene({
  triggerElement: "#seccion6 .banner-seccion6",
  triggerHook: 0,
  duration: "400%",
  tweenChanges: true,
})
  .setPin("#seccion6 .banner-seccion6")
  .setTween(wipeAnimation)
  .addTo(controllerSection6A);