
  // ANIMACION BANNER
  const controllerD = new ScrollMagic.Controller();
  const controllerD_2 = new ScrollMagic.Controller();

  let tween = TweenMax.to(".zapatos-rotate, .mapa-rotate", 1, {
      rotation: "-7.338deg",
      ease: "power3.inOut",
      repeat: -1,      
  }).yoyo(true);

  let tween3 = TweenMax.to(".bola-left", 6, {
        left: "90%",
        ease: "power3.inOut",
        repeat: -1,      
    }).yoyo(true);

  let tween2 = TweenMax.to(".sol-right",6,{
    right: "90%",
    ease: "power3.inOut",
    repeat: -1,      
  }).yoyo(true);


  new ScrollMagic.Scene({
      triggerElement: "#seccion4 .banner-seccion4",
      triggerHook: 0,
      duration: "350%",
    })
    .setTween(tween)
    .addTo(controllerD);



    new ScrollMagic.Scene({
      triggerElement: "#seccion4 .banner-seccion4",
      triggerHook: 0,
      duration: "350%",
    })
    .setTween(tween2)
    .addTo(controllerD);


    new ScrollMagic.Scene({
      triggerElement: "#seccion4 .banner-seccion4",
      triggerHook: 0,
      duration: "350%",
    })
    .setTween(tween3)
    .addTo(controllerD);


    // ANIMACION TEXTO DEL BANNER
    // ANIMACION PARTE 5, SECCION 2
    new ScrollMagic.Scene({
      triggerElement: "#seccion4 .banner-seccion4",
      triggerHook: 0,
      duration: "150%",
    })
    .setTween(
      TweenMax.staggerFromTo(
        ["#seccion4 .titulo-seccion3"],
        2,
        {
          opacity: 0.1,
          y: "45%",
          scale: 0.2,
        },
        {
          opacity: 1,
          y: "0%",
          scale: 1,
        },
      )
    )
    .addTo(controllerD);


    new ScrollMagic.Scene({
      triggerElement: "#seccion4 .banner-seccion4",
      triggerHook: 0,
      duration: "150%",
    })
    // .addIndicators({name: "banner 4"})
    .setPin("#seccion4 .banner-seccion4")
    .addTo(controllerD_2);



    // ANIMACION SLIDER
    var controllerSlider4 = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
      // animate to second panel
      .to(".slider-contenedor", 0.5, { z: -150 }) // move back in 3D space
      .to(".slider-contenedor", 1, { x: "-50%" }) // move in to first panel
      .to(".slider-contenedorr", 0.5, { z: 0 }) // move back to origin in 3D space
      new ScrollMagic.Scene({
      triggerElement: "#pinslider",
      triggerHook: 0,
      duration: "50%"
    })
      .setPin("#pinslider")
      .setTween(wipeAnimation)
      .addTo(controllerSlider4);

