function isScreenWidthGreaterThan800() {  
  return window.innerWidth > 800;  
}  

function isMobile() {  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  
}  


if (!isMobile()) { 
  const controllerSection7A = new ScrollMagic.Controller();
  const controllerSection7B = new ScrollMagic.Controller();
  const controllerSection7C = new ScrollMagic.Controller();
  const controllerSection7D = new ScrollMagic.Controller();
  const controllerSection7E = new ScrollMagic.Controller();
  const controllerSection7F = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: "#seccion7 .banner-seccion7",
    triggerHook: 0,
    duration: "200%",
    tweenChanges: true,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion7 .titulo-seccion7"],
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

  .setPin("#seccion7 .banner-seccion7")
  .addTo(controllerSection7A);

  // 
  new ScrollMagic.Scene({
    triggerElement: "#seccion7 .banner-seccion7",
    triggerHook: 0,
    duration: "200%",
    tweenChanges: true,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion7 .solaparecer"],
      2,
      {
        opacity: 0.8,
        x: "-100%",
      },
      {
        opacity: 1,
        x: "100vw",
      },
    )
  )

  .addTo(controllerSection7A);



  new ScrollMagic.Scene({
    triggerElement: "#seccion7 .banner-seccion7",
    triggerHook: 0,
    duration: "200%",
    tweenChanges: true,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion7 .hombreaparecer"],
      2,
      {
        opacity: 0.8,
        x: "200%",
      },
      {
        opacity: 1,
        x: "0%",
      },
    )
  )

  .addTo(controllerSection7A);


  let tweenMapa = TweenMax.to(".mapa-rotate", 1, {
    rotation: "-10.338deg",
    ease: "power3.inOut",
    repeat: -1,      
  }).yoyo(true);


  new ScrollMagic.Scene({
    triggerElement: "#seccion7 .banner-seccion7",
    triggerHook: 0,
    duration: "350%",
  })
  .setTween(tweenMapa)
  .addTo(controllerSection7B);


  //.banner-texto-seccion7 .animacion-up
  new ScrollMagic.Scene({
    triggerElement: "#seccion7 .banner-texto-seccion7",
    triggerHook: 0,
    duration: "50%",
    tweenChanges: true,
    offset: -200,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion7 .animacion-up"],
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

  .addTo(controllerSection7C);



  //titulo-prevencion 
  new ScrollMagic.Scene({
    triggerElement: "#seccion7 #seccionprevencion",
    triggerHook: 0,
    duration: "100%",
    offset: 200,
    tweenChanges: true,
  })
  .setTween(
    TweenMax.staggerFromTo(
      ["#seccion7 .titulo-prevencion"],
      2,
      {
        opacity: 0.1,
        y: "100%",
      },
      {
        opacity: 1,
        y: "0%",
      },
    )
  )
  .setPin("#seccion7 #seccionprevencion")
  .addTo(controllerSection7A);
}


// JAVASCRIPT DEL TAB
document.addEventListener('DOMContentLoaded', () => {  
  // Seleccionar todos los elementos con la clase "tab"  
  const tabs = document.querySelectorAll('.tab');  
  const tabContents = document.querySelectorAll('.tab-item');  

  // Agregar un evento de clic a cada pestaña  
  tabs.forEach((tab, index) => {  
    tab.addEventListener('click', () => {  
      // Remover la clase 'active' de todas las pestañas  
      tabs.forEach(t => t.classList.remove('active'));  
      tabContents.forEach(c => c.classList.remove('active'));  

      // Agregar la clase 'active' a la pestaña y el contenido correspondiente  
      tab.classList.add('active');  
      tabContents[index].classList.add('active');  
    });  
  });  
});