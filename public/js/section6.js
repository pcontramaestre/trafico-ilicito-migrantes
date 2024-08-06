function isScreenWidthGreaterThan800() {  
  return window.innerWidth > 800;  
}  

function isMobile() {  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  
}  


if (!isMobile()) { 

  const controllerSECT6 = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .acordeon-pais1",
    triggerHook: 0,
    duration: "30%",
    offset: -700
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .acordeon-pais1"],
      1,
      {
        // opacity: 0.1,
        x: "-150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);

  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .acordeon-pais2",
    triggerHook: 0,
    duration: "30%",
    offset: -700
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .acordeon-pais2"],
      1,
      {
        // opacity: 0.1,
        x: "150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);

  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .acordeon-pais3",
    triggerHook: 0,
    duration: "30%",
    offset: -700
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .acordeon-pais3"],
      1,
      {
        // opacity: 0.1,
        x: "-150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);

  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .acordeon-pais4",
    triggerHook: 0,
    duration: "30%",
    offset: -700
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .acordeon-pais4"],
      1,
      {
        // opacity: 0.1,
        x: "150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);

  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .acordeon-pais5",
    triggerHook: 0,
    duration: "30%",
    offset: -700
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .acordeon-pais5"],
      1,
      {
        // opacity: 0.1,
        x: "-150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);

  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .acordeon-pais6",
    triggerHook: 0,
    duration: "30%",
    offset: -700
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .acordeon-pais6"],
      1,
      {
        // opacity: 0.1,
        x: "150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);

  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .acordeon-pais7",
    triggerHook: 0,
    duration: "30%",
    offset: -700
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .acordeon-pais7"],
      1,
      {
        // opacity: 0.1,
        x: "-150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);

  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .acordeon-pais8",
    triggerHook: 0,
    duration: "30%",
    offset: -700
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .acordeon-pais8"],
      1,
      {
        // opacity: 0.1,
        x: "150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);


  //NOTICIAS FOOTER
  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .seccion-noticias",
    triggerHook: 0,
    duration: "30%",
    offset: -400
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .seccion-noticias .noticia1"],
      1.5,
      {
        // opacity: 0.1,
        x: "-150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);

  new ScrollMagic.Scene({
    triggerElement: "#seccion6 .seccion-noticias",
    triggerHook: 0,
    duration: "30%",
    offset: -400
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion6 .seccion-noticias .noticia2"],
      1.5,
      {
        // opacity: 0.1,
        x: "150%",
        scale: 0.9,
      },
      {
        //opacity: 1,
        x: "0%",
        scale: 1,
      },
    )
  )
  .addTo(controllerSECT6);





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



    new ScrollMagic.Scene({
      triggerElement: "#seccion6 .banner-texto-seccion6",
      triggerHook: 0,
      duration: "50%",
      tweenChanges: true,
      offset: -400,
    })
    .setTween(
      TweenMax.staggerFromTo(
        ["#seccion6 .banner-texto-seccion6 .animacion-up"],
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
    .addTo(controllerSection6B);




    //procuracion-justicia aparecer

    new ScrollMagic.Scene({
      triggerElement: "#seccion6 .procuracion-justicia",
      triggerHook: 0,
      duration: "50%",
      tweenChanges: true,
      offset: -450,
    })
    .setTween(
      TweenMax.staggerFromTo(
        ["#seccion6 .procuracion-justicia .aparecer"],
        0.5,
        {
          opacity: 0,
          scale: 0.5,
          // y: "-100%",
        },
        {
          opacity: 1,
          scale: 1,
          // y:"0%",
        },
      )
    )
    .addTo(controllerSection6B);

    //normativa-div animacion-left
    // new ScrollMagic.Scene({
    //   triggerElement: "#seccion6 .normativa-div ",
    //   triggerHook: 0,
    //   duration: "50%",
    //   tweenChanges: true,
    //   offset: -400,
    // })
    // .setTween(
    //   TweenMax.staggerFromTo(
    //     ["#seccion6 .normativa-div .animacion-left"],
    //     2,
    //     {
    //       //opacity: 0,
    //       //scale: 0.5,
    //       x: "-100%",
    //     },
    //     {
    //       //opacity: 1,
    //       //scale: 1,
    //       x:"0%",
    //     },
    //   )
    // )
    // .addTo(controllerSection6B);

    //acciones-multinacionales
    // new ScrollMagic.Scene({
    //   triggerElement: "#seccion6 .acciones-multinacionales ",
    //   triggerHook: 0,
    //   duration: "50%",
    //   tweenChanges: true,
    //   offset: -600,
    // })
    // .setTween(
    //   TweenMax.staggerFromTo(
    //     ["#seccion6 .acciones-multinacionales"],
    //     2,
    //     {
    //       //opacity: 0,
    //       //scale: 0.5,
    //       x: "-100%",
    //     },
    //     {
    //       //opacity: 1,
    //       //scale: 1,
    //       x:"0%",
    //     },
    //   )
    // )
    // .addTo(controllerSection6B);

    //uso-tics animacion-up animacion-left
    new ScrollMagic.Scene({
      triggerElement: "#seccion6 .uso-tics ",
      triggerHook: 0,
      duration: "50%",
      tweenChanges: true,
      offset: -600,
    })
    .setTween(
      TweenMax.staggerFromTo(
        ["#seccion6 .uso-tics .animacion-left"],
        2,
        {
          //opacity: 0,
          //scale: 0.5,
          x: "-100%",
        },
        {
          //opacity: 1,
          //scale: 1,
          x:"0%",
        },
      ).concat(
        TweenMax.staggerFromTo(
          ["#seccion6 .uso-tics .animacion-up"],
          2,
          {
            opacity: 0,
            //scale: 0.5,
            y: "100%",
          },
          {
            opacity: 1,
            //scale: 1,
            y:"0%",
          },
        )
      )
    )
    .addTo(controllerSection6B);
}