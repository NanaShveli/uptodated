const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");   

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu . mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));




//scrollup
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
}

//slider 

 var slides = document.querySelector(".slider-items").children;
 var nextSlide = document.querySelector(".right-slide");
 var prevSlide = document.querySelector(".left-slide");
 var totalSlides = slides.length;
 var index = 0;

 nextSlide.onclick = function () {
   next("next");
 };
 prevSlide.onclick = function () {
   next("prev");
 };

 function next(direction) {
   if (direction == "next") {
     index++;
     if (index == totalSlides) {
       index = 0;
     }
   } else {
     if (index == 0) {
       index = totalSlides - 1;
     } else {
       index--;
     }
   }

   for (i = 0; i < slides.length; i++) {
     slides[i].classList.remove("active");
   }
   slides[index].classList.add("active");
 }







