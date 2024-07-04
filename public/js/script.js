 // Inicializar ScrollMagic cuando el documento esté listo
 document.addEventListener("DOMContentLoaded", () => {
  // Crear un controlador de ScrollMagic
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
      duration: "100%", // Duración para evitar errores visuales
    },
  });

  const controllerB = new ScrollMagic.Controller();

  // Animacion de texto
  new ScrollMagic.Scene({
    triggerElement: ".titulo-animado ",
    triggerHook: 0.7,
    duration: "80%",
    offset: 0,
    tweenChanges: true,
  })
  .setTween(
      TweenMax.staggerFromTo(
        [".texto-animado"],
        1,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          brightness: 100,
          x: "2%",
          opacity: 1,
        },
      )
    )
  .setPin(".titulo-animado")
  .addTo(controller);


// Animacion de los cuadros
  new ScrollMagic.Scene({
    triggerElement: ".con-cuadros",
    triggerHook: 0.7,
    duration: "80%",
    offset: 0,
  })
  .setTween(
      TweenMax.staggerFromTo(
        [".cuadro"],
        1,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      )
    )
  .setPin(".con-cuadros")
  .addTo(controller);

  //Animacion de la seccion de grafico
  //seccion-grafico
  new ScrollMagic.Scene({
    triggerElement: ".seccion-grafico",
    triggerHook: 1,
    duration: "100%",
    offset: 0,
  })
  .setTween(
      TweenMax.staggerFromTo(
        [".izquierda.grafico"],
        0.1,
        {
          opacity: 0.5,
          x: "-25%",
        },
        {
          opacity: 1,
          x: "0%",
        },
      ).concat(
        TweenMax.staggerFromTo(
          [".derecha.texto"],
          0.1,
          {
            opacity: 0.5,
            x: "125%",
          },
          {
            opacity: 1,
            x: "0%",
          },
        )
      )
    )
  .setPin(".seccion-grafico")
  .addTo(controller);

  // Seccion de video 
  new ScrollMagic.Scene({
    triggerElement: ".animate-video",
    triggerHook: "onCenter",
    duration: "200%",
  })
  .setClassToggle(".titulo-video, .img-video", "visible-zoom")
  //.setPin('.seccion-video')
  .addTo(controllerB);

    // Seccion de PASOS 

    //PASO 1
    new ScrollMagic.Scene({
      triggerElement: ".paso1",
      triggerHook: "onEnter",
      duration: "100%",
    })
    .setTween(
      TweenMax.staggerFromTo(
        [".paso1 > .cuadro-con-numero"],
        0.1,
        {
          opacity: 0.5,
          x: "-25%",
        },
        {
          opacity: 1,
          x: "0%",
        },
      )
    )
    .addTo(controllerB);


    //PASO 2
    new ScrollMagic.Scene({
      triggerElement: ".paso1",
      triggerHook: "onCenter",
      duration: "100%",
    })
    .setTween(
      TweenMax.staggerFromTo(
        [".paso2 > div"],
        0.1,
        {
          opacity: 0.5,
          y: "-35%",
        },
        {
          opacity: 1,
          y: "0%",
        },
      )
    )
    .addTo(controllerB);

    //PASO 3 y 4
    new ScrollMagic.Scene({
      triggerElement: ".paso3",
      triggerHook: "onEnter",
      duration: "100%",
    })
    .setTween(
      TweenMax.staggerFromTo(
        [".paso3 > div"],
        0.1,
        {
          opacity: 0.5,
          x: "35%",
        },
        {
          opacity: 1,
          x: "0%",
        },
      ).concat(
        TweenMax.staggerFromTo(
          [".paso4 > div"],
          0.1,
          {
            opacity: 0.5,
            x: "-35%",
          },
          {
            opacity: 1,
            x: "0%",
          },
        )
      )
    )
    .addTo(controllerB);    

});