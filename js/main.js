


const elements = {
  textQuery: document.querySelector(".about__text__life"),
  textQueryMobile: document.querySelector(".about__text__life--mobile"),
  responsiveMode: document
    .querySelector("body")
    .classList.contains("fp-responsive"),
  btnAbout: document.querySelector(".btn--about"),
  btnAboutMobile: document.querySelector(".btn--about--mobile"),
  loader: document.querySelector(".loader-wrapper")
};

//TYPED CONFIG

let typed = new Typed("#header-1", {
  startDelay: 2000,
  strings: [
    `Hello!`,
    "Welcome to  <br class='only-mobile'/> my worl",
    `Welcome to<br class='only-mobile'/> my portfolio.`
  ],
  typeSpeed: 50,
  backSpeed: 10,
  smartBackspace: true,
  showCursor: false
});

let typedSmall = new Typed("#header-2", {
  startDelay: 7000,
  strings: ["Scroll down to find out more about me."],
  typeSpeed: 40,
  backSpeed: 10,
  smartBackspace: true,
  showCursor: false
});




//ICON COLORED VERSION
{
  $(".js-color").on("mouseover", function() {
    $(this).addClass("colored");
  });
  $(".js-color").on("mouseout", function() {
    $(this).removeClass("colored");
  });
}

//FADE SECTIONS

function fadeSection(index) {
  if (index > 1 && index < 5) {
    document.querySelector(`[data-containerid="${index - 1}"]`).style.opacity =
      "0";
    document.querySelector(`[data-containerid="${index + 1}"]`).style.opacity =
      "0";
    document.querySelector(`[data-containerid="${index}"]`).style.opacity = "1";
  } else if (index === 1) {
    document.querySelector(`[data-containerid="${index + 1}"]`).style.opacity =
      "0";
    document.querySelector(`[data-containerid="${index}"]`).style.opacity = "1";
  } else if (index === 5) {
    document.querySelector(`[data-containerid="${index - 1}"]`).style.opacity =
      "0";
    document.querySelector(`[data-containerid="${index}"]`).style.opacity = "1";
  }
}

//BACKGROUND COLORS

function backgroundTransition(nextIndex) {
  if (nextIndex == 1) {
    $(".about__text__eraser").css("border-color", "#2E3A87");
    $("body").css("background-color", "#2E3A87");
  } else if (nextIndex == 2) {
    $(".about__text__eraser").css("border-color", "#0097A7");
    $("body").css("background-color", "#0097A7");
  } else if (nextIndex == 3) {
    $(".about__text__eraser").css("border-color", "#00BCD4");
    $("body").css("background-color", "#00BCD4");
  } else if (nextIndex == 4) {
    $("body").css("background-color", "#009688");
  } else if (nextIndex == 5) {
    $("body").css("background-color", "#1972A4");
  }
}

//Fade function based on fullPage mode

function responsiveFade(index) {
  if (elements.responsiveMode) {
    fadeSection(index);
  }
}

//Fade function based on fullPage mode

function notResponsiveFade(nextIndex) {
  if (!elements.responsiveMode) {
    fadeSection(nextIndex);
  }
}

//About markup

const createText = () => {
  const partOne = ` Hi! My name is Bartosz and I'm self-taught web developer. In 2015 I was lucky enough to get accepted as an intern at LepszyProjekt.
  There I learned basics of PHP and Symfony 1.4. During this time I was studying automation
  and robotics at the West Pomeranian University of Technology.
  Two years later I got hired in General Informatics LTD as junior backend developer. `;
  const partTwo = `There I learned how to use CSS3 and basics of JavaScript and jQuery. After a few months,
  I was working on the backend as well as on the frontend. I also have been entrusted 
  with communicating with clients. I stayed there for almost a year.
  While working in General Informatics I have become more and more intrested
  in JavaScript.`; 
  const partThree = `At the end of 2017 I bought some books and online courses
  and began studying hard. Right now I feel confident enough to start my new
  adventure - React! But based on my experience I know that the best way to learn
  programming is by doing it in real projects, that's why I sent you my CV.
  I hope you will give me a chance to prove myself :)`; 

  const textArr = [partOne, partTwo, partThree];
  return textArr;
};


//About render

const renderText = (el, arr, i = 0) => {
  el.insertAdjacentHTML('afterbegin', arr[i]);
}

//About text clear

const clearText = (el) => {
  el.style.opacity = "0";
  setTimeout(() => {
    el.innerHTML = "";
  }, 1000);
}

renderText(elements.textQuery, createText());
renderText(elements.textQueryMobile, createText());
let i = 1;


//About button event

const clickEvent = () => {
  clearText(elements.textQuery);
  setTimeout(() => {
    elements.textQuery.style.opacity = "1";
    if (i <= 2) {
    renderText(elements.textQuery , createText(), i);
    }
    if (i === 2) {
      i = -1;
    }
      return i++;
}, 1000);
}

//About button event on mobiles

const clickEventMobile = () => {
  clearText(elements.textQueryMobile);
  setTimeout(() => {
    elements.textQueryMobile.style.opacity = "1";
    if (i <= 2) {
    renderText(elements.textQueryMobile , createText(), i);
    }
    if (i === 2) {
      i = -1;
    }
      return i++;
}, 1000);
}

elements.btnAbout.addEventListener('click', clickEvent);
elements.btnAboutMobile.addEventListener('click', clickEventMobile);


const hideLoader = () => {
  elements.loader.style.display = "none";
}

const domReady = (fn) => { setInterval( fn => {
  if(document.readyState === 'complete') {
    clearInterval(domReady);
    return fn;
  }
}, 100);
}
setTimeout( () => {
  domReady(hideLoader());
}, 1500);

