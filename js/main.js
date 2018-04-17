

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
   strings: ['Scroll down to get to know me better.'],   
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

