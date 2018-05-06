(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            
            
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 60)
                    }, 1000+((target.offset().top - 60)/50), function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
});

    $("#brand-logo").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000, function(){});
    });


 
  // hide our element on page load
  $('#1').css('opacity', 0);
 
  $('#1').waypoint(function() {
      $('#1').addClass('fadeInUp');
  }, { offset: '50%' });
 

  }); // end of document ready
})(jQuery); // end of jQuery name space


let scrollpos = window.scrollY;
const header = document.querySelector("#nav-bar");
const banner = document.querySelector("#index-banner");

const header_height = banner.offsetHeight;

function remove_class_on_scroll(){
  header.classList.remove("scroll-down");
  header.classList.add("scroll-up");
}

function add_class_on_scroll(){
  header.classList.remove("scroll-up");
  header.classList.add("scroll-down");
}
window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;
  if (scrollpos >= ((8/10)*header_height)) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
  console.log(scrollpos);
})