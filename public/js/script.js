 // Inicializar ScrollMagic cuando el documento esté listo
 document.addEventListener("DOMContentLoaded", () => {

function isMobile() {  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  
}  


function isScreenWidthGreaterThan800() {  
  return window.innerWidth > 800;  
}  

if (!isMobile()) { 
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


      //animacion y pin de la seccion del grafico
      new ScrollMagic.Scene({
        triggerElement: ".seccion-grafico",
        triggerHook: 1,
        duration: "150%",
        offset: 0,
        triggerHook: "onLeave",
      })
      .setPin(".seccion-grafico")
      .addTo(controllerB);


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



        /* 
          ANIMACIONES DE LA SECCION 2
        */

        // ANIMACION DEL BANNER
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .banner-principal",
          triggerHook: "onEnter",
          duration: "150%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".manobanner1"],
            0.1,
            {
              opacity: 0,
              y: "-45%",
            },
            {
              opacity: 1,
              y: "0%",
            },
          ).concat(
            TweenMax.staggerFromTo(
              [".manobanner2"],
              0.1,
              {
                opacity: 0.5,
                x: "45%",
              },
              {
                opacity: 1,
                x: "0%",
              },
            )
          )
          // .concat(
          //   TweenMax.staggerFromTo(
          //     [".banner-principal .titulo-seccion"],
          //     0.1,
          //     {
          //       opacity: 0.1,
          //       y: "35%",
          //     },
          //     {
          //       opacity: 1,
          //       y: "0%",
          //     },
          //   )
          // )
        )
        .setPin("#seccion2-1 .banner-principal")
        .addTo(controller);

        // ANIMACION DE LA PARTE 2, SECCION 2, FONDO MARRON
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .estructuras-operacion",
          triggerHook: 1,
          duration: "100%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".estructuras-operacion .animacion-up"],
            1,
            {
              opacity: 0.1,
              y: "45%",
            },
            {
              opacity: 1,
              y: "0%",
            },
          )
        )
        .addTo(controllerB);

        // ANIMACION DE LA PARTE 2, SECCION 2, FONDO MARRON
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .costos-asociados",
          triggerHook: 0.7,
          duration: "100%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".costos-asociados .animacion-up"],
            2,
            {
              opacity: 0.1,
              y: "45%",
            },
            {
              opacity: 1,
              y: "0%",
            },
          )
        )
        .addTo(controllerB);

        // ANIMACION PARTE 3, SECCION 2, TEXTOS MIGRANTES EXTRAREGIONALES
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .texto-migrantes-extra",
          triggerHook: 0.7,
          duration: "100%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".texto-migrantes-extra .animacion-up"],
            2,
            {
              opacity: 0.1,
              y: "45%",
            },
            {
              opacity: 1,
              y: "0%",
            },
          )
        )
        .addTo(controllerB);

        // ANIMACION PARTE 4, SECCION 2, TEXTOS texto-cobros-crimen
        new ScrollMagic.Scene({
          triggerElement: ".texto-cobros-crimen",
          triggerHook: "onLeave",
          duration: "100%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".texto-cobros-crimen .animacion-left"],
            2,
            {
              opacity: 0.1,
              x: "-45%",
              scale: 0.5,
              
            },
            {
              opacity: 1,
              x: "0%",
              scale: 1,
            },
          ).concat(
            TweenMax.staggerFromTo(
              [".texto-cobros-crimen .animacion-right"],
              2,
              {
                opacity: 0.1,
                x: "45%",
                scale: 0.2,
                ease: "power3.in",
              },
              {
                opacity: 1,
                x: "0%",
                scale: 1,
                ease: "power3.in",
              },
            )
          )
        )
        .setPin(".texto-cobros-crimen")
        .addTo(controllerB);

        // ANIMACION PARTE 5, SECCION 2
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .seccion2-parte5",
          triggerHook: 0.7,
          duration: 400,
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".seccion2-parte5 .animacion-up"],
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
        .addTo(controllerB);

        //ANIMACION PARTE 6, SECCION 2
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .seccion2-parte6",
          triggerHook: "onCenter",
          duration: 400,
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".seccion2-parte6 .animacion-up"],
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
        .addTo(controllerB);

        //ANIMACION PARTE 7, SECCION 2
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .seccion2-parte7",
          triggerHook: "onCenter",
          duration: 400,
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".seccion2-parte7 .animacion-left"],
            2,
            {
              opacity: 0.1,
              x: "-75%",
              scale: 0.7,
            },
            {
              opacity: 1,
              x: "0%",
              scale: 1,
            },
          )
        )
        .addTo(controllerB);

        //ANIMACION PARTE 8, SECCION 2
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .seccion2-parte8",
          triggerHook: "onLeave",
          duration: "100%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".seccion2-parte8 .animacion-left"],
            2,
            {
              opacity: 0.1,
              x: "-45%",
              scale: 0.5,
              
            },
            {
              opacity: 1,
              x: "0%",
              scale: 1,
            },
          ).concat(
            TweenMax.staggerFromTo(
              [".seccion2-parte8 .animacion-right"],
              2,
              {
                opacity: 0.1,
                x: "45%",
                scale: 0.5,
                ease: "power3.in",
              },
              {
                opacity: 1,
                x: "0%",
                scale: 1,
                ease: "power3.in",
              },
            )
          )
        )
        .setPin(".seccion2-parte8")
        .addTo(controllerB);


        //ANIMACION PARTE 9, SECCION 2
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .seccion2-parte9",
          triggerHook: "onEnter",
          duration: "100%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".seccion2-parte9 .animacion-left"],
            2,
            {
              opacity: 0.1,
              x: "-45%",
              scale: 0.5,
              
            },
            {
              opacity: 1,
              x: "0%",
              scale: 1,
            },
          ).concat(
            TweenMax.staggerFromTo(
              [".seccion2-parte9 .animacion-right"],
              2,
              {
                opacity: 0.1,
                x: "45%",
                scale: 0.5,
                ease: "power3.in",
              },
              {
                opacity: 1,
                x: "0%",
                scale: 1,
                ease: "power3.in",
              },
            )
          )
        )
        .addTo(controllerB);

        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .animacion-cuadro",
          triggerHook: "onEnter",
          duration: "80%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".animacion-cuadro"],
            2,
            {
              opacity: 0.1,
              x: "-45%",
              scale: 0.5,
              
            },
            {
              opacity: 1,
              x: "0%",
              scale: 1,
            },
          )
        )
        .addTo(controllerB);

        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .animacion-cuadro",
          triggerHook: "onCenter",
          duration: "50%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".seccion2-parte9 .animacion-up"],
            2,
            {
              opacity: 0.1,
              y: "45%",
              scale: 0.5,
              
            },
            {
              opacity: 1,
              y: "0%",
              scale: 1,
            },
          )
        )
        .addTo(controllerB);

        //ANIMACION PARTE 10, SECCION 2
        new ScrollMagic.Scene({
          triggerElement: "#seccion2-1 .seccion2-parte10",
          triggerHook: "onEnter",
          duration: "70%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".seccion2-parte10 .animacion-right"],
            2,
            {
              opacity: 0.1,
              x: "-45%",
              scale: 0.7,
              
            },
            {
              opacity: 1,
              x: "0%",
              scale: 1,
            },
          ).concat(
            TweenMax.staggerFromTo(
              [".seccion2-parte10 .animacion-left"],
              2,
              {
                opacity: 0.1,
                x: "45%",
                scale: 0.7,
                
              },
              {
                opacity: 1,
                x: "0%",
                scale: 1,
              },
            )
          )
        )
        .addTo(controllerB);

        // SECCION 3, BANNER
        // create tween transform: rotate(-7.338deg) to image class bote-rotate
        let tween = TweenMax.to(".bote-rotate", 1, {
          rotation: "-7.338deg",
          ease: "power3.inOut",
          repeat: -1,      
        });
        tween.yoyo(true);

        new ScrollMagic.Scene({
          triggerElement: "#seccion3 .banner-seccion3",
          triggerHook: "onLeave",
          duration: "100%",
        })
        .setTween(tween)
        .setPin("#seccion3 .banner-seccion3")
        .addTo(controllerB);


        // SECCION 3, PARTE 1
        new ScrollMagic.Scene({
          triggerElement: "#seccion3 .seccion3-parte1",
          triggerHook: 0.8,
          duration: "110%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".seccion3-parte1 .animacion-up"],
            2,
            {
              opacity: 0.1,
              y: "45%",
              scale: 0.5,
              
            },
            {
              opacity: 1,
              y: "0%",
              scale: 1,
            },
          )
        )
        // .setPin("#seccion3 .seccion3-parte1")
        .addTo(controllerB);

        //SECCION 3, PARTE 2
        new ScrollMagic.Scene({
          triggerElement: "#seccion3 .seccion3-parte2",
          triggerHook: 1,
          duration: "80%",
        })
        .setTween(
          TweenMax.staggerFromTo(
            [".seccion3-parte2 .animacion-up"],
            2,
            {
              opacity: 0.1,
              y: "45%",
              scale: 0.5,
              
            },
            {
              opacity: 1,
              y: "0%",
              scale: 1,
            },
          )
        )
        .addTo(controllerB);


        // seccion2MapaRutas
        //controllerB

        new ScrollMagic.Scene({
          triggerElement: "#seccion2MapaRutas",
          triggerHook: 0,
          duration: "80%",
        })
        .setPin("#seccion2MapaRutas")
        .addTo(controllerB);
  }



     


});