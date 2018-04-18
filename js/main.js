{
   let icon = document.querySelector(".contact__right");

   icon.addEventListener("click", function(e)
   {
     window.open(e.target.dataset.link, "_blank")
   });
}

let typed = new Typed('#header-1', {
   startDelay: 2000,
   strings: [`Hello!`, "Welcome to my worl", `Welcome to my portfolio.`],
   typeSpeed: 50,
   backSpeed: 10,
   smartBackspace: true,
   showCursor: false
});


let typedSmall = new Typed('#header-2', {
   startDelay: 7000,
   strings: ['Scroll down to find out more about me.'],   
   typeSpeed: 40,  
   backSpeed: 10,
   smartBackspace: true,
   showCursor: false
});






{
   $('.skills__main__icon').on('mouseover', function() {
      $(this).addClass('colored');
   });
   $('.skills__main__icon').on('mouseout', function() {
      $(this).removeClass('colored');
   });
   $('.skills__learning__icon').on('mouseover', function() {
      $(this).addClass('colored');
   });
   $('.skills__learning__icon').on('mouseout', function() {
      $(this).removeClass('colored');
   });
   $('.projects__github--icon').on('mouseover', function() {
      $(this).addClass('colored');
   });
   $('.projects__github--icon').on('mouseout', function() {
      $(this).removeClass('colored');
   });
}

function oldActive() {
   let active = parseInt(document
     .getElementsByClassName("active")[0]
     .getAttribute("data-index"));
     return active;
 }
 
 function fadeSection() {
   let active = parseInt(document
     .getElementsByClassName("active")[0]
     .getAttribute("data-index"));
     if (active > 1 && active < 5) {
           document.querySelector(`[data-containerid="${active - 1}"]`).style.opacity = "0";
           document.querySelector(`[data-containerid="${active + 1}"]`).style.opacity = "0";
           document.querySelector(`[data-containerid="${active}"]`).style.opacity = "1";
     } else if (active === 1) {
       document.querySelector(`[data-containerid="${active + 1}"]`).style.opacity = "0";
       document.querySelector(`[data-containerid="${active}"]`).style.opacity = "1";
     } else if (active === 5) {
       document.querySelector(`[data-containerid="${active - 1}"]`).style.opacity = "0";
       document.querySelector(`[data-containerid="${active}"]`).style.opacity = "1";
     }
 }
 
 function backgroundTransition() {
   let active = document
     .getElementsByClassName("active")[0]
     .getAttribute("data-index");
   if (active == 1) {
     $(".about__text__eraser").css("border-color", "#2E3A87");
     $("body").css("background-color", "#2E3A87");
   } else if (active == 2) {
     $(".about__text__eraser").css("border-color", "#0097A7");
     $("body").css("background-color", "#0097A7");
   } else if (active == 3) {
     $(".about__text__eraser").css("border-color", "#00BCD4");
     $("body").css("background-color", "#00BCD4");
   } else if (active == 4) {
     $("body").css("background-color", "#009688");
   } else if (active == 5) {
     $("body").css("background-color", "#1972A4");
   }
 }

