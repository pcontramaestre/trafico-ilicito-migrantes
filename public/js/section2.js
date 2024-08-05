function isScreenWidthGreaterThan800() {  
  return window.innerWidth > 800;  
}  

function isMobile() {  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  
}  


if (!isMobile()) { 

  // ANIMACION ACORDEON LOS MODOS DE OPERAR DEL TRÁFICO ILÍCITO DE MIGRANTES
  const controllerSECT2 = new ScrollMagic.Controller();

  //#seccion2-1 seccion2-acordeon2-modos
  new ScrollMagic.Scene({
    triggerElement: "#seccion2-1 .section-acordeon",
    triggerHook: 0,
    duration: "50%",
    offset: -400
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion2-1 .seccion2-acordeon1-modos"],
      1,
      {
        // opacity: 0.1,
        x: "-100%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT2);


  new ScrollMagic.Scene({
    triggerElement: "#seccion2-1 .section-acordeon",
    triggerHook: 0,
    duration: "50%",
    offset: -250
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion2-1 .seccion2-acordeon2-modos"],
      1,
      {
        // opacity: 0.1,
        x: "-100%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT2);
}