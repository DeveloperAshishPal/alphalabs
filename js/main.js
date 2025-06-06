(function($) {
    "use strict";
    $('#navbar li').on("mouseenter", function() {
        $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
    });
    $('#navbar li').on("mouseleave", function() {
        $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
    });
    if ($(window).width() > 992) {
        $(".navbar-arrow ul ul > li").has("ul").children("a").append(" <i class='arrow-indicator fa fa-angle-right'></i>");
    }
    ;$(".searchtoggl a").attr("id", "searchtoggl");
    $(function() {
        var $searchlink = $('#searchtoggl a');
        var $searchbar = $('#searchbar');
        $('#navbar li a').on('click', function(e) {
            if ($(this).attr('id') == 'searchtoggl') {
                if (!$searchbar.is(":visible")) {
                    $searchlink.removeClass('fa-search').addClass('fa-search-minus');
                } else {
                    $searchlink.removeClass('fa-search-minus').addClass('fa-search');
                }
                $searchbar.slideToggle(300, function() {});
            }
        });
    });
    $(".searchtoggl a").attr("id", "searchtoggl");
    $(function() {
        var $searchlink = $('#searchtoggl a');
        var $searchbar = $('#searchbar');
        $('.header-social-links-2 li a').on('click', function(e) {
            if ($(this).attr('id') == 'searchtoggl') {
                if (!$searchbar.is(":visible")) {
                    $searchlink.removeClass('fa-search').addClass('fa-search-minus');
                } else {
                    $searchlink.removeClass('fa-search-minus').addClass('fa-search');
                }
                $searchbar.slideToggle(300, function() {});
            }
        });
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('.navigation').addClass('navbar-sticky')
        } else {
            $('.navigation').removeClass('navbar-sticky')
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('.tabs-navbar').addClass('navbar-sticky')
        } else {
            $('.tabs-navbar').removeClass('navbar-sticky')
        }
    });
    var $slicknav_label;
    $('#responsive-menu').slicknav({
        duration: 500,
        easingOpen: 'easeInExpo',
        easingClose: 'easeOutExpo',
        closedSymbol: '<i class="fa fa-plus"></i>',
        openedSymbol: '<i class="fa fa-minus"></i>',
        prependTo: '#slicknav-mobile',
        allowParentLinks: true,
        label: ""
    });
    $(".range-slider-ui").each(function() {
        var minRangeValue = $(this).attr('data-min');
        var maxRangeValue = $(this).attr('data-max');
        var minName = $(this).attr('data-min-name');
        var maxName = $(this).attr('data-max-name');
        var unit = $(this).attr('data-unit');
        $(this).slider({
            range: true,
            min: minRangeValue,
            max: maxRangeValue,
            values: [minRangeValue, maxRangeValue],
            slide: function(event, ui) {
                event = event;
                var currentMin = parseInt(ui.values[0], 10);
                var currentMax = parseInt(ui.values[1], 10);
                $(this).children(".min-value").text(currentMin + " " + unit);
                $(this).children(".max-value").text(currentMax + " " + unit);
                $(this).children(".current-min").val(currentMin);
                $(this).children(".current-max").val(currentMax);
            }
        });
    });
    $('#datetimepicker1').datepicker({
        format: "dd/mm/yyyy",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });
    $('#datetimepicker2').datepicker({
        format: "dd/mm/yyyy",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });
    $('#datetimepicker3').datepicker({
        format: "dd/mm/yyyy",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });
    $('#datetimepicker4').datepicker({
        format: "dd/mm/yyyy",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });
    $('#datetimepicker5').datepicker({
        format: "dd/mm/yyyy",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });
    $('#datetimepicker6').datepicker({
        format: "dd/mm/yyyy",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });
    $('#datetimepicker7').datepicker({
        format: "dd/mm/yyyy",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });
    $('#datetimepicker8').datepicker({
        format: "dd/mm/yyyy",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });
    window.FPConfig = {
        delay: 0,
        ignoreKeywords: [],
        maxRPS: 3,
        hoverDelay: 50
    };
    $('.package-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.deals-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        dots: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.sale-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        dots: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.flight-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots: false,
        speed: 2000,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 3000,
        dots: false,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }]
    });
    $('.partners-slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }]
    });
    $('.room-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.partners-slider-1').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 2
            }
        }]
    });
    $('.sidebar-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        dots: false,
    });
    $('.slider-store').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-thumbs'
    });
    $('.slider-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-store',
        dots: false,
        centerMode: true,
        arrows: true,
        focusOnSelect: true
    });
    $('.slider-shop').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
    $('.slider-testimonail').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 639,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }]
    });
    $("#contactform").validate({
        submitHandler: function() {
            $.ajax({
                url: 'mail/contact.php',
                type: 'POST',
                data: {
                    name: $('input[name="full_name"]').val(),
                    email: $('input[name="email"]').val(),
                    phone: $('input[name="phone"]').val(),
                    comments: $('textarea[name="comments"]').val(),
                },
                success: function(result) {
                    $('#contactform-error-msg').html(result);
                    $("#contactform")[0].reset();
                }
            });
        }
    });
    $('.sidebar-sticky').stickit({
        screenMinWidth: 992,
        top: 60,
        zIndex: 9995,
        className: 'when-sticky-on',
        overflowScrolling: true,
        extraHeight: 0
    });
    $('.sidebar-sticky.sidebar-sticky-extra-height').stickit({
        screenMinWidth: 992,
        top: 60,
        zIndex: 9995,
        className: 'when-sticky-on',
        overflowScrolling: true,
        extraHeight: 100
    });
    $('#sidebar-sticky').stickit({
        screenMinWidth: 992,
        top: 80,
        zIndex: 9995,
        className: 'when-sticky-on-id',
        overflowScrolling: true,
        extraHeight: 100,
    });
    $(document).on('click', '#back-to-top, .back-to-top', function() {
        $('html, body').animate({
            scrollTop: 0
        }, '500');
        return false;
    });
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 500) {
            $("#back-to-top").fadeIn(200);
        } else {
            $("#back-to-top").fadeOut(200);
        }
    });
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}(jQuery));
jQuery(window).on('resize load', function() {
    resize_eb_slider();
}).resize();
function resize_eb_slider() {
    var bodyheight = jQuery(this).height();
    if (jQuery(window).width() > 1400) {
        bodyheight = bodyheight * 0.75;
        jQuery(".slider").css('height', bodyheight + 'px');
        jQuery(".banner-style-1 #js_frm_040").css('max-height', bodyheight * 1.25 + 'px');
        jQuery('#home_banner_video').css('height', bodyheight * 1.20 + 'px');
    }
}
