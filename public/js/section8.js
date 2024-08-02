function isScreenWidthGreaterThan800() {  
  return window.innerWidth > 800;  
}  

if (isScreenWidthGreaterThan800()) { 
  const controllerSection8A = new ScrollMagic.Controller();
  const controllerSection8B = new ScrollMagic.Controller();
  const controllerSection8C = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: "#seccion8 .banner-seccion8",
    triggerHook: 0,
    duration: "200%",
    tweenChanges: true,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion8 .titulo-seccion8"],
      2,
      {
        opacity: 0.1,
        scale: 0.1,
      },
      {
        opacity: 1,
        scale: 1,
      },
    )
  )

  .setPin("#seccion8 .banner-seccion8")
  .addTo(controllerSection8A);

  new ScrollMagic.Scene({
    triggerElement: "#seccion8 .banner-texto-seccion8",
    triggerHook: 0,
    duration: "50%",
    tweenChanges: true,
    offset: -200,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion8 .animacion-up"],
      2,
      {
        opacity: 0.8,
        y: "200%",
      },
      {
        opacity: 1,
        y: "0%",
      },
    )
  )

  .addTo(controllerSection8A);


  //.setPin("#seccion8 #seccionfuentes")
  new ScrollMagic.Scene({
    triggerElement: "#seccion8 #seccionfuentes",
    triggerHook: 0,
    duration: "50%",
    tweenChanges: true,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion8 .titulo-fuentes"],
      2,
      {
        opacity: 0.2,
        y: "100%",
      },
      {
        opacity: 1,
        y: "0%",
      },
    )
  )
  .setPin("#seccion8 #seccionfuentes")
  .addTo(controllerSection8C);

  //animaciones-fuentes, animacion-left, animacion-right

  new ScrollMagic.Scene({
    triggerElement: "#seccion8 #seccionfuentes",
    triggerHook: 0,
    duration: "140%",
    tweenChanges: true,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion8 .animacion-left"],
      2,
      {
        opacity: 0.2,
        y: "100%",
      },
      {
        opacity: 1,
        y: "0%",
      },
    )
  )
  .addTo(controllerSection8B);

  new ScrollMagic.Scene({
    triggerElement: "#seccion8 #seccionfuentes",
    triggerHook: 0,
    duration: "140%",
    tweenChanges: true,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion8 .animacion-right, .animacion-opacity"],
      2,
      {
        opacity: 0.2,
        y: "100%",
      },
      {
        opacity: 1,
        y: "0%",
      },
    )
  )

  .addTo(controllerSection8B);
}