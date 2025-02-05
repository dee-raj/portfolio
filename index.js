// typed

let intro = [
   'Web developer',
   'Python programmer',
   'backend developer',
   'Native Developer',
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
   cursorChar: "✏️",
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
$(document).ready(function () {
   // Initialize EmailJS
   emailjs.init("BTUG9AEW855s0IPDj");  // Replace with your actual EmailJS User ID

   $('#contact-form').submit(function (event) {
      event.preventDefault();  // Prevent page reload

      // Disable submit button while sending
      $('#submit-button').text('Sending...').prop('disabled', true);

      // Get form data correctly
      var formData = {
         from_name: $('input[name="from_name"]').val(),
         reply_to: $('input[name="from_email"]').val(),  // Use reply_to instead of from_email
         message: $('textarea[name="message"]').val(),
         to_email: "www.moon.knight73@gmail.com"
      };

      // Send email using EmailJS
      emailjs.send("service_lsfqram", "template_so6eezt", formData)
         .then(function (response) {
            $('#formStatus').text('Message sent successfully!').css('color', 'green');
            $('#contact-form')[0].reset();  // Reset form fields
         }, function (error) {
            $('#formStatus').text('Failed to send message. Please try again.').css('color', 'red');
            console.error("EmailJS Error:", error);
         })
         .finally(() => {
            $('#submit-button').text('Submit').prop('disabled', false); // Re-enable button
         });
   });
});
