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


//.banner-text-seccion5 .animacion-up

new ScrollMagic.Scene({
  triggerElement: "#seccion5 .banner-text-seccion5",
  triggerHook: 0,
  duration: "50%",
  tweenChanges: true,
  offset: -400,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .banner-text-seccion5 .animacion-up"],
    2,
    {
      opacity: 0,
      scale: 0.5,
      y: "-100%",
    },
    {
      opacity: 1,
      scale: 1,
      y:"0%",
    },
  )
)
.addTo(controllerSection5C);

//seccion5-parte3 imagen-izquierda cuadro
new ScrollMagic.Scene({
  triggerElement: "#seccion5 .seccion5-parte3",
  triggerHook: 0,
  duration: "100%",
  tweenChanges: true,
  offset: 0,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .seccion5-parte3 .imagen-izquierda"],
    2,
    {
      opacity: 0,
      // scale: 0.5,
      // y: "-100%",
    },
    {
      opacity: 1,
      // scale: 1,
      // y:"0%",
    },
  ).concat(
    TweenMax.staggerFromTo(
      ["#seccion5 .seccion5-parte3 .cuadro"],
      2,
      {
        opacity: 0,
        x: "200%",
      },
      {
        opacity: 1,
        x:"0%",
      },
    )
  )
)
.setPin("#seccion5 .seccion5-parte3")
.addTo(controllerSection5C);



new ScrollMagic.Scene({
  triggerElement: "#seccion5 .seccion5-parte5",
  triggerHook: 0,
  duration: "200%",
  tweenChanges: true,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .seccion5-parte5 .imagen-ancha"],
    2,
    {
      x:"0%",
    },
    {
      x:"-70%",
    },
  )
)
.setPin("#seccion5 .seccion5-parte5")
.addTo(controllerSection5C);

//denuncias text-izquierda-derecha
new ScrollMagic.Scene({
  triggerElement: "#seccion5 #denuncias",
  triggerHook: 0,
  duration: "200%",
  tweenChanges: true,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 #denuncias .text-izquierda-derecha"],
    3,
    {
      x:"150%",
    },
    {
      x:"0%",
    },
  )
)
.setPin("#seccion5 #denuncias")
.addTo(controllerSection5C);


//denuncias text-izquierda-derecha
new ScrollMagic.Scene({
  triggerElement: "#seccion5 #denuncias",
  triggerHook: 0,
  duration: "150%",
  tweenChanges: true,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 #denuncias .animacion-up"],
    3,
    {
      opacity: 0,
      y:"150%",
      scale: 0.5,
    },
    {
      opacity: 1,
      y:"0%",
      scale: 1,
    },
  )
)
.addTo(controllerSection5C);


new ScrollMagic.Scene({
  triggerElement: "#seccion5 .seccion5-parte7",
  triggerHook: 0,
  duration: "100%",
  tweenChanges: true,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .seccion5-parte7 .imagen-aparece,#seccion5 .seccion5-parte7 .cuadro1-ventanillas"],
    2,
    {
      scale: 0.8,
      opacity: 0,
      //x:"150%",
    },
    {
      scale: 1,
      opacity: 1,
      //x:"0%",
    },
  ).concat(
    TweenMax.staggerFromTo(
      ["#seccion5 .seccion5-parte7 .texto-zquierda-derecha"],
      1,
      {
        x:"-150%",
      },
      {
        x:"0%",
      },
    )
  )
)
.setPin("#seccion5 .seccion5-parte7")
.addTo(controllerSection5C);

//seccion5-parte9 animacion-up
//seccion5-parte10 animacion-up

new ScrollMagic.Scene({
  triggerElement: "#seccion5 .seccion5-parte9",
  triggerHook: 0,
  duration: "50%",
  tweenChanges: true,
  offset: -350,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .seccion5-parte9 .animacion-up"],
    1,
    {
      opacity: 0,
      y:"150%",
      scale: 0.5,
    },
    {
      opacity: 1,
      y:"0%",
      scale: 1,
    },
  )
)
.addTo(controllerSection5C);

new ScrollMagic.Scene({
  triggerElement: "#seccion5 .seccion5-parte10",
  triggerHook: 0,
  duration: "50%",
  tweenChanges: true,
  offset: -650,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .seccion5-parte10 .animacion-up"],
    1,
    {
      opacity: 0,
      y:"150%",
      scale: 0.5,
    },
    {
      opacity: 1,
      y:"0%",
      scale: 1,
    },
  )
)
.addTo(controllerSection5C);


//.seccion5-parte11 .imagen-aparecer .cuadro1-retorno

new ScrollMagic.Scene({
  triggerElement: "#seccion5 .seccion5-parte11",
  triggerHook: 0,
  duration: "100%",
  tweenChanges: true,
  offset: 0,
})
.setTween(
  TweenMax.staggerFromTo(
    ["#seccion5 .seccion5-parte11 .imagen-aparecer"],
    1,
    {
      opacity: 0,
      // scale: 0.5,
      // y: "-100%",
    },
    {
      opacity: 1,
      // scale: 1,
      // y:"0%",
    },
  ).concat(
    TweenMax.staggerFromTo(
      ["#seccion5 .seccion5-parte11 .cuadro1-retorno"],
      2,
      {
        opacity: 0,
        x: "200%",
      },
      {
        opacity: 1,
        x:"0%",
      },
    )
  )
)
.setPin("#seccion5 .seccion5-parte11")
.addTo(controllerSection5C);

