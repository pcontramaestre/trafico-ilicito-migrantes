 // Inicializar ScrollMagic cuando el documento esté listo
 document.addEventListener("DOMContentLoaded", () => {
  // Crear un controlador de ScrollMagic
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
      duration: "200%", // Duración para evitar errores visuales
    },
  });

  // Animacion de texto
  new ScrollMagic.Scene({
    triggerElement: ".titulo-animado ",
    triggerHook: 0.7,
    duration: "80%",
    offset: 0,
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

  

});