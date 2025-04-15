"use strict";
jQuery(document).ready(function() {
    var $window = $(window);
    $window.on('load', function() {
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            "overflow": "visible"
        });
        new WOW().init();
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
    });
});
