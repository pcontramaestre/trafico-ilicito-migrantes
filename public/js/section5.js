const controllerSection5A = new ScrollMagic.Controller();
const controllerSection5B = new ScrollMagic.Controller();
const controllerSection5C = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: "#seccion5 .banner-seccion5",
  triggerHook: 0,
  duration: "200%",
  tweenChanges: true,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .fondoBanner2, #seccion5 .lluvia2"],
    2,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
    },
  )
)

.setPin("#seccion5 .banner-seccion5")
.addTo(controllerSection5A);

new ScrollMagic.Scene({
  triggerElement: "#seccion5 .banner-seccion5",
  triggerHook: 0,
  duration: "200%",
  tweenChanges: true,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .lluvia1"],
    2,
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },
  )
)
.addTo(controllerSection5B);

new ScrollMagic.Scene({
  triggerElement: "#seccion5",
  triggerHook: 0,
  duration: "200%",
  tweenChanges: true,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .sombrilla"],
    2,
    {
      opacity: 0,
      x: "-100%",
    },
    {
      opacity: 1,
      x: "0%",
    },
  )
)
.addTo(controllerSection5C);

//section5-title
new ScrollMagic.Scene({
  triggerElement: "#seccion5",
  triggerHook: 0,
  duration: "200%",
  tweenChanges: true,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .section5-title"],
    2,
    {
      opacity: 0,
      scale: 0.5,
    },
    {
      opacity: 1,
      scale: 1,
    },
  )
)
.addTo(controllerSection5C);