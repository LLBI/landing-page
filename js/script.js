$(document).ready(function(){
    
    /* FIXED NAV */
    $('.services').waypoint(function(direction) {
        if (direction == 'down') {
            $('.nav').addClass('fixed-top');
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('fixed-top');
            $('.nav').removeClass('sticky');
        }
    }, {
        offset: '5%'
    });
    /* SCROLL TO*/
    $('.js-to-about').click(function (){
        $('html, body').animate({scrollTop : $('.about').offset().top}, 1000);
    });
    $('.js-to-services, .js-to-first').click(function (){
        $('html, body').animate({scrollTop : $('.services').offset().top}, 1000);
    });
    $('.js-to-portfolio').click(function (){
        $('html, body').animate({scrollTop : $('.portfolio').offset().top}, 1000);
    });
    $('.js-to-contact').click(function (){
        $('html, body').animate({scrollTop : $('.contact').offset().top}, 1000);
    });
    $('.js-to-contact-form').click(function (){
        $('html, body').animate({scrollTop : $('.contact-info').offset().top}, 1000);
    });
    /* ANIMATE ON SCROLL*/
    // SECTION TITLE 1
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '90%'
    });
    // ANIMATE SERVICES ITEMS
    $('.js--wp-2-1').waypoint(function(direction) {
        $('.js--wp-2-1').addClass('animated fadeInLeft');
    }, {
        offset: '90%'
    });
    $('.js--wp-2-2').waypoint(function(direction) {
        $('.js--wp-2-2').addClass('animated fadeInRight');
    }, {
        offset: '90%'
    });
    // SECTION TITLE 2
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '90%'
    });
    // JUMP TO
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '70%'
    });
    // SECTION TITLE 3
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '90%'
    });
    // SECTION TITLE 4
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeIn');
    }, {
        offset: '90%'
    });
    // CONTACT FORM
    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });
    // CONTACT INFO
    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    // TOOLS
    $('.js--wp-9').waypoint(function(direction) {
        $('.js--wp-9').addClass('animated slideInUp');
    }, {
        offset: '100%'
    });
    $('.js--wp-10').waypoint(function(direction) {
        $('.js--wp-10').addClass('animated fadeIn');
    }, {
        offset: '90%'
    });
    $('.js--wp-11').waypoint(function(direction) {
        $('.js--wp-11').addClass('animated fadeIn');
    }, {
        offset: '90%'
    });
    /* LAZY CAROUSEL */
    $(function() {
      return $(".carousel.lazy").on("slide", function(ev) {
        var lazy;
        lazy = $(ev.relatedTarget).find("img[data-src]");
        lazy.attr("src", lazy.data('src'));
        lazy.removeAttr("data-src");
      });
    });
}); 