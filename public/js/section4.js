function isScreenWidthGreaterThan800() {  
  return window.innerWidth > 800;  
}  

function isMobile() {  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  
}  


if (!isMobile()) { 

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
        duration: "100%"
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




  new ScrollMagic.Scene({
    triggerElement: "#seccion4 .pinVoces ",
    triggerHook: 0,
    // offset: -600,
    duration: "200%",
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion4 .info-podcast"],
      2,
      {
        x:"0%",
      },
      {
        x:"-170%",
      },
    )
  )
  .setPin("#seccion4 .pinVoces")
  .addTo(controllerD_2);
}

  

document.addEventListener("DOMContentLoaded", () => {  
  // AUDIO 1
    const reproducirBtn1 = document.getElementById("audionro1");  
    const audioElement1 = document.getElementById("audio1");  

    let isPlaying = false;  

    reproducirBtn1.addEventListener("click", () => {  
        if (!isPlaying) {  
            audioElement1.play();  
            reproducirBtn1.innerHTML = '<img src="/icons/stopSolo.svg" class="max-w-[56px]" alt="Detener" />';  
            isPlaying = true;  
        } else {  
            audioElement1.pause();  
            audioElement1.currentTime = 0;  
            reproducirBtn1.innerHTML = '<img src="/icons/playSolo.svg" class="max-w-[56px]" alt="Reproducir" />';  
            isPlaying = false;  
        }  
    }); 

    // audio 2
    const reproducirBtn2 = document.getElementById("audionro2");  
    const audioElement2 = document.getElementById("audio2");  

    let isPlaying2 = false;  

    reproducirBtn2.addEventListener("click", () => {  
        if (!isPlaying2) {  
            audioElement2.play();  
            reproducirBtn2.innerHTML = '<img src="/icons/stopSolo.svg" class="max-w-[56px]" alt="Detener" />';  
            isPlaying2 = true;  
        } else {  
            audioElement2.pause();  
            audioElement2.currentTime = 0;  
            reproducirBtn2.innerHTML = '<img src="/icons/playSolo.svg" class="max-w-[56px]" alt="Reproducir" />';  
            isPlaying2= false;  
        }  
    }); 


    // audio 3
    const reproducirBtn3 = document.getElementById("audionro3");  
    const audioElement3 = document.getElementById("audio3");  

    let isPlaying3 = false;  

    reproducirBtn3.addEventListener("click", () => {  
        if (!isPlaying3) {  
            audioElement3.play();  
            reproducirBtn3.innerHTML = '<img src="/icons/stopSolo.svg" class="max-w-[56px]" alt="Detener" />';  
            isPlaying3 = true;  
        } else {  
            audioElement3.pause();  
            audioElement3.currentTime = 0;  
            reproducirBtn3.innerHTML = '<img src="/icons/playSolo.svg" class="max-w-[56px]" alt="Reproducir" />';  
            isPlaying3= false;  
        }  
    });       

    // audio 4
    const reproducirBtn4 = document.getElementById("audionro4");  
    const audioElement4 = document.getElementById("audio4");  

    let isPlaying4 = false;  

    reproducirBtn4.addEventListener("click", () => {  
        if (!isPlaying4) {  
            audioElement4.play();  
            reproducirBtn4.innerHTML = '<img src="/icons/stopSolo.svg" class="max-w-[56px]" alt="Detener" />';  
            isPlaying4 = true;  
        } else {  
            audioElement4.pause();  
            audioElement4.currentTime = 0;  
            reproducirBtn4.innerHTML = '<img src="/icons/playSolo.svg" class="max-w-[56px]" alt="Reproducir" />';  
            isPlaying4= false;  
        }  
    });  
    
    // audio 5
    const reproducirBtn5 = document.getElementById("audionro5");  
    const audioElement5 = document.getElementById("audio5");  

    let isPlaying5 = false;  

    reproducirBtn5.addEventListener("click", () => {  
        if (!isPlaying5) {  
            audioElement5.play();  
            reproducirBtn5.innerHTML = '<img src="/icons/stopSolo.svg" class="max-w-[56px]" alt="Detener" />';  
            isPlaying5 = true;  
        } else {  
            audioElement5.pause();  
            audioElement5.currentTime = 0;  
            reproducirBtn5.innerHTML = '<img src="/icons/playSolo.svg" class="max-w-[56px]" alt="Reproducir" />';  
            isPlaying5= false;  
        }  
    });  
    
    // audio 6
    const reproducirBtn6 = document.getElementById("audionro6");  
    const audioElement6 = document.getElementById("audio6");  

    let isPlaying6 = false;  

    reproducirBtn6.addEventListener("click", () => {  
        if (!isPlaying6) {  
            audioElement6.play();  
            reproducirBtn6.innerHTML = '<img src="/icons/stopSolo.svg" class="max-w-[56px]" alt="Detener" />';  
            isPlaying6 = true;  
        } else {  
            audioElement6.pause();  
            audioElement6.currentTime = 0;  
            reproducirBtn6.innerHTML = '<img src="/icons/playSolo.svg" class="max-w-[56px]" alt="Reproducir" />';  
            isPlaying6= false;  
        }  
    });  
    
    // audio 7
    const reproducirBtn7 = document.getElementById("audionro7");  
    const audioElement7 = document.getElementById("audio7");  

    let isPlaying7 = false;  

    reproducirBtn7.addEventListener("click", () => {  
        if (!isPlaying7) {  
            audioElement7.play();  
            reproducirBtn7.innerHTML = '<img src="/icons/stopSolo.svg" class="max-w-[56px]" alt="Detener" />';  
            isPlaying7 = true;  
        } else {  
            audioElement7.pause();  
            audioElement7.currentTime = 0;  
            reproducirBtn7.innerHTML = '<img src="/icons/playSolo.svg" class="max-w-[56px]" alt="Reproducir" />';  
            isPlaying7= false;  
        }  
    });  
    
    // audio 8
    const reproducirBtn8 = document.getElementById("audionro8");  
    const audioElement8 = document.getElementById("audio8");  

    let isPlaying8 = false;  

    reproducirBtn8.addEventListener("click", () => {  
        if (!isPlaying8) {  
            audioElement8.play();  
            reproducirBtn8.innerHTML = '<img src="/icons/stopSolo.svg" class="max-w-[56px]" alt="Detener" />';  
            isPlaying8 = true;  
        } else {  
            audioElement8.pause();  
            audioElement8.currentTime = 0;  
            reproducirBtn8.innerHTML = '<img src="/icons/playSolo.svg" class="max-w-[56px]" alt="Reproducir" />';  
            isPlaying8= false;  
        }  
    });  
  
});  