// typed

let intro = [
   'Web developer',
   'Python programmer',
   'backend developer',
   'ML / AI',
   'Data science',
   "Database handling"
]

var typed = new Typed('#typed', {
   strings: intro,
   typeSpeed: 20,
   stringselement: true,
   startDelay: 150,
   backSpeed: 20,
   loop: true,
   loopCount: 100,
   showCursor: true,
   cursorChar: " |",
   attr: null,
   contentTypeL: "html",
});

// MixitUp
var container = $(".mixitup")
mixitup(container)


// nav-toggle
$(document).ready(function () {
   $(".navbar-toggler").click(function () {
      $(".small-device").slideToggle()
   })
})

// scroll to top
function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
}

// Show the button when user scrolls down
$(window).scroll(function () {
   if ($(this).scrollTop() > 200) {
      $('.scroll-to-top').fadeIn();
   } else {
      $('.scroll-to-top').fadeOut();
   }
});