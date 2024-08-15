$(document).ready(function() {
    // var logo = $('#navbar-logo');
    // var originalLogoSrc = '/assets/img/Loggor/new_logos/logo-full-color-wheel-gradient-transparent.svg';
    // var newLogoSrc = '/assets/img/Loggor/new_logos/logo-full-color-wheel-gradient-white-background.svg';
    var header = $('#main_nav');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 5) {
            header.addClass("background-header");
            // logo.attr('src', newLogoSrc);
        } else {
            header.removeClass("background-header");
            // logo.attr('src', originalLogoSrc);
        }
    });
}); 