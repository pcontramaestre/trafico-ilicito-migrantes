
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

// ANIMACION PRINCIPALES RIESGOS

new ScrollMagic.Scene({
  triggerElement: "#principales-riesgos",
  triggerHook: 0.8,
  duration: "50%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".titulo-principales-riesgos"],
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

// Cuadro de fallecimientos
new ScrollMagic.Scene({
  triggerElement: ".cuadro-fallecimientos",
  triggerHook: 0.7,
  duration: "50%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".cuadro-fallecimientos"],
    2,
    {
      opacity: 0.3,
    },
    {
      opacity: 1,
    },
  )
)
.addTo(controllerD);

// Cuadro de secuestros
new ScrollMagic.Scene({
  triggerElement: ".cuadro-secuestro",
  triggerHook: 0.7,
  duration: "50%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".cuadro-secuestro"],
    2,
    {
      opacity: 0.3,
    },
    {
      opacity: 1,
    },
  )
)
.addTo(controllerD);

// Cuadro de delitos
new ScrollMagic.Scene({
  triggerElement: ".cuadro-delitos",
  triggerHook: 0.7,
  duration: "50%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".cuadro-delitos"],
    2,
    {
      opacity: 0.3,
    },
    {
      opacity: 1,
    },
  )
)
.addTo(controllerD);

// Cuadro de robos
new ScrollMagic.Scene({
  triggerElement: ".cuadro-robos",
  triggerHook: 0.7,
  duration: "50%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".cuadro-robos"],
    2,
    {
      opacity: 0.3,
    },
    {
      opacity: 1,
    },
  )
)
.addTo(controllerD);

// Cuadro de trata
new ScrollMagic.Scene({
  triggerElement: ".cuadro-trata",
  triggerHook: 0.7,
  duration: "50%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".cuadro-trata"],
    2,
    {
      opacity: 0.3,
    },
    {
      opacity: 1,
    },
  )
)
.addTo(controllerD);


// ANIMACION #otros-riesgos .titulo-otros-riesgos

new ScrollMagic.Scene({
  triggerElement: "#otros-riesgos",
  triggerHook: 0.8,
  duration: "50%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".titulo-otros-riesgos,.acordeon-riesgos-contenedor"],
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

// ANIMACION LOS RIESGOS DE EXACERBAN
// #los-riesgos-se-excerban
// .titulo-riesgos-se-excerban
new ScrollMagic.Scene({
  triggerElement: "#los-riesgos-se-excerban",
  triggerHook: 1,
  duration: "100%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".titulo-riesgos-se-excerban"],
    2,
    {
      opacity: 0.8,
      x: "-145%",
    },
    {
      opacity: 1,
      x: "0%",
    },
  )
)
// .setPin("#los-riesgos-se-excerban")
.addTo(controllerD);

// ANIMACION LOS RIESGOS TEXTO SE EXCERBAN
new ScrollMagic.Scene({
  triggerElement: ".texto-los-riesgos-se-excerban",
  triggerHook: 1,
  duration: "100%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".texto-los-riesgos-se-excerban"],
    2,
    {
      opacity: 0.5,
      y: "85%",
    },
    {
      opacity: 1,
      y: "0%",
    },
  )
)
.addTo(controllerD);

// ANIMACION RIESGOS VINCULADOS AL TRAFICO ILICITO DE MIGRANTES - PARTE 6 
// .cuadro-riesgo1,.cuadro-riesgo2,.cuadro-riesgo3,.cuadro-riesgo4
new ScrollMagic.Scene({
  triggerElement: ".cuadro-riesgo1",
  triggerHook: 1,
  duration: "100%",
  offset: -200,
})
.setTween(
  TweenMax.staggerFromTo(
    [".cuadro-riesgo1"],
    2,
    {
      opacity: 0.5,
      x: "185%",
    },
    {
      opacity: 1,
      x: "0%",
    },
  )
)
.addTo(controllerD);

new ScrollMagic.Scene({
  triggerElement: ".cuadro-riesgo1",
  triggerHook: 0.7,
  duration: "100%",
  offset: -350,
})
.setTween(
  TweenMax.staggerFromTo(
    [".cuadro-riesgo2"],
    2,
    {
      opacity: 0.5,
      x: "-185%",
    },
    {
      opacity: 1,
      x: "0%",
    },
  )
)
.addTo(controllerD);

new ScrollMagic.Scene({
  triggerElement: ".cuadro-riesgo1",
  triggerHook: 0.7,
  duration: "100%",
  offset: -450,
})
.setTween(
  TweenMax.staggerFromTo(
    [".cuadro-riesgo3"],
    2,
    {
      opacity: 0.5,
      x: "185%",
    },
    {
      opacity: 1,
      x: "0%",
    },
  )
)
.addTo(controllerD);

new ScrollMagic.Scene({
  triggerElement: ".cuadro-riesgo4",
  triggerHook: 1,
  duration: "100%",
  offset: -150,
})
.setTween(
  TweenMax.staggerFromTo(
    [".cuadro-riesgo4"],
    2,
    {
      opacity: 0.5,
      y: "85%",
    },
    {
      opacity: 1,
      y: "0%",
    },
  )
)
.addTo(controllerD);

// ANIMACION VOCES MIGRANTES
//.voces-migrantes .texto-voces-migrantes
new ScrollMagic.Scene({
  triggerElement: ".voces-migrantes",
  triggerHook: 1,
  duration: "100%",
})
.setTween(
  TweenMax.staggerFromTo(
    [".texto-voces-migrantes"],
    2,
    {
      opacity: 0.5,
      x: "-185%",
    },
    {
      opacity: 1,
      x: "0%",
    },
  )
)
.addTo(controllerD);