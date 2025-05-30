/* 
/*------------------------------------------------------------------
* Project:        Yatra
* Author:         CN-InfoTech
* URL:            hthttps://themeforest.net/user/cn-infotech
* Created:        6/24/2019
-------------------------------------------------------------------

- // TABLE OF CONTENTS // -

========================================================================
 
 1.* Slick Nav
 2.* Slick
 3.* Swiper
 4.* EaseIn Js
 5.* Touch Swipe JS
 6.* Paradise Slider
 7.* Wow Js
 8.* Range SliderJS
 9.* Countdown
 10.* Stick It
 11.* Bootstrap-select
 12.* Isotope
 13.* Bootstrap Validator
 14.* jQuery Validation Plugin
 15.* Flying Pages JS


// jquery.slicknav.min.js
/*!
    SlickNav Responsive Mobile Menu v1.0.2
    (c) 2015 Josh Cope
    licensed under MIT
*/
!function(n, e) {
    function t(e, t) {
        this.element = e,
        this.settings = n.extend({}, a, t),
        this._defaults = a,
        this._name = i,
        this.init()
    }
    var a = {
        label: "MENU",
        duplicate: !0,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        parentTag: "a",
        closeOnClick: !1,
        allowParentLinks: !1,
        nestedParentLinks: !0,
        showChildren: !1,
        brand: "",
        init: function() {},
        open: function() {},
        close: function() {}
    }
      , i = "slicknav"
      , s = "slicknav";
    t.prototype.init = function() {
        var t, a, i = this, l = n(this.element), o = this.settings;
        if (o.duplicate ? (i.mobileNav = l.clone(),
        i.mobileNav.removeAttr("id"),
        i.mobileNav.find("*").each(function(e, t) {
            n(t).removeAttr("id")
        })) : i.mobileNav = l,
        t = s + "_icon",
        "" === o.label && (t += " " + s + "_no-text"),
        "a" == o.parentTag && (o.parentTag = 'a href="#"'),
        i.mobileNav.attr("class", s + "_nav"),
        a = n('<div class="' + s + '_menu"></div>'),
        "" !== o.brand) {
            var r = n('<div class="' + s + '_brand">' + o.brand + "</div>");
            n(a).append(r)
        }
        i.btn = n(["<" + o.parentTag + ' aria-haspopup="true" tabindex="0" class="' + s + "_btn " + s + '_collapsed">', '<span class="' + s + '_menutxt">' + o.label + "</span>", '<span class="' + t + '">', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', "</span>", "</" + o.parentTag + ">"].join("")),
        n(a).append(i.btn),
        n(o.prependTo).prepend(a),
        a.append(i.mobileNav);
        var d = i.mobileNav.find("li");
        n(d).each(function() {
            var e = n(this)
              , t = {};
            if (t.children = e.children("ul").attr("role", "menu"),
            e.data("menu", t),
            t.children.length > 0) {
                var a = e.contents()
                  , l = !1;
                nodes = [],
                n(a).each(function() {
                    return n(this).is("ul") ? !1 : (nodes.push(this),
                    void (n(this).is("a") && (l = !0)))
                });
                var r = n("<" + o.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + s + '_item"/>');
                if (o.allowParentLinks && !o.nestedParentLinks && l)
                    n(nodes).wrapAll('<span class="' + s + "_parent-link " + s + '_row"/>').parent();
                else {
                    var d = n(nodes).wrapAll(r).parent();
                    d.addClass(s + "_row")
                }
                e.addClass(s + "_collapsed"),
                e.addClass(s + "_parent");
                var c = n('<span class="' + s + '_arrow">' + o.closedSymbol + "</span>");
                o.allowParentLinks && !o.nestedParentLinks && l && (c = c.wrap(r).parent()),
                n(nodes).last().after(c)
            } else
                0 === e.children().length && e.addClass(s + "_txtnode");
            e.children("a").attr("role", "menuitem").click(function(e) {
                o.closeOnClick && !n(e.target).parent().closest("li").hasClass(s + "_parent") && n(i.btn).click()
            }),
            o.closeOnClick && o.allowParentLinks && (e.children("a").children("a").click(function() {
                n(i.btn).click()
            }),
            e.find("." + s + "_parent-link a:not(." + s + "_item)").click(function() {
                n(i.btn).click()
            }))
        }),
        n(d).each(function() {
            var e = n(this).data("menu");
            o.showChildren || i._visibilityToggle(e.children, null, !1, null, !0)
        }),
        i._visibilityToggle(i.mobileNav, null, !1, "init", !0),
        i.mobileNav.attr("role", "menu"),
        n(e).mousedown(function() {
            i._outlines(!1)
        }),
        n(e).keyup(function() {
            i._outlines(!0)
        }),
        n(i.btn).click(function(n) {
            n.preventDefault(),
            i._menuToggle()
        }),
        i.mobileNav.on("click", "." + s + "_item", function(e) {
            e.preventDefault(),
            i._itemClick(n(this))
        }),
        n(i.btn).keydown(function(n) {
            var e = n || event;
            13 == e.keyCode && (n.preventDefault(),
            i._menuToggle())
        }),
        i.mobileNav.on("keydown", "." + s + "_item", function(e) {
            var t = e || event;
            13 == t.keyCode && (e.preventDefault(),
            i._itemClick(n(e.target)))
        }),
        o.allowParentLinks && o.nestedParentLinks && n("." + s + "_item a").click(function(n) {
            n.stopImmediatePropagation()
        })
    }
    ,
    t.prototype._menuToggle = function() {
        var n = this
          , e = n.btn
          , t = n.mobileNav;
        e.hasClass(s + "_collapsed") ? (e.removeClass(s + "_collapsed"),
        e.addClass(s + "_open")) : (e.removeClass(s + "_open"),
        e.addClass(s + "_collapsed")),
        e.addClass(s + "_animating"),
        n._visibilityToggle(t, e.parent(), !0, e)
    }
    ,
    t.prototype._itemClick = function(n) {
        var e = this
          , t = e.settings
          , a = n.data("menu");
        a || (a = {},
        a.arrow = n.children("." + s + "_arrow"),
        a.ul = n.next("ul"),
        a.parent = n.parent(),
        a.parent.hasClass(s + "_parent-link") && (a.parent = n.parent().parent(),
        a.ul = n.parent().next("ul")),
        n.data("menu", a)),
        a.parent.hasClass(s + "_collapsed") ? (a.arrow.html(t.openedSymbol),
        a.parent.removeClass(s + "_collapsed"),
        a.parent.addClass(s + "_open"),
        a.parent.addClass(s + "_animating"),
        e._visibilityToggle(a.ul, a.parent, !0, n)) : (a.arrow.html(t.closedSymbol),
        a.parent.addClass(s + "_collapsed"),
        a.parent.removeClass(s + "_open"),
        a.parent.addClass(s + "_animating"),
        e._visibilityToggle(a.ul, a.parent, !0, n))
    }
    ,
    t.prototype._visibilityToggle = function(e, t, a, i, l) {
        var o = this
          , r = o.settings
          , d = o._getActionItems(e)
          , c = 0;
        a && (c = r.duration),
        e.hasClass(s + "_hidden") ? (e.removeClass(s + "_hidden"),
        e.slideDown(c, r.easingOpen, function() {
            n(i).removeClass(s + "_animating"),
            n(t).removeClass(s + "_animating"),
            l || r.open(i)
        }),
        e.attr("aria-hidden", "false"),
        d.attr("tabindex", "0"),
        o._setVisAttr(e, !1)) : (e.addClass(s + "_hidden"),
        e.slideUp(c, this.settings.easingClose, function() {
            e.attr("aria-hidden", "true"),
            d.attr("tabindex", "-1"),
            o._setVisAttr(e, !0),
            e.hide(),
            n(i).removeClass(s + "_animating"),
            n(t).removeClass(s + "_animating"),
            l ? "init" == i && r.init() : r.close(i)
        }))
    }
    ,
    t.prototype._setVisAttr = function(e, t) {
        var a = this
          , i = e.children("li").children("ul").not("." + s + "_hidden");
        i.each(t ? function() {
            var e = n(this);
            e.attr("aria-hidden", "true");
            var i = a._getActionItems(e);
            i.attr("tabindex", "-1"),
            a._setVisAttr(e, t)
        }
        : function() {
            var e = n(this);
            e.attr("aria-hidden", "false");
            var i = a._getActionItems(e);
            i.attr("tabindex", "0"),
            a._setVisAttr(e, t)
        }
        )
    }
    ,
    t.prototype._getActionItems = function(n) {
        var e = n.data("menu");
        if (!e) {
            e = {};
            var t = n.children("li")
              , a = t.find("a");
            e.links = a.add(t.find("." + s + "_item")),
            n.data("menu", e)
        }
        return e.links
    }
    ,
    t.prototype._outlines = function(e) {
        e ? n("." + s + "_item, ." + s + "_btn").css("outline", "") : n("." + s + "_item, ." + s + "_btn").css("outline", "none")
    }
    ,
    t.prototype.toggle = function() {
        var n = this;
        n._menuToggle()
    }
    ,
    t.prototype.open = function() {
        var n = this;
        n.btn.hasClass(s + "_collapsed") && n._menuToggle()
    }
    ,
    t.prototype.close = function() {
        var n = this;
        n.btn.hasClass(s + "_open") && n._menuToggle()
    }
    ,
    n.fn[i] = function(e) {
        var a = arguments;
        if (void 0 === e || "object" == typeof e)
            return this.each(function() {
                n.data(this, "plugin_" + i) || n.data(this, "plugin_" + i, new t(this,e))
            });
        if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
            var s;
            return this.each(function() {
                var l = n.data(this, "plugin_" + i);
                l instanceof t && "function" == typeof l[e] && (s = l[e].apply(l, Array.prototype.slice.call(a, 1)))
            }),
            void 0 !== s ? s : this
        }
    }
}(jQuery, document, window);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            a.extend(e, e.initials),
            e.activeBreakpoint = null,
            e.animType = null,
            e.animProp = null,
            e.breakpoints = [],
            e.breakpointSettings = [],
            e.cssTransitions = !1,
            e.focussed = !1,
            e.interrupted = !1,
            e.hidden = "hidden",
            e.paused = !0,
            e.positionProp = null,
            e.respondTo = null,
            e.rowCount = 1,
            e.shouldClick = !0,
            e.$slider = a(c),
            e.$slidesCache = null,
            e.transformType = null,
            e.transitionType = null,
            e.visibilityChange = "visibilitychange",
            e.windowWidth = 0,
            e.windowTimer = null,
            f = a(c).data("slick") || {},
            e.options = a.extend({}, e.defaults, d, f),
            e.currentSlide = e.options.initialSlide,
            e.originalSettings = e.options,
            "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden",
            e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden",
            e.visibilityChange = "webkitvisibilitychange"),
            e.autoPlay = a.proxy(e.autoPlay, e),
            e.autoPlayClear = a.proxy(e.autoPlayClear, e),
            e.autoPlayIterator = a.proxy(e.autoPlayIterator, e),
            e.changeSlide = a.proxy(e.changeSlide, e),
            e.clickHandler = a.proxy(e.clickHandler, e),
            e.selectHandler = a.proxy(e.selectHandler, e),
            e.setPosition = a.proxy(e.setPosition, e),
            e.swipeHandler = a.proxy(e.swipeHandler, e),
            e.dragHandler = a.proxy(e.dragHandler, e),
            e.keyHandler = a.proxy(e.keyHandler, e),
            e.instanceUid = b++,
            e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            e.registerBreakpoints(),
            e.init(!0)
        }
        var b = 0;
        return c
    }(),
    b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c,
            c = null;
        else if (0 > c || c >= e.slideCount)
            return !1;
        e.unload(),
        "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack),
        e.$slides = e.$slideTrack.children(this.options.slide),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.append(e.$slides),
        e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }),
        e.$slidesCache = e.$slides,
        e.reinit()
    }
    ,
    b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }
    ,
    b.prototype.animateSlide = function(b, c) {
        var d = {}
          , e = this;
        e.animateHeight(),
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
        a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a),
                e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)",
                e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)",
                e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(),
        b = Math.ceil(b),
        e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)",
        e.$slideTrack.css(d),
        c && setTimeout(function() {
            e.disableTransition(),
            c.call()
        }, e.options.speed))
    }
    ,
    b.prototype.getNavTarget = function() {
        var b = this
          , c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)),
        c
    }
    ,
    b.prototype.asNavFor = function(b) {
        var c = this
          , d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }
    ,
    b.prototype.applyTransition = function(a) {
        var b = this
          , c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase,
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(),
        a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }
    ,
    b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }
    ,
    b.prototype.autoPlayIterator = function() {
        var a = this
          , b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll,
        a.currentSlide - 1 === 0 && (a.direction = 1))),
        a.slideHandler(b))
    }
    ,
    b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"),
        b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"),
        b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
        b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"),
            d = a("<ul />").addClass(b.options.dotsClass),
            c = 0; c <= b.getDotCount(); c += 1)
                d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots),
            b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }),
        b.$slider.addClass("slick-slider"),
        b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
        b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        b.$slideTrack.css("opacity", 0),
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        b.options.draggable === !0 && b.$list.addClass("draggable")
    }
    ,
    b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(),
        g = a.$slider.children(),
        a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows,
            f = Math.ceil(g.length / h),
            b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)),
        d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints)
                d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f,
            "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b)),
            h = f) : (d.activeBreakpoint = f,
            "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b)),
            h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null,
            d.options = d.originalSettings,
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b),
            h = f),
            b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }
    ,
    b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this, e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(),
        e.is("li") || (e = e.closest("li")),
        h = d.slideCount % d.options.slidesToScroll !== 0,
        f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll,
        b.data.message) {
        case "previous":
            g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f,
            d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
            break;
        case "next":
            g = 0 === f ? d.options.slidesToScroll : f,
            d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
            break;
        case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c),
            e.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(),
        d = 0,
        a > c[c.length - 1])
            a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }
    ,
    b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
        b.$slider.off("focus.slick blur.slick"),
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.cleanUpSlideEvents(),
        b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }
    ,
    b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(),
        b.removeAttr("style"),
        a.$slider.empty().append(b))
    }
    ,
    b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(),
        a.stopPropagation(),
        a.preventDefault())
    }
    ,
    b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(),
        c.touchObject = {},
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }),
        c.$slideTrack.children(this.options.slide).detach(),
        c.$slideTrack.detach(),
        c.$list.detach(),
        c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.$slider.removeClass("slick-dotted"),
        c.unslicked = !0,
        b || c.$slider.trigger("destroy", [c])
    }
    ,
    b.prototype.disableTransition = function(a) {
        var b = this
          , c = {};
        c[b.transitionType] = "",
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }),
        c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a),
        c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }),
        b && setTimeout(function() {
            c.disableTransition(a),
            b.call()
        }, c.options.speed))
    }
    ,
    b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a),
        b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }
    ,
    b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides,
        b.unload(),
        b.$slideTrack.children(this.options.slide).detach(),
        b.$slidesCache.filter(a).appendTo(b.$slideTrack),
        b.reinit())
    }
    ,
    b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"),
                b.autoPlay())
            }, 0)
        })
    }
    ,
    b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }
    ,
    b.prototype.getDotCount = function() {
        var a = this
          , b = 0
          , c = 0
          , d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0)
            d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToScroll,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else
            d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }
    ,
    b.prototype.getLeft = function(a) {
        var c, d, f, b = this, e = 0;
        return b.slideOffset = 0,
        d = b.$slides.first().outerHeight(!0),
        b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1,
        e = d * b.options.slidesToShow * -1),
        b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1,
        e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1,
        e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth,
        e = (a + b.options.slidesToShow - b.slideCount) * d),
        b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0,
        e = 0),
        b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0,
        b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)),
        c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e,
        b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow),
        c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0,
        b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1),
        c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0,
        c += (b.$list.width() - f.outerWidth()) / 2)),
        c
    }
    ,
    b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }
    ,
    b.prototype.getNavigableIndexes = function() {
        var e, a = this, b = 0, c = 0, d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll,
        c = -1 * a.options.slidesToScroll,
        e = 2 * a.slideCount); e > b; )
            d.push(b),
            b = c + a.options.slidesToScroll,
            c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }
    ,
    b.prototype.getSlick = function() {
        return this
    }
    ,
    b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0,
        b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f,
            !1) : void 0
        }),
        c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }
    ,
    b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }
    ,
    b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots(),
        c.checkResponsive(!0),
        c.focusHandler()),
        b && c.$slider.trigger("init", [c]),
        c.options.accessibility === !0 && c.initADA(),
        c.options.autoplay && (c.paused = !1,
        c.autoPlay())
    }
    ,
    b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }),
        null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        b.activateADA()
    }
    ,
    b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide),
        a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }
    ,
    b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide),
        b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }
    ,
    b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }
    ,
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(),
        b.initDotEvents(),
        b.initSlideEvents(),
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler),
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler),
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
        a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(),
        a.$nextArrow.show()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }
    ,
    b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }
    ,
    b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this)
                  , d = a(this).attr("data-lazy")
                  , e = document.createElement("img");
                e.onload = function() {
                    c.animate({
                        opacity: 0
                    }, 100, function() {
                        c.attr("src", d).animate({
                            opacity: 1
                        }, 200, function() {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }
                ,
                e.onerror = function() {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    b.$slider.trigger("lazyLoadError", [b, c, d])
                }
                ,
                e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1),
        f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)),
        f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide,
        f = Math.ceil(e + b.options.slidesToShow),
        b.options.fade === !0 && (e > 0 && e--,
        f <= b.slideCount && f++)),
        c = b.$slider.find(".slick-slide").slice(e, f),
        g(c),
        b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"),
        g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow),
        g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow),
        g(d))
    }
    ,
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(),
        a.$slideTrack.css({
            opacity: 1
        }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }
    ,
    b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(),
        a.setPosition()
    }
    ,
    b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(),
        a.paused = !0
    }
    ,
    b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(),
        a.options.autoplay = !0,
        a.paused = !1,
        a.focussed = !1,
        a.interrupted = !1
    }
    ,
    b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]),
        b.animating = !1,
        b.setPosition(),
        b.swipeLeft = null,
        b.options.autoplay && b.autoPlay(),
        b.options.accessibility === !0 && b.initADA())
    }
    ,
    b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }
    ,
    b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(),
        f = e.attr("data-lazy"),
        g = document.createElement("img"),
        g.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"),
            c.options.adaptiveHeight === !0 && c.setPosition(),
            c.$slider.trigger("lazyLoaded", [c, e, f]),
            c.progressiveLazyLoad()
        }
        ,
        g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            c.$slider.trigger("lazyLoadError", [c, e, f]),
            c.progressiveLazyLoad())
        }
        ,
        g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }
    ,
    b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow,
        !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
        c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
        d = c.currentSlide,
        c.destroy(!0),
        a.extend(c, c.initials, {
            currentSlide: d
        }),
        c.init(),
        b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }
    ,
    b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this, f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1,
                d = f[c].breakpoint,
                f.hasOwnProperty(c)) {
                    for (; e >= 0; )
                        b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1),
                        e--;
                    b.breakpoints.push(d),
                    b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }
    ,
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.cleanUpSlideEvents(),
        b.initSlideEvents(),
        b.checkResponsive(!1, !0),
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
        b.setPosition(),
        b.focusHandler(),
        b.paused = !b.options.autoplay,
        b.autoPlay(),
        b.$slider.trigger("reInit", [b])
    }
    ,
    b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay),
        b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(),
            b.checkResponsive(),
            b.unslicked || b.setPosition()
        }, 50))
    }
    ,
    b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a,
        a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a,
        d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(),
        c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
        d.$slides = d.$slideTrack.children(this.options.slide),
        d.$slideTrack.children(this.options.slide).detach(),
        d.$slideTrack.append(d.$slides),
        d.$slidesCache = d.$slides,
        void d.reinit())
    }
    ,
    b.prototype.setCSS = function(a) {
        var d, e, b = this, c = {};
        b.options.rtl === !0 && (a = -a),
        d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px",
        e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px",
        c[b.positionProp] = a,
        b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {},
        b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")",
        b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)",
        b.$slideTrack.css(c)))
    }
    ,
    b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow),
        a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })),
        a.listWidth = a.$list.width(),
        a.listHeight = a.$list.height(),
        a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow),
        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth),
        a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }
    ,
    b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1,
            b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }),
        b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }
    ,
    b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this, g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0],
        g = arguments[1],
        h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0],
        f = arguments[1],
        g = arguments[2],
        "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")),
        "single" === h)
            b.options[e] = f;
        else if ("multiple" === h)
            a.each(e, function(a, c) {
                b.options[a] = c
            });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive))
                    b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0; )
                        b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1),
                        c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(),
        b.reinit())
    }
    ,
    b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(),
        a.$slider.trigger("setPosition", [a])
    }
    ,
    b.prototype.setProps = function() {
        var a = this
          , b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left",
        "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
        a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex),
        void 0 !== b.OTransform && (a.animType = "OTransform",
        a.transformType = "-o-transform",
        a.transitionType = "OTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.MozTransform && (a.animType = "MozTransform",
        a.transformType = "-moz-transform",
        a.transitionType = "MozTransition",
        void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
        void 0 !== b.webkitTransform && (a.animType = "webkitTransform",
        a.transformType = "-webkit-transform",
        a.transitionType = "webkitTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.msTransform && (a.animType = "msTransform",
        a.transformType = "-ms-transform",
        a.transitionType = "msTransition",
        void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform",
        a.transformType = "transform",
        a.transitionType = "transition"),
        a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }
    ,
    b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        b.$slides.eq(a).addClass("slick-current"),
        b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2),
        b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
        d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")),
        b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow,
        e = b.options.infinite === !0 ? b.options.slidesToShow + a : a,
        b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }
    ,
    b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1),
        b.options.infinite === !0 && b.options.fade === !1 && (d = null,
        b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow,
            c = b.slideCount; c > b.slideCount - e; c -= 1)
                d = c - 1,
                a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1)
                d = c,
                a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }
    ,
    b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(),
        b.interrupted = a
    }
    ,
    b.prototype.selectHandler = function(b) {
        var c = this
          , d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide")
          , e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0),
        c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e),
        void c.asNavFor(e)) : void c.slideHandler(e)
    }
    ,
    b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null, i = this;
        return b = b || !1,
        i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a),
        d = a,
        h = i.getLeft(d),
        g = i.getLeft(i.currentSlide),
        i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft,
        i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer),
        e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d,
        i.animating = !0,
        i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
        f = i.currentSlide,
        i.currentSlide = e,
        i.setSlideClasses(i.currentSlide),
        i.options.asNavFor && (j = i.getNavTarget(),
        j = j.slick("getSlick"),
        j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)),
        i.updateDots(),
        i.updateArrows(),
        i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f),
        i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e),
        void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }
    ,
    b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(),
        a.$nextArrow.hide()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
        a.$slider.addClass("slick-loading")
    }
    ,
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX,
        b = e.touchObject.startY - e.touchObject.curY,
        c = Math.atan2(b, a),
        d = Math.round(180 * c / Math.PI),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }
    ,
    b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1,
        b.interrupted = !1,
        b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0,
        void 0 === b.touchObject.curX)
            return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
            case "left":
            case "down":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(),
                b.currentDirection = 0;
                break;
            case "right":
            case "up":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(),
                b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c),
            b.touchObject = {},
            b.$slider.trigger("swipe", [b, d]))
        } else
            b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide),
            b.touchObject = {})
    }
    ,
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend"in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1,
            b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold,
            b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
            a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
    }
    ,
    b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null,
        !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide),
        b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX,
        b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY,
        b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))),
        b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))),
        e = b.swipeDirection(),
        "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(),
        g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1),
        b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
        f = b.touchObject.swipeLength,
        b.touchObject.edgeHit = !1,
        b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction,
        b.touchObject.edgeHit = !0),
        b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g,
        b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
        b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null,
        !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }
    ,
    b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0,
        1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {},
        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]),
        b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX,
        b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY,
        void (b.dragging = !0))
    }
    ,
    b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(),
        a.$slideTrack.children(this.options.slide).detach(),
        a.$slidesCache.appendTo(a.$slideTrack),
        a.reinit())
    }
    ,
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
        b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
        b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]),
        b.destroy()
    }
    ,
    b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2),
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }
    ,
    a.fn.slick = function() {
        var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f],c) : g = a[f].slick[c].apply(a[f].slick, d),
            "undefined" != typeof g)
                return g;
        return a
    }
});

/**
 * Swiper 4.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 28, 2017
 */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    function e(e, t) {
        var a = []
          , i = 0;
        if (e && !t && e instanceof r)
            return e;
        if (e)
            if ("string" == typeof e) {
                var s, n, o = e.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    var l = "div";
                    for (0 === o.indexOf("<li") && (l = "ul"),
                    0 === o.indexOf("<tr") && (l = "tbody"),
                    0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                    0 === o.indexOf("<tbody") && (l = "table"),
                    0 === o.indexOf("<option") && (l = "select"),
                    (n = document.createElement(l)).innerHTML = o,
                    i = 0; i < n.childNodes.length; i += 1)
                        a.push(n.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])],
                    i = 0; i < s.length; i += 1)
                        s[i] && a.push(s[i])
            } else if (e.nodeType || e === window || e === document)
                a.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (i = 0; i < e.length; i += 1)
                    a.push(e[i]);
        return new r(a)
    }
    function t(e) {
        for (var t = [], a = 0; a < e.length; a += 1)
            -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    function a() {
        var e = "onwheel"in d;
        if (!e) {
            var t = d.createElement("div");
            t.setAttribute("onwheel", "return;"),
            e = "function" == typeof t.onwheel
        }
        return !e && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (e = d.implementation.hasFeature("Events.wheel", "3.0")),
        e
    }
    var i, s = i = "undefined" == typeof window ? {
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {}
        },
        Image: function() {},
        Date: function() {},
        screen: {}
    } : window, r = function(e) {
        for (var t = this, a = 0; a < e.length; a += 1)
            t[a] = e[a];
        return t.length = e.length,
        this
    };
    e.fn = r.prototype,
    e.Class = r,
    e.Dom7 = r;
    "resize scroll".split(" ");
    var n = {
        addClass: function(e) {
            var t = this;
            if (void 0 === e)
                return this;
            for (var a = e.split(" "), i = 0; i < a.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== t[s].classList && t[s].classList.add(a[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== t[s].classList && t[s].classList.remove(a[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== t[s].classList && t[s].classList.toggle(a[i]);
            return this
        },
        attr: function(e, t) {
            var a = arguments
              , i = this;
            if (1 !== arguments.length || "string" != typeof e) {
                for (var s = 0; s < this.length; s += 1)
                    if (2 === a.length)
                        i[s].setAttribute(e, t);
                    else
                        for (var r in e)
                            i[s][r] = e[r],
                            i[s].setAttribute(r, e[r]);
                return this
            }
            if (this[0])
                return this[0].getAttribute(e)
        },
        removeAttr: function(e) {
            for (var t = this, a = 0; a < this.length; a += 1)
                t[a].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var a, i = this;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)
                    (a = i[s]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
                    a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
                    return a.dom7ElementDataStorage[e];
                var r = a.getAttribute("data-" + e);
                if (r)
                    return r
            }
        },
        transform: function(e) {
            for (var t = this, a = 0; a < this.length; a += 1) {
                var i = t[a].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        },
        transition: function(e) {
            var t = this;
            "string" != typeof e && (e += "ms");
            for (var a = 0; a < this.length; a += 1) {
                var i = t[a].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        },
        on: function() {
            function t(t) {
                var a = t.target;
                if (a) {
                    var i = t.target.dom7EventData || [];
                    if (i.unshift(t),
                    e(a).is(o))
                        l.apply(a, i);
                    else
                        for (var s = e(a).parents(), r = 0; r < s.length; r += 1)
                            e(s[r]).is(o) && l.apply(s[r], i)
                }
            }
            function a(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e),
                l.apply(this, t)
            }
            for (var i = this, s = [], r = arguments.length; r--; )
                s[r] = arguments[r];
            var n = s[0]
              , o = s[1]
              , l = s[2]
              , d = s[3];
            if ("function" == typeof s[1]) {
                var p;
                n = (p = s)[0],
                l = p[1],
                d = p[2],
                o = void 0
            }
            d || (d = !1);
            for (var c, u = n.split(" "), h = 0; h < this.length; h += 1) {
                var v = i[h];
                if (o)
                    for (c = 0; c < u.length; c += 1)
                        v.dom7LiveListeners || (v.dom7LiveListeners = []),
                        v.dom7LiveListeners.push({
                            type: n,
                            listener: l,
                            proxyListener: t
                        }),
                        v.addEventListener(u[c], t, d);
                else
                    for (c = 0; c < u.length; c += 1)
                        v.dom7Listeners || (v.dom7Listeners = []),
                        v.dom7Listeners.push({
                            type: n,
                            listener: l,
                            proxyListener: a
                        }),
                        v.addEventListener(u[c], a, d)
            }
            return this
        },
        off: function() {
            for (var e = this, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i = t[0]
              , s = t[1]
              , r = t[2]
              , n = t[3];
            if ("function" == typeof t[1]) {
                var o;
                i = (o = t)[0],
                r = o[1],
                n = o[2],
                s = void 0
            }
            n || (n = !1);
            for (var l = i.split(" "), d = 0; d < l.length; d += 1)
                for (var p = 0; p < this.length; p += 1) {
                    var c = e[p];
                    if (s) {
                        if (c.dom7LiveListeners)
                            for (var u = 0; u < c.dom7LiveListeners.length; u += 1)
                                r ? c.dom7LiveListeners[u].listener === r && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n) : c.dom7LiveListeners[u].type === l[d] && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n)
                    } else if (c.dom7Listeners)
                        for (var h = 0; h < c.dom7Listeners.length; h += 1)
                            r ? c.dom7Listeners[h].listener === r && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n) : c.dom7Listeners[h].type === l[d] && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n)
                }
            return this
        },
        trigger: function() {
            for (var e = this, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1)
                for (var n = 0; n < this.length; n += 1) {
                    var o = void 0;
                    try {
                        o = new window.CustomEvent(i[r],{
                            detail: s,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (o = document.createEvent("Event")).initEvent(i[r], !0, !0),
                        o.detail = s
                    }
                    e[n].dom7EventData = t.filter(function(e, t) {
                        return t > 0
                    }),
                    e[n].dispatchEvent(o),
                    e[n].dom7EventData = [],
                    delete e[n].dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            function t(r) {
                if (r.target === this)
                    for (e.call(this, r),
                    a = 0; a < i.length; a += 1)
                        s.off(i[a], t)
            }
            var a, i = ["webkitTransitionEnd", "transitionend"], s = this;
            if (e)
                for (a = 0; a < i.length; a += 1)
                    s.on(i[a], t);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var e = this[0]
                  , t = e.getBoundingClientRect()
                  , a = document.body
                  , i = e.clientTop || a.clientTop || 0
                  , s = e.clientLeft || a.clientLeft || 0
                  , r = e === window ? window.scrollY : e.scrollTop
                  , n = e === window ? window.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function(e, t) {
            var a, i = this;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var s in e)
                            i[a].style[s] = e[s];
                    return this
                }
                if (this[0])
                    return window.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1)
                    i[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            var t = this;
            if (!e)
                return this;
            for (var a = 0; a < this.length; a += 1)
                if (!1 === e.call(t[a], a, t[a]))
                    return t;
            return this
        },
        html: function(e) {
            var t = this;
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var a = 0; a < this.length; a += 1)
                t[a].innerHTML = e;
            return this
        },
        text: function(e) {
            var t = this;
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var a = 0; a < this.length; a += 1)
                t[a].textContent = e;
            return this
        },
        is: function(t) {
            var a, i, s = this[0];
            if (!s || void 0 === t)
                return !1;
            if ("string" == typeof t) {
                if (s.matches)
                    return s.matches(t);
                if (s.webkitMatchesSelector)
                    return s.webkitMatchesSelector(t);
                if (s.msMatchesSelector)
                    return s.msMatchesSelector(t);
                for (a = e(t),
                i = 0; i < a.length; i += 1)
                    if (a[i] === s)
                        return !0;
                return !1
            }
            if (t === document)
                return s === document;
            if (t === window)
                return s === window;
            if (t.nodeType || t instanceof r) {
                for (a = t.nodeType ? [t] : t,
                i = 0; i < a.length; i += 1)
                    if (a[i] === s)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, a = this.length;
            return e > a - 1 ? new r([]) : e < 0 ? (t = a + e,
            new r(t < 0 ? [] : [this[t]])) : new r([this[e]])
        },
        append: function() {
            for (var e = this, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            for (var i, s = 0; s < t.length; s += 1) {
                i = t[s];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof i) {
                        var o = document.createElement("div");
                        for (o.innerHTML = i; o.firstChild; )
                            e[n].appendChild(o.firstChild)
                    } else if (i instanceof r)
                        for (var l = 0; l < i.length; l += 1)
                            e[n].appendChild(i[l]);
                    else
                        e[n].appendChild(i)
            }
            return this
        },
        prepend: function(e) {
            var t, a, i = this;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var s = document.createElement("div");
                    for (s.innerHTML = e,
                    a = s.childNodes.length - 1; a >= 0; a -= 1)
                        i[t].insertBefore(s.childNodes[a], i[t].childNodes[0])
                } else if (e instanceof r)
                    for (a = 0; a < e.length; a += 1)
                        i[t].insertBefore(e[a], i[t].childNodes[0]);
                else
                    i[t].insertBefore(e, i[t].childNodes[0]);
            return this
        },
        next: function(t) {
            return new r(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        },
        nextAll: function(t) {
            var a = []
              , i = this[0];
            if (!i)
                return new r([]);
            for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                t ? e(s).is(t) && a.push(s) : a.push(s),
                i = s
            }
            return new r(a)
        },
        prev: function(t) {
            if (this.length > 0) {
                var a = this[0];
                return new r(t ? a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : [] : a.previousElementSibling ? [a.previousElementSibling] : [])
            }
            return new r([])
        },
        prevAll: function(t) {
            var a = []
              , i = this[0];
            if (!i)
                return new r([]);
            for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                t ? e(s).is(t) && a.push(s) : a.push(s),
                i = s
            }
            return new r(a)
        },
        parent: function(a) {
            for (var i = this, s = [], r = 0; r < this.length; r += 1)
                null !== i[r].parentNode && (a ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode) : s.push(i[r].parentNode));
            return e(t(s))
        },
        parents: function(a) {
            for (var i = this, s = [], r = 0; r < this.length; r += 1)
                for (var n = i[r].parentNode; n; )
                    a ? e(n).is(a) && s.push(n) : s.push(n),
                    n = n.parentNode;
            return e(t(s))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = this, a = [], i = 0; i < this.length; i += 1)
                for (var s = t[i].querySelectorAll(e), n = 0; n < s.length; n += 1)
                    a.push(s[n]);
            return new r(a)
        },
        children: function(a) {
            for (var i = this, s = [], n = 0; n < this.length; n += 1)
                for (var o = i[n].childNodes, l = 0; l < o.length; l += 1)
                    a ? 1 === o[l].nodeType && e(o[l]).is(a) && s.push(o[l]) : 1 === o[l].nodeType && s.push(o[l]);
            return new r(t(s))
        },
        remove: function() {
            for (var e = this, t = 0; t < this.length; t += 1)
                e[t].parentNode && e[t].parentNode.removeChild(e[t]);
            return this
        },
        add: function() {
            for (var t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i, s, r = this;
            for (i = 0; i < t.length; i += 1) {
                var n = e(t[i]);
                for (s = 0; s < n.length; s += 1)
                    r[r.length] = n[s],
                    r.length += 1
            }
            return r
        },
        styles: function() {
            return this[0] ? window.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(n).forEach(function(t) {
        e.fn[t] = n[t]
    });
    var o, l = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            void 0 === t && (t = "x");
            var a, i, r, n = s.getComputedStyle(e, null);
            return s.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
            r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : a = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
            i || 0
        },
        parseUrlQuery: function(e) {
            var t, a, i, r, n = {}, o = e || s.location.href;
            if ("string" == typeof o && o.length)
                for (r = (a = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length,
                t = 0; t < r; t += 1)
                    i = a[t].replace(/#\S+/g, "").split("="),
                    n[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return n
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var s = e[i];
                if (void 0 !== s && null !== s)
                    for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                        var d = r[n]
                          , p = Object.getOwnPropertyDescriptor(s, d);
                        void 0 !== p && p.enumerable && (l.isObject(a[d]) && l.isObject(s[d]) ? l.extend(a[d], s[d]) : !l.isObject(a[d]) && l.isObject(s[d]) ? (a[d] = {},
                        l.extend(a[d], s[d])) : a[d] = s[d])
                    }
            }
            return a
        }
    }, d = o = "undefined" == typeof document ? {
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return {}
        },
        querySelectorAll: function() {
            return []
        },
        createElement: function() {
            return {
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document, p = {
        touch: s.Modernizr && !0 === s.Modernizr.touch || !!("ontouchstart"in s || s.DocumentTouch && d instanceof s.DocumentTouch),
        transforms3d: s.Modernizr && !0 === s.Modernizr.csstransforms3d || function() {
            var e = d.createElement("div").style;
            return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
        }(),
        flexbox: function() {
            for (var e = d.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                if (t[a]in e)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in s || "WebkitMutationObserver"in s,
        passiveListener: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                s.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in s
    }, c = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }, u = {
        components: {}
    };
    c.prototype.on = function(e, t) {
        var a = this;
        return "function" != typeof t ? a : (e.split(" ").forEach(function(e) {
            a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e].push(t)
        }),
        a)
    }
    ,
    c.prototype.once = function(e, t) {
        function a() {
            for (var s = [], r = arguments.length; r--; )
                s[r] = arguments[r];
            t.apply(i, s),
            i.off(e, a)
        }
        var i = this;
        return "function" != typeof t ? i : i.on(e, a)
    }
    ,
    c.prototype.off = function(e, t) {
        var a = this;
        return e.split(" ").forEach(function(e) {
            void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e].forEach(function(i, s) {
                i === t && a.eventsListeners[e].splice(s, 1)
            })
        }),
        a
    }
    ,
    c.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var a = this;
        if (!a.eventsListeners)
            return a;
        var i, s, r;
        return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
        s = e.slice(1, e.length),
        r = a) : (i = e[0].events,
        s = e[0].data,
        r = e[0].context || a),
        (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }),
                t.forEach(function(e) {
                    e.apply(r, s)
                })
            }
        }),
        a
    }
    ,
    c.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(a) {
            var i = t.modules[a];
            i.params && l.extend(e, i.params)
        })
    }
    ,
    c.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(a) {
            var i = t.modules[a]
              , s = e[a] || {};
            i.instance && Object.keys(i.instance).forEach(function(e) {
                var a = i.instance[e];
                t[e] = "function" == typeof a ? a.bind(t) : a
            }),
            i.on && t.on && Object.keys(i.on).forEach(function(e) {
                t.on(e, i.on[e])
            }),
            i.create && i.create.bind(t)(s)
        })
    }
    ,
    u.components.set = function(e) {
        var t = this;
        t.use && t.use(e)
    }
    ,
    c.installModule = function(e) {
        for (var t = [], a = arguments.length - 1; a-- > 0; )
            t[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = e.name || Object.keys(i.prototype.modules).length + "_" + l.now();
        return i.prototype.modules[s] = e,
        e.proto && Object.keys(e.proto).forEach(function(t) {
            i.prototype[t] = e.proto[t]
        }),
        e.static && Object.keys(e.static).forEach(function(t) {
            i[t] = e.static[t]
        }),
        e.install && e.install.apply(i, t),
        i
    }
    ,
    c.use = function(e) {
        for (var t = [], a = arguments.length - 1; a-- > 0; )
            t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }),
        i) : i.installModule.apply(i, [e].concat(t))
    }
    ,
    Object.defineProperties(c, u);
    var h = {
        updateSize: function() {
            var e, t, a = this, i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth,
            t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight,
            0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            l.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this
              , t = e.params
              , a = e.$wrapperEl
              , i = e.size
              , s = e.rtl
              , r = e.wrongRTL
              , n = a.children("." + e.params.slideClass)
              , o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : n.length
              , d = []
              , c = []
              , u = []
              , h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = o
              , m = e.snapGrid.length
              , g = e.snapGrid.length
              , b = t.spaceBetween
              , w = -h
              , y = 0
              , x = 0;
            if (void 0 !== i) {
                "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i),
                e.virtualSize = -b,
                s ? n.css({
                    marginLeft: "",
                    marginTop: ""
                }) : n.css({
                    marginRight: "",
                    marginBottom: ""
                });
                var T;
                t.slidesPerColumn > 1 && (T = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = T / S, M = C - (t.slidesPerColumn * C - o), z = 0; z < o; z += 1) {
                    E = 0;
                    var P = n.eq(z);
                    if (t.slidesPerColumn > 1) {
                        var k = void 0
                          , $ = void 0
                          , I = void 0;
                        "column" === t.slidesPerColumnFill ? (I = z - ($ = Math.floor(z / S)) * S,
                        ($ > M || $ === M && I === S - 1) && (I += 1) >= S && (I = 0,
                        $ += 1),
                        k = $ + I * T / S,
                        P.css({
                            "-webkit-box-ordinal-group": k,
                            "-moz-box-ordinal-group": k,
                            "-ms-flex-order": k,
                            "-webkit-order": k,
                            order: k
                        })) : $ = z - (I = Math.floor(z / C)) * C,
                        P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", I)
                    }
                    "none" !== P.css("display") && ("auto" === t.slidesPerView ? (E = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0),
                    t.roundLengths && (E = Math.floor(E))) : (E = (i - (t.slidesPerView - 1) * b) / t.slidesPerView,
                    t.roundLengths && (E = Math.floor(E)),
                    n[z] && (e.isHorizontal() ? n[z].style.width = E + "px" : n[z].style.height = E + "px")),
                    n[z] && (n[z].swiperSlideSize = E),
                    u.push(E),
                    t.centeredSlides ? (w = w + E / 2 + y / 2 + b,
                    0 === y && 0 !== z && (w = w - i / 2 - b),
                    0 === z && (w = w - i / 2 - b),
                    Math.abs(w) < .001 && (w = 0),
                    x % t.slidesPerGroup == 0 && d.push(w),
                    c.push(w)) : (x % t.slidesPerGroup == 0 && d.push(w),
                    c.push(w),
                    w = w + E + b),
                    e.virtualSize += E + b,
                    y = E,
                    x += 1)
                }
                e.virtualSize = Math.max(e.virtualSize, i) + v;
                var L;
                if (s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }),
                p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : a.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })),
                t.slidesPerColumn > 1 && (e.virtualSize = (E + t.spaceBetween) * T,
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                e.isHorizontal() ? a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : a.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }),
                t.centeredSlides)) {
                    L = [];
                    for (var D = 0; D < d.length; D += 1)
                        d[D] < e.virtualSize + d[0] && L.push(d[D]);
                    d = L
                }
                if (!t.centeredSlides) {
                    L = [];
                    for (var O = 0; O < d.length; O += 1)
                        d[O] <= e.virtualSize - i && L.push(d[O]);
                    d = L,
                    Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i)
                }
                0 === d.length && (d = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? s ? n.css({
                    marginLeft: b + "px"
                }) : n.css({
                    marginRight: b + "px"
                }) : n.css({
                    marginBottom: b + "px"
                })),
                l.extend(e, {
                    slides: n,
                    snapGrid: d,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }),
                o !== f && e.emit("slidesLengthChange"),
                d.length !== m && e.emit("snapGridLengthChange"),
                c.length !== g && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function() {
            var e, t = this, a = [], i = 0;
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                    var s = t.activeIndex + e;
                    if (s > t.slides.length)
                        break;
                    a.push(t.slides.eq(s)[0])
                }
            else
                a.push(t.slides.eq(t.activeIndex)[0]);
            for (e = 0; e < a.length; e += 1)
                if (void 0 !== a[e]) {
                    var r = a[e].offsetHeight;
                    i = r > i ? r : i
                }
            i && t.$wrapperEl.css("height", i + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1)
                t[a].swiperSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this
              , a = t.params
              , i = t.slides
              , s = t.rtl;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e),
                i.removeClass(a.slideVisibleClass);
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n]
                      , l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset)
                          , p = d + t.slidesSizesGrid[n];
                        (d >= 0 && d < t.size || p > 0 && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass)
                    }
                    o.progress = s ? -l : l
                }
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this
              , a = t.params
              , i = t.maxTranslate() - t.minTranslate()
              , s = t.progress
              , r = t.isBeginning
              , n = t.isEnd
              , o = r
              , d = n;
            0 === i ? (s = 0,
            r = !0,
            n = !0) : (r = (s = (e - t.minTranslate()) / i) <= 0,
            n = s >= 1),
            l.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }),
            (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            n && !d && t.emit("reachEnd toEdge"),
            (o && !r || d && !n) && t.emit("fromEdge"),
            t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e = this
              , t = e.slides
              , a = e.params
              , i = e.$wrapperEl
              , s = e.activeIndex
              , r = e.realIndex
              , n = e.virtual && a.virtual.enabled;
            t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass);
            var o;
            (o = n ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass),
            a.loop && (o.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
            var l = o.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
            a.loop && 0 === l.length && (l = t.eq(0)).addClass(a.slideNextClass);
            var d = o.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
            a.loop && 0 === d.length && (d = t.eq(-1)).addClass(a.slidePrevClass),
            a.loop && (l.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass),
            d.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, a = this, i = a.rtl ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params, o = a.activeIndex, d = a.realIndex, p = a.snapIndex, c = e;
            if (void 0 === c) {
                for (var u = 0; u < s.length; u += 1)
                    void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? c = u : i >= s[u] && i < s[u + 1] && (c = u + 1) : i >= s[u] && (c = u);
                n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if ((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / n.slidesPerGroup)) >= r.length && (t = r.length - 1),
            c !== o) {
                var h = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                l.extend(a, {
                    snapIndex: t,
                    realIndex: h,
                    previousIndex: o,
                    activeIndex: c
                }),
                a.emit("activeIndexChange"),
                a.emit("snapIndexChange"),
                d !== h && a.emit("realIndexChange"),
                a.emit("slideChange")
            } else
                t !== p && (a.snapIndex = t,
                a.emit("snapIndexChange"))
        },
        updateClickedSlide: function(t) {
            var a = this
              , i = a.params
              , s = e(t.target).closest("." + i.slideClass)[0]
              , r = !1;
            if (s)
                for (var n = 0; n < a.slides.length; n += 1)
                    a.slides[n] === s && (r = !0);
            if (!s || !r)
                return a.clickedSlide = void 0,
                void (a.clickedIndex = void 0);
            a.clickedSlide = s,
            a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = e(s).index(),
            i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
        }
    }
      , v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this
              , a = t.params
              , i = t.rtl
              , s = t.translate
              , r = t.$wrapperEl;
            if (a.virtualTranslate)
                return i ? -s : s;
            var n = l.getTranslate(r[0], e);
            return i && (n = -n),
            n || 0
        },
        setTranslate: function(e, t) {
            var a = this
              , i = a.rtl
              , s = a.params
              , r = a.$wrapperEl
              , n = a.progress
              , o = 0
              , l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e,
            s.roundLengths && (o = Math.floor(o),
            l = Math.floor(l)),
            s.virtualTranslate || (p.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")),
            a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e),
            a.emit("setTranslate", a.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    }
      , f = {
        setTransition: function(e, t) {
            var a = this;
            a.$wrapperEl.transition(e),
            a.emit("setTransition", e, t)
        },
        transitionStart: function(e) {
            void 0 === e && (e = !0);
            var t = this
              , a = t.activeIndex
              , i = t.params
              , s = t.previousIndex;
            i.autoHeight && t.updateAutoHeight(),
            t.emit("transitionStart"),
            e && a !== s && (t.emit("slideChangeTransitionStart"),
            a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
        },
        transitionEnd: function(e) {
            void 0 === e && (e = !0);
            var t = this
              , a = t.activeIndex
              , i = t.previousIndex;
            t.animating = !1,
            t.setTransition(0),
            t.emit("transitionEnd"),
            e && a !== i && (t.emit("slideChangeTransitionEnd"),
            a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
        }
    }
      , m = function() {
        return {
            isSafari: function() {
                var e = s.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),
            ie: s.navigator.pointerEnabled || s.navigator.msPointerEnabled,
            ieTouch: s.navigator.msPointerEnabled && s.navigator.msMaxTouchPoints > 1 || s.navigator.pointerEnabled && s.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = d.createElement("div");
                return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
                1 === e.getElementsByTagName("i").length
            }()
        }
    }()
      , g = {
        slideTo: function(e, t, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
            var s = this
              , r = e;
            r < 0 && (r = 0);
            var n = s.params
              , o = s.snapGrid
              , l = s.slidesGrid
              , d = s.previousIndex
              , p = s.activeIndex
              , c = s.rtl
              , u = s.$wrapperEl
              , h = Math.floor(r / n.slidesPerGroup);
            h >= o.length && (h = o.length - 1),
            (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var v = -o[h];
            if (s.updateProgress(v),
            n.normalizeSlideIndex)
                for (var f = 0; f < l.length; f += 1)
                    -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            return !(!s.allowSlideNext && v < s.translate && v < s.minTranslate() || !s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r || (c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r),
            n.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== n.effect && s.setTranslate(v),
            1) : (0 === t || m.lteIE9 ? (s.setTransition(0),
            s.setTranslate(v),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(a),
            s.transitionEnd(a)) : (s.setTransition(t),
            s.setTranslate(v),
            s.updateActiveIndex(r),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(a),
            s.animating || (s.animating = !0,
            u.transitionEnd(function() {
                s && !s.destroyed && s.transitionEnd(a)
            }))),
            0)))
        },
        slideNext: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , r = i.animating;
            return s.loop ? !r && (i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft,
            i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        },
        slidePrev: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , r = i.animating;
            return s.loop ? !r && (i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft,
            i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a)
        },
        slideReset: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this;
            return i.slideTo(i.activeIndex, e, t, a)
        },
        slideToClickedSlide: function() {
            var t, a = this, i = a.params, s = a.$wrapperEl, r = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView, n = a.clickedIndex;
            if (i.loop) {
                if (a.animating)
                    return;
                t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? n < a.loopedSlides - r / 2 || n > a.slides.length - a.loopedSlides + r / 2 ? (a.loopFix(),
                n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                l.nextTick(function() {
                    a.slideTo(n)
                })) : a.slideTo(n) : n > a.slides.length - r ? (a.loopFix(),
                n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                l.nextTick(function() {
                    a.slideTo(n)
                })) : a.slideTo(n)
            } else
                a.slideTo(n)
        }
    }
      , b = {
        loopCreate: function() {
            var t = this
              , a = t.params
              , i = t.$wrapperEl;
            i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
            var s = i.children("." + a.slideClass);
            if (a.loopFillGroupWithBlank) {
                var r = a.slidesPerGroup - s.length % a.slidesPerGroup;
                if (r !== a.slidesPerGroup) {
                    for (var n = 0; n < r; n += 1) {
                        var o = e(d.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                        i.append(o)
                    }
                    s = i.children("." + a.slideClass)
                }
            }
            "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length),
            t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10),
            t.loopedSlides += a.loopAdditionalSlides,
            t.loopedSlides > s.length && (t.loopedSlides = s.length);
            var l = []
              , p = [];
            s.each(function(a, i) {
                var r = e(i);
                a < t.loopedSlides && p.push(i),
                a < s.length && a >= s.length - t.loopedSlides && l.push(i),
                r.attr("data-swiper-slide-index", a)
            });
            for (var c = 0; c < p.length; c += 1)
                i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
            for (var u = l.length - 1; u >= 0; u -= 1)
                i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev, o = t.allowSlideNext;
            t.allowSlidePrev = !0,
            t.allowSlideNext = !0,
            i < r ? (e = s.length - 3 * r + i,
            e += r,
            t.slideTo(e, 0, !1, !0)) : ("auto" === a.slidesPerView && i >= 2 * r || i > s.length - 2 * a.slidesPerView) && (e = -s.length + i + r,
            e += r,
            t.slideTo(e, 0, !1, !0)),
            t.allowSlidePrev = n,
            t.allowSlideNext = o
        },
        loopDestroy: function() {
            var e = this
              , t = e.$wrapperEl
              , a = e.params
              , i = e.slides;
            t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
    }
      , w = {
        setGrabCursor: function(e) {
            var t = this;
            if (!p.touch && t.params.simulateTouch) {
                var a = t.el;
                a.style.cursor = "move",
                a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                a.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                a.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            var e = this;
            p.touch || (e.el.style.cursor = "")
        }
    }
      , y = {
        appendSlide: function(e) {
            var t = this
              , a = t.$wrapperEl
              , i = t.params;
            if (i.loop && t.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && a.append(e[s]);
            else
                a.append(e);
            i.loop && t.loopCreate(),
            i.observer && p.observer || t.update()
        },
        prependSlide: function(e) {
            var t = this
              , a = t.params
              , i = t.$wrapperEl
              , s = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    e[n] && i.prepend(e[n]);
                r = s + e.length
            } else
                i.prepend(e);
            a.loop && t.loopCreate(),
            a.observer && p.observer || t.update(),
            t.slideTo(r, 0, !1)
        },
        removeSlide: function(e) {
            var t = this
              , a = t.params
              , i = t.$wrapperEl
              , s = t.activeIndex;
            a.loop && (t.loopDestroy(),
            t.slides = i.children("." + a.slideClass));
            var r, n = s;
            if ("object" == typeof e && "length"in e) {
                for (var o = 0; o < e.length; o += 1)
                    r = e[o],
                    t.slides[r] && t.slides.eq(r).remove(),
                    r < n && (n -= 1);
                n = Math.max(n, 0)
            } else
                r = e,
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1),
                n = Math.max(n, 0);
            a.loop && t.loopCreate(),
            a.observer && p.observer || t.update(),
            a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = this, t = [], a = 0; a < e.slides.length; a += 1)
                t.push(a);
            e.removeSlide(t)
        }
    }
      , x = function() {
        var e = s.navigator.userAgent
          , t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: s.cordova || s.phonegap,
            phonegap: s.cordova || s.phonegap
        }
          , a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , i = e.match(/(Android);?[\s\/]+([\d.]+)?/)
          , r = e.match(/(iPad).*OS\s([\d_]+)/)
          , n = e.match(/(iPod)(.*OS\s([\d_]+))?/)
          , o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (t.os = "windows",
        t.osVersion = a[2],
        t.windows = !0),
        i && !a && (t.os = "android",
        t.osVersion = i[2],
        t.android = !0,
        t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0),
        (r || o || n) && (t.os = "ios",
        t.ios = !0),
        o && !n && (t.osVersion = o[2].replace(/_/g, "."),
        t.iphone = !0),
        r && (t.osVersion = r[2].replace(/_/g, "."),
        t.ipad = !0),
        n && (t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null,
        t.iphone = !0),
        t.ios && t.osVersion && e.indexOf("Version/index.html") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/index-2.html")[1].split(" ")[0]),
        t.desktop = !(t.os || t.android || t.webView),
        t.webView = (o || r || n) && e.match(/.*AppleWebKit(?!.*Safari)/i),
        t.os && "ios" === t.os) {
            var l = t.osVersion.split(".")
              , p = d.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (n || o) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && p && p.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return t.pixelRatio = s.devicePixelRatio || 1,
        t
    }()
      , T = function(t) {
        var a = this
          , i = a.touchEventsData
          , s = a.params
          , r = a.touches
          , n = t;
        if (n.originalEvent && (n = n.originalEvent),
        i.isTouchEvent = "touchstart" === n.type,
        (i.isTouchEvent || !("which"in n) || 3 !== n.which) && (!i.isTouched || !i.isMoved))
            if (s.noSwiping && e(n.target).closest("." + s.noSwipingClass)[0])
                a.allowClick = !0;
            else if (!s.swipeHandler || e(n).closest(s.swipeHandler)[0]) {
                r.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX,
                r.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;
                var o = r.currentX
                  , p = r.currentY;
                if (!(x.ios && !x.cordova && s.iOSEdgeSwipeDetection && o <= s.iOSEdgeSwipeThreshold && o >= window.screen.width - s.iOSEdgeSwipeThreshold)) {
                    if (l.extend(i, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }),
                    r.startX = o,
                    r.startY = p,
                    i.touchStartTime = l.now(),
                    a.allowClick = !0,
                    a.updateSize(),
                    a.swipeDirection = void 0,
                    s.threshold > 0 && (i.allowThresholdMove = !1),
                    "touchstart" !== n.type) {
                        var c = !0;
                        e(n.target).is(i.formElements) && (c = !1),
                        d.activeElement && e(d.activeElement).is(i.formElements) && d.activeElement.blur(),
                        c && a.allowTouchMove && n.preventDefault()
                    }
                    a.emit("touchStart", n)
                }
            }
    }
      , E = function(t) {
        var a = this
          , i = a.touchEventsData
          , s = a.params
          , r = a.touches
          , n = a.rtl
          , o = t;
        if (o.originalEvent && (o = o.originalEvent),
        !i.isTouchEvent || "mousemove" !== o.type) {
            var p = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX
              , c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
            if (o.preventedByNestedSwiper)
                return r.startX = p,
                void (r.startY = c);
            if (!a.allowTouchMove)
                return a.allowClick = !1,
                void (i.isTouched && (l.extend(r, {
                    startX: p,
                    startY: c,
                    currentX: p,
                    currentY: c
                }),
                i.touchStartTime = l.now()));
            if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                if (a.isVertical()) {
                    if (c < r.startY && a.translate <= a.maxTranslate() || c > r.startY && a.translate >= a.minTranslate())
                        return i.isTouched = !1,
                        void (i.isMoved = !1)
                } else if (p < r.startX && a.translate <= a.maxTranslate() || p > r.startX && a.translate >= a.minTranslate())
                    return;
            if (i.isTouchEvent && d.activeElement && o.target === d.activeElement && e(o.target).is(i.formElements))
                return i.isMoved = !0,
                void (a.allowClick = !1);
            if (i.allowTouchCallbacks && a.emit("touchMove", o),
            !(o.targetTouches && o.targetTouches.length > 1)) {
                r.currentX = p,
                r.currentY = c;
                var u = r.currentX - r.startX
                  , h = r.currentY - r.startY;
                if (void 0 === i.isScrolling) {
                    var v;
                    a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : u * u + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI,
                    i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle)
                }
                if (i.isScrolling && a.emit("touchMoveOpposite", o),
                "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
                i.isTouched)
                    if (i.isScrolling)
                        i.isTouched = !1;
                    else if (i.startMoving) {
                        a.allowClick = !1,
                        o.preventDefault(),
                        s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                        i.isMoved || (s.loop && a.loopFix(),
                        i.startTranslate = a.getTranslate(),
                        a.setTransition(0),
                        a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                        i.allowMomentumBounce = !1,
                        !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0),
                        a.emit("sliderFirstMove", o)),
                        a.emit("sliderMove", o),
                        i.isMoved = !0;
                        var f = a.isHorizontal() ? u : h;
                        r.diff = f,
                        f *= s.touchRatio,
                        n && (f = -f),
                        a.swipeDirection = f > 0 ? "prev" : "next",
                        i.currentTranslate = f + i.startTranslate;
                        var m = !0
                          , g = s.resistanceRatio;
                        if (s.touchReleaseOnEdges && (g = 0),
                        f > 0 && i.currentTranslate > a.minTranslate() ? (m = !1,
                        s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < a.maxTranslate() && (m = !1,
                        s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, g))),
                        m && (o.preventedByNestedSwiper = !0),
                        !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                        !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                        s.threshold > 0) {
                            if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
                                return void (i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove)
                                return i.allowThresholdMove = !0,
                                r.startX = r.currentX,
                                r.startY = r.currentY,
                                i.currentTranslate = i.startTranslate,
                                void (r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                        }
                        s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(),
                        a.updateSlidesClasses()),
                        s.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: r[a.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }),
                        i.velocities.push({
                            position: r[a.isHorizontal() ? "currentX" : "currentY"],
                            time: l.now()
                        })),
                        a.updateProgress(i.currentTranslate),
                        a.setTranslate(i.currentTranslate))
                    }
            }
        }
    }
      , S = function(e) {
        var t = this
          , a = t.touchEventsData
          , i = t.params
          , s = t.touches
          , r = t.rtl
          , n = t.$wrapperEl
          , o = t.slidesGrid
          , d = t.snapGrid
          , p = e;
        if (p.originalEvent && (p = p.originalEvent),
        a.allowTouchCallbacks && t.emit("touchEnd", p),
        a.allowTouchCallbacks = !1,
        a.isTouched) {
            i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var c = l.now()
              , u = c - a.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(p),
            t.emit("tap", p),
            u < 300 && c - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout),
            a.clickTimeout = l.nextTick(function() {
                t && !t.destroyed && t.emit("click", p)
            }, 300)),
            u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout),
            t.emit("doubleTap", p))),
            a.lastClickTime = l.now(),
            l.nextTick(function() {
                t.destroyed || (t.allowClick = !0)
            }),
            !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                return a.isTouched = !1,
                void (a.isMoved = !1);
            a.isTouched = !1,
            a.isMoved = !1;
            var h;
            if (h = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate,
            i.freeMode) {
                if (h < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (h > -t.maxTranslate())
                    return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                    if (a.velocities.length > 1) {
                        var v = a.velocities.pop()
                          , f = a.velocities.pop()
                          , m = v.position - f.position
                          , g = v.time - f.time;
                        t.velocity = m / g,
                        t.velocity /= 2,
                        Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                        (g > 150 || l.now() - v.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= i.freeModeMomentumVelocityRatio,
                    a.velocities.length = 0;
                    var b = 1e3 * i.freeModeMomentumRatio
                      , w = t.velocity * b
                      , y = t.translate + w;
                    r && (y = -y);
                    var x, T = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate())
                        i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E),
                        x = t.maxTranslate(),
                        T = !0,
                        a.allowMomentumBounce = !0) : y = t.maxTranslate();
                    else if (y > t.minTranslate())
                        i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E),
                        x = t.minTranslate(),
                        T = !0,
                        a.allowMomentumBounce = !0) : y = t.minTranslate();
                    else if (i.freeModeSticky) {
                        for (var S, C = 0; C < d.length; C += 1)
                            if (d[C] > -y) {
                                S = C;
                                break
                            }
                        y = -(y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1])
                    }
                    if (0 !== t.velocity)
                        b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                    else if (i.freeModeSticky)
                        return void t.slideReset();
                    i.freeModeMomentumBounce && T ? (t.updateProgress(x),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(),
                    t.animating = !0,
                    n.transitionEnd(function() {
                        t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"),
                        t.setTransition(i.speed),
                        t.setTranslate(x),
                        n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))
                    })) : t.velocity ? (t.updateProgress(y),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(),
                    t.animating || (t.animating = !0,
                    n.transitionEnd(function() {
                        t && !t.destroyed && t.transitionEnd()
                    }))) : t.updateProgress(y),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                }
                (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses())
            } else {
                for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup)
                    void 0 !== o[P + i.slidesPerGroup] ? h >= o[P] && h < o[P + i.slidesPerGroup] && (M = P,
                    z = o[P + i.slidesPerGroup] - o[P]) : h >= o[P] && (M = P,
                    z = o[o.length - 1] - o[o.length - 2]);
                var k = (h - o[M]) / z;
                if (u > i.longSwipesMs) {
                    if (!i.longSwipes)
                        return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)),
                    "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                } else {
                    if (!i.shortSwipes)
                        return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup),
                    "prev" === t.swipeDirection && t.slideTo(M)
                }
            }
        }
    }
      , C = function() {
        var e = this
          , t = e.params
          , a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext
              , s = e.allowSlidePrev;
            if (e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            t.freeMode) {
                var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(r),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                t.autoHeight && e.updateAutoHeight()
            } else
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s,
            e.allowSlideNext = i
        }
    }
      , M = function(e) {
        var t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation()))
    }
      , z = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , P = {
        update: h,
        translate: v,
        transition: f,
        slide: g,
        loop: b,
        grabCursor: w,
        manipulation: y,
        events: {
            attachEvents: function() {
                var e = this
                  , t = e.params
                  , a = e.touchEvents
                  , i = e.el
                  , s = e.wrapperEl;
                e.onTouchStart = T.bind(e),
                e.onTouchMove = E.bind(e),
                e.onTouchEnd = S.bind(e),
                e.onClick = M.bind(e);
                var r = "container" === t.touchEventsTarget ? i : s
                  , n = !!t.nested;
                if (m.ie)
                    r.addEventListener(a.start, e.onTouchStart, !1),
                    (p.touch ? r : d).addEventListener(a.move, e.onTouchMove, n),
                    (p.touch ? r : d).addEventListener(a.end, e.onTouchEnd, !1);
                else {
                    if (p.touch) {
                        var o = !("touchstart" !== a.start || !p.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.addEventListener(a.start, e.onTouchStart, o),
                        r.addEventListener(a.move, e.onTouchMove, p.passiveListener ? {
                            passive: !1,
                            capture: n
                        } : n),
                        r.addEventListener(a.end, e.onTouchEnd, o)
                    }
                    (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1),
                    d.addEventListener("mousemove", e.onTouchMove, n),
                    d.addEventListener("mouseup", e.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
                e.on("resize observerUpdate", C)
            },
            detachEvents: function() {
                var e = this
                  , t = e.params
                  , a = e.touchEvents
                  , i = e.el
                  , s = e.wrapperEl
                  , r = "container" === t.touchEventsTarget ? i : s
                  , n = !!t.nested;
                if (m.ie)
                    r.removeEventListener(a.start, e.onTouchStart, !1),
                    (p.touch ? r : d).removeEventListener(a.move, e.onTouchMove, n),
                    (p.touch ? r : d).removeEventListener(a.end, e.onTouchEnd, !1);
                else {
                    if (p.touch) {
                        var o = !("onTouchStart" !== a.start || !p.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.removeEventListener(a.start, e.onTouchStart, o),
                        r.removeEventListener(a.move, e.onTouchMove, n),
                        r.removeEventListener(a.end, e.onTouchEnd, o)
                    }
                    (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1),
                    d.removeEventListener("mousemove", e.onTouchMove, n),
                    d.removeEventListener("mouseup", e.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0),
                e.off("resize observerUpdate", C)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this
                  , t = e.activeIndex
                  , a = e.loopedSlides;
                void 0 === a && (a = 0);
                var i = e.params
                  , s = i.breakpoints;
                if (s && (!s || 0 !== Object.keys(s).length)) {
                    var r = e.getBreakpoint(s);
                    if (r && e.currentBreakpoint !== r) {
                        var n = r in s ? s[r] : e.originalParams
                          , o = i.loop && n.slidesPerView !== i.slidesPerView;
                        l.extend(e.params, n),
                        l.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }),
                        e.currentBreakpoint = r,
                        o && (e.loopDestroy(),
                        e.loopCreate(),
                        e.updateSlides(),
                        e.slideTo(t - a + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", n)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1
                      , a = [];
                    Object.keys(e).forEach(function(e) {
                        a.push(e)
                    }),
                    a.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var i = 0; i < a.length; i += 1) {
                        var r = a[i];
                        r >= s.innerWidth && !t && (t = r)
                    }
                    return t || "max"
                }
            }
        },
        classes: {
            addClasses: function() {
                var e = this
                  , t = e.classNames
                  , a = e.params
                  , i = e.rtl
                  , r = e.$el
                  , n = [];
                n.push(a.direction),
                a.freeMode && n.push("free-mode"),
                p.flexbox || n.push("no-flexbox"),
                a.autoHeight && n.push("autoheight"),
                i && n.push("rtl"),
                a.slidesPerColumn > 1 && n.push("multirow"),
                x.android && n.push("android"),
                x.ios && n.push("ios"),
                (s.navigator.pointerEnabled || s.navigator.msPointerEnabled) && n.push("wp8-" + a.direction),
                n.forEach(function(e) {
                    t.push(a.containerModifierClass + e)
                }),
                r.addClass(t.join(" "))
            },
            removeClasses: function() {
                var e = this
                  , t = e.$el
                  , a = e.classNames;
                t.removeClass(a.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, a, i, r, n) {
                function o() {
                    n && n()
                }
                var l;
                e.complete && r ? o() : t ? ((l = new s.Image).onload = o,
                l.onerror = o,
                i && (l.sizes = i),
                a && (l.srcset = a),
                t && (l.src = t)) : o()
            },
            preloadImages: function() {
                var e = this;
                e.imagesToLoad = e.$el.find("img");
                for (var t = 0; t < e.imagesToLoad.length; t += 1) {
                    var a = e.imagesToLoad[t];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, function() {
                        void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                        e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                        e.emit("imagesReady")))
                    })
                }
            }
        }
    }
      , k = {}
      , $ = function(t) {
        function a() {
            for (var i = [], r = arguments.length; r--; )
                i[r] = arguments[r];
            var n, o;
            if (1 === i.length && i[0].constructor && i[0].constructor === Object)
                o = i[0];
            else {
                var d;
                n = (d = i)[0],
                o = d[1]
            }
            o || (o = {}),
            o = l.extend({}, o),
            n && !o.el && (o.el = n),
            t.call(this, o),
            Object.keys(P).forEach(function(e) {
                Object.keys(P[e]).forEach(function(t) {
                    a.prototype[t] || (a.prototype[t] = P[e][t])
                })
            });
            var c = this;
            void 0 === c.modules && (c.modules = {}),
            Object.keys(c.modules).forEach(function(e) {
                var t = c.modules[e];
                if (t.params) {
                    var a = Object.keys(t.params)[0]
                      , i = t.params[a];
                    if ("object" != typeof i)
                        return;
                    if (!(a in o && "enabled"in i))
                        return;
                    !0 === o[a] && (o[a] = {
                        enabled: !0
                    }),
                    "object" != typeof o[a] || "enabled"in o[a] || (o[a].enabled = !0),
                    o[a] || (o[a] = {
                        enabled: !1
                    })
                }
            });
            var u = l.extend({}, z);
            c.useModulesParams(u),
            c.params = l.extend({}, u, k, o),
            c.originalParams = l.extend({}, c.params),
            c.passedParams = l.extend({}, o);
            var h = e(c.params.el);
            if (n = h[0]) {
                if (h.length > 1) {
                    var v = [];
                    return h.each(function(e, t) {
                        var i = l.extend({}, o, {
                            el: t
                        });
                        v.push(new a(i))
                    }),
                    v
                }
                n.swiper = c,
                h.data("swiper", c);
                var f = h.children("." + c.params.wrapperClass);
                return l.extend(c, {
                    $el: h,
                    el: n,
                    $wrapperEl: f,
                    wrapperEl: f[0],
                    classNames: [],
                    slides: e(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === c.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === c.params.direction
                    },
                    rtl: "horizontal" === c.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")),
                    wrongRTL: "-webkit-box" === f.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: c.params.allowSlideNext,
                    allowSlidePrev: c.params.allowSlidePrev,
                    touchEvents: function() {
                        var e = ["touchstart", "touchmove", "touchend"]
                          , t = ["mousedown", "mousemove", "mouseup"];
                        return s.navigator.pointerEnabled ? t = ["pointerdown", "pointermove", "pointerup"] : s.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]),
                        {
                            start: p.touch || !c.params.simulateTouch ? e[0] : t[0],
                            move: p.touch || !c.params.simulateTouch ? e[1] : t[1],
                            end: p.touch || !c.params.simulateTouch ? e[2] : t[2]
                        }
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: l.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: c.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                c.useModules(),
                c.params.init && c.init(),
                c
            }
        }
        t && (a.__proto__ = t),
        a.prototype = Object.create(t && t.prototype),
        a.prototype.constructor = a;
        var i = {
            extendedDefaults: {},
            defaults: {},
            Class: {},
            $: {}
        };
        return a.prototype.slidesPerViewDynamic = function() {
            var e = this
              , t = e.params
              , a = e.slides
              , i = e.slidesGrid
              , s = e.size
              , r = e.activeIndex
              , n = 1;
            if (t.centeredSlides) {
                for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)
                    a[d] && !o && (n += 1,
                    (l += a[d].swiperSlideSize) > s && (o = !0));
                for (var p = r - 1; p >= 0; p -= 1)
                    a[p] && !o && (n += 1,
                    (l += a[p].swiperSlideSize) > s && (o = !0))
            } else
                for (var c = r + 1; c < a.length; c += 1)
                    i[c] - i[r] < s && (n += 1);
            return n
        }
        ,
        a.prototype.update = function() {
            function e() {
                a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()),
                t.setTranslate(a),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
            }
            var t = this;
            if (t && !t.destroyed) {
                t.updateSize(),
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses();
                var a;
                t.params.freeMode ? (e(),
                t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
                t.emit("update")
            }
        }
        ,
        a.prototype.init = function() {
            var e = this;
            e.initialized || (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
            e.attachEvents(),
            e.initialized = !0,
            e.emit("init"))
        }
        ,
        a.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var a = this
              , i = a.params
              , s = a.$el
              , r = a.$wrapperEl
              , n = a.slides;
            a.emit("beforeDestroy"),
            a.initialized = !1,
            a.detachEvents(),
            i.loop && a.loopDestroy(),
            t && (a.removeClasses(),
            s.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            a.emit("destroy"),
            Object.keys(a.eventsListeners).forEach(function(e) {
                a.off(e)
            }),
            !1 !== e && (a.$el[0].swiper = null,
            a.$el.data("swiper", null),
            l.deleteProps(a)),
            a.destroyed = !0
        }
        ,
        a.extendDefaults = function(e) {
            l.extend(k, e)
        }
        ,
        i.extendedDefaults.get = function() {
            return k
        }
        ,
        i.defaults.get = function() {
            return z
        }
        ,
        i.Class.get = function() {
            return t
        }
        ,
        i.$.get = function() {
            return e
        }
        ,
        Object.defineProperties(a, i),
        a
    }(c)
      , I = {
        name: "device",
        proto: {
            device: x
        },
        static: {
            device: x
        }
    }
      , L = {
        name: "support",
        proto: {
            support: p
        },
        static: {
            support: p
        }
    }
      , D = {
        name: "browser",
        proto: {
            browser: m
        },
        static: {
            browser: m
        }
    }
      , O = {
        name: "resize",
        create: function() {
            var e = this;
            l.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                s.addEventListener("resize", e.resize.resizeHandler),
                s.addEventListener("orientationchange", e.resize.orientationChangeHandler)
            },
            destroy: function() {
                var e = this;
                s.removeEventListener("resize", e.resize.resizeHandler),
                s.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
            }
        }
    }
      , A = {
        func: s.MutationObserver || s.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var a = this
              , i = new (0,
            A.func)(function(e) {
                e.forEach(function(e) {
                    a.emit("observerUpdate", e)
                })
            }
            );
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            a.observer.observers.push(i)
        },
        init: function() {
            var e = this;
            if (p.observer && e.params.observer) {
                if (e.params.observeParents)
                    for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                        e.observer.attach(t[a]);
                e.observer.attach(e.$el[0], {
                    childList: !1
                }),
                e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            var e = this;
            e.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
            e.observer.observers = []
        }
    }
      , H = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1
        },
        create: function() {
            var e = this;
            l.extend(e, {
                observer: {
                    init: A.init.bind(e),
                    attach: A.attach.bind(e),
                    destroy: A.destroy.bind(e),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , N = {
        update: function(e) {
            function t() {
                a.updateSlides(),
                a.updateProgress(),
                a.updateSlidesClasses(),
                a.lazy && a.params.lazy.enabled && a.lazy.load()
            }
            var a = this
              , i = a.params
              , s = i.slidesPerView
              , r = i.slidesPerGroup
              , n = i.centeredSlides
              , o = a.virtual
              , d = o.from
              , p = o.to
              , c = o.slides
              , u = o.slidesGrid
              , h = o.renderSlide
              , v = o.offset;
            a.updateActiveIndex();
            var f, m = a.activeIndex || 0;
            f = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top";
            var g, b;
            n ? (g = Math.floor(s / 2) + r,
            b = Math.floor(s / 2) + r) : (g = s + (r - 1),
            b = r);
            var w = Math.max((m || 0) - b, 0)
              , y = Math.min((m || 0) + g, c.length - 1)
              , x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
            if (l.extend(a.virtual, {
                from: w,
                to: y,
                offset: x,
                slidesGrid: a.slidesGrid
            }),
            d === w && p === y && !e)
                return a.slidesGrid !== u && x !== v && a.slides.css(f, x + "px"),
                void a.updateProgress();
            if (a.params.virtual.renderExternal)
                return a.params.virtual.renderExternal.call(a, {
                    offset: x,
                    from: w,
                    to: y,
                    slides: function() {
                        for (var e = [], t = w; t <= y; t += 1)
                            e.push(c[t]);
                        return e
                    }()
                }),
                void t();
            var T = []
              , E = [];
            if (e)
                a.$wrapperEl.find("." + a.params.slideClass).remove();
            else
                for (var S = d; S <= p; S += 1)
                    (S < w || S > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
            for (var C = 0; C < c.length; C += 1)
                C >= w && C <= y && (void 0 === p || e ? E.push(C) : (C > p && E.push(C),
                C < d && T.push(C)));
            E.forEach(function(e) {
                a.$wrapperEl.append(h(c[e], e))
            }),
            T.sort(function(e, t) {
                return e < t
            }).forEach(function(e) {
                a.$wrapperEl.prepend(h(c[e], e))
            }),
            a.$wrapperEl.children(".swiper-slide").css(f, x + "px"),
            t()
        },
        renderSlide: function(t, a) {
            var i = this
              , s = i.params.virtual;
            if (s.cache && i.virtual.cache[a])
                return i.virtual.cache[a];
            var r = e(s.renderSlide ? s.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + a + '">' + t + "</div>");
            return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", a),
            s.cache && (i.virtual.cache[a] = r),
            r
        },
        appendSlide: function(e) {
            var t = this;
            t.virtual.slides.push(e),
            t.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this;
            if (t.virtual.slides.unshift(e),
            t.params.virtual.cache) {
                var a = t.virtual.cache
                  , i = {};
                Object.keys(a).forEach(function(e) {
                    i[e + 1] = a[e]
                }),
                t.virtual.cache = i
            }
            t.virtual.update(!0),
            t.slideNext(0)
        }
    }
      , X = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                virtual: {
                    update: N.update.bind(e),
                    appendSlide: N.appendSlide.bind(e),
                    prependSlide: N.prependSlide.bind(e),
                    renderSlide: N.renderSlide.bind(e),
                    slides: e.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if (e.params.virtual.enabled) {
                    e.classNames.push(e.params.containerModifierClass + "virtual");
                    var t = {
                        watchSlidesProgress: !0
                    };
                    l.extend(e.params, t),
                    l.extend(e.originalParams, t),
                    e.virtual.update()
                }
            },
            setTranslate: function() {
                var e = this;
                e.params.virtual.enabled && e.virtual.update()
            }
        }
    }
      , Y = {
        handle: function(e) {
            var t = this
              , a = e;
            a.originalEvent && (a = a.originalEvent);
            var i = a.keyCode || a.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase()))) {
                if (37 === i || 39 === i || 38 === i || 40 === i) {
                    var r = !1;
                    if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                        return;
                    var n = {
                        left: s.pageXOffset,
                        top: s.pageYOffset
                    }
                      , o = s.innerWidth
                      , l = s.innerHeight
                      , p = t.$el.offset();
                    t.rtl && (p.left -= t.$el[0].scrollLeft);
                    for (var c = [[p.left, p.top], [p.left + t.width, p.top], [p.left, p.top + t.height], [p.left + t.width, p.top + t.height]], u = 0; u < c.length; u += 1) {
                        var h = c[u];
                        h[0] >= n.left && h[0] <= n.left + o && h[1] >= n.top && h[1] <= n.top + l && (r = !0)
                    }
                    if (!r)
                        return
                }
                t.isHorizontal() ? (37 !== i && 39 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(),
                (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                40 === i && t.slideNext(),
                38 === i && t.slidePrev()),
                t.emit("keyPress", i)
            }
        },
        enable: function() {
            var t = this;
            t.keyboard.enabled || (e(d).on("keydown", t.keyboard.handle),
            t.keyboard.enabled = !0)
        },
        disable: function() {
            var t = this;
            t.keyboard.enabled && (e(d).off("keydown", t.keyboard.handle),
            t.keyboard.enabled = !1)
        }
    }
      , G = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                keyboard: {
                    enabled: !1,
                    enable: Y.enable.bind(e),
                    disable: Y.disable.bind(e),
                    handle: Y.handle.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.keyboard.enabled && e.keyboard.enable()
            },
            destroy: function() {
                var e = this;
                e.keyboard.enabled && e.keyboard.disable()
            }
        }
    }
      , B = {
        lastScrollTime: l.now(),
        event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : a() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0
              , a = 0
              , i = 0
              , s = 0;
            return "detail"in e && (a = e.detail),
            "wheelDelta"in e && (a = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (a = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = a,
            a = 0),
            i = 10 * t,
            s = 10 * a,
            "deltaY"in e && (s = e.deltaY),
            "deltaX"in e && (i = e.deltaX),
            (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
            s *= 40) : (i *= 800,
            s *= 800)),
            i && !t && (t = i < 1 ? -1 : 1),
            s && !a && (a = s < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: a,
                pixelX: i,
                pixelY: s
            }
        },
        handle: function(e) {
            var t = e
              , a = this
              , i = a.params.mousewheel;
            t.originalEvent && (t = t.originalEvent);
            var r = 0
              , n = a.rtl ? -1 : 1
              , o = B.normalize(t);
            if (i.forceToAxis)
                if (a.isHorizontal()) {
                    if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                        return !0;
                    r = o.pixelX * n
                } else {
                    if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                        return !0;
                    r = o.pixelY
                }
            else
                r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
            if (0 === r)
                return !0;
            if (i.invert && (r = -r),
            a.params.freeMode) {
                var d = a.getTranslate() + r * i.sensitivity
                  , p = a.isBeginning
                  , c = a.isEnd;
                if (d >= a.minTranslate() && (d = a.minTranslate()),
                d <= a.maxTranslate() && (d = a.maxTranslate()),
                a.setTransition(0),
                a.setTranslate(d),
                a.updateProgress(),
                a.updateActiveIndex(),
                a.updateSlidesClasses(),
                (!p && a.isBeginning || !c && a.isEnd) && a.updateSlidesClasses(),
                a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout),
                a.mousewheel.timeout = l.nextTick(function() {
                    a.slideReset()
                }, 300)),
                a.emit("scroll", t),
                a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(),
                0 === d || d === a.maxTranslate())
                    return !0
            } else {
                if (l.now() - a.mousewheel.lastScrollTime > 60)
                    if (r < 0)
                        if (a.isEnd && !a.params.loop || a.animating) {
                            if (i.releaseOnEdges)
                                return !0
                        } else
                            a.slideNext(),
                            a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges)
                            return !0
                    } else
                        a.slidePrev(),
                        a.emit("scroll", t);
                a.mousewheel.lastScrollTime = (new s.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        enable: function() {
            var t = this;
            if (!B.event)
                return !1;
            if (t.mousewheel.enabled)
                return !1;
            var a = t.$el;
            return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)),
            a.on(B.event, t.mousewheel.handle),
            t.mousewheel.enabled = !0,
            !0
        },
        disable: function() {
            var t = this;
            if (!B.event)
                return !1;
            if (!t.mousewheel.enabled)
                return !1;
            var a = t.$el;
            return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)),
            a.off(B.event, t.mousewheel.handle),
            t.mousewheel.enabled = !1,
            !0
        }
    }
      , V = {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: B.enable.bind(e),
                    disable: B.disable.bind(e),
                    handle: B.handle.bind(e),
                    lastScrollTime: l.now()
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.mousewheel.enabled && e.mousewheel.enable()
            },
            destroy: function() {
                var e = this;
                e.mousewheel.enabled && e.mousewheel.disable()
            }
        }
    }
      , R = {
        update: function() {
            var e = this
              , t = e.params.navigation;
            if (!e.params.loop) {
                var a = e.navigation
                  , i = a.$nextEl
                  , s = a.$prevEl;
                s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)),
                i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass))
            }
        },
        init: function() {
            var t = this
              , a = t.params.navigation;
            if (a.nextEl || a.prevEl) {
                var i, s;
                a.nextEl && (i = e(a.nextEl),
                t.params.uniqueNavElements && "string" == typeof a.nextEl && i.length > 1 && 1 === t.$el.find(a.nextEl).length && (i = t.$el.find(a.nextEl))),
                a.prevEl && (s = e(a.prevEl),
                t.params.uniqueNavElements && "string" == typeof a.prevEl && s.length > 1 && 1 === t.$el.find(a.prevEl).length && (s = t.$el.find(a.prevEl))),
                i && i.length > 0 && i.on("click", function(e) {
                    e.preventDefault(),
                    t.isEnd && !t.params.loop || t.slideNext()
                }),
                s && s.length > 0 && s.on("click", function(e) {
                    e.preventDefault(),
                    t.isBeginning && !t.params.loop || t.slidePrev()
                }),
                l.extend(t.navigation, {
                    $nextEl: i,
                    nextEl: i && i[0],
                    $prevEl: s,
                    prevEl: s && s[0]
                })
            }
        },
        destroy: function() {
            var e = this
              , t = e.navigation
              , a = t.$nextEl
              , i = t.$prevEl;
            a && a.length && (a.off("click"),
            a.removeClass(e.params.navigation.disabledClass)),
            i && i.length && (i.off("click"),
            i.removeClass(e.params.navigation.disabledClass))
        }
    }
      , W = {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden"
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                navigation: {
                    init: R.init.bind(e),
                    update: R.update.bind(e),
                    destroy: R.destroy.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.navigation.init(),
                e.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(t) {
                var a = this
                  , i = a.navigation
                  , s = i.$nextEl
                  , r = i.$prevEl;
                !a.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(s) || (s && s.toggleClass(a.params.navigation.hiddenClass),
                r && r.toggleClass(a.params.navigation.hiddenClass))
            }
        }
    }
      , F = {
        update: function() {
            var t = this
              , a = t.rtl
              , i = t.params.pagination;
            if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                var s, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, n = t.pagination.$el, o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides),
                s > o - 1 && (s -= o),
                s < 0 && "bullets" !== t.params.paginationType && (s = o + s)) : s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
                "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    var l = t.pagination.bullets;
                    if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    n.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")),
                    l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"),
                    n.length > 1)
                        l.each(function(t, a) {
                            var r = e(a);
                            r.index() === s && (r.addClass(i.bulletActiveClass),
                            i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                            r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                        });
                    else {
                        var d = l.eq(s);
                        d.addClass(i.bulletActiveClass),
                        i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                        d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                    }
                    if (i.dynamicBullets) {
                        var p = Math.min(l.length, 5)
                          , c = (t.pagination.bulletSize * p - t.pagination.bulletSize) / 2 - s * t.pagination.bulletSize
                          , u = a ? "right" : "left";
                        l.css(t.isHorizontal() ? u : "top", c + "px")
                    }
                }
                if ("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1),
                n.find("." + i.totalClass).text(o)),
                "progressbar" === i.type) {
                    var h = (s + 1) / o
                      , v = h
                      , f = 1;
                    t.isHorizontal() || (f = h,
                    v = 1),
                    n.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + v + ") scaleY(" + f + ")").transition(t.params.speed)
                }
                "custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(t, s + 1, o)),
                t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0])
            }
        },
        render: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , i = e.pagination.$el
                  , s = "";
                if ("bullets" === t.type) {
                    for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                        t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s),
                    e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var t = this
              , a = t.params.pagination;
            if (a.el) {
                var i = e(a.el);
                0 !== i.length && (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)),
                "bullets" === a.type && a.clickable && i.addClass(a.clickableClass),
                i.addClass(a.modifierClass + a.type),
                "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"),
                a.clickable && i.on("click", "." + a.bulletClass, function(a) {
                    a.preventDefault();
                    var i = e(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (i += t.loopedSlides),
                    t.slideTo(i)
                }),
                l.extend(t.pagination, {
                    $el: i,
                    el: i[0]
                }))
            }
        },
        destroy: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.pagination.$el;
                a.removeClass(t.hiddenClass),
                a.removeClass(t.modifierClass + t.type),
                e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && a.off("click", "." + t.bulletClass)
            }
        }
    }
      , j = {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                type: "bullets",
                dynamicBullets: !1,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                clickableClass: "swiper-pagination-clickable"
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                pagination: {
                    init: F.init.bind(e),
                    render: F.render.bind(e),
                    update: F.update.bind(e),
                    destroy: F.destroy.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.pagination.init(),
                e.pagination.render(),
                e.pagination.update()
            },
            activeIndexChange: function() {
                var e = this;
                e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
            },
            snapIndexChange: function() {
                var e = this;
                e.params.loop || e.pagination.update()
            },
            slidesLengthChange: function() {
                var e = this;
                e.params.loop && (e.pagination.render(),
                e.pagination.update())
            },
            snapGridLengthChange: function() {
                var e = this;
                e.params.loop || (e.pagination.render(),
                e.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(t) {
                var a = this;
                a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)
            }
        }
    }
      , q = {
        setTranslate: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                  , a = e.rtl
                  , i = e.progress
                  , s = t.dragSize
                  , r = t.trackSize
                  , n = t.$dragEl
                  , o = t.$el
                  , l = e.params.scrollbar
                  , d = s
                  , c = (r - s) * i;
                a && e.isHorizontal() ? (c = -c) > 0 ? (d = s - c,
                c = 0) : -c + s > r && (d = r + c) : c < 0 ? (d = s + c,
                c = 0) : c + s > r && (d = r - c),
                e.isHorizontal() ? (p.transforms3d ? n.transform("translate3d(" + c + "px, 0, 0)") : n.transform("translateX(" + c + "px)"),
                n[0].style.width = d + "px") : (p.transforms3d ? n.transform("translate3d(0px, " + c + "px, 0)") : n.transform("translateY(" + c + "px)"),
                n[0].style.height = d + "px"),
                l.hide && (clearTimeout(e.scrollbar.timeout),
                o[0].style.opacity = 1,
                e.scrollbar.timeout = setTimeout(function() {
                    o[0].style.opacity = 0,
                    o.transition(400)
                }, 1e3))
            }
        },
        setTransition: function(e) {
            var t = this;
            t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                  , a = t.$dragEl
                  , i = t.$el;
                a[0].style.width = "",
                a[0].style.height = "";
                var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize, o = n * (r / e.size);
                s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10),
                e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px",
                i[0].style.display = n >= 1 ? "none" : "",
                e.params.scrollbarHide && (i[0].style.opacity = 0),
                l.extend(t, {
                    trackSize: r,
                    divider: n,
                    moveDivider: o,
                    dragSize: s
                })
            }
        },
        setDragPosition: function(e) {
            var t, a = this, i = a.scrollbar, s = i.$el, r = i.dragSize, n = i.trackSize;
            t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[a.isHorizontal() ? "left" : "top"] - r / 2) / (n - r),
            t = Math.max(Math.min(t, 1), 0),
            a.rtl && (t = 1 - t);
            var o = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
            a.updateProgress(o),
            a.setTranslate(o),
            a.updateActiveIndex(),
            a.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this
              , a = t.params.scrollbar
              , i = t.scrollbar
              , s = t.$wrapperEl
              , r = i.$el
              , n = i.$dragEl;
            t.scrollbar.isTouched = !0,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            n.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            r.transition(0),
            a.hide && r.css("opacity", 1),
            t.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this
              , a = t.scrollbar
              , i = t.$wrapperEl
              , s = a.$el
              , r = a.$dragEl;
            t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            a.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            r.transition(0),
            t.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this
              , a = t.params.scrollbar
              , i = t.scrollbar.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
            a.hide && (clearTimeout(t.scrollbar.dragTimeout),
            t.scrollbar.dragTimeout = l.nextTick(function() {
                i.css("opacity", 0),
                i.transition(400)
            }, 1e3)),
            t.emit("scrollbarDragEnd", e),
            a.snapOnRelease && t.slideReset())
        },
        enableDraggable: function() {
            var t = this;
            if (t.params.scrollbar.el) {
                var a = t.scrollbar.$el
                  , i = p.touch ? a[0] : document;
                a.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart),
                e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove),
                e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
            }
        },
        disableDraggable: function() {
            var t = this;
            if (t.params.scrollbar.el) {
                var a = t.scrollbar.$el
                  , i = p.touch ? a[0] : document;
                a.off(t.scrollbar.dragEvents.start),
                e(i).off(t.scrollbar.dragEvents.move),
                e(i).off(t.scrollbar.dragEvents.end)
            }
        },
        init: function() {
            var t = this;
            if (t.params.scrollbar.el) {
                var a = t.scrollbar
                  , i = t.$el
                  , s = t.touchEvents
                  , r = t.params.scrollbar
                  , n = e(r.el);
                t.params.uniqueNavElements && "string" == typeof r.el && n.length > 1 && 1 === i.find(r.el).length && (n = i.find(r.el));
                var o = n.find(".swiper-scrollbar-drag");
                0 === o.length && (o = e('<div class="swiper-scrollbar-drag"></div>'),
                n.append(o)),
                t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || p.touch ? s : {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                l.extend(a, {
                    $el: n,
                    el: n[0],
                    $dragEl: o,
                    dragEl: o[0]
                }),
                r.draggable && a.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , K = {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                scrollbar: {
                    init: q.init.bind(e),
                    destroy: q.destroy.bind(e),
                    updateSize: q.updateSize.bind(e),
                    setTranslate: q.setTranslate.bind(e),
                    setTransition: q.setTransition.bind(e),
                    enableDraggable: q.enableDraggable.bind(e),
                    disableDraggable: q.disableDraggable.bind(e),
                    setDragPosition: q.setDragPosition.bind(e),
                    onDragStart: q.onDragStart.bind(e),
                    onDragMove: q.onDragMove.bind(e),
                    onDragEnd: q.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.scrollbar.init(),
                e.scrollbar.updateSize(),
                e.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }
      , U = {
        setTransform: function(t, a) {
            var i = this
              , s = i.rtl
              , r = e(t)
              , n = s ? -1 : 1
              , o = r.attr("data-swiper-parallax") || "0"
              , l = r.attr("data-swiper-parallax-x")
              , d = r.attr("data-swiper-parallax-y")
              , p = r.attr("data-swiper-parallax-scale")
              , c = r.attr("data-swiper-parallax-opacity");
            if (l || d ? (l = l || "0",
            d = d || "0") : i.isHorizontal() ? (l = o,
            d = "0") : (d = o,
            l = "0"),
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a * n + "%" : l * a * n + "px",
            d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px",
            void 0 !== c && null !== c) {
                var u = c - (c - 1) * (1 - Math.abs(a));
                r[0].style.opacity = u
            }
            if (void 0 === p || null === p)
                r.transform("translate3d(" + l + ", " + d + ", 0px)");
            else {
                var h = p - (p - 1) * (1 - Math.abs(a));
                r.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")")
            }
        },
        setTranslate: function() {
            var t = this
              , a = t.$el
              , i = t.slides
              , s = t.progress
              , r = t.snapGrid;
            a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, a) {
                t.parallax.setTransform(a, s)
            }),
            i.each(function(a, i) {
                var n = i.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(a / 2) - s * (r.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, a) {
                    t.parallax.setTransform(a, n)
                })
            })
        },
        setTransition: function(t) {
            void 0 === t && (t = this.params.speed),
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a, i) {
                var s = e(i)
                  , r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                0 === t && (r = 0),
                s.transition(r)
            })
        }
    }
      , _ = {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                parallax: {
                    setTransform: U.setTransform.bind(e),
                    setTranslate: U.setTranslate.bind(e),
                    setTransition: U.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.watchSlidesProgress = !0
            },
            init: function() {
                var e = this;
                e.params.parallax && e.parallax.setTranslate()
            },
            setTranslate: function() {
                var e = this;
                e.params.parallax && e.parallax.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                t.params.parallax && t.parallax.setTransition(e)
            }
        }
    }
      , Z = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , a = e.targetTouches[0].pageY
              , i = e.targetTouches[1].pageX
              , s = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
        },
        onGestureStart: function(t) {
            var a = this
              , i = a.params.zoom
              , s = a.zoom
              , r = s.gesture;
            if (s.fakeGestureTouched = !1,
            s.fakeGestureMoved = !1,
            !p.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                    return;
                s.fakeGestureTouched = !0,
                r.scaleStart = Z.getDistanceBetweenTouches(t)
            }
            r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this),
            0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)),
            r.$imageEl = r.$slideEl.find("img, svg, canvas"),
            r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass),
            r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
            0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0),
            a.zoom.isScaling = !0) : r.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this
              , a = t.params.zoom
              , i = t.zoom
              , s = i.gesture;
            if (!p.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                s.scaleMove = Z.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (p.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale,
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
            i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this
              , a = t.params.zoom
              , i = t.zoom
              , s = i.gesture;
            if (!p.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android)
                    return;
                i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio),
            s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            i.currentScale = i.scale,
            i.isScaling = !1,
            1 === i.scale && (s.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , a = t.gesture
              , i = t.image;
            a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (x.android && e.preventDefault(),
            i.isTouched = !0,
            i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this
              , a = t.zoom
              , i = a.gesture
              , s = a.image
              , r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                t.rtl && (s.startX = -s.startX),
                t.rtl && (s.startY = -s.startY));
                var n = s.width * a.scale
                  , o = s.height * a.scale;
                if (!(n < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                    r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                    r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                    Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                    r.prevPositionX = s.touchesCurrent.x,
                    r.prevPositionY = s.touchesCurrent.y,
                    r.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , a = e.image
              , i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved)
                    return a.isTouched = !1,
                    void (a.isMoved = !1);
                a.isTouched = !1,
                a.isMoved = !1;
                var s = 300
                  , r = 300
                  , n = i.x * s
                  , o = a.currentX + n
                  , l = i.y * r
                  , d = a.currentY + l;
                0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
                0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                var p = Math.max(s, r);
                a.currentX = o,
                a.currentY = d;
                var c = a.width * e.scale
                  , u = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - c / 2, 0),
                a.maxX = -a.minX,
                a.minY = Math.min(t.slideHeight / 2 - u / 2, 0),
                a.maxY = -a.minY,
                a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX),
                a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY),
                t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this
              , t = e.zoom
              , a = t.gesture;
            a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            a.$imageWrapEl.transform("translate3d(0,0,0)"),
            a.$slideEl = void 0,
            a.$imageEl = void 0,
            a.$imageWrapEl = void 0,
            t.scale = 1,
            t.currentScale = 1)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(t) {
            var a = this
              , i = a.zoom
              , s = a.params.zoom
              , r = i.gesture
              , n = i.image;
            if (r.$slideEl || (r.$slideEl = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex),
            r.$imageEl = r.$slideEl.find("img, svg, canvas"),
            r.$imageWrapEl = r.$imageEl.parent("." + s.containerClass)),
            r.$imageEl && 0 !== r.$imageEl.length) {
                r.$slideEl.addClass("" + s.zoomedSlideClass);
                var o, l, d, p, c, u, h, v, f, m, g, b, w, y, x, T;
                void 0 === n.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = n.touchesStart.x,
                l = n.touchesStart.y),
                i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio,
                i.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio,
                t ? (x = r.$slideEl[0].offsetWidth,
                T = r.$slideEl[0].offsetHeight,
                d = r.$slideEl.offset().left + x / 2 - o,
                p = r.$slideEl.offset().top + T / 2 - l,
                h = r.$imageEl[0].offsetWidth,
                v = r.$imageEl[0].offsetHeight,
                f = h * i.scale,
                m = v * i.scale,
                w = -(g = Math.min(x / 2 - f / 2, 0)),
                y = -(b = Math.min(T / 2 - m / 2, 0)),
                c = d * i.scale,
                u = p * i.scale,
                c < g && (c = g),
                c > w && (c = w),
                u < b && (u = b),
                u > y && (u = y)) : (c = 0,
                u = 0),
                r.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + u + "px,0)"),
                r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
            }
        },
        out: function() {
            var t = this
              , a = t.zoom
              , i = t.params.zoom
              , s = a.gesture;
            s.$slideEl || (s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex),
            s.$imageEl = s.$slideEl.find("img, svg, canvas"),
            s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)),
            s.$imageEl && 0 !== s.$imageEl.length && (a.scale = 1,
            a.currentScale = 1,
            s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            s.$slideEl.removeClass("" + i.zoomedSlideClass),
            s.$slideEl = void 0)
        },
        enable: function() {
            var t = this
              , a = t.zoom;
            if (!a.enabled) {
                a.enabled = !0;
                var i = t.slides
                  , s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                p.gestures ? (i.on("gesturestart", a.onGestureStart, s),
                i.on("gesturechange", a.onGestureChange, s),
                i.on("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, s),
                i.on(t.touchEvents.move, a.onGestureChange, s),
                i.on(t.touchEvents.end, a.onGestureEnd, s)),
                t.slides.each(function(i, s) {
                    var r = e(s);
                    r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, a.onTouchMove)
                })
            }
        },
        disable: function() {
            var t = this
              , a = t.zoom;
            if (a.enabled) {
                t.zoom.enabled = !1;
                var i = t.slides
                  , s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                p.gestures ? (i.off("gesturestart", a.onGestureStart, s),
                i.off("gesturechange", a.onGestureChange, s),
                i.off("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, s),
                i.off(t.touchEvents.move, a.onGestureChange, s),
                i.off(t.touchEvents.end, a.onGestureEnd, s)),
                t.slides.each(function(i, s) {
                    var r = e(s);
                    r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, a.onTouchMove)
                })
            }
        }
    }
      , Q = {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(a) {
                t[a] = Z[a].bind(e)
            }),
            l.extend(e, {
                zoom: t
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.zoom.enabled && e.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                var t = this;
                t.zoom.enabled && t.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                var t = this;
                t.zoom.enabled && t.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                var t = this;
                t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
            },
            transitionEnd: function() {
                var e = this;
                e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
            }
        }
    }
      , J = {
        loadInSlide: function(t, a) {
            void 0 === a && (a = !0);
            var i = this
              , s = i.params.lazy;
            if (void 0 !== t && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t)
                  , n = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (n = n.add(r[0])),
                0 !== n.length && n.each(function(t, n) {
                    var o = e(n);
                    o.addClass(s.loadingClass);
                    var l = o.attr("data-background")
                      , d = o.attr("data-src")
                      , p = o.attr("data-srcset")
                      , c = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, p, c, !1, function() {
                        if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'),
                            o.removeAttr("data-background")) : (p && (o.attr("srcset", p),
                            o.removeAttr("data-srcset")),
                            c && (o.attr("sizes", c),
                            o.removeAttr("data-sizes")),
                            d && (o.attr("src", d),
                            o.removeAttr("data-src"))),
                            o.addClass(s.loadedClass).removeClass(s.loadingClass),
                            r.find("." + s.preloaderClass).remove(),
                            i.params.loop && a) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0])
                        }
                    }),
                    i.emit("lazyImageLoad", r[0], o[0])
                })
            }
        },
        load: function() {
            function t(e) {
                if (l) {
                    if (s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (n[e])
                    return !0;
                return !1
            }
            function a(t) {
                return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
            }
            var i = this
              , s = i.$wrapperEl
              , r = i.params
              , n = i.slides
              , o = i.activeIndex
              , l = i.virtual && r.virtual.enabled
              , d = r.lazy
              , p = r.slidesPerView;
            if ("auto" === p && (p = 0),
            i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
            i.params.watchSlidesVisibility)
                s.children("." + r.slideVisibleClass).each(function(t, a) {
                    var s = l ? e(a).attr("data-swiper-slide-index") : e(a).index();
                    i.lazy.loadInSlide(s)
                });
            else if (p > 1)
                for (var c = o; c < o + p; c += 1)
                    t(c) && i.lazy.loadInSlide(c);
            else
                i.lazy.loadInSlide(o);
            if (d.loadPrevNext)
                if (p > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                    for (var u = d.loadPrevNextAmount, h = p, v = Math.min(o + h + Math.max(u, h), n.length), f = Math.max(o - Math.max(h, u), 0), m = o + p; m < v; m += 1)
                        t(m) && i.lazy.loadInSlide(m);
                    for (var g = f; g < o; g += 1)
                        t(g) && i.lazy.loadInSlide(g)
                } else {
                    var b = s.children("." + r.slideNextClass);
                    b.length > 0 && i.lazy.loadInSlide(a(b));
                    var w = s.children("." + r.slidePrevClass);
                    w.length > 0 && i.lazy.loadInSlide(a(w))
                }
        }
    }
      , ee = {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                lazy: {
                    initialImageLoaded: !1,
                    load: J.load.bind(e),
                    loadInSlide: J.loadInSlide.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
            },
            init: function() {
                var e = this;
                e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
            },
            scroll: function() {
                var e = this;
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            },
            resize: function() {
                var e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            scrollbarDragMove: function() {
                var e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            transitionStart: function() {
                var e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd: function() {
                var e = this;
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
            }
        }
    }
      , te = {
        LinearSpline: function(e, t) {
            var a = function() {
                var e, t, a;
                return function(i, s) {
                    for (t = -1,
                    e = i.length; e - t > 1; )
                        i[a = e + t >> 1] <= s ? t = a : e = a;
                    return e
                }
            }();
            this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1;
            var i, s;
            return this.interpolate = function(e) {
                return e ? (s = a(this.x, e),
                i = s - 1,
                (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new te.LinearSpline(t.slidesGrid,e.slidesGrid) : new te.LinearSpline(t.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            function a(e) {
                var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e),
                s = -r.controller.spline.interpolate(-t)),
                s && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()),
                s = (t - r.minTranslate()) * i + e.minTranslate()),
                r.params.controller.inverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setTranslate(s, r),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            var i, s, r = this, n = r.controller.control;
            if (Array.isArray(n))
                for (var o = 0; o < n.length; o += 1)
                    n[o] !== t && n[o]instanceof $ && a(n[o]);
            else
                n instanceof $ && t !== n && a(n)
        },
        setTransition: function(e, t) {
            function a(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                t.$wrapperEl.transitionEnd(function() {
                    r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }))
            }
            var i, s = this, r = s.controller.control;
            if (Array.isArray(r))
                for (i = 0; i < r.length; i += 1)
                    r[i] !== t && r[i]instanceof $ && a(r[i]);
            else
                r instanceof $ && t !== r && a(r)
        }
    }
      , ae = {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: te.getInterpolateFunction.bind(e),
                    setTranslate: te.setTranslate.bind(e),
                    setTransition: te.setTransition.bind(e)
                }
            })
        },
        on: {
            update: function() {
                var e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            resize: function() {
                var e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            observerUpdate: function() {
                var e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            setTranslate: function(e, t) {
                var a = this;
                a.controller.control && a.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                var a = this;
                a.controller.control && a.controller.setTransition(e, t)
            }
        }
    }
      , ie = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(t) {
            var a = this
              , i = a.params.a11y;
            if (13 === t.keyCode) {
                var s = e(t.target);
                a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(),
                a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)),
                a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(),
                a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)),
                a.pagination && s.is("." + a.params.pagination.bulletClass) && s[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            var e = this;
            if (!e.params.loop) {
                var t = e.navigation
                  , a = t.$nextEl
                  , i = t.$prevEl;
                i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
                a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
            }
        },
        updatePagination: function() {
            var t = this
              , a = t.params.a11y;
            t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, s) {
                var r = e(s);
                t.a11y.makeElFocusable(r),
                t.a11y.addElRole(r, "button"),
                t.a11y.addElLabel(r, a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
            })
        },
        init: function() {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, a, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            t && (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
            a && (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, "button"),
            e.a11y.addElLabel(a, i.prevSlideMessage),
            a.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function() {
            var e = this;
            e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
            var t, a;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            t && t.off("keydown", e.a11y.onEnterKey),
            a && a.off("keydown", e.a11y.onEnterKey),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        }
    }
      , se = {
        name: "a11y",
        params: {
            a11y: {
                enabled: !1,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var t = this;
            l.extend(t, {
                a11y: {
                    liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(ie).forEach(function(e) {
                t.a11y[e] = ie[e].bind(t)
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.a11y.enabled && (e.a11y.init(),
                e.a11y.updateNavigation())
            },
            toEdge: function() {
                var e = this;
                e.params.a11y.enabled && e.a11y.updateNavigation()
            },
            fromEdge: function() {
                var e = this;
                e.params.a11y.enabled && e.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                var e = this;
                e.params.a11y.enabled && e.a11y.updatePagination()
            },
            destroy: function() {
                var e = this;
                e.params.a11y.enabled && e.a11y.destroy()
            }
        }
    }
      , re = {
        init: function() {
            var e = this;
            if (e.params.history) {
                if (!s.history || !s.history.pushState)
                    return e.params.history.enabled = !1,
                    void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0,
                t.paths = re.getPathValues(),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState))
            }
        },
        destroy: function() {
            var e = this;
            e.params.history.replaceState || s.removeEventListener("popstate", e.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            var e = this;
            e.history.paths = re.getPathValues(),
            e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = s.location.pathname.slice(1).split("../../../www.markupthemex.com/index.html").filter(function(e) {
                return "" !== e
            })
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            var a = this;
            if (a.history.initialized && a.params.history.enabled) {
                var i = a.slides.eq(t)
                  , r = re.slugify(i.attr("data-history"));
                s.location.pathname.includes(e) || (r = e + "/" + r);
                var n = s.history.state;
                n && n.value === r || (a.params.history.replaceState ? s.history.replaceState({
                    value: r
                }, null, r) : s.history.pushState({
                    value: r
                }, null, r))
            }
        },
        slugify: function(e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, a) {
            var i = this;
            if (t)
                for (var s = 0, r = i.slides.length; s < r; s += 1) {
                    var n = i.slides.eq(s);
                    if (re.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                        var o = n.index();
                        i.slideTo(o, e, a)
                    }
                }
            else
                i.slideTo(0, e, a)
        }
    }
      , ne = {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                history: {
                    init: re.init.bind(e),
                    setHistory: re.setHistory.bind(e),
                    setHistoryPopState: re.setHistoryPopState.bind(e),
                    scrollToSlide: re.scrollToSlide.bind(e),
                    destroy: re.destroy.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.history.enabled && e.history.init()
            },
            destroy: function() {
                var e = this;
                e.params.history.enabled && e.history.destroy()
            },
            transitionEnd: function() {
                var e = this;
                e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
            }
        }
    }
      , oe = {
        onHashCange: function() {
            var e = this
              , t = d.location.hash.replace("#", "");
            t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
        },
        setHash: function() {
            var e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState)
                    s.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                else {
                    var t = e.slides.eq(e.activeIndex)
                      , a = t.attr("data-hash") || t.attr("data-history");
                    d.location.hash = a || ""
                }
        },
        init: function() {
            var t = this;
            if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                t.hashNavigation.initialized = !0;
                var a = d.location.hash.replace("#", "");
                if (a)
                    for (var i = 0, r = t.slides.length; i < r; i += 1) {
                        var n = t.slides.eq(i);
                        if ((n.attr("data-hash") || n.attr("data-history")) === a && !n.hasClass(t.params.slideDuplicateClass)) {
                            var o = n.index();
                            t.slideTo(o, 0, t.params.runCallbacksOnInit, !0)
                        }
                    }
                t.params.hashNavigation.watchState && e(s).on("hashchange", t.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            var t = this;
            t.params.hashNavigation.watchState && e(s).off("hashchange", t.hashNavigation.onHashCange)
        }
    }
      , le = {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: oe.init.bind(e),
                    destroy: oe.destroy.bind(e),
                    setHash: oe.setHash.bind(e),
                    onHashCange: oe.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.init()
            },
            destroy: function() {
                var e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            },
            transitionEnd: function() {
                var e = this;
                e.hashNavigation.initialized && e.hashNavigation.setHash()
            }
        }
    }
      , de = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            e.autoplay.timeout = l.nextTick(function() {
                e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
            }, a)
        },
        start: function() {
            var e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
            e.emit("autoplayStart"),
            e.autoplay.run(),
            !0))
        },
        stop: function() {
            var e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = void 0),
            e.autoplay.running = !1,
            e.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            t.autoplay.paused = !0,
            0 === e ? (t.autoplay.paused = !1,
            t.autoplay.run()) : t.$wrapperEl.transitionEnd(function() {
                t && !t.destroyed && (t.autoplay.paused = !1,
                t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            })))
        }
    }
      , pe = {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                disableOnInteraction: !0,
                stopOnLastSlide: !1
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: de.run.bind(e),
                    start: de.start.bind(e),
                    stop: de.stop.bind(e),
                    pause: de.pause.bind(e)
                }
            })
        },
        on: {
            init: function() {
                var e = this;
                e.params.autoplay.enabled && e.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                var a = this;
                a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop())
            },
            sliderFirstMove: function() {
                var e = this;
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            },
            destroy: function() {
                var e = this;
                e.autoplay.running && e.autoplay.stop()
            }
        }
    }
      , ce = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a)
                  , s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var r = 0;
                e.isHorizontal() || (r = s,
                s = 0);
                var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: n
                }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var t = this
              , a = t.slides
              , i = t.$wrapperEl;
            if (a.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var s = !1;
                a.transitionEnd(function() {
                    if (!s && t && !t.destroyed) {
                        s = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1)
                            i.trigger(e[a])
                    }
                })
            }
        }
    }
      , ue = {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                fadeEffect: {
                    setTranslate: ce.setTranslate.bind(e),
                    setTransition: ce.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("fade" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    l.extend(e.params, t),
                    l.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                var e = this;
                "fade" === e.params.effect && e.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                "fade" === t.params.effect && t.fadeEffect.setTransition(e)
            }
        }
    }
      , he = {
        setTranslate: function() {
            var t, a = this, i = a.$el, s = a.$wrapperEl, r = a.slides, n = a.width, o = a.height, l = a.rtl, d = a.size, p = a.params.cubeEffect, c = a.isHorizontal(), u = a.virtual && a.params.virtual.enabled, h = 0;
            p.shadow && (c ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'),
            s.append(t)),
            t.css({
                height: n + "px"
            })) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'),
            i.append(t)));
            for (var v = 0; v < r.length; v += 1) {
                var f = r.eq(v)
                  , g = v;
                u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
                var b = 90 * g
                  , w = Math.floor(b / 360);
                l && (b = -b,
                w = Math.floor(-b / 360));
                var y = Math.max(Math.min(f[0].progress, 1), -1)
                  , x = 0
                  , T = 0
                  , E = 0;
                g % 4 == 0 ? (x = 4 * -w * d,
                E = 0) : (g - 1) % 4 == 0 ? (x = 0,
                E = 4 * -w * d) : (g - 2) % 4 == 0 ? (x = d + 4 * w * d,
                E = d) : (g - 3) % 4 == 0 && (x = -d,
                E = 3 * d + 4 * d * w),
                l && (x = -x),
                c || (T = x,
                x = 0);
                var S = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";
                if (y <= 1 && y > -1 && (h = 90 * g + 90 * y,
                l && (h = 90 * -g - 90 * y)),
                f.transform(S),
                p.slideShadows) {
                    var C = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , M = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'),
                    f.append(C)),
                    0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'),
                    f.append(M)),
                    C.length && (C[0].style.opacity = Math.max(-y, 0)),
                    M.length && (M[0].style.opacity = Math.max(y, 0))
                }
            }
            if (s.css({
                "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                "transform-origin": "50% 50% -" + d / 2 + "px"
            }),
            p.shadow)
                if (c)
                    t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
                else {
                    var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                      , P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2)
                      , k = p.shadowScale
                      , $ = p.shadowScale / P
                      , I = p.shadowOffset;
                    t.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / $ + "px) rotateX(-90deg)")
                }
            var L = m.isSafari || m.isUiWebView ? -d / 2 : 0;
            s.transform("translate3d(0px,0," + L + "px) rotateX(" + (a.isHorizontal() ? 0 : h) + "deg) rotateY(" + (a.isHorizontal() ? -h : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this
              , a = t.$el;
            t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e)
        }
    }
      , ve = {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                cubeEffect: {
                    setTranslate: he.setTranslate.bind(e),
                    setTransition: he.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("cube" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    l.extend(e.params, t),
                    l.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                var e = this;
                "cube" === e.params.effect && e.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                "cube" === t.params.effect && t.cubeEffect.setTransition(e)
            }
        }
    }
      , fe = {
        setTranslate: function() {
            for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
                var s = a.eq(i)
                  , r = s[0].progress;
                t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                var n = -180 * r
                  , o = 0
                  , l = -s[0].swiperSlideOffset
                  , d = 0;
                if (t.isHorizontal() ? t.rtl && (n = -n) : (d = l,
                l = 0,
                o = -n,
                n = 0),
                s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length,
                t.params.flipEffect.slideShadows) {
                    var p = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                      , c = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'),
                    s.append(p)),
                    0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    s.append(c)),
                    p.length && (p[0].style.opacity = Math.max(-r, 0)),
                    c.length && (c[0].style.opacity = Math.max(r, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        },
        setTransition: function(e) {
            var t = this
              , a = t.slides
              , i = t.activeIndex
              , s = t.$wrapperEl;
            if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                a.eq(i).transitionEnd(function() {
                    if (!r && t && !t.destroyed) {
                        r = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1)
                            s.trigger(e[a])
                    }
                })
            }
        }
    }
      , me = {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                flipEffect: {
                    setTranslate: fe.setTranslate.bind(e),
                    setTransition: fe.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("flip" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    l.extend(e.params, t),
                    l.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                var e = this;
                "flip" === e.params.effect && e.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                "flip" === t.params.effect && t.flipEffect.setTransition(e)
            }
        }
    }
      , ge = {
        setTranslate: function() {
            for (var t = this, a = t.width, i = t.height, s = t.slides, r = t.$wrapperEl, n = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, p = l ? a / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate, u = o.depth, h = 0, v = s.length; h < v; h += 1) {
                var f = s.eq(h)
                  , g = n[h]
                  , b = (p - f[0].swiperSlideOffset - g / 2) / g * o.modifier
                  , w = l ? c * b : 0
                  , y = l ? 0 : c * b
                  , x = -u * Math.abs(b)
                  , T = l ? 0 : o.stretch * b
                  , E = l ? o.stretch * b : 0;
                Math.abs(E) < .001 && (E = 0),
                Math.abs(T) < .001 && (T = 0),
                Math.abs(x) < .001 && (x = 0),
                Math.abs(w) < .001 && (w = 0),
                Math.abs(y) < .001 && (y = 0);
                var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + y + "deg) rotateY(" + w + "deg)";
                if (f.transform(S),
                f[0].style.zIndex = 1 - Math.abs(Math.round(b)),
                o.slideShadows) {
                    var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'),
                    f.append(C)),
                    0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'),
                    f.append(M)),
                    C.length && (C[0].style.opacity = b > 0 ? b : 0),
                    M.length && (M[0].style.opacity = -b > 0 ? -b : 0)
                }
            }
            m.ie && (r[0].style.perspectiveOrigin = p + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , be = {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            var e = this;
            l.extend(e, {
                coverflowEffect: {
                    setTranslate: ge.setTranslate.bind(e),
                    setTransition: ge.setTransition.bind(e)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                e.classNames.push(e.params.containerModifierClass + "3d"),
                e.params.watchSlidesProgress = !0,
                e.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                var e = this;
                "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                var t = this;
                "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
            }
        }
    };
    return $.use([I, L, D, O, H, X, G, V, W, j, K, _, Q, ee, ae, se, ne, le, pe, ue, ve, me, be]),
    $
});
//# sourceMappingURL=swiper.min.js.map

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(factory) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function($) {
    "use strict";
    function init(options) {
        return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE),
        void 0 !== options.click && void 0 === options.tap && (options.tap = options.click),
        options || (options = {}),
        options = $.extend({}, $.fn.swipe.defaults, options),
        this.each(function() {
            var $this = $(this)
              , plugin = $this.data(PLUGIN_NS);
            plugin || (plugin = new TouchSwipe(this,options),
            $this.data(PLUGIN_NS, plugin))
        })
    }
    function TouchSwipe(element, options) {
        function touchStart(jqEvent) {
            if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
                var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
                if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
                    var ret, touches = event.touches, evt = touches ? touches[0] : event;
                    return phase = PHASE_START,
                    touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(),
                    distance = 0,
                    direction = null,
                    currentDirection = null,
                    pinchDirection = null,
                    duration = 0,
                    startTouchesDistance = 0,
                    endTouchesDistance = 0,
                    pinchZoom = 1,
                    pinchDistance = 0,
                    maximumsMap = createMaximumsData(),
                    cancelMultiFingerRelease(),
                    createFingerData(0, evt),
                    !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(),
                    2 == fingerCount && (createFingerData(1, touches[1]),
                    startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)),
                    (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1,
                    ret === !1 ? (phase = PHASE_CANCEL,
                    triggerHandler(event, phase),
                    ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function() {
                        $element.trigger("hold", [event.target]),
                        options.hold && (ret = options.hold.call($element, event, event.target))
                    }, this), options.longTapThreshold)),
                    setTouchInProgress(!0),
                    null)
                }
            }
        }
        function touchMove(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
                var ret, touches = event.touches, evt = touches ? touches[0] : event, currentFinger = updateFingerData(evt);
                if (endTime = getTimeStamp(),
                touches && (fingerCount = touches.length),
                options.hold && clearTimeout(holdTimeout),
                phase = PHASE_MOVE,
                2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]),
                startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]),
                endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end),
                pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)),
                pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance),
                pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)),
                fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
                    if (direction = calculateDirection(currentFinger.start, currentFinger.end),
                    currentDirection = calculateDirection(currentFinger.last, currentFinger.end),
                    validateDefaultEvent(jqEvent, currentDirection),
                    distance = calculateDistance(currentFinger.start, currentFinger.end),
                    duration = calculateDuration(),
                    setMaxDistance(direction, distance),
                    ret = triggerHandler(event, phase),
                    !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
                        var inBounds = !0;
                        if (options.triggerOnTouchLeave) {
                            var bounds = getbounds(this);
                            inBounds = isInBounds(currentFinger.end, bounds)
                        }
                        !options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)),
                        phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase)
                    }
                } else
                    phase = PHASE_CANCEL,
                    triggerHandler(event, phase);
                ret === !1 && (phase = PHASE_CANCEL,
                triggerHandler(event, phase))
            }
        }
        function touchEnd(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent
              , touches = event.touches;
            if (touches) {
                if (touches.length && !inMultiFingerRelease())
                    return startMultiFingerRelease(event),
                    !0;
                if (touches.length && inMultiFingerRelease())
                    return !0
            }
            return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease),
            endTime = getTimeStamp(),
            duration = calculateDuration(),
            didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL,
            triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.cancelable !== !1 && jqEvent.preventDefault(),
            phase = PHASE_END,
            triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END,
            triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL,
            triggerHandler(event, phase)),
            setTouchInProgress(!1),
            null
        }
        function touchCancel() {
            fingerCount = 0,
            endTime = 0,
            startTime = 0,
            startTouchesDistance = 0,
            endTouchesDistance = 0,
            pinchZoom = 1,
            cancelMultiFingerRelease(),
            setTouchInProgress(!1)
        }
        function touchLeave(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END),
            triggerHandler(event, phase))
        }
        function removeListeners() {
            $element.unbind(START_EV, touchStart),
            $element.unbind(CANCEL_EV, touchCancel),
            $element.unbind(MOVE_EV, touchMove),
            $element.unbind(END_EV, touchEnd),
            LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave),
            setTouchInProgress(!1)
        }
        function getNextPhase(currentPhase) {
            var nextPhase = currentPhase
              , validTime = validateSwipeTime()
              , validDistance = validateSwipeDistance()
              , didCancel = didSwipeBackToCancel();
            return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END,
            nextPhase
        }
        function triggerHandler(event, phase) {
            var ret, touches = event.touches;
            return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)),
            (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)),
            didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)),
            phase === PHASE_CANCEL && touchCancel(event),
            phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)),
            ret
        }
        function triggerHandlerForGesture(event, phase, gesture) {
            var ret;
            if (gesture == SWIPE) {
                if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]),
                options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection),
                ret === !1))
                    return !1;
                if (phase == PHASE_END && validateSwipe()) {
                    if (clearTimeout(singleTapTimeout),
                    clearTimeout(holdTimeout),
                    $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]),
                    options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection),
                    ret === !1))
                        return !1;
                    switch (direction) {
                    case LEFT:
                        $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]),
                        options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                        break;
                    case RIGHT:
                        $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]),
                        options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                        break;
                    case UP:
                        $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]),
                        options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                        break;
                    case DOWN:
                        $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]),
                        options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection))
                    }
                }
            }
            if (gesture == PINCH) {
                if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]),
                options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData),
                ret === !1))
                    return !1;
                if (phase == PHASE_END && validatePinch())
                    switch (pinchDirection) {
                    case IN:
                        $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]),
                        options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
                        break;
                    case OUT:
                        $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]),
                        options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData))
                    }
            }
            return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout),
            clearTimeout(holdTimeout),
            hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(),
            singleTapTimeout = setTimeout($.proxy(function() {
                doubleTapStartTime = null,
                $element.trigger("tap", [event.target]),
                options.tap && (ret = options.tap.call($element, event, event.target))
            }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null,
            $element.trigger("tap", [event.target]),
            options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout),
            clearTimeout(holdTimeout),
            doubleTapStartTime = null,
            $element.trigger("doubletap", [event.target]),
            options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout),
            doubleTapStartTime = null,
            $element.trigger("longtap", [event.target]),
            options.longTap && (ret = options.longTap.call($element, event, event.target)))),
            ret
        }
        function validateSwipeDistance() {
            var valid = !0;
            return null !== options.threshold && (valid = distance >= options.threshold),
            valid
        }
        function didSwipeBackToCancel() {
            var cancelled = !1;
            return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold),
            cancelled
        }
        function validatePinchDistance() {
            return null === options.pinchThreshold || pinchDistance >= options.pinchThreshold
        }
        function validateSwipeTime() {
            var result;
            return result = !options.maxTimeThreshold || !(duration >= options.maxTimeThreshold)
        }
        function validateDefaultEvent(jqEvent, direction) {
            if (options.preventDefaultEvents !== !1)
                if (options.allowPageScroll === NONE)
                    jqEvent.preventDefault();
                else {
                    var auto = options.allowPageScroll === AUTO;
                    switch (direction) {
                    case LEFT:
                        (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                        break;
                    case RIGHT:
                        (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                        break;
                    case UP:
                        (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                        break;
                    case DOWN:
                        (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                        break;
                    case NONE:
                    }
                }
        }
        function validatePinch() {
            var hasCorrectFingerCount = validateFingers()
              , hasEndPoint = validateEndPoint()
              , hasCorrectDistance = validatePinchDistance();
            return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance
        }
        function hasPinches() {
            return !!(options.pinchStatus || options.pinchIn || options.pinchOut)
        }
        function didPinch() {
            return !(!validatePinch() || !hasPinches())
        }
        function validateSwipe() {
            var hasValidTime = validateSwipeTime()
              , hasValidDistance = validateSwipeDistance()
              , hasCorrectFingerCount = validateFingers()
              , hasEndPoint = validateEndPoint()
              , didCancel = didSwipeBackToCancel()
              , valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
            return valid
        }
        function hasSwipes() {
            return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown)
        }
        function didSwipe() {
            return !(!validateSwipe() || !hasSwipes())
        }
        function validateFingers() {
            return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH
        }
        function validateEndPoint() {
            return 0 !== fingerData[0].end.x
        }
        function hasTap() {
            return !!options.tap
        }
        function hasDoubleTap() {
            return !!options.doubleTap
        }
        function hasLongTap() {
            return !!options.longTap
        }
        function validateDoubleTap() {
            if (null == doubleTapStartTime)
                return !1;
            var now = getTimeStamp();
            return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold
        }
        function inDoubleTap() {
            return validateDoubleTap()
        }
        function validateTap() {
            return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold)
        }
        function validateLongTap() {
            return duration > options.longTapThreshold && distance < DOUBLE_TAP_THRESHOLD
        }
        function didTap() {
            return !(!validateTap() || !hasTap())
        }
        function didDoubleTap() {
            return !(!validateDoubleTap() || !hasDoubleTap())
        }
        function didLongTap() {
            return !(!validateLongTap() || !hasLongTap())
        }
        function startMultiFingerRelease(event) {
            previousTouchEndTime = getTimeStamp(),
            fingerCountAtRelease = event.touches.length + 1
        }
        function cancelMultiFingerRelease() {
            previousTouchEndTime = 0,
            fingerCountAtRelease = 0
        }
        function inMultiFingerRelease() {
            var withinThreshold = !1;
            if (previousTouchEndTime) {
                var diff = getTimeStamp() - previousTouchEndTime;
                diff <= options.fingerReleaseThreshold && (withinThreshold = !0)
            }
            return withinThreshold
        }
        function getTouchInProgress() {
            return !($element.data(PLUGIN_NS + "_intouch") !== !0)
        }
        function setTouchInProgress(val) {
            $element && (val === !0 ? ($element.bind(MOVE_EV, touchMove),
            $element.bind(END_EV, touchEnd),
            LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1),
            $element.unbind(END_EV, touchEnd, !1),
            LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)),
            $element.data(PLUGIN_NS + "_intouch", val === !0))
        }
        function createFingerData(id, evt) {
            var f = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX,
            f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY,
            fingerData[id] = f,
            f
        }
        function updateFingerData(evt) {
            var id = void 0 !== evt.identifier ? evt.identifier : 0
              , f = getFingerData(id);
            return null === f && (f = createFingerData(id, evt)),
            f.last.x = f.end.x,
            f.last.y = f.end.y,
            f.end.x = evt.pageX || evt.clientX,
            f.end.y = evt.pageY || evt.clientY,
            f
        }
        function getFingerData(id) {
            return fingerData[id] || null
        }
        function setMaxDistance(direction, distance) {
            direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)),
            maximumsMap[direction].distance = distance)
        }
        function getMaxDistance(direction) {
            if (maximumsMap[direction])
                return maximumsMap[direction].distance
        }
        function createMaximumsData() {
            var maxData = {};
            return maxData[LEFT] = createMaximumVO(LEFT),
            maxData[RIGHT] = createMaximumVO(RIGHT),
            maxData[UP] = createMaximumVO(UP),
            maxData[DOWN] = createMaximumVO(DOWN),
            maxData
        }
        function createMaximumVO(dir) {
            return {
                direction: dir,
                distance: 0
            }
        }
        function calculateDuration() {
            return endTime - startTime
        }
        function calculateTouchesDistance(startPoint, endPoint) {
            var diffX = Math.abs(startPoint.x - endPoint.x)
              , diffY = Math.abs(startPoint.y - endPoint.y);
            return Math.round(Math.sqrt(diffX * diffX + diffY * diffY))
        }
        function calculatePinchZoom(startDistance, endDistance) {
            var percent = endDistance / startDistance * 1;
            return percent.toFixed(2)
        }
        function calculatePinchDirection() {
            return pinchZoom < 1 ? OUT : IN
        }
        function calculateDistance(startPoint, endPoint) {
            return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)))
        }
        function calculateAngle(startPoint, endPoint) {
            var x = startPoint.x - endPoint.x
              , y = endPoint.y - startPoint.y
              , r = Math.atan2(y, x)
              , angle = Math.round(180 * r / Math.PI);
            return angle < 0 && (angle = 360 - Math.abs(angle)),
            angle
        }
        function calculateDirection(startPoint, endPoint) {
            if (comparePoints(startPoint, endPoint))
                return NONE;
            var angle = calculateAngle(startPoint, endPoint);
            return angle <= 45 && angle >= 0 ? LEFT : angle <= 360 && angle >= 315 ? LEFT : angle >= 135 && angle <= 225 ? RIGHT : angle > 45 && angle < 135 ? DOWN : UP
        }
        function getTimeStamp() {
            var now = new Date;
            return now.getTime()
        }
        function getbounds(el) {
            el = $(el);
            var offset = el.offset()
              , bounds = {
                left: offset.left,
                right: offset.left + el.outerWidth(),
                top: offset.top,
                bottom: offset.top + el.outerHeight()
            };
            return bounds
        }
        function isInBounds(point, bounds) {
            return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom
        }
        function comparePoints(pointA, pointB) {
            return pointA.x == pointB.x && pointA.y == pointB.y
        }
        var options = $.extend({}, options)
          , useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents
          , START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown"
          , MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove"
          , END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup"
          , LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave"
          , CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel"
          , distance = 0
          , direction = null
          , currentDirection = null
          , duration = 0
          , startTouchesDistance = 0
          , endTouchesDistance = 0
          , pinchZoom = 1
          , pinchDistance = 0
          , pinchDirection = 0
          , maximumsMap = null
          , $element = $(element)
          , phase = "start"
          , fingerCount = 0
          , fingerData = {}
          , startTime = 0
          , endTime = 0
          , previousTouchEndTime = 0
          , fingerCountAtRelease = 0
          , doubleTapStartTime = 0
          , singleTapTimeout = null
          , holdTimeout = null;
        try {
            $element.bind(START_EV, touchStart),
            $element.bind(CANCEL_EV, touchCancel)
        } catch (e) {
            $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe")
        }
        this.enable = function() {
            return this.disable(),
            $element.bind(START_EV, touchStart),
            $element.bind(CANCEL_EV, touchCancel),
            $element
        }
        ,
        this.disable = function() {
            return removeListeners(),
            $element
        }
        ,
        this.destroy = function() {
            removeListeners(),
            $element.data(PLUGIN_NS, null),
            $element = null
        }
        ,
        this.option = function(property, value) {
            if ("object" == typeof property)
                options = $.extend(options, property);
            else if (void 0 !== options[property]) {
                if (void 0 === value)
                    return options[property];
                options[property] = value
            } else {
                if (!property)
                    return options;
                $.error("Option " + property + " does not exist on jQuery.swipe.options")
            }
            return null
        }
    }
    var VERSION = "1.6.18"
      , LEFT = "left"
      , RIGHT = "right"
      , UP = "up"
      , DOWN = "down"
      , IN = "in"
      , OUT = "out"
      , NONE = "none"
      , AUTO = "auto"
      , SWIPE = "swipe"
      , PINCH = "pinch"
      , TAP = "tap"
      , DOUBLE_TAP = "doubletap"
      , LONG_TAP = "longtap"
      , HORIZONTAL = "horizontal"
      , VERTICAL = "vertical"
      , ALL_FINGERS = "all"
      , DOUBLE_TAP_THRESHOLD = 10
      , PHASE_START = "start"
      , PHASE_MOVE = "move"
      , PHASE_END = "end"
      , PHASE_CANCEL = "cancel"
      , SUPPORTS_TOUCH = "ontouchstart"in window
      , SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH
      , SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH
      , PLUGIN_NS = "TouchSwipe"
      , defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: ".noSwipe",
        preventDefaultEvents: !0
    };
    $.fn.swipe = function(method) {
        var $this = $(this)
          , plugin = $this.data(PLUGIN_NS);
        if (plugin && "string" == typeof method) {
            if (plugin[method])
                return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
            $.error("Method " + method + " does not exist on jQuery.swipe")
        } else if (plugin && "object" == typeof method)
            plugin.option.apply(plugin, arguments);
        else if (!(plugin || "object" != typeof method && method))
            return init.apply(this, arguments);
        return $this
    }
    ,
    $.fn.swipe.version = VERSION,
    $.fn.swipe.defaults = defaults,
    $.fn.swipe.phases = {
        PHASE_START: PHASE_START,
        PHASE_MOVE: PHASE_MOVE,
        PHASE_END: PHASE_END,
        PHASE_CANCEL: PHASE_CANCEL
    },
    $.fn.swipe.directions = {
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        DOWN: DOWN,
        IN: IN,
        OUT: OUT
    },
    $.fn.swipe.pageScroll = {
        NONE: NONE,
        HORIZONTAL: HORIZONTAL,
        VERTICAL: VERTICAL,
        AUTO: AUTO
    },
    $.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: ALL_FINGERS
    }
});

!function(i) {
    "use strict";
    function s(s) {
        s.each(function() {
            var s = i(this)
              , t = s.data("animation");
            s.addClass(t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                s.removeClass(t)
            })
        })
    }
    var t = i(".carousel")
      , e = t.find(".item:first").find("[data-animation ^= 'animated']");
    t.carousel(),
    s(e),
    t.on("slide.bs.carousel", function(t) {
        s(i(t.relatedTarget).find("[data-animation ^= 'animated']"))
    });
    for (var o = i(".carousel"), n = o.length, l = 0; l < n; l++) {
        i.fn.carousel.Constructor.TRANSITION_DURATION = 9999999;
        var a = o.eq(l).data("duration")
          , r = i("[data-duration=" + a + "] > .carousel-inner > .item");
        i(r).each(function() {
            i(this).css({
                "-webkit-transition-duration": a + "ms",
                "-moz-transition-duration": a + "ms",
                "transition-duration": a + "ms"
            })
        })
    }
    var c = i(".carousel").find("[class=mouse_wheel_y]");
    i(".carousel").find("[class=mouse_wheel_xy]") && i(".mouse_wheel_xy").bind("mousewheel", function(s) {
        s.originalEvent.wheelDelta / 120 > 0 ? i(this).carousel("prev") : i(this).carousel("next")
    }),
    c && i(".mouse_wheel_y").bind("mousewheel", function(s) {
        s.originalEvent.wheelDelta / 120 > 0 && i(this).carousel("next")
    });
    var u = i(".carousel").find("[class=swipe_y]")
      , h = i(".carousel").find("[class=swipe_x]");
    u && i(".swipe_y .carousel-inner").swipe({
        swipeUp: function(s, t, e, o, n) {
            i(this).parent().carousel("next")
        },
        swipeDown: function() {
            i(this).parent().carousel("prev")
        },
        threshold: 0
    }),
    h && i(".swipe_x .carousel-inner").swipe({
        swipeLeft: function(s, t, e, o, n) {
            i(this).parent().carousel("next")
        },
        swipeRight: function() {
            i(this).parent().carousel("prev")
        },
        threshold: 0
    });
    var d = 0
      , m = 0
      , _ = i(".carousel").find("[class=thumb_scroll_y]")
      , f = i(".carousel").find("[class=thumb_scroll_x]");
    _ && i(".thumb_scroll_y").on("slid.bs.carousel", function() {
        var s = -1 * i(".thumb_scroll_y .carousel-indicators li:first").position().top + i(".thumb_scroll_y .carousel-indicators li:last").position().top + i(".thumb_scroll_y .carousel-indicators li:last").height()
          , t = i(".thumb_scroll_y .carousel-indicators li.active").position().top + i(".thumb_scroll_y .carousel-indicators li.active").height() / 1 + d - i(".thumb_scroll_y .carousel-indicators").height() / 1;
        t < 0 && (t = 0),
        t > s - i(".thumb_scroll_y .carousel-indicators").height() && (t = s - i(".thumb_scroll_y .carousel-indicators").height()),
        i(".thumb_scroll_y .carousel-indicators").animate({
            scrollTop: t
        }, 800),
        d = t
    }),
    f && i(".thumb_scroll_x").on("slid.bs.carousel", function() {
        var s = -1 * i(".thumb_scroll_x .carousel-indicators li:first").position().left + i(".thumb_scroll_x .carousel-indicators li:last").position().left + i(".thumb_scroll_x .carousel-indicators li:last").width()
          , t = i(".thumb_scroll_x .carousel-indicators li.active").position().left + i(".thumb_scroll_x .carousel-indicators li.active").width() / 1 + m - i(".thumb_scroll_x .carousel-indicators").width() / 1;
        t < 0 && (t = 0),
        t > s - i(".thumb_scroll_x .carousel-indicators").width() && (t = s - i(".thumb_scroll_x .carousel-indicators").width()),
        i(".thumb_scroll_x .carousel-indicators").animate({
            scrollLeft: t
        }, 800),
        m = t
    }),
    i(".six_coloumns .item").each(function() {
        for (var s = i(this), t = 1; t < 6; t++)
            (s = s.next()).length || (s = i(this).siblings(":first")),
            s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
    }),
    i(".five_coloumns .item").each(function() {
        for (var s = i(this), t = 1; t < 5; t++)
            (s = s.next()).length || (s = i(this).siblings(":first")),
            s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
    }),
    i(".four_coloumns .item").each(function() {
        for (var s = i(this), t = 1; t < 4; t++)
            (s = s.next()).length || (s = i(this).siblings(":first")),
            s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
    }),
    i(".three_coloumns .item").each(function() {
        for (var s = i(this), t = 1; t < 3; t++)
            (s = s.next()).length || (s = i(this).siblings(":first")),
            s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
    }),
    i(".two_coloumns .item").each(function() {
        for (var s = i(this), t = 1; t < 2; t++)
            (s = s.next()).length || (s = i(this).siblings(":first")),
            s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
    }),
    i(".pauseVideo").on("slide.bs.carousel", function() {
        i("video").each(function() {
            this.pause()
        })
    }),
    i(".onlinePauseVideo").on("slide.bs.carousel", function(s) {
        i(s.target).find("iframe").each(function(s, t) {
            i(t).attr("src", i(t).attr("src"))
        })
    });
    var p = i(".carousel.ps_full_screen > .carousel-inner > .item")
      , b = i(window).height();
    p.eq(0).addClass("active"),
    p.height(b),
    p.addClass("ps_full_s"),
    i(".carousel.ps_full_screen > .carousel-inner > .item > img").each(function() {
        var s = i(this).attr("src");
        i(this).parent().css({
            "background-image": "url(" + s + ")"
        }),
        i(this).remove()
    }),
    i(window).on("resize", function() {
        b = i(window).height(),
        p.height(b)
    })
}(jQuery);

/*!
 * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a, b) {
    function c() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function d() {
        var a = new Date;
        return c(a.getFullYear(), a.getMonth(), a.getDate())
    }
    function e(a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate()
    }
    function f(c, d) {
        return function() {
            return d !== b && a.fn.datepicker.deprecated(d),
            this[c].apply(this, arguments)
        }
    }
    function g(a) {
        return a && !isNaN(a.getTime())
    }
    function h(b, c) {
        function d(a, b) {
            return b.toLowerCase()
        }
        var e, f = a(b).data(), g = {}, h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase());
        for (var i in f)
            c.test(i) && (e = i.replace(h, d),
            g[e] = f[i]);
        return g
    }
    function i(b) {
        var c = {};
        if (q[b] || (b = b.split("-")[0],
        q[b])) {
            var d = q[b];
            return a.each(p, function(a, b) {
                b in d && (c[b] = d[b])
            }),
            c
        }
    }
    var j = function() {
        var b = {
            get: function(a) {
                return this.slice(a)[0]
            },
            contains: function(a) {
                for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++)
                    if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5)
                        return c;
                return -1
            },
            remove: function(a) {
                this.splice(a, 1)
            },
            replace: function(b) {
                b && (a.isArray(b) || (b = [b]),
                this.clear(),
                this.push.apply(this, b))
            },
            clear: function() {
                this.length = 0
            },
            copy: function() {
                var a = new j;
                return a.replace(this),
                a
            }
        };
        return function() {
            var c = [];
            return c.push.apply(c, arguments),
            a.extend(c, b),
            c
        }
    }()
      , k = function(b, c) {
        a.data(b, "datepicker", this),
        this._process_options(c),
        this.dates = new j,
        this.viewDate = this.o.defaultViewDate,
        this.focusDate = null,
        this.element = a(b),
        this.isInput = this.element.is("input"),
        this.inputField = this.isInput ? this.element : this.element.find("input"),
        this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"),
        this.component && 0 === this.component.length && (this.component = !1),
        this.isInline = !this.component && this.element.is("div"),
        this.picker = a(r.template),
        this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow),
        this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"),
        this.o.rtl && this.picker.addClass("datepicker-rtl"),
        this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(a, b) {
            return Number(b) + 1
        }),
        this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
        }),
        this._allow_update = !1,
        this.setViewMode(this.o.startView),
        this._allow_update = !0,
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.isInline && this.show()
    };
    k.prototype = {
        constructor: k,
        _resolveViewName: function(b) {
            return a.each(r.viewModes, function(c, d) {
                if (b === c || a.inArray(b, d.names) !== -1)
                    return b = c,
                    !1
            }),
            b
        },
        _resolveDaysOfWeek: function(b) {
            return a.isArray(b) || (b = b.split(/[,\s]*/)),
            a.map(b, Number)
        },
        _check_template: function(c) {
            try {
                if (c === b || "" === c)
                    return !1;
                if ((c.match(/[<>]/g) || []).length <= 0)
                    return !0;
                var d = a(c);
                return d.length > 0
            } catch (a) {
                return !1
            }
        },
        _process_options: function(b) {
            this._o = a.extend({}, this._o, b);
            var e = this.o = a.extend({}, this._o)
              , f = e.language;
            q[f] || (f = f.split("-")[0],
            q[f] || (f = o.language)),
            e.language = f,
            e.startView = this._resolveViewName(e.startView),
            e.minViewMode = this._resolveViewName(e.minViewMode),
            e.maxViewMode = this._resolveViewName(e.maxViewMode),
            e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)),
            e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1,
            e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))),
            e.multidateSeparator = String(e.multidateSeparator),
            e.weekStart %= 7,
            e.weekEnd = (e.weekStart + 6) % 7;
            var g = r.parseFormat(e.format);
            e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)),
            e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0),
            e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []),
            e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []),
            e.datesDisabled = e.datesDisabled || [],
            a.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")),
            e.datesDisabled = a.map(e.datesDisabled, function(a) {
                return r.parseDate(a, g, e.language, e.assumeNearbyYear)
            });
            var h = String(e.orientation).toLowerCase().split(/\s+/g)
              , i = e.orientation.toLowerCase();
            if (h = a.grep(h, function(a) {
                return /^auto|left|right|top|bottom$/.test(a)
            }),
            e.orientation = {
                x: "auto",
                y: "auto"
            },
            i && "auto" !== i)
                if (1 === h.length)
                    switch (h[0]) {
                    case "top":
                    case "bottom":
                        e.orientation.y = h[0];
                        break;
                    case "left":
                    case "right":
                        e.orientation.x = h[0]
                    }
                else
                    i = a.grep(h, function(a) {
                        return /^left|right$/.test(a)
                    }),
                    e.orientation.x = i[0] || "auto",
                    i = a.grep(h, function(a) {
                        return /^top|bottom$/.test(a)
                    }),
                    e.orientation.y = i[0] || "auto";
            else
                ;if (e.defaultViewDate instanceof Date || "string" == typeof e.defaultViewDate)
                e.defaultViewDate = r.parseDate(e.defaultViewDate, g, e.language, e.assumeNearbyYear);
            else if (e.defaultViewDate) {
                var j = e.defaultViewDate.year || (new Date).getFullYear()
                  , k = e.defaultViewDate.month || 0
                  , l = e.defaultViewDate.day || 1;
                e.defaultViewDate = c(j, k, l)
            } else
                e.defaultViewDate = d()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++)
                c = a[f][0],
                2 === a[f].length ? (d = b,
                e = a[f][1]) : 3 === a[f].length && (d = a[f][1],
                e = a[f][2]),
                c.on(e, d)
        },
        _unapplyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++)
                c = a[f][0],
                2 === a[f].length ? (e = b,
                d = a[f][1]) : 3 === a[f].length && (e = a[f][1],
                d = a[f][2]),
                c.off(d, e)
        },
        _buildEvents: function() {
            var b = {
                keyup: a.proxy(function(b) {
                    a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
                }, this),
                keydown: a.proxy(this.keydown, this),
                paste: a.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)),
            this.isInput ? this._events = [[this.element, b]] : this.component && this.inputField.length ? this._events = [[this.inputField, b], [this.component, {
                click: a.proxy(this.show, this)
            }]] : this._events = [[this.element, {
                click: a.proxy(this.show, this),
                keydown: a.proxy(this.keydown, this)
            }]],
            this._events.push([this.element, "*", {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }], [this.element, {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }]),
            this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": a.proxy(function(a) {
                    this.update(a.date)
                }, this)
            }]),
            this._secondaryEvents = [[this.picker, {
                click: a.proxy(this.click, this)
            }], [this.picker, ".prev, .next", {
                click: a.proxy(this.navArrowsClick, this)
            }], [this.picker, ".day:not(.disabled)", {
                click: a.proxy(this.dayCellClick, this)
            }], [a(window), {
                resize: a.proxy(this.place, this)
            }], [a(document), {
                "mousedown touchstart": a.proxy(function(a) {
                    this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide()
                }, this)
            }]]
        },
        _attachEvents: function() {
            this._detachEvents(),
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(),
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(b, c) {
            var d = c || this.dates.get(-1)
              , e = this._utc_to_local(d);
            this.element.trigger({
                type: b,
                date: e,
                viewMode: this.viewMode,
                dates: a.map(this.dates, this._utc_to_local),
                format: a.proxy(function(a, b) {
                    0 === arguments.length ? (a = this.dates.length - 1,
                    b = this.o.format) : "string" == typeof a && (b = a,
                    a = this.dates.length - 1),
                    b = b || this.o.format;
                    var c = this.dates.get(a);
                    return r.formatDate(c, b, this.o.language)
                }, this)
            })
        },
        show: function() {
            if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1))
                return this.isInline || this.picker.appendTo(this.o.container),
                this.place(),
                this.picker.show(),
                this._attachSecondaryEvents(),
                this._trigger("show"),
                (window.navigator.msMaxTouchPoints || "ontouchstart"in document) && this.o.disableTouchKeyboard && a(this.element).blur(),
                this
        },
        hide: function() {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null,
            this.picker.hide().detach(),
            this._detachSecondaryEvents(),
            this.setViewMode(this.o.startView),
            this.o.forceParse && this.inputField.val() && this.setValue(),
            this._trigger("hide"),
            this)
        },
        destroy: function() {
            return this.hide(),
            this._detachEvents(),
            this._detachSecondaryEvents(),
            this.picker.remove(),
            delete this.element.data().datepicker,
            this.isInput || delete this.element.data().date,
            this
        },
        paste: function(b) {
            var c;
            if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && a.inArray("text/plain", b.originalEvent.clipboardData.types) !== -1)
                c = b.originalEvent.clipboardData.getData("text/plain");
            else {
                if (!window.clipboardData)
                    return;
                c = window.clipboardData.getData("Text")
            }
            this.setDate(c),
            this.update(),
            b.preventDefault()
        },
        _utc_to_local: function(a) {
            if (!a)
                return a;
            var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
            return b.getTimezoneOffset() !== a.getTimezoneOffset() && (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())),
            b
        },
        _local_to_utc: function(a) {
            return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
        },
        _zero_time: function(a) {
            return a && new Date(a.getFullYear(),a.getMonth(),a.getDate())
        },
        _zero_utc_time: function(a) {
            return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate())
        },
        getDates: function() {
            return a.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return a.map(this.dates, function(a) {
                return new Date(a)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var a = this.dates.get(-1);
            return a !== b ? new Date(a) : null
        },
        clearDates: function() {
            this.inputField.val(""),
            this.update(),
            this._trigger("changeDate"),
            this.o.autoclose && this.hide()
        },
        setDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, b),
            this._trigger("changeDate"),
            this.setValue(),
            this
        },
        setUTCDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.setDates.apply(this, a.map(b, this._utc_to_local)),
            this
        },
        setDate: f("setDates"),
        setUTCDate: f("setUTCDates"),
        remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
        setValue: function() {
            var a = this.getFormattedDate();
            return this.inputField.val(a),
            this
        },
        getFormattedDate: function(c) {
            c === b && (c = this.o.format);
            var d = this.o.language;
            return a.map(this.dates, function(a) {
                return r.formatDate(a, c, d)
            }).join(this.o.multidateSeparator)
        },
        getStartDate: function() {
            return this.o.startDate
        },
        setStartDate: function(a) {
            return this._process_options({
                startDate: a
            }),
            this.update(),
            this.updateNavArrows(),
            this
        },
        getEndDate: function() {
            return this.o.endDate
        },
        setEndDate: function(a) {
            return this._process_options({
                endDate: a
            }),
            this.update(),
            this.updateNavArrows(),
            this
        },
        setDaysOfWeekDisabled: function(a) {
            return this._process_options({
                daysOfWeekDisabled: a
            }),
            this.update(),
            this
        },
        setDaysOfWeekHighlighted: function(a) {
            return this._process_options({
                daysOfWeekHighlighted: a
            }),
            this.update(),
            this
        },
        setDatesDisabled: function(a) {
            return this._process_options({
                datesDisabled: a
            }),
            this.update(),
            this
        },
        place: function() {
            if (this.isInline)
                return this;
            var b = this.picker.outerWidth()
              , c = this.picker.outerHeight()
              , d = 10
              , e = a(this.o.container)
              , f = e.width()
              , g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop()
              , h = e.offset()
              , i = [0];
            this.element.parents().each(function() {
                var b = a(this).css("z-index");
                "auto" !== b && 0 !== Number(b) && i.push(Number(b))
            });
            var j = Math.max.apply(Math, i) + this.o.zIndexOffset
              , k = this.component ? this.component.parent().offset() : this.element.offset()
              , l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1)
              , m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1)
              , n = k.left - h.left
              , o = k.top - h.top;
            "body" !== this.o.container && (o += g),
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),
            "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x),
            "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"),
            n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"),
            n += m - b) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
            var p, q = this.o.orientation.y;
            if ("auto" === q && (p = -g + o - c,
            q = p < 0 ? "bottom" : "top"),
            this.picker.addClass("datepicker-orient-" + q),
            "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l,
            this.o.rtl) {
                var r = f - (n + m);
                this.picker.css({
                    top: o,
                    right: r,
                    zIndex: j
                })
            } else
                this.picker.css({
                    top: o,
                    left: n,
                    zIndex: j
                });
            return this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update)
                return this;
            var b = this.dates.copy()
              , c = []
              , d = !1;
            return arguments.length ? (a.each(arguments, a.proxy(function(a, b) {
                b instanceof Date && (b = this._local_to_utc(b)),
                c.push(b)
            }, this)),
            d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(),
            c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c],
            delete this.element.data().date),
            c = a.map(c, a.proxy(function(a) {
                return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)),
            c = a.grep(c, a.proxy(function(a) {
                return !this.dateWithinRange(a) || !a
            }, this), !0),
            this.dates.replace(c),
            this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate),
            d ? (this.setValue(),
            this.element.change()) : this.dates.length && String(b) !== String(this.dates) && d && (this._trigger("changeDate"),
            this.element.change()),
            !this.dates.length && b.length && (this._trigger("clearDate"),
            this.element.change()),
            this.fill(),
            this
        },
        fillDow: function() {
            if (this.o.showWeekDays) {
                var b = this.o.weekStart
                  , c = "<tr>";
                for (this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7; )
                    c += '<th class="dow',
                    a.inArray(b, this.o.daysOfWeekDisabled) !== -1 && (c += " disabled"),
                    c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
                c += "</tr>",
                this.picker.find(".datepicker-days thead").append(c)
            }
        },
        fillMonths: function() {
            for (var a, b = this._utc_to_local(this.viewDate), c = "", d = 0; d < 12; d++)
                a = b && b.getMonth() === d ? " focused" : "",
                c += '<span class="month' + a + '">' + q[this.o.language].monthsShort[d] + "</span>";
            this.picker.find(".datepicker-months td").html(c)
        },
        setRange: function(b) {
            b && b.length ? this.range = a.map(b, function(a) {
                return a.valueOf()
            }) : delete this.range,
            this.fill()
        },
        getClassNames: function(b) {
            var c = []
              , f = this.viewDate.getUTCFullYear()
              , g = this.viewDate.getUTCMonth()
              , h = d();
            return b.getUTCFullYear() < f || b.getUTCFullYear() === f && b.getUTCMonth() < g ? c.push("old") : (b.getUTCFullYear() > f || b.getUTCFullYear() === f && b.getUTCMonth() > g) && c.push("new"),
            this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"),
            this.o.todayHighlight && e(b, h) && c.push("today"),
            this.dates.contains(b) !== -1 && c.push("active"),
            this.dateWithinRange(b) || c.push("disabled"),
            this.dateIsDisabled(b) && c.push("disabled", "disabled-date"),
            a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && c.push("highlighted"),
            this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"),
            a.inArray(b.valueOf(), this.range) !== -1 && c.push("selected"),
            b.valueOf() === this.range[0] && c.push("range-start"),
            b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")),
            c
        },
        _fill_yearsView: function(c, d, e, f, g, h, i) {
            for (var j, k, l, m = "", n = e / 10, o = this.picker.find(c), p = Math.floor(f / e) * e, q = p + 9 * n, r = Math.floor(this.viewDate.getFullYear() / n) * n, s = a.map(this.dates, function(a) {
                return Math.floor(a.getUTCFullYear() / n) * n
            }), t = p - n; t <= q + n; t += n)
                j = [d],
                k = null,
                t === p - n ? j.push("old") : t === q + n && j.push("new"),
                a.inArray(t, s) !== -1 && j.push("active"),
                (t < g || t > h) && j.push("disabled"),
                t === r && j.push("focused"),
                i !== a.noop && (l = i(new Date(t,0,1)),
                l === b ? l = {} : "boolean" == typeof l ? l = {
                    enabled: l
                } : "string" == typeof l && (l = {
                    classes: l
                }),
                l.enabled === !1 && j.push("disabled"),
                l.classes && (j = j.concat(l.classes.split(/\s+/))),
                l.tooltip && (k = l.tooltip)),
                m += '<span class="' + j.join(" ") + '"' + (k ? ' title="' + k + '"' : "") + ">" + t + "</span>";
            o.find(".datepicker-switch").text(p + "-" + q),
            o.find("td").html(m)
        },
        fill: function() {
            var d, e, f = new Date(this.viewDate), g = f.getUTCFullYear(), h = f.getUTCMonth(), i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, m = q[this.o.language].today || q.en.today || "", n = q[this.o.language].clear || q.en.clear || "", o = q[this.o.language].titleFormat || q.en.titleFormat;
            if (!isNaN(g) && !isNaN(h)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)),
                this.picker.find("tfoot .today").text(m).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell" : "none"),
                this.picker.find("tfoot .clear").text(n).css("display", this.o.clearBtn === !0 ? "table-cell" : "none"),
                this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"),
                this.updateNavArrows(),
                this.fillMonths();
                var p = c(g, h, 0)
                  , s = p.getUTCDate();
                p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7);
                var t = new Date(p);
                p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()),
                t.setUTCDate(t.getUTCDate() + 42),
                t = t.valueOf();
                for (var u, v, w = []; p.valueOf() < t; ) {
                    if (u = p.getUTCDay(),
                    u === this.o.weekStart && (w.push("<tr>"),
                    this.o.calendarWeeks)) {
                        var x = new Date(+p + (this.o.weekStart - u - 7) % 7 * 864e5)
                          , y = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5)
                          , z = new Date(Number(z = c(y.getUTCFullYear(), 0, 1)) + (11 - z.getUTCDay()) % 7 * 864e5)
                          , A = (y - z) / 864e5 / 7 + 1;
                        w.push('<td class="cw">' + A + "</td>")
                    }
                    v = this.getClassNames(p),
                    v.push("day");
                    var B = p.getUTCDate();
                    this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)),
                    e === b ? e = {} : "boolean" == typeof e ? e = {
                        enabled: e
                    } : "string" == typeof e && (e = {
                        classes: e
                    }),
                    e.enabled === !1 && v.push("disabled"),
                    e.classes && (v = v.concat(e.classes.split(/\s+/))),
                    e.tooltip && (d = e.tooltip),
                    e.content && (B = e.content)),
                    v = a.isFunction(a.uniqueSort) ? a.uniqueSort(v) : a.unique(v),
                    w.push('<td class="' + v.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ' data-date="' + p.getTime().toString() + '">' + B + "</td>"),
                    d = null,
                    u === this.o.weekEnd && w.push("</tr>"),
                    p.setUTCDate(p.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").html(w.join(""));
                var C = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months"
                  , D = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? C : g).end().find("tbody span").removeClass("active");
                if (a.each(this.dates, function(a, b) {
                    b.getUTCFullYear() === g && D.eq(b.getUTCMonth()).addClass("active")
                }),
                (g < i || g > k) && D.addClass("disabled"),
                g === i && D.slice(0, j).addClass("disabled"),
                g === k && D.slice(l + 1).addClass("disabled"),
                this.o.beforeShowMonth !== a.noop) {
                    var E = this;
                    a.each(D, function(c, d) {
                        var e = new Date(g,c,1)
                          , f = E.o.beforeShowMonth(e);
                        f === b ? f = {} : "boolean" == typeof f ? f = {
                            enabled: f
                        } : "string" == typeof f && (f = {
                            classes: f
                        }),
                        f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"),
                        f.classes && a(d).addClass(f.classes),
                        f.tooltip && a(d).prop("title", f.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, g, i, k, this.o.beforeShowYear),
                this._fill_yearsView(".datepicker-decades", "decade", 100, g, i, k, this.o.beforeShowDecade),
                this._fill_yearsView(".datepicker-centuries", "century", 1e3, g, i, k, this.o.beforeShowCentury)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var a, b, c = new Date(this.viewDate), d = c.getUTCFullYear(), e = c.getUTCMonth(), f = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), g = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, j = 1;
                switch (this.viewMode) {
                case 4:
                    j *= 10;
                case 3:
                    j *= 10;
                case 2:
                    j *= 10;
                case 1:
                    a = Math.floor(d / j) * j < f,
                    b = Math.floor(d / j) * j + j > h;
                    break;
                case 0:
                    a = d <= f && e < g,
                    b = d >= h && e > i
                }
                this.picker.find(".prev").toggleClass("disabled", a),
                this.picker.find(".next").toggleClass("disabled", b)
            }
        },
        click: function(b) {
            b.preventDefault(),
            b.stopPropagation();
            var e, f, g, h;
            e = a(b.target),
            e.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1),
            e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0),
            this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")),
            e.hasClass("clear") && this.clearDates(),
            e.hasClass("disabled") || (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1),
            f = 1,
            1 === this.viewMode ? (h = e.parent().find("span").index(e),
            g = this.viewDate.getUTCFullYear(),
            this.viewDate.setUTCMonth(h)) : (h = 0,
            g = Number(e.text()),
            this.viewDate.setUTCFullYear(g)),
            this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate),
            this.viewMode === this.o.minViewMode ? this._setDate(c(g, h, f)) : (this.setViewMode(this.viewMode - 1),
            this.fill())),
            this.picker.is(":visible") && this._focused_from && this._focused_from.focus(),
            delete this._focused_from
        },
        dayCellClick: function(b) {
            var c = a(b.currentTarget)
              , d = c.data("date")
              , e = new Date(d);
            this.o.updateViewDate && (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate),
            e.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)),
            this._setDate(e)
        },
        navArrowsClick: function(b) {
            var c = a(b.currentTarget)
              , d = c.hasClass("prev") ? -1 : 1;
            0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep),
            this.viewDate = this.moveMonth(this.viewDate, d),
            this._trigger(r.viewModes[this.viewMode].e, this.viewDate),
            this.fill()
        },
        _toggle_multidate: function(a) {
            var b = this.dates.contains(a);
            if (a || this.dates.clear(),
            b !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(),
            this.dates.push(a)) : this.dates.push(a),
            "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate; )
                    this.dates.remove(0)
        },
        _setDate: function(a, b) {
            b && "date" !== b || this._toggle_multidate(a && new Date(a)),
            (!b && this.o.updateViewDate || "view" === b) && (this.viewDate = a && new Date(a)),
            this.fill(),
            this.setValue(),
            b && "view" === b || this._trigger("changeDate"),
            this.inputField.trigger("change"),
            !this.o.autoclose || b && "date" !== b || this.hide()
        },
        moveDay: function(a, b) {
            var c = new Date(a);
            return c.setUTCDate(a.getUTCDate() + b),
            c
        },
        moveWeek: function(a, b) {
            return this.moveDay(a, 7 * b)
        },
        moveMonth: function(a, b) {
            if (!g(a))
                return this.o.defaultViewDate;
            if (!b)
                return a;
            var c, d, e = new Date(a.valueOf()), f = e.getUTCDate(), h = e.getUTCMonth(), i = Math.abs(b);
            if (b = b > 0 ? 1 : -1,
            1 === i)
                d = b === -1 ? function() {
                    return e.getUTCMonth() === h
                }
                : function() {
                    return e.getUTCMonth() !== c
                }
                ,
                c = h + b,
                e.setUTCMonth(c),
                c = (c + 12) % 12;
            else {
                for (var j = 0; j < i; j++)
                    e = this.moveMonth(e, b);
                c = e.getUTCMonth(),
                e.setUTCDate(f),
                d = function() {
                    return c !== e.getUTCMonth()
                }
            }
            for (; d(); )
                e.setUTCDate(--f),
                e.setUTCMonth(c);
            return e
        },
        moveYear: function(a, b) {
            return this.moveMonth(a, 12 * b)
        },
        moveAvailableDate: function(a, b, c) {
            do {
                if (a = this[c](a, b),
                !this.dateWithinRange(a))
                    return !1;
                c = "moveDay"
            } while (this.dateIsDisabled(a));
            return a
        },
        weekOfDateIsDisabled: function(b) {
            return a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) !== -1
        },
        dateIsDisabled: function(b) {
            return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function(a) {
                return e(b, a)
            }).length > 0
        },
        dateWithinRange: function(a) {
            return a >= this.o.startDate && a <= this.o.endDate
        },
        keydown: function(a) {
            if (!this.picker.is(":visible"))
                return void (40 !== a.keyCode && 27 !== a.keyCode || (this.show(),
                a.stopPropagation()));
            var b, c, d = !1, e = this.focusDate || this.viewDate;
            switch (a.keyCode) {
            case 27:
                this.focusDate ? (this.focusDate = null,
                this.viewDate = this.dates.get(-1) || this.viewDate,
                this.fill()) : this.hide(),
                a.preventDefault(),
                a.stopPropagation();
                break;
            case 37:
            case 38:
            case 39:
            case 40:
                if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length)
                    break;
                b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1,
                0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"),
                c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"),
                c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4),
                c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4),
                c = this.moveAvailableDate(e, b, "moveYear")),
                c && (this.focusDate = this.viewDate = c,
                this.setValue(),
                this.fill(),
                a.preventDefault());
                break;
            case 13:
                if (!this.o.forceParse)
                    break;
                e = this.focusDate || this.dates.get(-1) || this.viewDate,
                this.o.keyboardNavigation && (this._toggle_multidate(e),
                d = !0),
                this.focusDate = null,
                this.viewDate = this.dates.get(-1) || this.viewDate,
                this.setValue(),
                this.fill(),
                this.picker.is(":visible") && (a.preventDefault(),
                a.stopPropagation(),
                this.o.autoclose && this.hide());
                break;
            case 9:
                this.focusDate = null,
                this.viewDate = this.dates.get(-1) || this.viewDate,
                this.fill(),
                this.hide()
            }
            d && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"),
            this.inputField.trigger("change"))
        },
        setViewMode: function(a) {
            this.viewMode = a,
            this.picker.children("div").hide().filter(".datepicker-" + r.viewModes[this.viewMode].clsName).show(),
            this.updateNavArrows(),
            this._trigger("changeViewMode", new Date(this.viewDate))
        }
    };
    var l = function(b, c) {
        a.data(b, "datepicker", this),
        this.element = a(b),
        this.inputs = a.map(c.inputs, function(a) {
            return a.jquery ? a[0] : a
        }),
        delete c.inputs,
        this.keepEmptyValues = c.keepEmptyValues,
        delete c.keepEmptyValues,
        n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)),
        this.pickers = a.map(this.inputs, function(b) {
            return a.data(b, "datepicker")
        }),
        this.updateDates()
    };
    l.prototype = {
        updateDates: function() {
            this.dates = a.map(this.pickers, function(a) {
                return a.getUTCDate()
            }),
            this.updateRanges()
        },
        updateRanges: function() {
            var b = a.map(this.dates, function(a) {
                return a.valueOf()
            });
            a.each(this.pickers, function(a, c) {
                c.setRange(b)
            })
        },
        clearDates: function() {
            a.each(this.pickers, function(a, b) {
                b.clearDates()
            })
        },
        dateUpdated: function(c) {
            if (!this.updating) {
                this.updating = !0;
                var d = a.data(c.target, "datepicker");
                if (d !== b) {
                    var e = d.getUTCDate()
                      , f = this.keepEmptyValues
                      , g = a.inArray(c.target, this.inputs)
                      , h = g - 1
                      , i = g + 1
                      , j = this.inputs.length;
                    if (g !== -1) {
                        if (a.each(this.pickers, function(a, b) {
                            b.getUTCDate() || b !== d && f || b.setUTCDate(e)
                        }),
                        e < this.dates[h])
                            for (; h >= 0 && e < this.dates[h]; )
                                this.pickers[h--].setUTCDate(e);
                        else if (e > this.dates[i])
                            for (; i < j && e > this.dates[i]; )
                                this.pickers[i++].setUTCDate(e);
                        this.updateDates(),
                        delete this.updating
                    }
                }
            }
        },
        destroy: function() {
            a.map(this.pickers, function(a) {
                a.destroy()
            }),
            a(this.inputs).off("changeDate", this.dateUpdated),
            delete this.element.data().datepicker
        },
        remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
    };
    var m = a.fn.datepicker
      , n = function(c) {
        var d = Array.apply(null, arguments);
        d.shift();
        var e;
        if (this.each(function() {
            var b = a(this)
              , f = b.data("datepicker")
              , g = "object" == typeof c && c;
            if (!f) {
                var j = h(this, "date")
                  , m = a.extend({}, o, j, g)
                  , n = i(m.language)
                  , p = a.extend({}, o, n, j, g);
                b.hasClass("input-daterange") || p.inputs ? (a.extend(p, {
                    inputs: p.inputs || b.find("input").toArray()
                }),
                f = new l(this,p)) : f = new k(this,p),
                b.data("datepicker", f)
            }
            "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d))
        }),
        e === b || e instanceof k || e instanceof l)
            return this;
        if (this.length > 1)
            throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
        return e
    };
    a.fn.datepicker = n;
    var o = a.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: a.noop,
        beforeShowMonth: a.noop,
        beforeShowYear: a.noop,
        beforeShowDecade: a.noop,
        beforeShowCentury: a.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {
            leftArrow: "&#x00AB;",
            rightArrow: "&#x00BB;"
        },
        showWeekDays: !0
    }
      , p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = k;
    var q = a.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    }
      , r = {
        viewModes: [{
            names: ["days", "month"],
            clsName: "days",
            e: "changeMonth"
        }, {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1
        }, {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10
        }, {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100
        }, {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3
        }],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function(a) {
            if ("function" == typeof a.toValue && "function" == typeof a.toDisplay)
                return a;
            var b = a.replace(this.validParts, "\0").split("\0")
              , c = a.match(this.validParts);
            if (!b || !b.length || !c || 0 === c.length)
                throw new Error("Invalid date format.");
            return {
                separators: b,
                parts: c
            }
        },
        parseDate: function(c, e, f, g) {
            function h(a, b) {
                return b === !0 && (b = 10),
                a < 100 && (a += 2e3,
                a > (new Date).getFullYear() + b && (a -= 100)),
                a
            }
            function i() {
                var a = this.slice(0, j[n].length)
                  , b = j[n].slice(0, a.length);
                return a.toLowerCase() === b.toLowerCase()
            }
            if (!c)
                return b;
            if (c instanceof Date)
                return c;
            if ("string" == typeof e && (e = r.parseFormat(e)),
            e.toValue)
                return e.toValue(c, e, f);
            var j, l, m, n, o, p = {
                d: "moveDay",
                m: "moveMonth",
                w: "moveWeek",
                y: "moveYear"
            }, s = {
                yesterday: "-1d",
                today: "+0d",
                tomorrow: "+1d"
            };
            if (c in s && (c = s[c]),
            /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)) {
                for (j = c.match(/([\-+]\d+)([dmwy])/gi),
                c = new Date,
                n = 0; n < j.length; n++)
                    l = j[n].match(/([\-+]\d+)([dmwy])/i),
                    m = Number(l[1]),
                    o = p[l[2].toLowerCase()],
                    c = k.prototype[o](c, m);
                return k.prototype._zero_utc_time(c)
            }
            j = c && c.match(this.nonpunctuation) || [];
            var t, u, v = {}, w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], x = {
                yyyy: function(a, b) {
                    return a.setUTCFullYear(g ? h(b, g) : b)
                },
                m: function(a, b) {
                    if (isNaN(a))
                        return a;
                    for (b -= 1; b < 0; )
                        b += 12;
                    for (b %= 12,
                    a.setUTCMonth(b); a.getUTCMonth() !== b; )
                        a.setUTCDate(a.getUTCDate() - 1);
                    return a
                },
                d: function(a, b) {
                    return a.setUTCDate(b)
                }
            };
            x.yy = x.yyyy,
            x.M = x.MM = x.mm = x.m,
            x.dd = x.d,
            c = d();
            var y = e.parts.slice();
            if (j.length !== y.length && (y = a(y).filter(function(b, c) {
                return a.inArray(c, w) !== -1
            }).toArray()),
            j.length === y.length) {
                var z;
                for (n = 0,
                z = y.length; n < z; n++) {
                    if (t = parseInt(j[n], 10),
                    l = y[n],
                    isNaN(t))
                        switch (l) {
                        case "MM":
                            u = a(q[f].months).filter(i),
                            t = a.inArray(u[0], q[f].months) + 1;
                            break;
                        case "M":
                            u = a(q[f].monthsShort).filter(i),
                            t = a.inArray(u[0], q[f].monthsShort) + 1
                        }
                    v[l] = t
                }
                var A, B;
                for (n = 0; n < w.length; n++)
                    B = w[n],
                    B in v && !isNaN(v[B]) && (A = new Date(c),
                    x[B](A, v[B]),
                    isNaN(A) || (c = A))
            }
            return c
        },
        formatDate: function(b, c, d) {
            if (!b)
                return "";
            if ("string" == typeof c && (c = r.parseFormat(c)),
            c.toDisplay)
                return c.toDisplay(b, c, d);
            var e = {
                d: b.getUTCDate(),
                D: q[d].daysShort[b.getUTCDay()],
                DD: q[d].days[b.getUTCDay()],
                m: b.getUTCMonth() + 1,
                M: q[d].monthsShort[b.getUTCMonth()],
                MM: q[d].months[b.getUTCMonth()],
                yy: b.getUTCFullYear().toString().substring(2),
                yyyy: b.getUTCFullYear()
            };
            e.dd = (e.d < 10 ? "0" : "") + e.d,
            e.mm = (e.m < 10 ? "0" : "") + e.m,
            b = [];
            for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; g <= h; g++)
                f.length && b.push(f.shift()),
                b.push(e[c.parts[g]]);
            return b.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + o.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + o.templates.rightArrow + "</th></tr></thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>",
    a.fn.datepicker.DPGlobal = r,
    a.fn.datepicker.noConflict = function() {
        return a.fn.datepicker = m,
        this
    }
    ,
    a.fn.datepicker.version = "1.8.0",
    a.fn.datepicker.deprecated = function(a) {
        var b = window.console;
        b && b.warn && b.warn("DEPRECATED: " + a)
    }
    ,
    a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(),
        n.call(c, "show"))
    }),
    a(function() {
        n.call(a('[data-provide="datepicker-inline"]'))
    })
});

!function(a) {
    a.fn.datepicker.dates.et = {
        days: ["PÃ¼hapÃ¤ev", "EsmaspÃ¤ev", "TeisipÃ¤ev", "KolmapÃ¤ev", "NeljapÃ¤ev", "Reede", "LaupÃ¤ev"],
        daysShort: ["PÃ¼hap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
        daysMin: ["P", "E", "T", "K", "N", "R", "L"],
        months: ["Jaanuar", "Veebruar", "MÃ¤rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
        monthsShort: ["Jaan", "Veebr", "MÃ¤rts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
        today: "TÃ¤na",
        clear: "TÃ¼hjenda",
        weekStart: 1,
        format: "dd.mm.yyyy"
    }
}(jQuery);

/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!function(a, b) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], b);
    else if ("undefined" != typeof exports)
        b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports),
        a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(a, b) {
        return b.indexOf(a) >= 0
    }
    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }
    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }
    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]
          , c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]
          , d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
          , e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"),
        e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
        e.eventType = a) : e.eventName = a,
        e
    }
    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }
    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }
    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }
    function k() {
        return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1,
                d.configurable = !0,
                "value"in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }(), o = window.WeakMap || window.MozWeakMap || function() {
        function a() {
            c(this, a),
            this.keys = [],
            this.values = []
        }
        return n(a, [{
            key: "get",
            value: function(a) {
                for (var b = 0; b < this.keys.length; b++) {
                    var c = this.keys[b];
                    if (c === a)
                        return this.values[b]
                }
            }
        }, {
            key: "set",
            value: function(a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                    var d = this.keys[c];
                    if (d === a)
                        return this.values[c] = b,
                        this
                }
                return this.keys.push(a),
                this.values.push(b),
                this
            }
        }]),
        a
    }(), p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
        function a() {
            c(this, a),
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return n(a, [{
            key: "observe",
            value: function() {}
        }]),
        a
    }(),
    l.notSupported = !0,
    m), q = window.getComputedStyle || function(a) {
        var b = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(c) {
                "float" === c && (c = "styleFloat"),
                b.test(c) && c.replace(b, function(a, b) {
                    return b.toUpperCase()
                });
                var d = a.currentStyle;
                return (null != d ? d[c] : void 0) || null
            }
        }
    }
    , r = function() {
        function a() {
            var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            c(this, a),
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            },
            this.animate = function() {
                return "requestAnimationFrame"in window ? function(a) {
                    return window.requestAnimationFrame(a)
                }
                : function(a) {
                    return a()
                }
            }(),
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = e(b, this.defaults),
            null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)),
            this.animationNameCache = new o,
            this.wowEvent = g(this.config.boxClass)
        }
        return n(a, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement,
                d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var a = this;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (var b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            this.applyStyle(c, !0)
                        }
                if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                i(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) {
                    var d = new p(function(b) {
                        for (var c = 0; c < b.length; c++)
                            for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                var f = d.addedNodes[e];
                                a.doSync(f)
                            }
                    }
                    );
                    d.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0,
                j(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                p.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(a) {
                if ("undefined" != typeof a && null !== a || (a = this.element),
                1 === a.nodeType) {
                    a = a.parentNode || a;
                    for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                        var e = b[c];
                        d(e, this.all) || (this.boxes.push(e),
                        this.all.push(e),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
                        this.scrolled = !0)
                    }
                }
            }
        }, {
            key: "show",
            value: function(a) {
                return this.applyStyle(a),
                a.className = a.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation && (i(a, "animationend", this.resetAnimation),
                i(a, "oanimationend", this.resetAnimation),
                i(a, "webkitAnimationEnd", this.resetAnimation),
                i(a, "MSAnimationEnd", this.resetAnimation)),
                a
            }
        }, {
            key: "applyStyle",
            value: function(a, b) {
                var c = this
                  , d = a.getAttribute("data-wow-duration")
                  , e = a.getAttribute("data-wow-delay")
                  , f = a.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return c.customStyle(a, b, d, e, f)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var a = 0; a < this.boxes.length; a++) {
                    var b = this.boxes[a];
                    b.style.visibility = "visible"
                }
            }
        }, {
            key: "resetAnimation",
            value: function(a) {
                if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                    var b = a.target || a.srcElement;
                    b.className = b.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a),
                a.style.visibility = b ? "hidden" : "visible",
                c && this.vendorSet(a.style, {
                    animationDuration: c
                }),
                d && this.vendorSet(a.style, {
                    animationDelay: d
                }),
                e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }),
                this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }),
                a
            }
        }, {
            key: "vendorSet",
            value: function(a, b) {
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        a["" + c] = d;
                        for (var e = 0; e < this.vendors.length; e++) {
                            var f = this.vendors[e];
                            a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                        }
                    }
            }
        }, {
            key: "vendorCSS",
            value: function(a, b) {
                for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                }
                return d
            }
        }, {
            key: "animationName",
            value: function(a) {
                var b = void 0;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = q(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }
        }, {
            key: "cacheAnimationName",
            value: function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }
        }, {
            key: "cachedAnimationName",
            value: function(a) {
                return this.animationNameCache.get(a)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                if (this.scrolled) {
                    this.scrolled = !1;
                    for (var a = [], b = 0; b < this.boxes.length; b++) {
                        var c = this.boxes[b];
                        if (c) {
                            if (this.isVisible(c)) {
                                this.show(c);
                                continue
                            }
                            a.push(c)
                        }
                    }
                    this.boxes = a,
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(a) {
                for (; void 0 === a.offsetTop; )
                    a = a.parentNode;
                for (var b = a.offsetTop; a.offsetParent; )
                    a = a.offsetParent,
                    b += a.offsetTop;
                return b
            }
        }, {
            key: "isVisible",
            value: function(a) {
                var b = a.getAttribute("data-wow-offset") || this.config.offset
                  , c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , d = c + Math.min(this.element.clientHeight, k()) - b
                  , e = this.offsetTop(a)
                  , f = e + a.clientHeight;
                return d >= e && f >= c
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && f(navigator.userAgent)
            }
        }]),
        a
    }();
    b["default"] = r,
    a.exports = b["default"]
});

(function(e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (s = t.parentNode,
        a = s.name,
        t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0],
        !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }
    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var s = 0
      , a = /^ui-id-\d+$/;
    e.ui = e.ui || {},
    e.extend(e.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    e.fn.extend({
        focus: function(t) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(),
                        n && n.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t)
                return this.css("zIndex", i);
            if (this.length)
                for (var n, s, a = e(this[0]); a.length && a[0] !== document; ) {
                    if (n = a.css("position"),
                    ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10),
                    !isNaN(s) && 0 !== s))
                        return s;
                    a = a.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                a.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, n) {
            return !!e.data(t, n[3])
        }
        ,
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex")
              , s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
        }
    }),
    e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, n) {
        function s(t, i, n, s) {
            return e.each(a, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0,
                n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"]
          , o = n.toLowerCase()
          , r = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + n] = function(i) {
            return i === t ? r["inner" + n].call(this) : this.each(function() {
                e(this).css(o, s(this, i) + "px")
            })
        }
        ,
        e.fn["outer" + n] = function(t, i) {
            return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function() {
                e(this).css(o, s(this, t, !0, i) + "px")
            })
        }
    }),
    e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
    ),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)),
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    e.support.selectstart = "onselectstart"in document.createElement("div"),
    e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    e.extend(e.ui, {
        plugin: {
            add: function(t, i, n) {
                var s, a = e.ui[t].prototype;
                for (s in n)
                    a.plugins[s] = a.plugins[s] || [],
                    a.plugins[s].push([i, n[s]])
            },
            call: function(e, t, i) {
                var n, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (n = 0; s.length > n; n++)
                        e.options[s[n][0]] && s[n][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow"))
                return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop"
              , s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1,
            s = t[n] > 0,
            t[n] = 0,
            s)
        }
    })
}
)(jQuery);
(function(t, e) {
    var i = 0
      , s = Array.prototype.slice
      , n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++)
            try {
                t(i).triggerHandler("remove")
            } catch (o) {}
        n(e)
    }
    ,
    t.widget = function(i, s, n) {
        var o, a, r, h, l = {}, c = i.split(".")[0];
        i = i.split(".")[1],
        o = c + "-" + i,
        n || (n = s,
        s = t.Widget),
        t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }
        ,
        t[c] = t[c] || {},
        a = t[c][i],
        r = t[c][i] = function(t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i),
            e) : new r(t,i)
        }
        ,
        t.extend(r, a, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }),
        h = new s,
        h.options = t.widget.extend({}, h.options),
        t.each(n, function(i, n) {
            return t.isFunction(n) ? (l[i] = function() {
                var t = function() {
                    return s.prototype[i].apply(this, arguments)
                }
                  , e = function(t) {
                    return s.prototype[i].apply(this, t)
                };
                return function() {
                    var i, s = this._super, o = this._superApply;
                    return this._super = t,
                    this._superApply = e,
                    i = n.apply(this, arguments),
                    this._super = s,
                    this._superApply = o,
                    i
                }
            }(),
            e) : (l[i] = n,
            e)
        }),
        r.prototype = t.widget.extend(h, {
            widgetEventPrefix: a ? h.widgetEventPrefix || i : i
        }, l, {
            constructor: r,
            namespace: c,
            widgetName: i,
            widgetFullName: o
        }),
        a ? (t.each(a._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }),
        delete a._childConstructors) : s._childConstructors.push(r),
        t.widget.bridge(i, r)
    }
    ,
    t.widget.extend = function(i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
            for (n in a[r])
                o = a[r][n],
                a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }
    ,
    t.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function(a) {
            var r = "string" == typeof a
              , h = s.call(arguments, 1)
              , l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a,
            r ? this.each(function() {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h),
                s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s,
                !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a,this))
            }),
            l
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0],
            this.element = t(s),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            s !== this && (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }),
            this.document = t(s.style ? s.ownerDocument : s.document || s),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {},
                n = i.split("."),
                i = n.shift(),
                n.length) {
                    for (o = r[i] = t.widget.extend({}, this.options[i]),
                    a = 0; n.length - 1 > a; a++)
                        o[n[a]] = o[n[a]] || {},
                        o = o[n[a]];
                    if (i = n.pop(),
                    1 === arguments.length)
                        return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (1 === arguments.length)
                        return this.options[i] === e ? null : this.options[i];
                    r[i] = s
                }
            return this._setOptions(r),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e,
            "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var o, a = this;
            "boolean" != typeof i && (n = s,
            s = i,
            i = !1),
            n ? (s = o = t(s),
            this.bindings = this.bindings.add(s)) : (n = s,
            s = this.element,
            o = this.widget()),
            t.each(n, function(n, r) {
                function h() {
                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
                }
                "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/)
                  , c = l[1] + a.eventNamespace
                  , u = l[2];
                u ? o.delegate(u, c, h) : s.bind(c, h)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {},
            i = t.Event(i),
            i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            o = i.originalEvent)
                for (n in o)
                    n in i || (i[n] = o[n]);
            return this.element.trigger(i, s),
            !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            a = !t.isEmptyObject(n),
            n.complete = o,
            n.delay && s.delay(n.delay),
            a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](),
                o && o.call(s[0]),
                i()
            })
        }
    })
}
)(jQuery);
(function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }),
    t.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1) : undefined
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i),
                this._mouseDownEvent = i;
                var s = this
                  , n = 1 === i.which
                  , a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1,
                !this._mouseStarted) ? (i.preventDefault(),
                !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }
                ,
                t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                i.preventDefault(),
                e = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e),
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1,
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
            !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}
)(jQuery);
(function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
            for (i = s.values && s.values.length || 1,
            n.length > i && (n.slice(i).remove(),
            n = n.slice(0, i)),
            e = n.length; i > e; e++)
                o.push(a);
            this.handles = n.add(t(o.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options
              , i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element),
            i = "ui-slider-range ui-widget-header ui-corner-all"),
            this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t),
            this._on(t, this._handleEvents),
            this._hoverable(t),
            this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, a, o, r, l, h, u = this, c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            i = {
                x: e.pageX,
                y: e.pageY
            },
            s = this._normValueFromMouse(i),
            n = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(e) {
                var i = Math.abs(s - u.values(e));
                (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i,
                a = t(this),
                o = e)
            }),
            r = this._start(e, o),
            r === !1 ? !1 : (this._mouseSliding = !0,
            this._handleIndex = o,
            a.addClass("ui-state-active").focus(),
            l = a.offset(),
            h = !t(e.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - a.width() / 2,
                top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(e, o, s),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }
              , i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i),
            !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, a;
            return "horizontal" === this.orientation ? (e = this.elementSize.width,
            i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            s = i / e,
            s > 1 && (s = 1),
            0 > s && (s = 0),
            "vertical" === this.orientation && (s = 1 - s),
            n = this._valueMax() - this._valueMin(),
            a = this._valueMin() + s * n,
            this._trimAlignValue(a)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e),
            i.values = this.values()),
            this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1),
            2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s),
            i !== this.values(e) && (n = this.values(),
            n[e] = i,
            a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }),
            s = this.values(e ? 0 : 1),
            a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }),
            a !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e),
            i.values = this.values()),
            this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e),
                i.values = this.values()),
                this._lastChangedValue = e,
                this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t),
            this._refreshValue(),
            this._change(null, 0),
            undefined) : this._value()
        },
        values: function(e, i) {
            var s, n, a;
            if (arguments.length > 1)
                return this.options.values[e] = this._trimAlignValue(i),
                this._refreshValue(),
                this._change(null, e),
                undefined;
            if (!arguments.length)
                return this._values();
            if (!t.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values,
            n = arguments[0],
            a = 0; s.length > a; a += 1)
                s[a] = this._trimAlignValue(n[a]),
                this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            t.isArray(this.options.values) && (n = this.options.values.length),
            t.Widget.prototype._setOption.apply(this, arguments),
            e) {
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                s = 0; n > s; s += 1)
                    this._change(null, s);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0,
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length)
                return e = this.options.values[t],
                e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(),
                s = 0; i.length > s; s += 1)
                    i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t)
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1
              , i = (t - this._valueMin()) % e
              , s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
            parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, s, n, a, o = this.options.range, r = this.options, l = this, h = this._animateOff ? !1 : r.animate, u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())),
                u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%",
                t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate),
                l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate),
                1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate),
                1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))),
                e = i
            }) : (s = this.value(),
            n = this._valueMin(),
            a = this._valueMax(),
            i = a !== n ? 100 * ((s - n) / (a - n)) : 0,
            u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
            this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate),
            "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate),
            "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }),
            "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate),
            "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    t(i.target).addClass("ui-state-active"),
                    s = this._start(i, r),
                    s === !1))
                        return
                }
                switch (o = this.options.step,
                n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(),
                i.keyCode) {
                case t.ui.keyCode.HOME:
                    a = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    a = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (n === this._valueMax())
                        return;
                    a = this._trimAlignValue(n + o);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (n === this._valueMin())
                        return;
                    a = this._trimAlignValue(n - o)
                }
                this._slide(i, r, a)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(e, i),
                this._change(e, i),
                t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}
)(jQuery);

/**
 * [jQuery-stickit]{@link https://github.com/emn178/jquery-stickit}
 *
 * @version 0.2.11
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2016
 * @license MIT
 */
(function($) {
    var KEY = 'jquery-stickit';
    var SPACER_KEY = KEY + '-spacer';
    var SELECTOR = ':' + KEY;
    var IE7 = navigator.userAgent.indexOf('MSIE 7.0') != -1;
    var OFFSET = IE7 ? -2 : 0;
    var LOCATIING_KEY = KEY + '-locating';
    var MUTATION = window.MutationObserver !== undefined;
    var animationend = 'animationend webkitAnimationEnd oAnimationEnd';
    var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd';
    var fullscreenchange = 'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange';

    var Scope = window.StickScope = {
        Parent: 0,
        Document: 1
    };

    var Stick = {
        None: 0,
        Fixed: 1,
        Absolute: 2
    };

    var init = false;

    function throttle(func) {
        var delay = 10;
        var lastTime = 0;
        var timer;
        return function() {
            var self = this
              , args = arguments;
            var exec = function() {
                lastTime = new Date();
                func.apply(self, args);
            };
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            var diff = new Date() - lastTime;
            if (diff > delay) {
                exec();
            } else {
                timer = setTimeout(exec, delay - diff);
            }
        }
        ;
    }

    $.expr[':'][KEY] = function(element) {
        return !!$(element).data(KEY);
    }
    ;

    function Sticker(element, optionList) {
        this.element = $(element);
        this.lastValues = {};
        if (!$.isArray(optionList)) {
            optionList = [optionList || {}];
        }
        if (!optionList.length) {
            optionList.push({});
        }
        this.optionList = optionList;
        var transform = this.element.css('transform') || '';
        this.defaultZIndex = this.element.css('z-index') || 100;
        if (this.defaultZIndex == 'auto') {
            this.defaultZIndex = 100;
        } else if (this.defaultZIndex == '0' && transform != 'none') {
            this.defaultZIndex = 100;
        }
        this.updateOptions();

        this.offsetY = 0;
        this.lastY = 0;
        this.stick = Stick.None;
        this.spacer = $('<div />');
        this.spacer[0].id = element.id;
        this.spacer[0].className = element.className;
        this.spacer[0].style.cssText = element.style.cssText;
        this.spacer.addClass(SPACER_KEY);
        this.spacer[0].style.cssText += ';visibility: hidden !important;display: none !important';
        this.spacer.insertAfter(this.element);
        if (this.element.parent().css('position') == 'static') {
            this.element.parent().css('position', 'relative');
        }
        this.origWillChange = this.element.css('will-change');
        if (this.origWillChange == 'auto') {
            this.element.css('will-change', 'transform');
        }
        if (transform == 'none') {
            this.element.css('transform', 'translateZ(0)');
        } else if (transform.indexOf('matrix3d') == -1) {
            this.element.css('transform', this.element.css('transform') + ' translateZ(0)');
        }
        this.bound();
        this.precalculate();
        this.store();
    }

    Sticker.prototype.trigger = function(eventName) {
        var name = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
        if (this.options[name]) {
            this.options[name].call(this.element);
        }
        this.element.trigger('stickit:' + eventName);
    }
    ;

    Sticker.prototype.isActive = function(options) {
        return (options.screenMinWidth === undefined || screenWidth >= options.screenMinWidth) && (options.screenMaxWidth === undefined || screenWidth <= options.screenMaxWidth);
    }
    ;

    Sticker.prototype.updateCss = function(options) {
        if (this.element.hasClass(this.options.className) && options.className != this.options.className) {
            this.element.removeClass(this.options.className).addClass(options.className);
        }
        var update = {};
        if (this.stick == Stick.Absolute) {
            if (this.options.extraHeight != options.extraHeight) {
                update.bottom = -this.options.extraHeight + 'px';
            }
        } else {
            if (this.options.top != options.top) {
                update.top = (options.top + this.offsetY) + 'px';
            }
        }
        if (this.options.zIndex != options.zIndex) {
            update.zIndex = this.getZIndex(options);
        }
        this.element.css(update);
    }
    ;

    Sticker.prototype.updateOptions = function() {
        var activeKey = this.getActiveOptionsKey();
        if (this.activeKey == activeKey) {
            return;
        }
        this.activeKey = activeKey;
        var options = this.getActiveOptions();
        if (this.options) {
            if (!activeKey) {
                this.reset();
            } else if (this.stick != Stick.None) {
                if (options.scope == this.options.scope) {
                    this.updateCss(options);
                } else {
                    this.reset();
                    setTimeout(this.locate.bind(this));
                }
            }
        }
        this.options = options;
        this.zIndex = this.getZIndex(options);
    }
    ;

    Sticker.prototype.getZIndex = function(options) {
        return options.zIndex === undefined ? this.defaultZIndex : options.zIndex;
    }
    ;

    Sticker.prototype.getActiveOptionsKey = function() {
        var indices = [];
        for (var i = 0; i < this.optionList.length; ++i) {
            if (this.isActive(this.optionList[i])) {
                indices.push(i);
            }
        }
        return indices.join('_');
    }
    ;

    Sticker.prototype.getActiveOptions = function() {
        var options = {};
        for (var i = 0; i < this.optionList.length; ++i) {
            var opt = this.optionList[i];
            if (this.isActive(opt)) {
                $.extend(options, opt);
            }
        }
        options.scope = options.scope || Scope.Parent;
        options.className = options.className || 'stick';
        options.top = options.top || 0;
        options.extraHeight = options.extraHeight || 0;
        if (options.overflowScrolling === undefined) {
            options.overflowScrolling = true;
        }
        return options;
    }
    ;

    Sticker.prototype.store = function() {
        var element = this.element[0];
        this.origStyle = {
            width: element.style.width,
            position: element.style.position,
            left: element.style.left,
            top: element.style.top,
            bottom: element.style.bottom,
            zIndex: element.style.zIndex
        };
    }
    ;

    Sticker.prototype.restore = function() {
        this.element.css(this.origStyle);
    }
    ;

    Sticker.prototype.bound = function() {
        var element = this.element;
        if (!IE7 && element.css('box-sizing') == 'border-box') {
            var bl = parseFloat(element.css('border-left-width')) || 0;
            var br = parseFloat(element.css('border-right-width')) || 0;
            var pl = parseFloat(element.css('padding-left')) || 0;
            var pr = parseFloat(element.css('padding-right')) || 0;
            this.extraWidth = bl + br + pl + pr;
        } else {
            this.extraWidth = 0;
        }

        this.margin = {
            top: parseFloat(element.css('margin-top')) || 0,
            bottom: parseFloat(element.css('margin-bottom')) || 0,
            left: parseFloat(element.css('margin-left')) || 0,
            right: parseFloat(element.css('margin-right')) || 0
        };
        this.parent = {
            border: {
                bottom: parseFloat(element.parent().css('border-bottom-width')) || 0
            }
        };
    }
    ;

    Sticker.prototype.precalculate = function() {
        this.baseTop = this.margin.top + this.options.top;
        this.basePadding = this.baseTop + this.margin.bottom;
        this.baseParentOffset = this.options.extraHeight - this.parent.border.bottom;
        this.offsetHeight = this.options.overflowScrolling ? Math.max(this.element.outerHeight(false) + this.basePadding - screenHeight, 0) : 0;
        this.minOffsetHeight = -this.offsetHeight;
    }
    ;

    Sticker.prototype.reset = function() {
        if (this.stick == Stick.Absolute) {
            this.trigger('unend');
            this.trigger('unstick');
        } else if (this.stick == Stick.Fixed) {
            this.trigger('unstick');
        }
        this.stick = Stick.None;
        this.spacer.css('width', this.origStyle.width);
        this.spacer[0].style.cssText += ';display: none !important';
        this.restore();
        this.element.removeClass(this.options.className);
    }
    ;

    Sticker.prototype.setAbsolute = function(left) {
        if (this.stick == Stick.None) {
            this.element.addClass(this.options.className);
            this.trigger('stick');
            this.trigger('end');
        } else {
            this.trigger('end');
        }
        this.stick = Stick.Absolute;
        this.element.css({
            width: this.element.width() + this.extraWidth + 'px',
            position: 'absolute',
            top: this.origStyle.top,
            left: left + 'px',
            bottom: -this.options.extraHeight + 'px',
            'z-index': this.zIndex
        });
    }
    ;

    Sticker.prototype.setFixed = function(left, lastY, offsetY) {
        if (this.stick == Stick.None) {
            this.element.addClass(this.options.className);
            this.trigger('stick');
        } else {
            this.trigger('unend');
        }
        if (!this.options.overflowScrolling) {
            offsetY = 0;
        }
        this.stick = Stick.Fixed;
        this.lastY = lastY;
        this.offsetY = offsetY;
        this.element.css({
            width: this.element.width() + this.extraWidth + 'px',
            position: 'fixed',
            top: (this.options.top + offsetY) + 'px',
            left: left + 'px',
            bottom: this.origStyle.bottom,
            'z-index': this.zIndex
        });
    }
    ;

    Sticker.prototype.updateScroll = function(newY) {
        if (this.offsetHeight == 0 || !this.options.overflowScrolling) {
            return;
        }
        var offsetY = Math.max(this.offsetY + newY - this.lastY, this.minOffsetHeight);
        offsetY = Math.min(offsetY, 0);
        this.lastY = newY;
        if (this.offsetY == offsetY) {
            return;
        }
        this.offsetY = offsetY;
        this.element.css('top', (this.options.top + this.offsetY) + 'px');
    }
    ;

    Sticker.prototype.isHigher = function() {
        return this.options.scope == Scope.Parent && this.element.parent().height() <= this.element.outerHeight(false) + this.basePadding;
    }
    ;

    Sticker.prototype.locate = function() {
        if (!this.activeKey) {
            return;
        }
        var rect, top, left, element = this.element, spacer = this.spacer;
        element.data(LOCATIING_KEY, true);
        switch (this.stick) {
        case Stick.Fixed:
            rect = spacer[0].getBoundingClientRect();
            top = rect.top - this.baseTop;
            if (top >= 0 || this.isHigher()) {
                this.reset();
            } else if (this.options.scope == Scope.Parent) {
                rect = element.parent()[0].getBoundingClientRect();
                if (rect.bottom + this.baseParentOffset + this.offsetHeight <= element.outerHeight(false) + this.basePadding) {
                    this.setAbsolute(this.spacer.position().left);
                } else {
                    this.updateScroll(rect.bottom);
                }
            } else {
                this.updateScroll(rect.bottom);
            }
            break;
        case Stick.Absolute:
            rect = spacer[0].getBoundingClientRect();
            top = rect.top - this.baseTop;
            left = rect.left - this.margin.left;
            if (top >= 0 || this.isHigher()) {
                this.reset();
            } else {
                rect = element.parent()[0].getBoundingClientRect();
                if (rect.bottom + this.baseParentOffset + this.offsetHeight > element.outerHeight(false) + this.basePadding) {
                    this.setFixed(left + OFFSET, rect.bottom, -this.offsetHeight);
                }
            }
            break;
        case Stick.None:
            /* falls through */
        default:
            rect = element[0].getBoundingClientRect();
            top = rect.top - this.baseTop;
            if (top >= 0 || this.isHigher()) {
                return;
            }

            var rect2 = element.parent()[0].getBoundingClientRect();
            spacer.height(element.height());
            spacer.show();
            left = rect.left - this.margin.left;
            if (this.options.scope == Scope.Document) {
                this.setFixed(left, rect.bottom, 0);
            } else {
                if (rect2.bottom + this.baseParentOffset + this.offsetHeight <= element.outerHeight(false) + this.basePadding) {
                    this.setAbsolute(this.element.position().left);
                } else {
                    this.setFixed(left + OFFSET, rect.bottom, 0);
                }
            }

            if (!spacer.width()) {
                spacer.width(element.width());
            }
            break;
        }
    }
    ;

    Sticker.prototype.refresh = function() {
        this.updateOptions();
        this.bound();
        this.precalculate();
        if (this.stick == Stick.None) {
            this.locate();
            return;
        }
        var element = this.element;
        var spacer = this.spacer;
        if (this.lastValues.width != spacer.width()) {
            element.width(this.lastValues.width = spacer.width());
        }
        if (this.lastValues.height != spacer.height()) {
            spacer.height(this.lastValues.height = spacer.height());
        }
        if (this.stick == Stick.Fixed) {
            var rect = this.spacer[0].getBoundingClientRect();
            var left = rect.left - this.margin.left;
            if (this.lastValues.left != left + 'px') {
                element.css('left', this.lastValues.left = left + 'px');
            }
        }
        this.locate();
    }
    ;

    Sticker.prototype.destroy = function() {
        this.reset();
        this.spacer.remove();
        this.element.removeData(KEY);
    }
    ;

    Sticker.prototype.enableWillChange = function(enabled) {
        if (this.origWillChange != 'auto') {
            return;
        }
        this.element.css('will-change', enabled ? 'transform' : this.origWillChange);
    }
    ;

    var screenHeight, screenWidth;
    function resize() {
        screenHeight = window.innerHeight || document.documentElement.clientHeight;
        screenWidth = window.innerWidth || document.documentElement.clientWidth;
        refresh();
    }

    function refresh() {
        $(SELECTOR).each(function() {
            $(this).data(KEY).refresh();
        });
    }

    function scroll() {
        $(SELECTOR).each(function() {
            $(this).data(KEY).locate();
        });
    }
    ;
    function onFullscreenChange() {
        var fullscreen = !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
        $(SELECTOR).each(function() {
            $(this).data(KEY).enableWillChange(!fullscreen);
        });
    }

    var throttleRefresh = throttle(refresh);

    function mutationUpdate(records) {
        var notAllLocating = records.some(function(record) {
            var element = $(record.target);
            var locating = element.data(LOCATIING_KEY);
            if (locating) {
                element.removeData(LOCATIING_KEY);
            }
            return !element.hasClass(SPACER_KEY) && !locating;
        });
        if (notAllLocating) {
            throttleRefresh();
        }
    }

    var PublicMethods = ['destroy', 'refresh'];
    $.fn.stickit = function(method, options) {
        // init
        if (typeof (method) == 'string') {
            if ($.inArray(method, PublicMethods) != -1) {
                var args = arguments;
                this.each(function() {
                    var sticker = $(this).data(KEY);
                    if (sticker) {
                        sticker[method].apply(sticker, Array.prototype.slice.call(args, 1));
                    }
                });
            }
        } else {
            if (!init) {
                init = true;
                resize();
                $(document).ready(function() {
                    $(window).bind('resize', resize).bind('scroll', scroll);
                    $(document.body).bind(animationend + ' ' + transitionend, scroll);
                    $(document).bind(fullscreenchange, onFullscreenChange);
                });

                if (MUTATION) {
                    var observer = new MutationObserver(mutationUpdate);
                    observer.observe(document, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true
                    });
                }
            }

            if ($.isArray(method)) {
                options = method;
            } else {
                options = Array.prototype.slice.call(arguments, 0);
            }
            this.each(function() {
                var sticker = new Sticker(this,options);
                $(this).data(KEY, sticker);
                sticker.locate();
            });
        }
        return this;
    }
    ;

    $.stickit = {
        refresh: refresh
    };
}
)(jQuery);

/*!
 * The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2014 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";
    function b(a) {
        if (a instanceof Date)
            return a;
        if (String(a).match(g))
            return String(a).match(/^[0-9]*$/) && (a = Number(a)),
            String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
            new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }
    function c(a) {
        return function(b) {
            var c = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (c)
                for (var e = 0, f = c.length; f > e; ++e) {
                    var g = c[e].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/)
                      , i = new RegExp(g[0])
                      , j = g[1] || ""
                      , k = g[3] || ""
                      , l = null;
                    g = g[2],
                    h.hasOwnProperty(g) && (l = h[g],
                    l = Number(a[l])),
                    null !== l && ("!" === j && (l = d(k, l)),
                    "" === j && 10 > l && (l = "0" + l.toString()),
                    b = b.replace(i, l.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }
    function d(a, b) {
        var c = "s"
          , d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/),
        1 === a.length ? c = a[0] : (d = a[0],
        c = a[1])),
        1 === Math.abs(b) ? d : c
    }
    var e = 100
      , f = []
      , g = [];
    g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g = new RegExp(g.join("|"));
    var h = {
        Y: "years",
        m: "months",
        w: "weeks",
        d: "days",
        D: "totalDays",
        H: "hours",
        M: "minutes",
        S: "seconds"
    }
      , i = function(b, c, d) {
        this.el = b,
        this.$el = a(b),
        this.interval = null,
        this.offset = {},
        this.instanceNumber = f.length,
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d && (this.$el.on("update.countdown", d),
        this.$el.on("stoped.countdown", d),
        this.$el.on("finish.countdown", d)),
        this.setFinalDate(c),
        this.start()
    };
    a.extend(i.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(),
            this.interval = setInterval(function() {
                a.update.call(a)
            }, e)
        },
        stop: function() {
            clearInterval(this.interval),
            this.interval = null,
            this.dispatchEvent("stoped")
        },
        pause: function() {
            this.stop.call(this)
        },
        resume: function() {
            this.start.call(this)
        },
        remove: function() {
            this.stop(),
            f[this.instanceNumber] = null,
            delete this.$el.data().countdownInstance
        },
        setFinalDate: function(a) {
            this.finalDate = b(a)
        },
        update: function() {
            return 0 === this.$el.closest("html").length ? void this.remove() : (this.totalSecsLeft = this.finalDate.getTime() - (new Date).getTime(),
            this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3),
            this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft,
            this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
            },
            void (0 === this.totalSecsLeft ? (this.stop(),
            this.dispatchEvent("finish")) : this.dispatchEvent("update")))
        },
        dispatchEvent: function(b) {
            var d = a.Event(b + ".countdown");
            d.finalDate = this.finalDate,
            d.offset = a.extend({}, this.offset),
            d.strftime = c(this.offset),
            this.$el.trigger(d)
        }
    }),
    a.fn.countdown = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c]
                  , e = b[0];
                i.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e),
                d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else
                new i(this,b[0],b[1])
        })
    }
});

/* accordion.js */

function getAccordion(element_id, screen) {
    $(window).resize(function() {
        location.reload();
    });

    if ($(window).width() < screen) {
        var concat = '';
        obj_tabs = $(element_id + " li").toArray();
        obj_cont = $(".tab-content .tab-pane").toArray();
        jQuery.each(obj_tabs, function(n, val) {
            concat += '<div id="' + n + '" class="panel panel-default">';
            concat += '<div class="panel-heading" role="tab" id="heading' + n + '">';
            concat += '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + n + '" aria-expanded="false" aria-controls="collapse' + n + '">' + val.innerText + '</a></h4>';
            concat += '</div>';
            concat += '<div id="collapse' + n + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + n + '">';
            concat += '<div class="panel-body">' + obj_cont[n].innerHTML + '</div>';
            concat += '</div>';
            concat += '</div>';
        });
        $("#accordion").html(concat);
        $("#accordion").find('.panel-collapse:first').addClass("in");
        $("#accordion").find('.panel-title a:first').attr("aria-expanded", "true");
        $(element_id).remove();
        $(".tab-content").remove();
    }
}

/*!
 * Bootstrap-select v1.11.2 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function(a) {
        "use strict";
        function b(b) {
            var c = [{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            return a.each(c, function() {
                b = b.replace(this.re, this.ch)
            }),
            b
        }
        function c(a) {
            var b = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }
              , c = "(?:" + Object.keys(b).join("|") + ")"
              , d = new RegExp(c)
              , e = new RegExp(c,"g")
              , f = null == a ? "" : "" + a;
            return d.test(f) ? f.replace(e, function(a) {
                return b[a]
            }) : f
        }
        function d(b, c) {
            var d = arguments
              , e = b
              , f = c;
            [].shift.apply(d);
            var h, i = this.each(function() {
                var b = a(this);
                if (b.is("select")) {
                    var c = b.data("selectpicker")
                      , i = "object" == typeof e && e;
                    if (c) {
                        if (i)
                            for (var j in i)
                                i.hasOwnProperty(j) && (c.options[j] = i[j])
                    } else {
                        var k = a.extend({}, g.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
                        k.template = a.extend({}, g.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, i.template),
                        b.data("selectpicker", c = new g(this,k,f))
                    }
                    "string" == typeof e && (h = c[e]instanceof Function ? c[e].apply(c, d) : c.options[e])
                }
            });
            return "undefined" != typeof h ? h : i
        }
        String.prototype.includes || !function() {
            var a = {}.toString
              , b = function() {
                try {
                    var a = {}
                      , b = Object.defineProperty
                      , c = b(a, a, a) && b
                } catch (d) {}
                return c
            }()
              , c = "".indexOf
              , d = function(b) {
                if (null == this)
                    throw new TypeError;
                var d = String(this);
                if (b && "[object RegExp]" == a.call(b))
                    throw new TypeError;
                var e = d.length
                  , f = String(b)
                  , g = f.length
                  , h = arguments.length > 1 ? arguments[1] : void 0
                  , i = h ? Number(h) : 0;
                i != i && (i = 0);
                var j = Math.min(Math.max(i, 0), e);
                return g + j > e ? !1 : -1 != c.call(d, f, i)
            };
            b ? b(String.prototype, "includes", {
                value: d,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = d
        }(),
        String.prototype.startsWith || !function() {
            var a = function() {
                try {
                    var a = {}
                      , b = Object.defineProperty
                      , c = b(a, a, a) && b
                } catch (d) {}
                return c
            }()
              , b = {}.toString
              , c = function(a) {
                if (null == this)
                    throw new TypeError;
                var c = String(this);
                if (a && "[object RegExp]" == b.call(a))
                    throw new TypeError;
                var d = c.length
                  , e = String(a)
                  , f = e.length
                  , g = arguments.length > 1 ? arguments[1] : void 0
                  , h = g ? Number(g) : 0;
                h != h && (h = 0);
                var i = Math.min(Math.max(h, 0), d);
                if (f + i > d)
                    return !1;
                for (var j = -1; ++j < f; )
                    if (c.charCodeAt(i + j) != e.charCodeAt(j))
                        return !1;
                return !0
            };
            a ? a(String.prototype, "startsWith", {
                value: c,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = c
        }(),
        Object.keys || (Object.keys = function(a, b, c) {
            c = [];
            for (b in a)
                c.hasOwnProperty.call(a, b) && c.push(b);
            return c
        }
        );
        var e = {
            useDefault: !1,
            _set: a.valHooks.select.set
        };
        a.valHooks.select.set = function(b, c) {
            return c && !e.useDefault && a(b).data("selected", !0),
            e._set.apply(this, arguments)
        }
        ;
        var f = null;
        a.fn.triggerNative = function(a) {
            var b, c = this[0];
            c.dispatchEvent ? ("function" == typeof Event ? b = new Event(a,{
                bubbles: !0
            }) : (b = document.createEvent("Event"),
            b.initEvent(a, !0, !1)),
            c.dispatchEvent(b)) : c.fireEvent ? (b = document.createEventObject(),
            b.eventType = a,
            c.fireEvent("on" + a, b)) : this.trigger(a)
        }
        ,
        a.expr.pseudos.icontains = function(b, c, d) {
            var e = a(b)
              , f = (e.data("tokens") || e.text()).toString().toUpperCase();
            return f.includes(d[3].toUpperCase())
        }
        ,
        a.expr.pseudos.ibegins = function(b, c, d) {
            var e = a(b)
              , f = (e.data("tokens") || e.text()).toString().toUpperCase();
            return f.startsWith(d[3].toUpperCase())
        }
        ,
        a.expr.pseudos.aicontains = function(b, c, d) {
            var e = a(b)
              , f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();
            return f.includes(d[3].toUpperCase())
        }
        ,
        a.expr.pseudos.aibegins = function(b, c, d) {
            var e = a(b)
              , f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();
            return f.startsWith(d[3].toUpperCase())
        }
        ;
        var g = function(b, c, d) {
            e.useDefault || (a.valHooks.select.set = e._set,
            e.useDefault = !0),
            d && (d.stopPropagation(),
            d.preventDefault()),
            this.$element = a(b),
            this.$newElement = null,
            this.$button = null,
            this.$menu = null,
            this.$lis = null,
            this.options = c,
            null === this.options.title && (this.options.title = this.$element.attr("title")),
            this.val = g.prototype.val,
            this.render = g.prototype.render,
            this.refresh = g.prototype.refresh,
            this.setStyle = g.prototype.setStyle,
            this.selectAll = g.prototype.selectAll,
            this.deselectAll = g.prototype.deselectAll,
            this.destroy = g.prototype.destroy,
            this.remove = g.prototype.remove,
            this.show = g.prototype.show,
            this.hide = g.prototype.hide,
            this.init()
        };
        g.VERSION = "1.11.2",
        g.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(a, b) {
                return 1 == a ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(a, b) {
                return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1
        },
        g.prototype = {
            constructor: g,
            init: function() {
                var b = this
                  , c = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"),
                this.liObj = {},
                this.multiple = this.$element.prop("multiple"),
                this.autofocus = this.$element.prop("autofocus"),
                this.$newElement = this.createView(),
                this.$element.after(this.$newElement).appendTo(this.$newElement),
                this.$button = this.$newElement.children("button"),
                this.$menu = this.$newElement.children(".dropdown-menu"),
                this.$menuInner = this.$menu.children(".inner"),
                this.$searchbox = this.$menu.find("input"),
                this.$element.removeClass("bs-select-hidden"),
                this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right"),
                "undefined" != typeof c && (this.$button.attr("data-id", c),
                a('label[for="' + c + '"]').click(function(a) {
                    a.preventDefault(),
                    b.$button.focus()
                })),
                this.checkDisabled(),
                this.clickListener(),
                this.options.liveSearch && this.liveSearchListener(),
                this.render(),
                this.setStyle(),
                this.setWidth(),
                this.options.container && this.selectPosition(),
                this.$menu.data("this", this),
                this.$newElement.data("this", this),
                this.options.mobile && this.mobile(),
                this.$newElement.on({
                    "hide.bs.dropdown": function(a) {
                        b.$menuInner.attr("aria-expanded", !1),
                        b.$element.trigger("hide.bs.select", a)
                    },
                    "hidden.bs.dropdown": function(a) {
                        b.$element.trigger("hidden.bs.select", a)
                    },
                    "show.bs.dropdown": function(a) {
                        b.$menuInner.attr("aria-expanded", !0),
                        b.$element.trigger("show.bs.select", a)
                    },
                    "shown.bs.dropdown": function(a) {
                        b.$element.trigger("shown.bs.select", a)
                    }
                }),
                b.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    b.$button.addClass("bs-invalid").focus(),
                    b.$element.on({
                        "focus.bs.select": function() {
                            b.$button.focus(),
                            b.$element.off("focus.bs.select")
                        },
                        "shown.bs.select": function() {
                            b.$element.val(b.$element.val()).off("shown.bs.select")
                        },
                        "rendered.bs.select": function() {
                            this.validity.valid && b.$button.removeClass("bs-invalid"),
                            b.$element.off("rendered.bs.select")
                        }
                    })
                }),
                setTimeout(function() {
                    b.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function() {
                var b = this.multiple || this.options.showTick ? " show-tick" : ""
                  , d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : ""
                  , e = this.autofocus ? " autofocus" : ""
                  , f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : ""
                  , g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : ""
                  , h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : ""
                  , i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : ""
                  , j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + f + g + h + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + i + "</div></div>";
                return a(j)
            },
            createView: function() {
                var a = this.createDropdown()
                  , b = this.createLi();
                return a.find("ul")[0].innerHTML = b,
                a
            },
            reloadLi: function() {
                this.destroyLi();
                var a = this.createLi();
                this.$menuInner[0].innerHTML = a
            },
            destroyLi: function() {
                this.$menu.find("li").remove()
            },
            createLi: function() {
                var d = this
                  , e = []
                  , f = 0
                  , g = document.createElement("option")
                  , h = -1
                  , i = function(a, b, c, d) {
                    return "<li" + ("undefined" != typeof c & "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b & null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>"
                }
                  , j = function(a, e, f, g) {
                    return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ' role="option">' + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>'
                };
                if (this.options.title && !this.multiple && (h--,
                !this.$element.find(".bs-title-option").length)) {
                    var k = this.$element[0];
                    g.className = "bs-title-option",
                    g.appendChild(document.createTextNode(this.options.title)),
                    g.value = "",
                    k.insertBefore(g, k.firstChild);
                    var l = a(k.options[k.selectedIndex]);
                    void 0 === l.attr("selected") && void 0 === this.$element.data("selected") && (g.selected = !0)
                }
                return this.$element.find("option").each(function(b) {
                    var c = a(this);
                    if (h++,
                    !c.hasClass("bs-title-option")) {
                        var g = this.className || ""
                          , k = this.style.cssText
                          , l = c.data("content") ? c.data("content") : c.html()
                          , m = c.data("tokens") ? c.data("tokens") : null
                          , n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : ""
                          , o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : ""
                          , p = c.parent()
                          , q = "OPTGROUP" === p[0].tagName
                          , r = q && p[0].disabled
                          , s = this.disabled || r;
                        if ("" !== o && s && (o = "<span>" + o + "</span>"),
                        d.options.hideDisabled && (s && !q || r))
                            return void h--;
                        if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"),
                        q && c.data("divider") !== !0) {
                            if (d.options.hideDisabled && s) {
                                if (void 0 === p.data("allOptionsDisabled")) {
                                    var t = p.children();
                                    p.data("allOptionsDisabled", t.filter(":disabled").length === t.length)
                                }
                                if (p.data("allOptionsDisabled"))
                                    return void h--
                            }
                            var u = " " + p[0].className || "";
                            if (0 === c.index()) {
                                f += 1;
                                var v = p[0].label
                                  , w = "undefined" != typeof p.data("subtext") ? '<small class="text-muted">' + p.data("subtext") + "</small>" : ""
                                  , x = p.data("icon") ? '<span class="' + d.options.iconBase + " " + p.data("icon") + '"></span> ' : "";
                                v = x + '<span class="text">' + v + w + "</span>",
                                0 !== b && e.length > 0 && (h++,
                                e.push(i("", null, "divider", f + "div"))),
                                h++,
                                e.push(i(v, null, "dropdown-header" + u, f))
                            }
                            if (d.options.hideDisabled && s)
                                return void h--;
                            e.push(i(j(l, "opt " + g + u, k, m), b, "", f))
                        } else if (c.data("divider") === !0)
                            e.push(i("", b, "divider"));
                        else if (c.data("hidden") === !0)
                            e.push(i(j(l, g, k, m), b, "hidden is-hidden"));
                        else {
                            var y = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
                            if (!y && d.options.hideDisabled)
                                for (var z = a(this).prevAll(), A = 0; A < z.length; A++)
                                    if ("OPTGROUP" === z[A].tagName) {
                                        for (var B = 0, C = 0; A > C; C++) {
                                            var D = z[C];
                                            (D.disabled || a(D).data("hidden") === !0) && B++
                                        }
                                        B === A && (y = !0);
                                        break
                                    }
                            y && (h++,
                            e.push(i("", null, "divider", f + "div"))),
                            e.push(i(j(l, g, k, m), b))
                        }
                        d.liObj[b] = h
                    }
                }),
                this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"),
                e.join("")
            },
            findLis: function() {
                return null == this.$lis && (this.$lis = this.$menu.find("li")),
                this.$lis
            },
            render: function(b) {
                var c, d = this;
                b !== !1 && this.$element.find("option").each(function(a) {
                    var b = d.findLis().eq(d.liObj[a]);
                    d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b),
                    d.setSelected(a, this.selected, b)
                }),
                this.togglePlaceholder(),
                this.tabIndex();
                var e = this.$element.find("option").map(function() {
                    if (this.selected) {
                        if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled))
                            return;
                        var b, c = a(this), e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
                        return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "",
                        "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b
                    }
                }).toArray()
                  , f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var g = this.options.selectedTextFormat.split(">");
                    if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) {
                        c = this.options.hideDisabled ? ", [disabled]" : "";
                        var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length
                          , i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
                        f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")),
                "static" == this.options.selectedTextFormat && (f = this.options.title),
                f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText),
                this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))),
                this.$button.children(".filter-option").html(f),
                this.$element.trigger("rendered.bs.select")
            },
            setStyle: function(a, b) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var c = a ? a : this.options.style;
                "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style),
                this.$button.addClass(c))
            },
            liHeight: function(b) {
                if (b || this.options.size !== !1 && !this.sizeInfo) {
                    var c = document.createElement("div")
                      , d = document.createElement("div")
                      , e = document.createElement("ul")
                      , f = document.createElement("li")
                      , g = document.createElement("li")
                      , h = document.createElement("a")
                      , i = document.createElement("span")
                      , j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null
                      , k = this.options.liveSearch ? document.createElement("div") : null
                      , l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null
                      , m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (i.className = "text",
                    c.className = this.$menu[0].parentNode.className + " open",
                    d.className = "dropdown-menu open",
                    e.className = "dropdown-menu inner",
                    f.className = "divider",
                    i.appendChild(document.createTextNode("Inner text")),
                    h.appendChild(i),
                    g.appendChild(h),
                    e.appendChild(g),
                    e.appendChild(f),
                    j && d.appendChild(j),
                    k) {
                        var n = document.createElement("span");
                        k.className = "bs-searchbox",
                        n.className = "form-control",
                        k.appendChild(n),
                        d.appendChild(k)
                    }
                    l && d.appendChild(l),
                    d.appendChild(e),
                    m && d.appendChild(m),
                    c.appendChild(d),
                    document.body.appendChild(c);
                    var o = h.offsetHeight
                      , p = j ? j.offsetHeight : 0
                      , q = k ? k.offsetHeight : 0
                      , r = l ? l.offsetHeight : 0
                      , s = m ? m.offsetHeight : 0
                      , t = a(f).outerHeight(!0)
                      , u = "function" == typeof getComputedStyle ? getComputedStyle(d) : !1
                      , v = u ? null : a(d)
                      , w = {
                        vert: parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
                        horiz: parseInt(u ? u.paddingLeft : v.css("paddingLeft")) + parseInt(u ? u.paddingRight : v.css("paddingRight")) + parseInt(u ? u.borderLeftWidth : v.css("borderLeftWidth")) + parseInt(u ? u.borderRightWidth : v.css("borderRightWidth"))
                    }
                      , x = {
                        vert: w.vert + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2,
                        horiz: w.horiz + parseInt(u ? u.marginLeft : v.css("marginLeft")) + parseInt(u ? u.marginRight : v.css("marginRight")) + 2
                    };
                    document.body.removeChild(c),
                    this.sizeInfo = {
                        liHeight: o,
                        headerHeight: p,
                        searchHeight: q,
                        actionsHeight: r,
                        doneButtonHeight: s,
                        dividerHeight: t,
                        menuPadding: w,
                        menuExtras: x
                    }
                }
            },
            setSize: function() {
                if (this.findLis(),
                this.liHeight(),
                this.options.header && this.$menu.css("padding-top", 0),
                this.options.size !== !1) {
                    var b, c, d, e, f, g, h, i, j = this, k = this.$menu, l = this.$menuInner, m = a(window), n = this.$newElement[0].offsetHeight, o = this.$newElement[0].offsetWidth, p = this.sizeInfo.liHeight, q = this.sizeInfo.headerHeight, r = this.sizeInfo.searchHeight, s = this.sizeInfo.actionsHeight, t = this.sizeInfo.doneButtonHeight, u = this.sizeInfo.dividerHeight, v = this.sizeInfo.menuPadding, w = this.sizeInfo.menuExtras, x = this.options.hideDisabled ? ".disabled" : "", y = function() {
                        var b, c = j.$newElement.offset(), d = a(j.options.container);
                        j.options.container && !d.is("body") ? (b = d.offset(),
                        b.top += parseInt(d.css("borderTopWidth")),
                        b.left += parseInt(d.css("borderLeftWidth"))) : b = {
                            top: 0,
                            left: 0
                        },
                        f = c.top - b.top - m.scrollTop(),
                        g = m.height() - f - n - b.top,
                        h = c.left - b.left - m.scrollLeft(),
                        i = m.width() - h - o - b.left
                    };
                    if (y(),
                    "auto" === this.options.size) {
                        var z = function() {
                            var m, n = function(b, c) {
                                return function(d) {
                                    return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b))
                                }
                            }, u = j.$menuInner[0].getElementsByTagName("li"), x = Array.prototype.filter ? Array.prototype.filter.call(u, n("hidden", !1)) : j.$lis.not(".hidden"), z = Array.prototype.filter ? Array.prototype.filter.call(x, n("dropdown-header", !0)) : x.filter(".dropdown-header");
                            y(),
                            b = g - w.vert,
                            c = i - w.horiz,
                            j.options.container ? (k.data("height") || k.data("height", k.height()),
                            d = k.data("height"),
                            k.data("width") || k.data("width", k.width()),
                            e = k.data("width")) : (d = k.height(),
                            e = k.width()),
                            j.options.dropupAuto && j.$newElement.toggleClass("dropup", f > g && b - w.vert < d),
                            j.$newElement.hasClass("dropup") && (b = f - w.vert),
                            "auto" === j.options.dropdownAlignRight && k.toggleClass("dropdown-menu-right", h > i && c - w.horiz < e - o),
                            m = x.length + z.length > 3 ? 3 * p + w.vert - 2 : 0,
                            k.css({
                                "max-height": b + "px",
                                overflow: "hidden",
                                "min-height": m + q + r + s + t + "px"
                            }),
                            l.css({
                                "max-height": b - q - r - s - t - v.vert + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(m - v.vert, 0) + "px"
                            })
                        };
                        z(),
                        this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", z),
                        m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", z)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(x).length > this.options.size) {
                        var A = this.$lis.not(".divider").not(x).children().slice(0, this.options.size).last().parent().index()
                          , B = this.$lis.slice(0, A + 1).filter(".divider").length;
                        b = p * this.options.size + B * u + v.vert,
                        j.options.container ? (k.data("height") || k.data("height", k.height()),
                        d = k.data("height")) : d = k.height(),
                        j.options.dropupAuto && this.$newElement.toggleClass("dropup", f > g && b - w.vert < d),
                        k.css({
                            "max-height": b + q + r + s + t + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }),
                        l.css({
                            "max-height": b - v.vert + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        })
                    }
                }
            },
            setWidth: function() {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var a = this.$menu.parent().clone().appendTo("body")
                      , b = this.options.container ? this.$newElement.clone().appendTo("body") : a
                      , c = a.children(".dropdown-menu").outerWidth()
                      , d = b.css("width", "auto").children("button").outerWidth();
                    a.remove(),
                    b.remove(),
                    this.$newElement.css("width", Math.max(c, d) + "px")
                } else
                    "fit" === this.options.width ? (this.$menu.css("min-width", ""),
                    this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""),
                    this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""),
                    this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = a('<div class="bs-container" />');
                var b, c, d, e = this, f = a(this.options.container), g = function(a) {
                    e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")),
                    b = a.offset(),
                    f.is("body") ? c = {
                        top: 0,
                        left: 0
                    } : (c = f.offset(),
                    c.top += parseInt(f.css("borderTopWidth")) - f.scrollTop(),
                    c.left += parseInt(f.css("borderLeftWidth")) - f.scrollLeft()),
                    d = a.hasClass("dropup") ? 0 : a[0].offsetHeight,
                    e.$bsContainer.css({
                        top: b.top - c.top + d,
                        left: b.left - c.left,
                        width: a[0].offsetWidth
                    })
                };
                this.$button.on("click", function() {
                    var b = a(this);
                    e.isDisabled() || (g(e.$newElement),
                    e.$bsContainer.appendTo(e.options.container).toggleClass("open", !b.hasClass("open")).append(e.$menu))
                }),
                a(window).on("resize scroll", function() {
                    g(e.$newElement)
                }),
                this.$element.on("hide.bs.select", function() {
                    e.$menu.data("height", e.$menu.height()),
                    e.$bsContainer.detach()
                })
            },
            setSelected: function(a, b, c) {
                c || (this.togglePlaceholder(),
                c = this.findLis().eq(this.liObj[a])),
                c.toggleClass("selected", b).find("a").attr("aria-selected", b)
            },
            setDisabled: function(a, b, c) {
                c || (c = this.findLis().eq(this.liObj[a])),
                b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var a = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"),
                this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"),
                this.$button.removeClass("disabled")),
                -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")),
                this.$button.click(function() {
                    return !a.isDisabled()
                })
            },
            togglePlaceholder: function() {
                var a = this.$element.val();
                this.$button.toggleClass("bs-placeholder", null === a || "" === a)
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")),
                this.$button.attr("tabindex", this.$element.data("tabindex"))),
                this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var b = this
                  , c = a(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(a) {
                    a.stopPropagation()
                }),
                c.data("spaceSelect", !1),
                this.$button.on("keyup", function(a) {
                    /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(),
                    c.data("spaceSelect", !1))
                }),
                this.$button.on("click", function() {
                    b.setSize()
                }),
                this.$element.on("shown.bs.select", function() {
                    if (b.options.liveSearch || b.multiple) {
                        if (!b.multiple) {
                            var a = b.liObj[b.$element[0].selectedIndex];
                            if ("number" != typeof a || b.options.size === !1)
                                return;
                            var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                            c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2,
                            b.$menuInner[0].scrollTop = c
                        }
                    } else
                        b.$menuInner.find(".selected a").focus()
                }),
                this.$menuInner.on("click", "li a", function(c) {
                    var d = a(this)
                      , e = d.parent().data("originalIndex")
                      , g = b.$element.val()
                      , h = b.$element.prop("selectedIndex")
                      , i = !0;
                    if (b.multiple && 1 !== b.options.maxOptions && c.stopPropagation(),
                    c.preventDefault(),
                    !b.isDisabled() && !d.parent().hasClass("disabled")) {
                        var j = b.$element.find("option")
                          , k = j.eq(e)
                          , l = k.prop("selected")
                          , m = k.parent("optgroup")
                          , n = b.options.maxOptions
                          , o = m.data("maxOptions") || !1;
                        if (b.multiple) {
                            if (k.prop("selected", !l),
                            b.setSelected(e, !l),
                            d.blur(),
                            n !== !1 || o !== !1) {
                                var p = n < j.filter(":selected").length
                                  , q = o < m.find("option:selected").length;
                                if (n && p || o && q)
                                    if (n && 1 == n)
                                        j.prop("selected", !1),
                                        k.prop("selected", !0),
                                        b.$menuInner.find(".selected").removeClass("selected"),
                                        b.setSelected(e, !0);
                                    else if (o && 1 == o) {
                                        m.find("option:selected").prop("selected", !1),
                                        k.prop("selected", !0);
                                        var r = d.parent().data("optgroup");
                                        b.$menuInner.find('[data-optgroup="' + r + '"]').removeClass("selected"),
                                        b.setSelected(e, !0)
                                    } else {
                                        var s = "string" == typeof b.options.maxOptionsText ? [b.options.maxOptionsText, b.options.maxOptionsText] : b.options.maxOptionsText
                                          , t = "function" == typeof s ? s(n, o) : s
                                          , u = t[0].replace("{n}", n)
                                          , v = t[1].replace("{n}", o)
                                          , w = a('<div class="notify"></div>');
                                        t[2] && (u = u.replace("{var}", t[2][n > 1 ? 0 : 1]),
                                        v = v.replace("{var}", t[2][o > 1 ? 0 : 1])),
                                        k.prop("selected", !1),
                                        b.$menu.append(w),
                                        n && p && (w.append(a("<div>" + u + "</div>")),
                                        i = !1,
                                        b.$element.trigger("maxReached.bs.select")),
                                        o && q && (w.append(a("<div>" + v + "</div>")),
                                        i = !1,
                                        b.$element.trigger("maxReachedGrp.bs.select")),
                                        setTimeout(function() {
                                            b.setSelected(e, !1)
                                        }, 10),
                                        w.delay(750).fadeOut(300, function() {
                                            a(this).remove()
                                        })
                                    }
                            }
                        } else
                            j.prop("selected", !1),
                            k.prop("selected", !0),
                            b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1),
                            b.setSelected(e, !0);
                        !b.multiple || b.multiple && 1 === b.options.maxOptions ? b.$button.focus() : b.options.liveSearch && b.$searchbox.focus(),
                        i && (g != b.$element.val() && b.multiple || h != b.$element.prop("selectedIndex") && !b.multiple) && (f = [e, k.prop("selected"), l],
                        b.$element.triggerNative("change"))
                    }
                }),
                this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(c) {
                    c.currentTarget == this && (c.preventDefault(),
                    c.stopPropagation(),
                    b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus())
                }),
                this.$menuInner.on("click", ".divider, .dropdown-header", function(a) {
                    a.preventDefault(),
                    a.stopPropagation(),
                    b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus()
                }),
                this.$menu.on("click", ".popover-title .close", function() {
                    b.$button.click()
                }),
                this.$searchbox.on("click", function(a) {
                    a.stopPropagation()
                }),
                this.$menu.on("click", ".actions-btn", function(c) {
                    b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(),
                    c.preventDefault(),
                    c.stopPropagation(),
                    a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll()
                }),
                this.$element.change(function() {
                    b.render(!1),
                    b.$element.trigger("changed.bs.select", f),
                    f = null
                })
            },
            liveSearchListener: function() {
                var d = this
                  , e = a('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                    d.$menuInner.find(".active").removeClass("active"),
                    d.$searchbox.val() && (d.$searchbox.val(""),
                    d.$lis.not(".is-hidden").removeClass("hidden"),
                    e.parent().length && e.remove()),
                    d.multiple || d.$menuInner.find(".selected").addClass("active"),
                    setTimeout(function() {
                        d.$searchbox.focus()
                    }, 10)
                }),
                this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(a) {
                    a.stopPropagation()
                }),
                this.$searchbox.on("input propertychange", function() {
                    if (d.$searchbox.val()) {
                        var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
                        f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + '("' + b(d.$searchbox.val()) + '")') : f.not(":" + d._searchStyle() + '("' + d.$searchbox.val() + '")'),
                        f.parent().addClass("hidden"),
                        d.$lis.filter(".dropdown-header").each(function() {
                            var b = a(this)
                              , c = b.data("optgroup");
                            0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"),
                            d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"))
                        });
                        var g = d.$lis.not(".hidden");
                        g.each(function(b) {
                            var c = a(this);
                            c.hasClass("divider") && (c.index() === g.first().index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden")
                        }),
                        d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(),
                        e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(),
                        d.$menuInner.append(e))
                    } else
                        d.$lis.not(".is-hidden").removeClass("hidden"),
                        e.parent().length && e.remove();
                    d.$lis.filter(".active").removeClass("active"),
                    d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),
                    a(this).focus()
                })
            },
            _searchStyle: function() {
                var a = {
                    begins: "ibegins",
                    startsWith: "ibegins"
                };
                return a[this.options.liveSearchStyle] || "icontains"
            },
            val: function(a) {
                return "undefined" != typeof a ? (this.$element.val(a),
                this.render(),
                this.$element) : this.$element.val()
            },
            changeAll: function(b) {
                if (this.multiple) {
                    "undefined" == typeof b && (b = !0),
                    this.findLis();
                    var c = this.$element.find("option")
                      , d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden")
                      , e = d.length
                      , f = [];
                    if (b) {
                        if (d.filter(".selected").length === d.length)
                            return
                    } else if (0 === d.filter(".selected").length)
                        return;
                    d.toggleClass("selected", b);
                    for (var g = 0; e > g; g++) {
                        var h = d[g].getAttribute("data-original-index");
                        f[f.length] = c.eq(h)[0]
                    }
                    a(f).prop("selected", b),
                    this.render(!1),
                    this.togglePlaceholder(),
                    this.$element.triggerNative("change")
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(a) {
                a = a || window.event,
                a && a.stopPropagation(),
                this.$button.trigger("click")
            },
            keydown: function(c) {
                var d, e, f, g, h, i, j, k, l, m = a(this), n = m.is("input") ? m.parent().parent() : m.parent(), o = n.data("this"), p = ":not(.disabled, .hidden, .dropdown-header, .divider)", q = {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
                if (o.options.liveSearch && (n = m.parent().parent()),
                o.options.container && (n = o.$menu),
                d = a('[role="listbox"] li', n),
                l = o.$newElement.hasClass("open"),
                !l && (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode >= 96 && c.keyCode <= 105 || c.keyCode >= 65 && c.keyCode <= 90))
                    return o.options.container ? o.$button.trigger("click") : (o.setSize(),
                    o.$menu.parent().addClass("open"),
                    l = !0),
                    void o.$searchbox.focus();
                if (o.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && l && (c.preventDefault(),
                c.stopPropagation(),
                o.$button.click().focus()),
                d = a('[role="listbox"] li' + p, n),
                m.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$menuInner.find("li"),
                d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))),
                d.length) {
                    if (/(38|40)/.test(c.keyCode.toString(10)))
                        e = d.index(d.find("a").filter(":focus").parent()),
                        g = d.filter(p).first().index(),
                        h = d.filter(p).last().index(),
                        f = d.eq(e).nextAll(p).eq(0).index(),
                        i = d.eq(e).prevAll(p).eq(0).index(),
                        j = d.eq(f).prevAll(p).eq(0).index(),
                        o.options.liveSearch && (d.each(function(b) {
                            a(this).hasClass("disabled") || a(this).data("index", b)
                        }),
                        e = d.index(d.filter(".active")),
                        g = d.first().data("index"),
                        h = d.last().data("index"),
                        f = d.eq(e).nextAll().eq(0).data("index"),
                        i = d.eq(e).prevAll().eq(0).data("index"),
                        j = d.eq(f).prevAll().eq(0).data("index")),
                        k = m.data("prevIndex"),
                        38 == c.keyCode ? (o.options.liveSearch && e--,
                        e != j && e > i && (e = i),
                        g > e && (e = g),
                        e == k && (e = h)) : 40 == c.keyCode && (o.options.liveSearch && e++,
                        -1 == e && (e = 0),
                        e != j && f > e && (e = f),
                        e > h && (e = h),
                        e == k && (e = g)),
                        m.data("prevIndex", e),
                        o.options.liveSearch ? (c.preventDefault(),
                        m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(),
                        m.focus())) : d.eq(e).children("a").focus();
                    else if (!m.is("input")) {
                        var r, s, t = [];
                        d.each(function() {
                            a(this).hasClass("disabled") || a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).index())
                        }),
                        r = a(document).data("keycount"),
                        r++,
                        a(document).data("keycount", r),
                        s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1),
                        s != q[c.keyCode] ? (r = 1,
                        a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0),
                        r > t.length && (r = 1)),
                        d.eq(t[r - 1]).children("a").focus()
                    }
                    if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab) && l) {
                        if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(),
                        o.options.liveSearch)
                            /(32)/.test(c.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(),
                            m.focus());
                        else {
                            var u = a(":focus");
                            u.click(),
                            u.focus(),
                            c.preventDefault(),
                            a(document).data("spaceSelect", !0)
                        }
                        a(document).data("keycount", 0)
                    }
                    (/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"),
                    o.options.container && o.$newElement.removeClass("open"),
                    o.$button.focus())
                }
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                this.$lis = null,
                this.liObj = {},
                this.reloadLi(),
                this.render(),
                this.checkDisabled(),
                this.liHeight(!0),
                this.setStyle(),
                this.setWidth(),
                this.$lis && this.$searchbox.trigger("propertychange"),
                this.$element.trigger("refreshed.bs.select")
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(),
                this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(),
                this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(),
                this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var h = a.fn.selectpicker;
        a.fn.selectpicker = d,
        a.fn.selectpicker.Constructor = g,
        a.fn.selectpicker.noConflict = function() {
            return a.fn.selectpicker = h,
            this
        }
        ,
        a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', g.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(a) {
            a.stopPropagation()
        }),
        a(window).on("load.bs.select.data-api", function() {
            a(".selectpicker").each(function() {
                var b = a(this);
                d.call(b, b.data())
            })
        })
    }(a)
});
//# sourceMappingURL=bootstrap-select.js.map

/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t) {
    function e() {}
    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            }
            )
        }
        function n(e, i) {
            t.fn[e] = function(n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a]
                          , h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f)
                                    return f
                            } else
                                r("no such method '" + n + "' for " + e + " instance");
                        else
                            r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var o = t.data(this, e);
                    o ? (o.option(n),
                    o._init()) : (o = new i(this,n),
                    t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            }
            ;
            return t.bridget = function(t, e) {
                i(e),
                n(t, e)
            }
            ,
            t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
}
)(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e,
        i
    }
    var i = document.documentElement
      , o = function() {};
    i.addEventListener ? o = function(t, e, i) {
        t.addEventListener(e, i, !1)
    }
    : i.attachEvent && (o = function(t, i, o) {
        t[i + o] = o.handleEvent ? function() {
            var i = e(t);
            o.handleEvent.call(o, i)
        }
        : function() {
            var i = e(t);
            o.call(t, i)
        }
        ,
        t.attachEvent("on" + i, t[i + o])
    }
    );
    var n = function() {};
    i.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    }
    : i.detachEvent && (n = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    }
    );
    var r = {
        bind: o,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== n.readyState;
        if (!e.isReady && !i) {
            e.isReady = !0;
            for (var o = 0, s = r.length; s > o; o++) {
                var a = r[o];
                a()
            }
        }
    }
    function o(o) {
        return o.bind(n, "DOMContentLoaded", i),
        o.bind(n, "readystatechange", i),
        o.bind(t, "load", i),
        e
    }
    var n = t.document
      , r = [];
    e.isReady = !1,
    "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs,
    define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this),
function() {
    function t() {}
    function e(t, e) {
        for (var i = t.length; i--; )
            if (t[i].listener === e)
                return i;
        return -1
    }
    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var o = t.prototype
      , n = this
      , r = n.EventEmitter;
    o.getListeners = function(t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o)
                o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else
            e = o[t] || (o[t] = []);
        return e
    }
    ,
    o.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1)
            i.push(t[e].listener);
        return i
    }
    ,
    o.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {},
        e[t] = i),
        e || i
    }
    ,
    o.addListener = function(t, i) {
        var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
        for (o in n)
            n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
                listener: i,
                once: !1
            });
        return this
    }
    ,
    o.on = i("addListener"),
    o.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }
    ,
    o.once = i("addOnceListener"),
    o.defineEvent = function(t) {
        return this.getListeners(t),
        this
    }
    ,
    o.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1)
            this.defineEvent(t[e]);
        return this
    }
    ,
    o.removeListener = function(t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r)
            r.hasOwnProperty(n) && (o = e(r[n], i),
            -1 !== o && r[n].splice(o, 1));
        return this
    }
    ,
    o.off = i("removeListener"),
    o.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }
    ,
    o.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }
    ,
    o.manipulateListeners = function(t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--; )
                r.call(this, e, i[o]);
        else
            for (o in e)
                e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }
    ,
    o.removeEvent = function(t) {
        var e, i = typeof t, o = this._getEvents();
        if ("string" === i)
            delete o[t];
        else if (t instanceof RegExp)
            for (e in o)
                o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else
            delete this._events;
        return this
    }
    ,
    o.removeAllListeners = i("removeEvent"),
    o.emitEvent = function(t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--; )
                    i = s[n][o],
                    i.once === !0 && this.removeListener(t, i.listener),
                    r = i.listener.apply(this, e || []),
                    r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }
    ,
    o.trigger = i("emitEvent"),
    o.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }
    ,
    o.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t,
        this
    }
    ,
    o._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    o._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    t.noConflict = function() {
        return n.EventEmitter = r,
        t
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}
.call(this),
function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof o[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, n = 0, r = i.length; r > n; n++)
                if (e = i[n] + t,
                "string" == typeof o[e])
                    return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" ")
      , o = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t) {
    function e(t) {
        var e = parseFloat(t)
          , i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, i = s.length; i > e; e++) {
            var o = s[e];
            t[o] = 0
        }
        return t
    }
    function o(t) {
        function o(t) {
            if ("string" == typeof t && (t = document.querySelector(t)),
            t && "object" == typeof t && t.nodeType) {
                var o = r(t);
                if ("none" === o.display)
                    return i();
                var n = {};
                n.width = t.offsetWidth,
                n.height = t.offsetHeight;
                for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
                    var d = s[f]
                      , l = o[d];
                    l = a(t, l);
                    var y = parseFloat(l);
                    n[d] = isNaN(y) ? 0 : y
                }
                var m = n.paddingLeft + n.paddingRight
                  , g = n.paddingTop + n.paddingBottom
                  , v = n.marginLeft + n.marginRight
                  , _ = n.marginTop + n.marginBottom
                  , I = n.borderLeftWidth + n.borderRightWidth
                  , L = n.borderTopWidth + n.borderBottomWidth
                  , z = h && u
                  , S = e(o.width);
                S !== !1 && (n.width = S + (z ? 0 : m + I));
                var b = e(o.height);
                return b !== !1 && (n.height = b + (z ? 0 : g + L)),
                n.innerWidth = n.width - (m + I),
                n.innerHeight = n.height - (g + L),
                n.outerWidth = n.width + v,
                n.outerHeight = n.height + _,
                n
            }
        }
        function a(t, e) {
            if (n || -1 === e.indexOf("%"))
                return e;
            var i = t.style
              , o = i.left
              , r = t.runtimeStyle
              , s = r && r.left;
            return s && (r.left = t.currentStyle.left),
            i.left = e,
            e = i.pixelLeft,
            i.left = o,
            s && (r.left = s),
            e
        }
        var u, p = t("boxSizing");
        return function() {
            if (p) {
                var t = document.createElement("div");
                t.style.width = "200px",
                t.style.padding = "1px 2px 3px 4px",
                t.style.borderStyle = "solid",
                t.style.borderWidth = "1px 2px 3px 4px",
                t.style[p] = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var o = r(t);
                u = 200 === e(o.width),
                i.removeChild(t)
            }
        }(),
        o
    }
    var n = t.getComputedStyle
      , r = n ? function(t) {
        return n(t, null)
    }
    : function(t) {
        return t.currentStyle
    }
      , s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window),
function(t, e) {
    function i(t, e) {
        return t[a](e)
    }
    function o(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        o(t);
        for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
            if (i[n] === t)
                return !0;
        return !1
    }
    function r(t, e) {
        return o(t),
        i(t, e)
    }
    var s, a = function() {
        if (e.matchesSelector)
            return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
            var n = t[i]
              , r = n + "MatchesSelector";
            if (e[r])
                return r
        }
    }();
    if (a) {
        var u = document.createElement("div")
          , p = i(u, "div");
        s = p ? i : r
    } else
        s = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return s
    }) : window.matchesSelector = s
}(this, Element.prototype),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    function n(t, n, r) {
        function a(t, e) {
            t && (this.element = t,
            this.layout = e,
            this.position = {
                x: 0,
                y: 0
            },
            this._create())
        }
        var u = r("transition")
          , p = r("transform")
          , h = u && p
          , f = !!r("perspective")
          , c = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[u]
          , d = ["transform", "transition", "transitionDuration", "transitionProperty"]
          , l = function() {
            for (var t = {}, e = 0, i = d.length; i > e; e++) {
                var o = d[e]
                  , n = r(o);
                n && n !== o && (t[o] = n)
            }
            return t
        }();
        e(a.prototype, t.prototype),
        a.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            },
            this.css({
                position: "absolute"
            })
        }
        ,
        a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }
        ,
        a.prototype.getSize = function() {
            this.size = n(this.element)
        }
        ,
        a.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var o = l[i] || i;
                e[o] = t[i]
            }
        }
        ,
        a.prototype.getPosition = function() {
            var t = s(this.element)
              , e = this.layout.options
              , i = e.isOriginLeft
              , o = e.isOriginTop
              , n = parseInt(t[i ? "left" : "right"], 10)
              , r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n,
            r = isNaN(r) ? 0 : r;
            var a = this.layout.size;
            n -= i ? a.paddingLeft : a.paddingRight,
            r -= o ? a.paddingTop : a.paddingBottom,
            this.position.x = n,
            this.position.y = r
        }
        ,
        a.prototype.layoutPosition = function() {
            var t = this.layout.size
              , e = this.layout.options
              , i = {};
            e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px",
            i.right = "") : (i.right = this.position.x + t.paddingRight + "px",
            i.left = ""),
            e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px",
            i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px",
            i.top = ""),
            this.css(i),
            this.emitEvent("layout", [this])
        }
        ;
        var y = f ? function(t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        }
        : function(t, e) {
            return "translate(" + t + "px, " + e + "px)"
        }
        ;
        a.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x
              , o = this.position.y
              , n = parseInt(t, 10)
              , r = parseInt(e, 10)
              , s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e),
            s && !this.isTransitioning)
                return this.layoutPosition(),
                void 0;
            var a = t - i
              , u = e - o
              , p = {}
              , h = this.layout.options;
            a = h.isOriginLeft ? a : -a,
            u = h.isOriginTop ? u : -u,
            p.transform = y(a, u),
            this.transition({
                to: p,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }
        ,
        a.prototype.goTo = function(t, e) {
            this.setPosition(t, e),
            this.layoutPosition()
        }
        ,
        a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo,
        a.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10),
            this.position.y = parseInt(e, 10)
        }
        ,
        a.prototype._nonTransition = function(t) {
            this.css(t.to),
            t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        }
        ,
        a.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return this._nonTransition(t),
                void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0,
                t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        }
        ;
        var m = p && o(p) + ",opacity";
        a.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }),
            this.element.addEventListener(c, this, !1))
        }
        ,
        a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"],
        a.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }
        ,
        a.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        }
        ;
        var g = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        a.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn
                  , o = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[o],
                i(e.ingProperties) && this.disableTransition(),
                o in e.clean && (this.element.style[t.propertyName] = "",
                delete e.clean[o]),
                o in e.onEnd) {
                    var n = e.onEnd[o];
                    n.call(this),
                    delete e.onEnd[o]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }
        ,
        a.prototype.disableTransition = function() {
            this.removeTransitionStyles(),
            this.element.removeEventListener(c, this, !1),
            this.isTransitioning = !1
        }
        ,
        a.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t)
                e[i] = "";
            this.css(e)
        }
        ;
        var v = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return a.prototype.removeTransitionStyles = function() {
            this.css(v)
        }
        ,
        a.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this])
        }
        ,
        a.prototype.remove = function() {
            if (!u || !parseFloat(this.layout.options.transitionDuration))
                return this.removeElem(),
                void 0;
            var t = this;
            this.on("transitionEnd", function() {
                return t.removeElem(),
                !0
            }),
            this.hide()
        }
        ,
        a.prototype.reveal = function() {
            delete this.isHidden,
            this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0
            })
        }
        ,
        a.prototype.hide = function() {
            this.isHidden = !0,
            this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function() {
                        this.isHidden && this.css({
                            display: "none"
                        })
                    }
                }
            })
        }
        ,
        a.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }
        ,
        a
    }
    var r = t.getComputedStyle
      , s = r ? function(t) {
        return r(t, null)
    }
    : function(t) {
        return t.currentStyle
    }
    ;
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {},
    t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return "[object Array]" === f.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = d(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    function s(i, s, f, d, l, y) {
        function m(t, i) {
            if ("string" == typeof t && (t = a.querySelector(t)),
            !t || !c(t))
                return u && u.error("Bad " + this.constructor.namespace + " element: " + t),
                void 0;
            this.element = t,
            this.options = e({}, this.constructor.defaults),
            this.option(i);
            var o = ++g;
            this.element.outlayerGUID = o,
            v[o] = this,
            this._create(),
            this.options.isInitLayout && this.layout()
        }
        var g = 0
          , v = {};
        return m.namespace = "outlayer",
        m.Item = y,
        m.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        },
        e(m.prototype, f.prototype),
        m.prototype.option = function(t) {
            e(this.options, t)
        }
        ,
        m.prototype._create = function() {
            this.reloadItems(),
            this.stamps = [],
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize()
        }
        ,
        m.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }
        ,
        m.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n]
                  , a = new i(s,this);
                o.push(a)
            }
            return o
        }
        ,
        m.prototype._filterFindItemElements = function(t) {
            t = o(t);
            for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                if (c(s))
                    if (e) {
                        l(s, e) && i.push(s);
                        for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++)
                            i.push(a[u])
                    } else
                        i.push(s)
            }
            return i
        }
        ,
        m.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++)
                t.push(this.items[e].element);
            return t
        }
        ,
        m.prototype.layout = function() {
            this._resetLayout(),
            this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t),
            this._isLayoutInited = !0
        }
        ,
        m.prototype._init = m.prototype.layout,
        m.prototype._resetLayout = function() {
            this.getSize()
        }
        ,
        m.prototype.getSize = function() {
            this.size = d(this.element)
        }
        ,
        m.prototype._getMeasurement = function(t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o),
            this[t] = i ? d(i)[e] : o) : this[t] = 0
        }
        ,
        m.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t),
            this._layoutItems(t, e),
            this._postLayout()
        }
        ,
        m.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }
        ,
        m.prototype._layoutItems = function(t, e) {
            function i() {
                o.emitEvent("layoutComplete", [o, t])
            }
            var o = this;
            if (!t || !t.length)
                return i(),
                void 0;
            this._itemsOn(t, "layout", i);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r]
                  , u = this._getItemLayoutPosition(a);
                u.item = a,
                u.isInstant = e || a.isLayoutInstant,
                n.push(u)
            }
            this._processLayoutQueue(n)
        }
        ,
        m.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }
        ,
        m.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }
        ,
        m.prototype._positionItem = function(t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }
        ,
        m.prototype._postLayout = function() {
            this.resizeContainer()
        }
        ,
        m.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0),
                this._setContainerMeasure(t.height, !1))
            }
        }
        ,
        m.prototype._getContainerSize = h,
        m.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                t = Math.max(t, 0),
                this.element.style[e ? "width" : "height"] = t + "px"
            }
        }
        ,
        m.prototype._itemsOn = function(t, e, i) {
            function o() {
                return n++,
                n === r && i.call(s),
                !0
            }
            for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                p.on(e, o)
            }
        }
        ,
        m.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }
        ,
        m.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }
        ,
        m.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }
        ,
        m.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    n(o, this.stamps),
                    this.unignore(o)
                }
        }
        ,
        m.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = o(t)) : void 0
        }
        ,
        m.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }
        ,
        m.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect()
              , e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }
        ,
        m.prototype._manageStamp = h,
        m.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect()
              , i = this._boundingRect
              , o = d(t)
              , n = {
                left: e.left - i.left - o.marginLeft,
                top: e.top - i.top - o.marginTop,
                right: i.right - e.right - o.marginRight,
                bottom: i.bottom - e.bottom - o.marginBottom
            };
            return n
        }
        ,
        m.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }
        ,
        m.prototype.bindResize = function() {
            this.isResizeBound || (i.bind(t, "resize", this),
            this.isResizeBound = !0)
        }
        ,
        m.prototype.unbindResize = function() {
            this.isResizeBound && i.unbind(t, "resize", this),
            this.isResizeBound = !1
        }
        ,
        m.prototype.onresize = function() {
            function t() {
                e.resize(),
                delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }
        ,
        m.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }
        ,
        m.prototype.needsResizeLayout = function() {
            var t = d(this.element)
              , e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }
        ,
        m.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)),
            e
        }
        ,
        m.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0),
            this.reveal(e))
        }
        ,
        m.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(e, !0),
                this.reveal(e),
                this.layoutItems(i)
            }
        }
        ,
        m.prototype.reveal = function(t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.reveal()
                }
        }
        ,
        m.prototype.hide = function(t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.hide()
                }
        }
        ,
        m.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t)
                    return o
            }
        }
        ,
        m.prototype.getItems = function(t) {
            if (t && t.length) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i]
                      , r = this.getItem(n);
                    r && e.push(r)
                }
                return e
            }
        }
        ,
        m.prototype.remove = function(t) {
            t = o(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function() {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    s.remove(),
                    n(s, this.items)
                }
            }
        }
        ,
        m.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "",
            t.position = "",
            t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                o.destroy()
            }
            this.unbindResize(),
            delete this.element.outlayerGUID,
            p && p.removeData(this.element, this.constructor.namespace)
        }
        ,
        m.data = function(t) {
            var e = t && t.outlayerGUID;
            return e && v[e]
        }
        ,
        m.create = function(t, i) {
            function o() {
                m.apply(this, arguments)
            }
            return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype),
            o.prototype.constructor = o,
            o.defaults = e({}, m.defaults),
            e(o.defaults, i),
            o.prototype.settings = {},
            o.namespace = t,
            o.data = m.data,
            o.Item = function() {
                y.apply(this, arguments)
            }
            ,
            o.Item.prototype = new y,
            s(function() {
                for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                    var f, c = i[s], d = c.getAttribute(n);
                    try {
                        f = d && JSON.parse(d)
                    } catch (l) {
                        u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                        continue
                    }
                    var y = new o(c,f);
                    p && p.data(c, t, y)
                }
            }),
            p && p.bridget && p.bridget(t, o),
            o
        }
        ,
        m.Item = y,
        m
    }
    var a = t.document
      , u = t.console
      , p = t.jQuery
      , h = function() {}
      , f = Object.prototype.toString
      , c = "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement
    }
    : function(t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    }
      , d = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    ;
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window),
function(t) {
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        return e.prototype = new t.Item,
        e.prototype._create = function() {
            this.id = this.layout.itemGUID++,
            t.Item.prototype._create.call(this),
            this.sortData = {}
        }
        ,
        e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id,
                this.sortData["original-order"] = this.id,
                this.sortData.random = Math.random();
                var t = this.layout.options.getSortData
                  , e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        }
        ,
        e
    }
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window),
function(t) {
    function e(t, e) {
        function i(t) {
            this.isotope = t,
            t && (this.options = t.options[this.namespace],
            this.element = t.element,
            this.items = t.filteredItems,
            this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(),
        i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element)
              , i = this.isotope.size && e;
            return i && e.innerHeight !== this.isotope.size.innerHeight
        }
        ,
        i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }
        ,
        i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }
        ,
        i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }
        ,
        i.prototype.getSegmentSize = function(t, e) {
            var i = t + e
              , o = "outer" + e;
            if (this._getMeasurement(i, o),
            !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }
        ,
        i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }
        ,
        i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }
        ,
        i.prototype.getSize = function() {
            this.isotope.getSize(),
            this.size = this.isotope.size
        }
        ,
        i.modes = {},
        i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = new i,
            e && (o.options = e),
            o.prototype.namespace = t,
            i.modes[t] = o,
            o
        }
        ,
        i
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window),
function(t) {
    function e(t, e) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function() {
            this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--; )
                this.colYs.push(0);
            this.maxY = 0
        }
        ,
        o.prototype.measureColumns = function() {
            if (this.getContainerWidth(),
            !this.columnWidth) {
                var t = this.items[0]
                  , i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter,
            this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth),
            this.cols = Math.max(this.cols, 1)
        }
        ,
        o.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element
              , i = e(t);
            this.containerWidth = i && i.innerWidth
        }
        ,
        o.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth
              , o = e && 1 > e ? "round" : "ceil"
              , n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
                x: this.columnWidth * a,
                y: s
            }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)
                this.colYs[a + f] = p;
            return u
        }
        ,
        o.prototype._getColGroup = function(t) {
            if (2 > t)
                return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }
        ,
        o.prototype._manageStamp = function(t) {
            var i = e(t)
              , o = this._getElementOffset(t)
              , n = this.options.isOriginLeft ? o.left : o.right
              , r = n + i.outerWidth
              , s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1,
            a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)
                this.colYs[p] = Math.max(u, this.colYs[p])
        }
        ,
        o.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
            t
        }
        ,
        o.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
                t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }
        ,
        o.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(),
            t !== this.containerWidth
        }
        ,
        o
    }
    var i = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            if (n === e)
                return i
        }
        return -1
    }
    ;
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t, i) {
        var o = t.create("masonry")
          , n = o.prototype._getElementOffset
          , r = o.prototype.layout
          , s = o.prototype._getMeasurement;
        e(o.prototype, i.prototype),
        o.prototype._getElementOffset = n,
        o.prototype.layout = r,
        o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems,
            a.call(this)
        }
        ;
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft,
            this.options.isOriginTop = this.isotope.options.isOriginTop,
            u.apply(this, arguments)
        }
        ,
        o
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
}(window),
function(t) {
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0,
            this.y = 0,
            this.maxY = 0
        }
        ,
        e.prototype._getItemLayoutPosition = function(t) {
            t.getSize(),
            0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0,
            this.y = this.maxY);
            var e = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
            this.x += t.size.outerWidth,
            e
        }
        ,
        e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }
        ,
        e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window),
function(t) {
    function e(t) {
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }
        ,
        e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
              , i = this.y;
            return this.y += t.size.outerHeight,
            {
                x: e,
                y: i
            }
        }
        ,
        e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }
        ,
        e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return "[object Array]" === h.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = f(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t, i, r, u, h) {
        function f(t, e) {
            return function(i, o) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var s = t[n]
                      , a = i.sortData[s]
                      , u = o.sortData[s];
                    if (a > u || u > a) {
                        var p = void 0 !== e[s] ? e[s] : e
                          , h = p ? 1 : -1;
                        return (a > u ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var c = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
        c.Item = u,
        c.LayoutMode = h,
        c.prototype._create = function() {
            this.itemGUID = 0,
            this._sorters = {},
            this._getSorters(),
            t.prototype._create.call(this),
            this.modes = {},
            this.filteredItems = this.items,
            this.sortHistory = ["original-order"];
            for (var e in h.modes)
                this._initLayoutMode(e)
        }
        ,
        c.prototype.reloadItems = function() {
            this.itemGUID = 0,
            t.prototype.reloadItems.call(this)
        }
        ,
        c.prototype._itemize = function() {
            for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                var n = e[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(e),
            e
        }
        ,
        c.prototype._initLayoutMode = function(t) {
            var i = h.modes[t]
              , o = this.options[t] || {};
            this.options[t] = i.options ? e(i.options, o) : o,
            this.modes[t] = new i(this)
        }
        ,
        c.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(),
            void 0) : (this._layout(),
            void 0)
        }
        ,
        c.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(this.filteredItems, t),
            this._isLayoutInited = !0
        }
        ,
        c.prototype.arrange = function(t) {
            this.option(t),
            this._getIsInstant(),
            this.filteredItems = this._filter(this.items),
            this._sort(),
            this._layout()
        }
        ,
        c.prototype._init = c.prototype.arrange,
        c.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t,
            t
        }
        ,
        c.prototype._filter = function(t) {
            function e() {
                f.reveal(n),
                f.hide(r)
            }
            var i = this.options.filter;
            i = i || "*";
            for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                if (!p.isIgnored) {
                    var h = s(p);
                    h && o.push(p),
                    h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                }
            }
            var f = this;
            return this._isInstant ? this._noTransition(e) : e(),
            o
        }
        ,
        c.prototype._getFilterTest = function(t) {
            return s && this.options.isJQueryFiltering ? function(e) {
                return s(e.element).is(t)
            }
            : "function" == typeof t ? function(e) {
                return t(e.element)
            }
            : function(e) {
                return r(e.element, t)
            }
        }
        ,
        c.prototype.updateSortData = function(t) {
            this._getSorters(),
            t = o(t);
            var e = this.getItems(t);
            e = e.length ? e : this.items,
            this._updateItemsSortData(e)
        }
        ,
        c.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = d(i)
            }
        }
        ,
        c.prototype._updateItemsSortData = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                o.updateSortData()
            }
        }
        ;
        var d = function() {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var i = a(t).split(" ")
                  , o = i[0]
                  , n = o.match(/^\[(.+)\]$/)
                  , r = n && n[1]
                  , s = e(r, o)
                  , u = c.sortDataParsers[i[1]];
                return t = u ? function(t) {
                    return t && u(s(t))
                }
                : function(t) {
                    return t && s(t)
                }
            }
            function e(t, e) {
                var i;
                return i = t ? function(e) {
                    return e.getAttribute(t)
                }
                : function(t) {
                    var i = t.querySelector(e);
                    return i && p(i)
                }
            }
            return t
        }();
        c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        },
        c.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory)
                  , i = f(e, this.options.sortAscending);
                this.filteredItems.sort(i),
                t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }
        ,
        c.prototype._mode = function() {
            var t = this.options.layoutMode
              , e = this.modes[t];
            if (!e)
                throw Error("No layout mode: " + t);
            return e.options = this.options[t],
            e
        }
        ,
        c.prototype._resetLayout = function() {
            t.prototype._resetLayout.call(this),
            this._mode()._resetLayout()
        }
        ,
        c.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }
        ,
        c.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }
        ,
        c.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }
        ,
        c.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }
        ,
        c.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }
        ,
        c.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i),
                this._resetLayout(),
                this._manageStamps();
                var o = this._filterRevealAdded(e);
                this.layoutItems(i),
                this.filteredItems = o.concat(this.filteredItems)
            }
        }
        ,
        c.prototype._filterRevealAdded = function(t) {
            var e = this._noTransition(function() {
                return this._filter(t)
            });
            return this.layoutItems(e, !0),
            this.reveal(e),
            t
        }
        ,
        c.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; n > i; i++)
                    o = e[i],
                    this.element.appendChild(o.element);
                var r = this._filter(e);
                for (this._noTransition(function() {
                    this.hide(r)
                }),
                i = 0; n > i; i++)
                    e[i].isLayoutInstant = !0;
                for (this.arrange(),
                i = 0; n > i; i++)
                    delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        }
        ;
        var l = c.prototype.remove;
        return c.prototype.remove = function(t) {
            t = o(t);
            var e = this.getItems(t);
            if (l.call(this, t),
            e && e.length)
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    n(s, this.filteredItems)
                }
        }
        ,
        c.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e,
            i
        }
        ,
        c
    }
    var s = t.jQuery
      , a = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , u = document.documentElement
      , p = u.textContent ? function(t) {
        return t.textContent
    }
    : function(t) {
        return t.innerText
    }
      , h = Object.prototype.toString
      , f = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    ;
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);

/**
 * BootstrapValidator (http://bootstrapvalidator.com)
 *
 * The best jQuery plugin to validate form fields. Designed to use with Bootstrap 3
 *
 * @version     v0.5.0-dev
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc
 * @license     MIT
 */
!function(a) {
    var b = function(c, d) {
        this.$form = a(c),
        this.options = a.extend({}, b.DEFAULT_OPTIONS, d),
        this.$invalidFields = a([]),
        this.$submitButton = null,
        this.STATUS_NOT_VALIDATED = "NOT_VALIDATED",
        this.STATUS_VALIDATING = "VALIDATING",
        this.STATUS_INVALID = "INVALID",
        this.STATUS_VALID = "VALID";
        var e = function() {
            for (var a = 3, b = document.createElement("div"), c = b.all || []; b.innerHTML = "<!--[if gt IE " + ++a + "]><br><![endif]-->",
            c[0]; )
                ;
            return a > 4 ? a : !a
        }()
          , f = document.createElement("div");
        this._changeEvent = 9 !== e && "oninput"in f ? "input" : "keyup",
        this._submitIfValid = null,
        this._cacheFields = {},
        this._init()
    };
    b.DEFAULT_OPTIONS = {
        elementClass: "bv-form",
        message: "This value is not valid",
        container: null,
        threshold: null,
        excluded: [":disabled", ":hidden", ":not(:visible)"],
        feedbackIcons: {
            valid: null,
            invalid: null,
            validating: null
        },
        submitButtons: '[type="submit"]',
        submitHandler: null,
        live: "enabled",
        fields: {}
    },
    b.prototype = {
        constructor: b,
        _init: function() {
            var b = this
              , c = {
                excluded: this.$form.attr("data-bv-excluded"),
                trigger: this.$form.attr("data-bv-trigger"),
                message: this.$form.attr("data-bv-message"),
                container: this.$form.attr("data-bv-container"),
                submitButtons: this.$form.attr("data-bv-submitbuttons"),
                threshold: this.$form.attr("data-bv-threshold"),
                live: this.$form.attr("data-bv-live"),
                fields: {},
                feedbackIcons: {
                    valid: this.$form.attr("data-bv-feedbackicons-valid"),
                    invalid: this.$form.attr("data-bv-feedbackicons-invalid"),
                    validating: this.$form.attr("data-bv-feedbackicons-validating")
                }
            };
            this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit.bv", function(a) {
                a.preventDefault(),
                b.validate()
            }).on("click.bv", this.options.submitButtons, function() {
                b.$submitButton = a(this),
                b._submitIfValid = !0
            }).find("[name], [data-bv-field]").each(function() {
                var d = a(this);
                if (!b._isExcluded(d)) {
                    var e = d.attr("name") || d.attr("data-bv-field")
                      , f = b._parseOptions(d);
                    f && (d.attr("data-bv-field", e),
                    c.fields[e] = a.extend({}, f, c.fields[e]))
                }
            }),
            this.options = a.extend(!0, this.options, c);
            for (var d in this.options.fields)
                this._initField(d);
            this.$form.trigger(a.Event("init.form.bv"), {
                options: this.options
            })
        },
        _parseOptions: function(b) {
            var c, d, e, f, g, h, i, j = b.attr("name") || b.attr("data-bv-field"), k = {};
            for (d in a.fn.bootstrapValidator.validators)
                if (c = a.fn.bootstrapValidator.validators[d],
                e = b.attr("data-bv-" + d.toLowerCase()) + "",
                i = "function" == typeof c.enableByHtml5 ? c.enableByHtml5(b) : null,
                i && "false" != e || i !== !0 && ("" == e || "true" == e)) {
                    c.html5Attributes = c.html5Attributes || {
                        message: "message"
                    },
                    k[d] = a.extend({}, 1 == i ? {} : i, k[d]);
                    for (h in c.html5Attributes)
                        f = c.html5Attributes[h],
                        g = b.attr("data-bv-" + d.toLowerCase() + "-" + h),
                        g && ("true" == g ? g = !0 : "false" == g && (g = !1),
                        k[d][f] = g)
                }
            var l = {
                feedbackIcons: b.attr("data-bv-feedbackicons"),
                trigger: b.attr("data-bv-trigger"),
                message: b.attr("data-bv-message"),
                container: b.attr("data-bv-container"),
                selector: b.attr("data-bv-selector"),
                threshold: b.attr("data-bv-threshold"),
                validators: k
            }
              , m = a.isEmptyObject(l)
              , n = a.isEmptyObject(k);
            return !n || !m && this.options.fields[j] ? (l.validators = k,
            l) : null
        },
        _initField: function(b) {
            var c = a([]);
            switch (typeof b) {
            case "object":
                c = b,
                b = b.attr("data-bv-field");
                break;
            case "string":
                c = this.getFieldElements(b),
                c.attr("data-bv-field", b)
            }
            if (null != this.options.fields[b] && null != this.options.fields[b].validators) {
                if (0 == c.length)
                    return void delete this.options.fields[b];
                for (var d in this.options.fields[b].validators)
                    a.fn.bootstrapValidator.validators[d] || delete this.options.fields[b].validators[d];
                null == this.options.fields[b].enabled && (this.options.fields[b].enabled = !0);
                for (var e = this, f = c.length, g = c.attr("type"), h = 1 == f || "radio" == g || "checkbox" == g, i = 0; f > i; i++) {
                    var j = c.eq(i)
                      , k = j.parents(".form-group")
                      , l = this.options.fields[b].container || this.options.container
                      , m = l && "tooltip" != l && "popover" != l ? a(l) : this._getMessageContainer(j);
                    l && "tooltip" != l && "popover" != l && m.addClass("has-error"),
                    m.find('.help-block[data-bv-validator][data-bv-for="' + b + '"]').remove(),
                    k.find('i[data-bv-icon-for="' + b + '"]').remove();
                    var n = "radio" == g || "checkbox" == g || "file" == g || "SELECT" == j.get(0).tagName ? "change" : this._changeEvent;
                    j.off(n + ".update.bv").on(n + ".update.bv", function() {
                        e._submitIfValid = !1,
                        e.updateStatus(a(this), e.STATUS_NOT_VALIDATED)
                    }),
                    j.data("bv.messages", m);
                    for (var d in this.options.fields[b].validators)
                        j.data("bv.result." + d, this.STATUS_NOT_VALIDATED),
                        h && i != f - 1 || a("<small/>").css("display", "none").addClass("help-block").attr("data-bv-validator", d).attr("data-bv-for", b).attr("data-bv-result", this.STATUS_NOT_VALIDATED).html(this.options.fields[b].validators[d].message || this.options.fields[b].message || this.options.message).appendTo(m);
                    if (this.options.fields[b].feedbackIcons !== !1 && "false" !== this.options.fields[b].feedbackIcons && this.options.feedbackIcons && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid && this.options.feedbackIcons.valid && (!h || i == f - 1)) {
                        k.removeClass("has-success").removeClass("has-error").addClass("has-feedback");
                        var o = a("<i/>").css("display", "none").addClass("form-control-feedback").attr("data-bv-icon-for", b).insertAfter("checkbox" == g || "radio" == g ? j.parent() : j);
                        0 == k.find("label").length && o.css("top", 0),
                        0 != k.find(".input-group-addon").length && o.css({
                            top: 0,
                            "z-index": 100
                        })
                    }
                }
                var p = this.options.fields[b].trigger || this.options.trigger || n
                  , q = a.map(p.split(" "), function(a) {
                    return a + ".live.bv"
                }).join(" ");
                switch (this.options.live) {
                case "submitted":
                    break;
                case "disabled":
                    c.off(q);
                    break;
                case "enabled":
                default:
                    c.off(q).on(q, function() {
                        e._exceedThreshold(a(this)) && e.validateField(a(this))
                    })
                }
                this.$form.trigger(a.Event("init.field.bv"), {
                    field: b,
                    element: c
                })
            }
        },
        _getMessageContainer: function(a) {
            var b = a.parent();
            if (b.hasClass("form-group"))
                return b;
            var c = b.attr("class");
            if (!c)
                return this._getMessageContainer(b);
            c = c.split(" ");
            for (var d = c.length, e = 0; d > e; e++)
                if (/^col-(xs|sm|md|lg)-\d+$/.test(c[e]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(c[e]))
                    return b;
            return this._getMessageContainer(b)
        },
        _submit: function() {
            var b = this.isValid()
              , c = b ? "success.form.bv" : "error.form.bv"
              , d = a.Event(c);
            this.$form.trigger(d),
            this.$submitButton && (b ? this._onSuccess(d) : this._onError(d))
        },
        _isExcluded: function(b) {
            if (this.options.excluded) {
                "string" == typeof this.options.excluded && (this.options.excluded = a.map(this.options.excluded.split(","), function(b) {
                    return a.trim(b)
                }));
                for (var c = this.options.excluded.length, d = 0; c > d; d++)
                    if ("string" == typeof this.options.excluded[d] && b.is(this.options.excluded[d]) || "function" == typeof this.options.excluded[d] && 1 == this.options.excluded[d].call(this, b, this))
                        return !0
            }
            return !1
        },
        _exceedThreshold: function(b) {
            var c = b.attr("data-bv-field")
              , d = this.options.fields[c].threshold || this.options.threshold;
            if (!d)
                return !0;
            var e = -1 != a.inArray(b.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]);
            return e || b.val().length >= d
        },
        _onError: function(b) {
            if (!b.isDefaultPrevented()) {
                if ("submitted" == this.options.live) {
                    this.options.live = "enabled";
                    var c = this;
                    for (var d in this.options.fields)
                        !function(b) {
                            var e = c.getFieldElements(b);
                            if (e.length) {
                                var f = a(e[0]).attr("type")
                                  , g = "radio" == f || "checkbox" == f || "file" == f || "SELECT" == a(e[0]).get(0).tagName ? "change" : c._changeEvent
                                  , h = c.options.fields[d].trigger || c.options.trigger || g
                                  , i = a.map(h.split(" "), function(a) {
                                    return a + ".live.bv"
                                }).join(" ");
                                e.off(i).on(i, function() {
                                    c._exceedThreshold(a(this)) && c.validateField(a(this))
                                })
                            }
                        }(d)
                }
                var e = this.$invalidFields.eq(0);
                if (e) {
                    var f, g = e.parents(".tab-pane");
                    g && (f = g.attr("id")) && a('a[href="#' + f + '"][data-toggle="tab"]').tab("show"),
                    e.focus()
                }
            }
        },
        _onSuccess: function(a) {
            a.isDefaultPrevented() || (this.options.submitHandler && "function" == typeof this.options.submitHandler ? this.options.submitHandler.call(this, this, this.$form) : this.disableSubmitButtons(!0).defaultSubmit())
        },
        _onFieldValidated: function(b, c) {
            var d = b.attr("data-bv-field")
              , e = this.options.fields[d].validators
              , f = {}
              , g = 0;
            if (c) {
                var h = {
                    field: d,
                    element: b,
                    validator: c
                };
                switch (b.data("bv.result." + c)) {
                case this.STATUS_INVALID:
                    this.$form.trigger(a.Event("error.validator.bv"), h);
                    break;
                case this.STATUS_VALID:
                    this.$form.trigger(a.Event("success.validator.bv"), h)
                }
            }
            f[this.STATUS_NOT_VALIDATED] = 0,
            f[this.STATUS_VALIDATING] = 0,
            f[this.STATUS_INVALID] = 0,
            f[this.STATUS_VALID] = 0;
            for (var i in e) {
                g++;
                var j = b.data("bv.result." + i);
                j && f[j]++
            }
            f[this.STATUS_VALID] == g ? (this.$invalidFields = this.$invalidFields.not(b),
            this.$form.trigger(a.Event("success.field.bv"), {
                field: d,
                element: b
            })) : 0 == f[this.STATUS_NOT_VALIDATED] && 0 == f[this.STATUS_VALIDATING] && f[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(b),
            this.$form.trigger(a.Event("error.field.bv"), {
                field: d,
                element: b
            }))
        },
        getFieldElements: function(b) {
            return this._cacheFields[b] || (this._cacheFields[b] = this.options.fields[b] && this.options.fields[b].selector ? a(this.options.fields[b].selector) : this.$form.find('[name="' + b + '"]')),
            this._cacheFields[b]
        },
        disableSubmitButtons: function(a) {
            return a ? "disabled" != this.options.live && this.$form.find(this.options.submitButtons).attr("disabled", "disabled") : this.$form.find(this.options.submitButtons).removeAttr("disabled"),
            this
        },
        validate: function() {
            if (!this.options.fields)
                return this;
            this.disableSubmitButtons(!0);
            for (var a in this.options.fields)
                this.validateField(a);
            return this._submit(),
            this
        },
        validateField: function(b) {
            var c, d = a([]);
            switch (typeof b) {
            case "object":
                d = b,
                b = b.attr("data-bv-field");
                break;
            case "string":
                d = this.getFieldElements(b)
            }
            if (this.options.fields[b] && 0 == this.options.fields[b].enabled)
                return this;
            for (var e, f, g = this, c = d.attr("type"), h = "radio" == c || "checkbox" == c ? 1 : d.length, i = "radio" == c || "checkbox" == c, j = this.options.fields[b].validators, k = 0; h > k; k++) {
                var l = d.eq(k);
                if (!this._isExcluded(l))
                    for (e in j) {
                        l.data("bv.dfs." + e) && l.data("bv.dfs." + e).reject();
                        var m = l.data("bv.result." + e);
                        m != this.STATUS_VALID && m != this.STATUS_INVALID ? (l.data("bv.result." + e, this.STATUS_VALIDATING),
                        f = a.fn.bootstrapValidator.validators[e].validate(this, l, j[e]),
                        "object" == typeof f ? (this.updateStatus(i ? b : l, this.STATUS_VALIDATING, e),
                        l.data("bv.dfs." + e, f),
                        f.done(function(a, b, c, d) {
                            a.removeData("bv.dfs." + b),
                            d && l.data("bv.messages").find('.help-block[data-bv-validator="' + b + '"][data-bv-for="' + a.attr("data-bv-field") + '"]').html(d),
                            g.updateStatus(i ? a.attr("data-bv-field") : a, c ? g.STATUS_VALID : g.STATUS_INVALID, b),
                            c && 1 == g._submitIfValid && g._submit()
                        })) : "boolean" == typeof f && this.updateStatus(i ? b : l, f ? this.STATUS_VALID : this.STATUS_INVALID, e)) : this._onFieldValidated(l, e)
                    }
            }
            return this
        },
        updateStatus: function(b, c, d) {
            var e, f = a([]);
            switch (typeof b) {
            case "object":
                f = b,
                b = b.attr("data-bv-field");
                break;
            case "string":
                f = this.getFieldElements(b)
            }
            for (var g = this, e = f.attr("type"), h = "radio" == e || "checkbox" == e ? 1 : f.length, i = 0; h > i; i++) {
                var j = f.eq(i)
                  , k = j.parents(".form-group")
                  , l = j.data("bv.messages")
                  , m = l.find('.help-block[data-bv-validator][data-bv-for="' + b + '"]')
                  , n = d ? m.filter('[data-bv-validator="' + d + '"]') : m
                  , o = k.find('.form-control-feedback[data-bv-icon-for="' + b + '"]')
                  , p = this.options.fields[b].container || this.options.container
                  , q = null;
                if (d)
                    j.data("bv.result." + d, c);
                else
                    for (var r in this.options.fields[b].validators)
                        j.data("bv.result." + r, c);
                n.attr("data-bv-result", c);
                var s, t, u = j.parents(".tab-pane");
                switch (u && (s = u.attr("id")) && (t = a('a[href="#' + s + '"][data-toggle="tab"]').parent()),
                c) {
                case this.STATUS_VALIDATING:
                    q = null,
                    this.disableSubmitButtons(!0),
                    k.removeClass("has-success").removeClass("has-error"),
                    o && o.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show(),
                    t && t.removeClass("bv-tab-success").removeClass("bv-tab-error");
                    break;
                case this.STATUS_INVALID:
                    q = !1,
                    this.disableSubmitButtons(!0),
                    k.removeClass("has-success").addClass("has-error"),
                    o && o.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show(),
                    t && t.removeClass("bv-tab-success").addClass("bv-tab-error");
                    break;
                case this.STATUS_VALID:
                    q = 0 == m.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED + '"]').length ? m.filter('[data-bv-result="' + this.STATUS_VALID + '"]').length == m.length : null,
                    null != q && (this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !q),
                    o && o.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(q ? this.options.feedbackIcons.valid : this.options.feedbackIcons.invalid).show()),
                    k.removeClass("has-error has-success").addClass(this.isValidContainer(k) ? "has-success" : "has-error"),
                    t && t.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(u) ? "bv-tab-success" : "bv-tab-error");
                    break;
                case this.STATUS_NOT_VALIDATED:
                default:
                    q = null,
                    this.disableSubmitButtons(!1),
                    k.removeClass("has-success").removeClass("has-error"),
                    o && o.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(),
                    t && t.removeClass("bv-tab-success").removeClass("bv-tab-error")
                }
                switch (!0) {
                case o && "tooltip" == p:
                    q === !1 ? o.css("cursor", "pointer").tooltip("destroy").tooltip({
                        html: !0,
                        placement: "top",
                        title: m.filter('[data-bv-result="' + g.STATUS_INVALID + '"]').eq(0).html()
                    }) : o.css("cursor", "").tooltip("destroy");
                    break;
                case o && "popover" == p:
                    q === !1 ? o.css("cursor", "pointer").popover("destroy").popover({
                        content: m.filter('[data-bv-result="' + g.STATUS_INVALID + '"]').eq(0).html(),
                        html: !0,
                        placement: "top",
                        trigger: "hover click"
                    }) : o.css("cursor", "").popover("destroy");
                    break;
                default:
                    c == this.STATUS_INVALID ? n.show() : n.hide()
                }
                this.$form.trigger(a.Event("status.field.bv"), {
                    field: b,
                    element: j,
                    status: c
                }),
                this._onFieldValidated(j, d)
            }
            return this
        },
        isValid: function() {
            for (var a in this.options.fields)
                if (!this.isValidField(a))
                    return !1;
            return !0
        },
        isValidField: function(b) {
            var c = a([]);
            switch (typeof b) {
            case "object":
                c = b,
                b = b.attr("data-bv-field");
                break;
            case "string":
                c = this.getFieldElements(b)
            }
            if (0 == c.length || null == this.options.fields[b] || 0 == this.options.fields[b].enabled)
                return !0;
            for (var d, e, f, g = c.attr("type"), h = "radio" == g || "checkbox" == g ? 1 : c.length, i = 0; h > i; i++)
                if (d = c.eq(i),
                !this._isExcluded(d))
                    for (e in this.options.fields[b].validators)
                        if (f = d.data("bv.result." + e),
                        f != this.STATUS_VALID)
                            return !1;
            return !0
        },
        isValidContainer: function(b) {
            var c = this
              , d = {};
            b.find("[data-bv-field]").each(function() {
                var b = a(this).attr("data-bv-field");
                d[b] || (d[b] = a(this))
            });
            for (var e in d) {
                var f = d[e];
                if (0 != f.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').filter(function() {
                    var b = a(this).attr("data-bv-validator");
                    return f.data("bv.result." + b) && f.data("bv.result." + b) != c.STATUS_VALID
                }).length)
                    return !1
            }
            return !0
        },
        defaultSubmit: function() {
            this.$submitButton && a("<input/>").attr("type", "hidden").attr("data-bv-submit-hidden", "").attr("name", this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form),
            this.$form.off("submit.bv").submit()
        },
        getInvalidFields: function() {
            return this.$invalidFields
        },
        getSubmitButton: function() {
            return this.$submitButton
        },
        getErrors: function(b) {
            var c = this
              , d = []
              , e = a([]);
            switch (!0) {
            case b && "object" == typeof b:
                e = b;
                break;
            case b && "string" == typeof b:
                var f = this.getFieldElements(b);
                if (f.length > 0) {
                    var g = f.attr("type");
                    e = "radio" == g || "checkbox" == g ? f.eq(0) : f
                }
                break;
            default:
                e = this.$invalidFields
            }
            return e.each(function() {
                d = d.concat(a(this).data("bv.messages").find('.help-block[data-bv-for="' + a(this).attr("data-bv-field") + '"][data-bv-result="' + c.STATUS_INVALID + '"]').map(function() {
                    return a(this).html()
                }).get())
            }),
            d
        },
        addField: function(b, c) {
            var d = a([]);
            switch (typeof b) {
            case "object":
                d = b,
                b = b.attr("data-bv-field") || b.attr("name");
                break;
            case "string":
                delete this._cacheFields[b],
                d = this.getFieldElements(b)
            }
            d.attr("data-bv-field", b);
            for (var e = d.attr("type"), f = "radio" == e || "checkbox" == e ? 1 : d.length, g = 0; f > g; g++) {
                var h = d.eq(g)
                  , i = this._parseOptions(h);
                i = null == i ? c : a.extend(!0, c, i),
                this.options.fields[b] = a.extend(!0, this.options.fields[b], i),
                this._cacheFields[b] = this._cacheFields[b] ? this._cacheFields[b].add(h) : h,
                this._initField("checkbox" == e || "radio" == e ? b : h)
            }
            return this.disableSubmitButtons(!1),
            this.$form.trigger(a.Event("added.field.bv"), {
                field: b,
                element: d,
                options: this.options.fields[b]
            }),
            this
        },
        removeField: function(b) {
            var c = a([]);
            switch (typeof b) {
            case "object":
                c = b,
                b = b.attr("data-bv-field") || b.attr("name"),
                c.attr("data-bv-field", b);
                break;
            case "string":
                c = this.getFieldElements(b)
            }
            if (0 == c.length)
                return this;
            for (var d = c.attr("type"), e = "radio" == d || "checkbox" == d ? 1 : c.length, f = 0; e > f; f++) {
                var g = c.eq(f);
                this.$invalidFields = this.$invalidFields.not(g),
                this._cacheFields[b] = this._cacheFields[b].not(g)
            }
            return this._cacheFields[b] && 0 != this._cacheFields[b].length || delete this.options.fields[b],
            ("checkbox" == d || "radio" == d) && this._initField(b),
            this.disableSubmitButtons(!1),
            this.$form.trigger(a.Event("removed.field.bv"), {
                field: b,
                element: c
            }),
            this
        },
        resetForm: function(b) {
            var c, d, e, f, g;
            for (c in this.options.fields) {
                d = this.getFieldElements(c),
                e = d.length;
                for (var h = 0; e > h; h++)
                    for (g in this.options.fields[c].validators)
                        d.eq(h).removeData("bv.dfs." + g);
                this.updateStatus(c, this.STATUS_NOT_VALIDATED),
                b && (f = d.attr("type"),
                "radio" == f || "checkbox" == f ? d.removeAttr("checked").removeAttr("selected") : d.val(""))
            }
            return this.$invalidFields = a([]),
            this.$submitButton = null,
            this.disableSubmitButtons(!1),
            this
        },
        enableFieldValidators: function(a, b) {
            return this.options.fields[a].enabled != b && (this.options.fields[a].enabled = b,
            this.updateStatus(a, this.STATUS_NOT_VALIDATED)),
            this
        },
        destroy: function() {
            var a, b, c, d, e, f;
            for (a in this.options.fields) {
                b = this.getFieldElements(a),
                f = this.options.fields[a].container || this.options.container;
                for (var g = 0; g < b.length; g++) {
                    if (c = b.eq(g),
                    c.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + a + '"]').remove().end().end().removeData("bv.messages").parents(".form-group").removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"),
                    e = c.parents(".form-group").find('i[data-bv-icon-for="' + a + '"]'))
                        switch (f) {
                        case "tooltip":
                            e.tooltip("destroy").remove();
                            break;
                        case "popover":
                            e.popover("destroy").remove();
                            break;
                        default:
                            e.remove()
                        }
                    for (d in this.options.fields[a].validators)
                        c.removeData("bv.result." + d).removeData("bv.dfs." + d)
                }
            }
            this.disableSubmitButtons(!1),
            this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove()
        }
    },
    a.fn.bootstrapValidator = function(c) {
        var d = arguments;
        return this.each(function() {
            var e = a(this)
              , f = e.data("bootstrapValidator")
              , g = "object" == typeof c && c;
            f || (f = new b(this,g),
            e.data("bootstrapValidator", f)),
            "string" == typeof c && f[c].apply(f, Array.prototype.slice.call(d, 1))
        })
    }
    ,
    a.fn.bootstrapValidator.validators = {},
    a.fn.bootstrapValidator.Constructor = b,
    a.fn.bootstrapValidator.helpers = {
        date: function(a, b, c, d) {
            if (isNaN(a) || isNaN(b) || isNaN(c))
                return !1;
            if (1e3 > a || a > 9999 || 0 == b || b > 12)
                return !1;
            var e = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((a % 400 == 0 || a % 100 != 0 && a % 4 == 0) && (e[1] = 29),
            0 > c || c > e[b - 1])
                return !1;
            if (d === !0) {
                var f = new Date
                  , g = f.getFullYear()
                  , h = f.getMonth()
                  , i = f.getDate();
                return g > a || a == g && h > b - 1 || a == g && b - 1 == h && i > c
            }
            return !0
        },
        luhn: function(a) {
            for (var b = a.length, c = 0, d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], e = 0; b--; )
                e += d[c][parseInt(a.charAt(b), 10)],
                c ^= 1;
            return e % 10 === 0 && e > 0
        },
        mod_11_10: function(a) {
            for (var b = 5, c = a.length, d = 0; c > d; d++)
                b = (2 * (b || 10) % 11 + parseInt(a.charAt(d), 10)) % 10;
            return 1 == b
        },
        mod_37_36: function(a, b) {
            b = b || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var c = b.length, d = a.length, e = Math.floor(c / 2), f = 0; d > f; f++)
                e = (2 * (e || c) % (c + 1) + b.indexOf(a.charAt(f))) % c;
            return 1 == e
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.base64 = {
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.between = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max",
            inclusive: "inclusive"
        },
        enableByHtml5: function(a) {
            return "range" == a.attr("type") ? {
                min: a.attr("min"),
                max: a.attr("max")
            } : !1
        },
        validate: function(a, b, c) {
            var d = b.val();
            return "" == d ? !0 : (d = parseFloat(d),
            c.inclusive === !0 || void 0 == c.inclusive ? d >= c.min && d <= c.max : d > c.min && d < c.max)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.callback = {
        validate: function(b, c, d) {
            var e = c.val();
            if (d.callback && "function" == typeof d.callback) {
                var f = new a.Deferred
                  , g = d.callback.call(this, e, b, c);
                return f.resolve(c, "callback", "boolean" == typeof g ? g : g.valid, "object" == typeof g && g.message ? g.message : null),
                f
            }
            return !0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.choice = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max"
        },
        validate: function(a, b, c) {
            var d = b.is("select") ? a.getFieldElements(b.attr("data-bv-field")).find("option").filter(":selected").length : a.getFieldElements(b.attr("data-bv-field")).filter(":checked").length;
            return c.min && d < c.min || c.max && d > c.max ? !1 : !0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.creditCard = {
        validate: function(b, c) {
            var d = c.val();
            if ("" == d)
                return !0;
            if (/[^0-9-\s]+/.test(d))
                return !1;
            if (d = d.replace(/\D/g, ""),
            !a.fn.bootstrapValidator.helpers.luhn(d))
                return !1;
            var e, f, g = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ["34", "37"]
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ["300", "301", "302", "303", "304", "305", "36"]
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ["54", "55"]
                },
                DISCOVER: {
                    length: [16],
                    prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
                },
                JCB: {
                    length: [16],
                    prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ["6304", "6706", "6771", "6709"]
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ["51", "52", "53", "54", "55"]
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ["6334", "6767"]
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
                },
                VISA: {
                    length: [16],
                    prefix: ["4"]
                }
            };
            for (e in g)
                for (f in g[e].prefix)
                    if (d.substr(0, g[e].prefix[f].length) == g[e].prefix[f] && -1 != a.inArray(d.length, g[e].length))
                        return !0;
            return !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.cusip = {
        validate: function(b, c) {
            var d = c.val();
            if ("" == d)
                return !0;
            if (d = d.toUpperCase(),
            !/^[0-9A-Z]{9}$/.test(d))
                return !1;
            for (var e = a.map(d.split(""), function(a) {
                var b = a.charCodeAt(0);
                return b >= "A".charCodeAt(0) && b <= "Z".charCodeAt(0) ? b - "A".charCodeAt(0) + 10 : a
            }), f = e.length, g = 0, h = 0; f - 1 > h; h++) {
                var i = parseInt(e[h]);
                h % 2 != 0 && (i *= 2),
                i > 9 && (i -= 9),
                g += i
            }
            return g = (10 - g % 10) % 10,
            g == e[f - 1]
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.cvv = {
        html5Attributes: {
            message: "message",
            ccfield: "creditCardField"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            if (!/^[0-9]{3,4}$/.test(e))
                return !1;
            if (!d.creditCardField)
                return !0;
            var f = b.getFieldElements(d.creditCardField).val();
            if ("" == f)
                return !0;
            f = f.replace(/\D/g, "");
            var g, h, i = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ["34", "37"]
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ["300", "301", "302", "303", "304", "305", "36"]
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ["54", "55"]
                },
                DISCOVER: {
                    length: [16],
                    prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
                },
                JCB: {
                    length: [16],
                    prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ["6304", "6706", "6771", "6709"]
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ["51", "52", "53", "54", "55"]
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ["6334", "6767"]
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
                },
                VISA: {
                    length: [16],
                    prefix: ["4"]
                }
            }, j = null;
            for (g in i)
                for (h in i[g].prefix)
                    if (f.substr(0, i[g].prefix[h].length) == i[g].prefix[h] && -1 != a.inArray(f.length, i[g].length)) {
                        j = g;
                        break
                    }
            return null == j ? !1 : "AMERICAN_EXPRESS" == j ? 4 == e.length : 3 == e.length
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.date = {
        html5Attributes: {
            message: "message",
            format: "format",
            separator: "separator"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            d.format = d.format || "MM/DD/YYYY";
            var f = d.format.split(" ")
              , g = f[0]
              , h = f.length > 1 ? f[1] : null
              , i = f.length > 2 ? f[2] : null
              , j = e.split(" ")
              , k = j[0]
              , l = j.length > 1 ? j[1] : null;
            if (f.length != j.length)
                return !1;
            var m = d.separator;
            if (m || (m = -1 != k.indexOf("/") ? "/" : -1 != k.indexOf("-") ? "-" : null),
            null == m || -1 == k.indexOf(m))
                return !1;
            k = k.split(m),
            g = g.split(m);
            var n = k[a.inArray("YYYY", g)]
              , o = k[a.inArray("MM", g)]
              , p = k[a.inArray("DD", g)]
              , q = null
              , r = null
              , s = null;
            if (h) {
                if (h = h.split(":"),
                l = l.split(":"),
                h.length != l.length)
                    return !1;
                if (r = l.length > 0 ? l[0] : null,
                q = l.length > 1 ? l[1] : null,
                s = l.length > 2 ? l[2] : null,
                s && (s = parseInt(s, 10),
                isNaN(s) || 0 > s || s > 60))
                    return !1;
                if (r && (r = parseInt(r, 10),
                isNaN(r) || 0 > r || r >= 24 || i && r > 12))
                    return !1;
                if (q && (q = parseInt(q, 10),
                isNaN(q) || 0 > q || q > 59))
                    return !1
            }
            return p = parseInt(p, 10),
            o = parseInt(o, 10),
            n = parseInt(n, 10),
            a.fn.bootstrapValidator.helpers.date(n, o, p)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.different = {
        html5Attributes: {
            message: "message",
            field: "field"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = a.getFieldElements(c.field);
            return null == e ? !0 : d != e.val() ? (a.updateStatus(c.field, a.STATUS_VALID, "different"),
            !0) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.digits = {
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^\d+$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.ean = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (!/^(\d{8}|\d{12}|\d{13})$/.test(c))
                return !1;
            for (var d = c.length, e = 0, f = 8 == d ? [3, 1] : [1, 3], g = 0; d - 1 > g; g++)
                e += parseInt(c.charAt(g)) * f[g % 2];
            return e = 10 - e % 10,
            e == c.charAt(d - 1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.emailAddress = {
        enableByHtml5: function(a) {
            return "email" == a.attr("type")
        },
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            var d = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return d.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.file = {
        html5Attributes: {
            extension: "extension",
            maxsize: "maxSize",
            message: "message",
            type: "type"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f, g = d.extension ? d.extension.toLowerCase().split(",") : null, h = d.type ? d.type.toLowerCase().split(",") : null, i = window.File && window.FileList && window.FileReader;
            if (i)
                for (var j = c.get(0).files, k = j.length, l = 0; k > l; l++) {
                    if (d.maxSize && j[l].size > parseInt(d.maxSize))
                        return !1;
                    if (f = j[l].name.substr(j[l].name.lastIndexOf(".") + 1),
                    g && -1 == a.inArray(f.toLowerCase(), g))
                        return !1;
                    if (h && -1 == a.inArray(j[l].type.toLowerCase(), h))
                        return !1
                }
            else if (f = e.substr(e.lastIndexOf(".") + 1),
            g && -1 == a.inArray(f.toLowerCase(), g))
                return !1;
            return !0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.greaterThan = {
        html5Attributes: {
            message: "message",
            value: "value",
            inclusive: "inclusive"
        },
        enableByHtml5: function(a) {
            var b = a.attr("min");
            return b ? {
                value: b
            } : !1
        },
        validate: function(a, b, c) {
            var d = b.val();
            return "" == d ? !0 : (d = parseFloat(d),
            c.inclusive === !0 || void 0 == c.inclusive ? d >= c.value : d > c.value)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.grid = {
        validate: function(b, c) {
            var d = c.val();
            return "" == d ? !0 : (d = d.toUpperCase(),
            /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(d) ? (d = d.replace(/\s/g, "").replace(/-/g, ""),
            "GRID:" == d.substr(0, 5) && (d = d.substr(5)),
            a.fn.bootstrapValidator.helpers.mod_37_36(d)) : !1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.hex = {
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^[0-9a-fA-F]+$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.hexColor = {
        enableByHtml5: function(a) {
            return "color" == a.attr("type")
        },
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.iban = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f = {
                AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
                AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
                AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
                AO: "AO[0-9]{2}[0-9]{21}",
                AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
                AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
                BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
                BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
                BF: "BF[0-9]{2}[0-9]{23}",
                BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
                BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
                BI: "BI[0-9]{2}[0-9]{12}",
                BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
                BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
                CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
                CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
                CM: "CM[0-9]{2}[0-9]{23}",
                CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
                CV: "CV[0-9]{2}[0-9]{21}",
                CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
                CZ: "CZ[0-9]{2}[0-9]{20}",
                DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
                DK: "DK[0-9]{2}[0-9]{14}",
                DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
                DZ: "DZ[0-9]{2}[0-9]{20}",
                EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
                ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
                FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
                FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
                FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
                GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
                GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
                GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
                GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
                GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
                GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
                HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
                HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
                IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
                IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
                IR: "IR[0-9]{2}[0-9]{22}",
                IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
                IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
                JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
                KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
                KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
                LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
                LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
                LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
                LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
                LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
                MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
                MD: "MD[0-9]{2}[A-Z0-9]{20}",
                ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                MG: "MG[0-9]{2}[0-9]{23}",
                MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
                ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
                MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
                MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
                MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
                MZ: "MZ[0-9]{2}[0-9]{21}",
                NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
                NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
                PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
                PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
                PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
                PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
                QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
                RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
                RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
                SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
                SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
                SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
                SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
                SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
                TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
                VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}"
            };
            e = e.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
            var g = d.country || e.substr(0, 2);
            if (!f[g])
                return !1;
            if (!new RegExp("^" + f[g] + "$").test(e))
                return !1;
            e = e.substr(4) + e.substr(0, 4),
            e = a.map(e.split(""), function(a) {
                var b = a.charCodeAt(0);
                return b >= "A".charCodeAt(0) && b <= "Z".charCodeAt(0) ? b - "A".charCodeAt(0) + 10 : a
            }),
            e = e.join("");
            for (var h = parseInt(e.substr(0, 1), 10), i = e.length, j = 1; i > j; ++j)
                h = (10 * h + parseInt(e.substr(j, 1), 10)) % 97;
            return 1 == h
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.id = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = c.country || d.substr(0, 2)
              , f = ["_", e.toLowerCase()].join("");
            return this[f] && "function" == typeof this[f] ? this[f](d) : !0
        },
        _validateJMBG: function(a, b) {
            if (!/^\d{13}$/.test(a))
                return !1;
            var c = parseInt(a.substr(0, 2), 10)
              , d = parseInt(a.substr(2, 2), 10)
              , e = (parseInt(a.substr(4, 3), 10),
            parseInt(a.substr(7, 2), 10))
              , f = parseInt(a.substr(12, 1), 10);
            if (c > 31 || d > 12)
                return !1;
            for (var g = 0, h = 0; 6 > h; h++)
                g += (7 - h) * (parseInt(a.charAt(h)) + parseInt(a.charAt(h + 6)));
            if (g = 11 - g % 11,
            (10 == g || 11 == g) && (g = 0),
            g != f)
                return !1;
            switch (b.toUpperCase()) {
            case "BA":
                return e >= 10 && 19 >= e;
            case "MK":
                return e >= 41 && 49 >= e;
            case "ME":
                return e >= 20 && 29 >= e;
            case "RS":
                return e >= 70 && 99 >= e;
            case "SI":
                return e >= 50 && 59 >= e;
            default:
                return !0
            }
        },
        _ba: function(a) {
            return this._validateJMBG(a, "BA")
        },
        _mk: function(a) {
            return this._validateJMBG(a, "MK")
        },
        _me: function(a) {
            return this._validateJMBG(a, "ME")
        },
        _rs: function(a) {
            return this._validateJMBG(a, "RS")
        },
        _si: function(a) {
            return this._validateJMBG(a, "SI")
        },
        _bg: function(b) {
            if (!/^\d{10}$/.test(b) && !/^\d{6}\s\d{3}\s\d{1}$/.test(b))
                return !1;
            b = b.replace(/\s/g, "");
            var c = parseInt(b.substr(0, 2), 10) + 1900
              , d = parseInt(b.substr(2, 2), 10)
              , e = parseInt(b.substr(4, 2), 10);
            if (d > 40 ? (c += 100,
            d -= 40) : d > 20 && (c -= 100,
            d -= 20),
            !a.fn.bootstrapValidator.helpers.date(c, d, e))
                return !1;
            for (var f = 0, g = [2, 4, 8, 5, 10, 9, 7, 3, 6], h = 0; 9 > h; h++)
                f += parseInt(b.charAt(h)) * g[h];
            return f = f % 11 % 10,
            f == b.substr(9, 1)
        },
        _br: function(a) {
            if (/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(a))
                return !1;
            if (!/^\d{11}$/.test(a) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(a))
                return !1;
            a = a.replace(/\./g, "").replace(/-/g, "");
            for (var b = 0, c = 0; 9 > c; c++)
                b += (10 - c) * parseInt(a.charAt(c));
            if (b = 11 - b % 11,
            (10 == b || 11 == b) && (b = 0),
            b != a.charAt(9))
                return !1;
            var d = 0;
            for (c = 0; 10 > c; c++)
                d += (11 - c) * parseInt(a.charAt(c));
            return d = 11 - d % 11,
            (10 == d || 11 == d) && (d = 0),
            d == a.charAt(10)
        },
        _ch: function(a) {
            if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(a))
                return !1;
            a = a.replace(/\D/g, "").substr(3);
            for (var b = a.length, c = 0, d = 8 == b ? [3, 1] : [1, 3], e = 0; b - 1 > e; e++)
                c += parseInt(a.charAt(e)) * d[e % 2];
            return c = 10 - c % 10,
            c == a.charAt(b - 1)
        },
        _cl: function(a) {
            if (!/^\d{7,8}[-]{0,1}[0-9K]$/.test(a))
                return !1;
            for (a = a.replace(/\D/g, ""); a.length < 9; )
                a = "0" + a;
            for (var b = 0, c = [3, 2, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = 11 - b % 11,
            11 == b ? b = 0 : 10 == b && (b = "K"),
            b == a.charAt(8)
        },
        _cz: function(b) {
            if (!/^\d{9,10}$/.test(b))
                return !1;
            var c = 1900 + parseInt(b.substr(0, 2))
              , d = parseInt(b.substr(2, 2)) % 50 % 20
              , e = parseInt(b.substr(4, 2));
            if (9 == b.length) {
                if (c >= 1980 && (c -= 100),
                c > 1953)
                    return !1
            } else
                1954 > c && (c += 100);
            if (!a.fn.bootstrapValidator.helpers.date(c, d, e))
                return !1;
            if (10 == b.length) {
                var f = parseInt(b.substr(0, 9), 10) % 11;
                return 1985 > c && (f %= 10),
                f == b.substr(9, 1)
            }
            return !0
        },
        _dk: function(b) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))
                return !1;
            b = b.replace(/-/g, "");
            var c = parseInt(b.substr(0, 2), 10)
              , d = parseInt(b.substr(2, 2), 10)
              , e = parseInt(b.substr(4, 2), 10);
            switch (!0) {
            case -1 != "5678".indexOf(b.charAt(6)) && e >= 58:
                e += 1800;
                break;
            case -1 != "0123".indexOf(b.charAt(6)):
            case -1 != "49".indexOf(b.charAt(6)) && e >= 37:
                e += 1900;
                break;
            default:
                e += 2e3
            }
            return a.fn.bootstrapValidator.helpers.date(e, d, c)
        },
        _ee: function(a) {
            return this._lt(a)
        },
        _es: function(a) {
            if (!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(a) && !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(a))
                return !1;
            a = a.replace(/-/g, "");
            var b = "XYZ".indexOf(a.charAt(0));
            -1 != b && (a = b + a.substr(1) + "");
            var c = parseInt(a.substr(0, 8), 10);
            return c = "TRWAGMYFPDXBNJZSQVHLCKE"[c % 23],
            c == a.substr(8, 1)
        },
        _fi: function(b) {
            if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(b))
                return !1;
            var c = parseInt(b.substr(0, 2), 10)
              , d = parseInt(b.substr(2, 2), 10)
              , e = parseInt(b.substr(4, 2), 10)
              , f = {
                "+": 1800,
                "-": 1900,
                A: 2e3
            };
            if (e = f[b.charAt(6)] + e,
            !a.fn.bootstrapValidator.helpers.date(e, d, c))
                return !1;
            var g = parseInt(b.substr(7, 3));
            if (2 > g)
                return !1;
            var h = b.substr(0, 6) + b.substr(7, 3) + "";
            return h = parseInt(h),
            "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(h % 31) == b.charAt(10)
        },
        _hr: function(b) {
            return /^[0-9]{11}$/.test(b) ? a.fn.bootstrapValidator.helpers.mod_11_10(b) : !1
        },
        _ie: function(a) {
            if (!/^\d{7}[A-W][AHWTX]?$/.test(a))
                return !1;
            var b = function(a) {
                for (; a.length < 7; )
                    a = "0" + a;
                for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++)
                    c += parseInt(a.charAt(d)) * (8 - d);
                return c += 9 * b.indexOf(a.substr(7)),
                b[c % 23]
            };
            return 9 != a.length || "A" != a.charAt(8) && "H" != a.charAt(8) ? a.charAt(7) == b(a.substr(0, 7)) : a.charAt(7) == b(a.substr(0, 7) + a.substr(8) + "")
        },
        _is: function(b) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))
                return !1;
            b = b.replace(/-/g, "");
            var c = parseInt(b.substr(0, 2), 10)
              , d = parseInt(b.substr(2, 2), 10)
              , e = parseInt(b.substr(4, 2), 10)
              , f = parseInt(b.charAt(9));
            if (e = 9 == f ? 1900 + e : 100 * (20 + f) + e,
            !a.fn.bootstrapValidator.helpers.date(e, d, c, !0))
                return !1;
            for (var g = 0, h = [3, 2, 7, 6, 5, 4, 3, 2], i = 0; 8 > i; i++)
                g += parseInt(b.charAt(i)) * h[i];
            return g = 11 - g % 11,
            g == b.charAt(8)
        },
        _lt: function(b) {
            if (!/^[0-9]{11}$/.test(b))
                return !1;
            var c = parseInt(b.charAt(0))
              , d = parseInt(b.substr(1, 2), 10)
              , e = parseInt(b.substr(3, 2), 10)
              , f = parseInt(b.substr(5, 2), 10)
              , g = c % 2 == 0 ? 17 + c / 2 : 17 + (c + 1) / 2;
            if (d = 100 * g + d,
            !a.fn.bootstrapValidator.helpers.date(d, e, f, !0))
                return !1;
            for (var h = 0, i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], j = 0; 10 > j; j++)
                h += parseInt(b.charAt(j)) * i[j];
            if (h %= 11,
            10 != h)
                return h == b.charAt(10);
            for (h = 0,
            i = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3],
            j = 0; 10 > j; j++)
                h += parseInt(b.charAt(j)) * i[j];
            return h %= 11,
            10 == h && (h = 0),
            h == b.charAt(10)
        },
        _lv: function(b) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(b))
                return !1;
            b = b.replace(/\D/g, "");
            var c = parseInt(b.substr(0, 2))
              , d = parseInt(b.substr(2, 2))
              , e = parseInt(b.substr(4, 2));
            if (e = e + 1800 + 100 * parseInt(b.charAt(6)),
            !a.fn.bootstrapValidator.helpers.date(e, d, c, !0))
                return !1;
            for (var f = 0, g = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], h = 0; 10 > h; h++)
                f += parseInt(b.charAt(h)) * g[h];
            return f = (f + 1) % 11 % 10,
            f == b.charAt(10)
        },
        _nl: function(a) {
            for (; a.length < 9; )
                a = "0" + a;
            if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(a))
                return !1;
            if (a = a.replace(/\./g, ""),
            0 == parseInt(a, 10))
                return !1;
            for (var b = 0, c = a.length, d = 0; c - 1 > d; d++)
                b += (9 - d) * parseInt(a.charAt(d));
            return b %= 11,
            10 == b && (b = 0),
            b == a.charAt(c - 1)
        },
        _ro: function(b) {
            if (!/^[0-9]{13}$/.test(b))
                return !1;
            var c = parseInt(b.charAt(0));
            if (0 == c || 7 == c || 8 == c)
                return !1;
            var d = parseInt(b.substr(1, 2), 10)
              , e = parseInt(b.substr(3, 2), 10)
              , f = parseInt(b.substr(5, 2), 10)
              , g = {
                1: 1900,
                2: 1900,
                3: 1800,
                4: 1800,
                5: 2e3,
                6: 2e3
            };
            if (f > 31 && e > 12)
                return !1;
            if (9 != c && (d = g[c + ""] + d,
            !a.fn.bootstrapValidator.helpers.date(d, e, f)))
                return !1;
            for (var h = 0, i = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], j = b.length, k = 0; j - 1 > k; k++)
                h += parseInt(b.charAt(k)) * i[k];
            return h %= 11,
            10 == h && (h = 1),
            h == b.charAt(j - 1)
        },
        _se: function(b) {
            if (!/^[0-9]{10}$/.test(b) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(b))
                return !1;
            b = b.replace(/[^0-9]/g, "");
            var c = parseInt(b.substr(0, 2)) + 1900
              , d = parseInt(b.substr(2, 2))
              , e = parseInt(b.substr(4, 2));
            return a.fn.bootstrapValidator.helpers.date(c, d, e) ? a.fn.bootstrapValidator.helpers.luhn(b) : !1
        },
        _sk: function(a) {
            return this._cz(a)
        },
        _sm: function(a) {
            return /^\d{5}$/.test(a)
        },
        _za: function(b) {
            if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(b))
                return !1;
            var c = parseInt(b.substr(0, 2))
              , d = (new Date).getFullYear() % 100
              , e = parseInt(b.substr(2, 2))
              , f = parseInt(b.substr(4, 2));
            return c = c >= d ? c + 1900 : c + 2e3,
            a.fn.bootstrapValidator.helpers.date(c, e, f) ? a.fn.bootstrapValidator.helpers.luhn(b) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.identical = {
        html5Attributes: {
            message: "message",
            field: "field"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = a.getFieldElements(c.field);
            return null == e ? !0 : d == e.val() ? (a.updateStatus(c.field, a.STATUS_VALID, "identical"),
            !0) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.imei = {
        validate: function(b, c) {
            var d = c.val();
            if ("" == d)
                return !0;
            switch (!0) {
            case /^\d{15}$/.test(d):
            case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(d):
            case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(d):
                return d = d.replace(/[^0-9]/g, ""),
                a.fn.bootstrapValidator.helpers.luhn(d);
            case /^\d{14}$/.test(d):
            case /^\d{16}$/.test(d):
            case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(d):
            case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(d):
                return !0;
            default:
                return !1
            }
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.integer = {
        enableByHtml5: function(a) {
            return "number" == a.attr("type")
        },
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^(?:-?(?:0|[1-9][0-9]*))$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.ip = {
        html5Attributes: {
            message: "message",
            ipv4: "ipv4",
            ipv6: "ipv6"
        },
        validate: function(b, c, d) {
            var e = c.val();
            return "" == e ? !0 : (d = a.extend({}, {
                ipv4: !0,
                ipv6: !0
            }, d),
            d.ipv4 ? /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e) : d.ipv6 ? /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(str) : !1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.isbn = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            var d;
            switch (!0) {
            case /^\d{9}[\dX]$/.test(c):
            case 13 == c.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):
            case 13 == c.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):
                d = "ISBN10";
                break;
            case /^(978|979)\d{9}[\dX]$/.test(c):
            case 17 == c.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):
            case 17 == c.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):
                d = "ISBN13";
                break;
            default:
                return !1
            }
            c = c.replace(/[^0-9X]/gi, "");
            var e, f = c.split(""), g = f.length, h = 0;
            switch (d) {
            case "ISBN10":
                h = 0;
                for (var i = 0; g - 1 > i; i++)
                    h += (10 - i) * parseInt(f[i]);
                return e = 11 - h % 11,
                11 == e ? e = 0 : 10 == e && (e = "X"),
                e + "" == f[g - 1];
            case "ISBN13":
                h = 0;
                for (var i = 0; g - 1 > i; i++)
                    h += i % 2 == 0 ? parseInt(f[i]) : 3 * parseInt(f[i]);
                return e = 10 - h % 10,
                10 == e && (e = "0"),
                e + "" == f[g - 1];
            default:
                return !1
            }
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.isin = {
        COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            c = c.toUpperCase();
            var d = new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$");
            if (!d.test(c))
                return !1;
            for (var e = "", f = c.length, g = 0; f - 1 > g; g++) {
                var h = c.charCodeAt(g);
                e += h > 57 ? (h - 55).toString() : c.charAt(g)
            }
            var i = ""
              , j = e.length
              , k = j % 2 != 0 ? 0 : 1;
            for (g = 0; j > g; g++)
                i += parseInt(e[g]) * (g % 2 == k ? 2 : 1) + "";
            var l = 0;
            for (g = 0; g < i.length; g++)
                l += parseInt(i.charAt(g));
            return l = (10 - l % 10) % 10,
            l == c.charAt(f - 1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.ismn = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            var d;
            switch (!0) {
            case /^M\d{9}$/.test(c):
            case /^M-\d{4}-\d{4}-\d{1}$/.test(c):
            case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(c):
                d = "ISMN10";
                break;
            case /^9790\d{9}$/.test(c):
            case /^979-0-\d{4}-\d{4}-\d{1}$/.test(c):
            case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(c):
                d = "ISMN13";
                break;
            default:
                return !1
            }
            "ISMN10" == d && (c = "9790" + c.substr(1)),
            c = c.replace(/[^0-9]/gi, "");
            for (var e = c.length, f = 0, g = [1, 3], h = 0; e - 1 > h; h++)
                f += parseInt(c.charAt(h)) * g[h % 2];
            return f = 10 - f % 10,
            f == c.charAt(e - 1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.issn = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (!/^\d{4}\-\d{3}[\dX]$/.test(c))
                return !1;
            c = c.replace(/[^0-9X]/gi, "");
            var d = c.split("")
              , e = d.length
              , f = 0;
            "X" == d[7] && (d[7] = 10);
            for (var g = 0; e > g; g++)
                f += (8 - g) * parseInt(d[g]);
            return f % 11 == 0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.lessThan = {
        html5Attributes: {
            message: "message",
            value: "value",
            inclusive: "inclusive"
        },
        enableByHtml5: function(a) {
            var b = a.attr("max");
            return b ? {
                value: b
            } : !1
        },
        validate: function(a, b, c) {
            var d = b.val();
            return "" == d ? !0 : (d = parseFloat(d),
            c.inclusive === !0 || void 0 == c.inclusive ? d <= c.value : d < c.value)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.mac = {
        validate: function(a, b) {
            var c = b.val();
            return "" == c ? !0 : /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(c)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.notEmpty = {
        enableByHtml5: function(a) {
            var b = a.attr("required") + "";
            return "required" == b || "true" == b
        },
        validate: function(b, c) {
            var d = c.attr("type");
            return "radio" == d || "checkbox" == d ? b.getFieldElements(c.attr("data-bv-field")).filter(":checked").length > 0 : "" != a.trim(c.val())
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.numeric = {
        html5Attributes: {
            message: "message",
            separator: "separator"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = c.separator || ".";
            return "." != e && (d = d.replace(e, ".")),
            !isNaN(parseFloat(d)) && isFinite(d)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.phone = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f = (d.country || "US").toUpperCase();
            switch (f) {
            case "GB":
                return e = a.trim(e),
                /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(e);
            case "US":
            default:
                return e = e.replace(/\D/g, ""),
                /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(e) && 10 == e.length
            }
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.regexp = {
        html5Attributes: {
            message: "message",
            regexp: "regexp"
        },
        enableByHtml5: function(a) {
            var b = a.attr("pattern");
            return b ? {
                regexp: b
            } : !1
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = "string" == typeof c.regexp ? new RegExp(c.regexp) : c.regexp;
            return e.test(d)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.remote = {
        html5Attributes: {
            message: "message",
            url: "url",
            name: "name"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f = c.attr("data-bv-field")
              , g = d.data;
            null == g && (g = {}),
            "function" == typeof g && (g = g.call(this, b)),
            g[d.name || f] = e;
            var h = new a.Deferred
              , i = a.ajax({
                type: "POST",
                url: d.url,
                dataType: "json",
                data: g
            });
            return i.then(function(a) {
                h.resolve(c, "remote", a.valid === !0 || "true" === a.valid, a.message ? a.message : null)
            }),
            h.fail(function() {
                i.abort()
            }),
            h
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.rtn = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (!/^\d{9}$/.test(c))
                return !1;
            for (var d = 0, e = 0; e < c.length; e += 3)
                d += 3 * parseInt(c.charAt(e), 10) + 7 * parseInt(c.charAt(e + 1), 10) + parseInt(c.charAt(e + 2), 10);
            return 0 != d && d % 10 == 0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.sedol = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (c = c.toUpperCase(),
            !/^[0-9A-Z]{7}$/.test(c))
                return !1;
            for (var d = 0, e = [1, 3, 1, 7, 3, 9, 1], f = c.length, g = 0; f - 1 > g; g++)
                d += e[g] * parseInt(c.charAt(g), 36);
            return d = (10 - d % 10) % 10,
            d == c.charAt(f - 1)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.siren = {
        validate: function(b, c) {
            var d = c.val();
            return "" == d ? !0 : /^\d{9}$/.test(d) ? a.fn.bootstrapValidator.helpers.luhn(d) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.siret = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            for (var d, e = 0, f = c.length, g = 0; f > g; g++)
                d = parseInt(c.charAt(g), 10),
                g % 2 == 0 && (d = 2 * d,
                d > 9 && (d -= 9)),
                e += d;
            return e % 10 == 0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.step = {
        html5Attributes: {
            message: "message",
            base: "baseValue",
            step: "step"
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            if (d = a.extend({}, {
                baseValue: 0,
                step: 1
            }, d),
            e = parseFloat(e),
            isNaN(e) || !isFinite(e))
                return !1;
            var f = function(a, b) {
                var c = Math.pow(10, b);
                a *= c;
                var d = a > 0 | -(0 > a)
                  , e = a % 1 === .5 * d;
                return e ? (Math.floor(a) + (d > 0)) / c : Math.round(a) / c
            }
              , g = function(a, b) {
                if (0 == b)
                    return 1;
                var c = (a + "").split(".")
                  , d = (b + "").split(".")
                  , e = (1 == c.length ? 0 : c[1].length) + (1 == d.length ? 0 : d[1].length);
                return f(a - b * Math.floor(a / b), e)
            }
              , h = g(e - d.baseValue, d.step);
            return 0 == h || h == d.step
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.stringCase = {
        html5Attributes: {
            message: "message",
            "case": "case"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = (c["case"] || "lower").toLowerCase();
            switch (e) {
            case "upper":
                return d === d.toUpperCase();
            case "lower":
            default:
                return d === d.toLowerCase()
            }
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.stringLength = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max"
        },
        enableByHtml5: function(a) {
            var b = a.attr("maxlength");
            return b ? {
                max: parseInt(b, 10)
            } : !1
        },
        validate: function(b, c, d) {
            var e = c.val();
            if ("" == e)
                return !0;
            var f = a.trim(e).length;
            return d.min && f < d.min || d.max && f > d.max ? !1 : !0
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.uri = {
        html5Attributes: {
            message: "message",
            allowlocal: "allowLocal"
        },
        enableByHtml5: function(a) {
            return "url" == a.attr("type")
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = 1 == c.allowLocal || "true" == c.allowLocal
              , f = new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:" + (e ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/[^\\s]*)?$","i");
            return f.test(d)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.uuid = {
        html5Attributes: {
            message: "message",
            version: "version"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = {
                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
            }
              , f = c.version ? c.version + "" : "all";
            return null == e[f] ? !0 : e[f].test(d)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.vat = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d)
                return !0;
            var e = c.country || d.substr(0, 2)
              , f = ["_", e.toLowerCase()].join("");
            return this[f] && "function" == typeof this[f] ? this[f](d) : !0
        },
        _at: function(a) {
            if (!/^ATU[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(3);
            for (var b = 0, c = [1, 2, 1, 2, 1, 2, 1], d = 0, e = 0; 7 > e; e++)
                d = parseInt(a.charAt(e)) * c[e],
                d > 9 && (d = Math.floor(d / 10) + d % 10),
                b += d;
            return b = 10 - (b + 4) % 10,
            10 == b && (b = 0),
            b == a.substr(7, 1)
        },
        _be: function(a) {
            if (!/^BE[0]{0,1}[0-9]{9}$/.test(a))
                return !1;
            if (a = a.substr(2),
            9 == a.length && (a = "0" + a),
            0 == a.substr(1, 1))
                return !1;
            var b = parseInt(a.substr(0, 8), 10) + parseInt(a.substr(8, 2), 10);
            return b % 97 == 0
        },
        _bg: function(b) {
            if (!/^BG[0-9]{9,10}$/.test(b))
                return !1;
            b = b.substr(2);
            var c = 0
              , d = 0;
            if (9 == b.length) {
                for (d = 0; 8 > d; d++)
                    c += parseInt(b.charAt(d)) * (d + 1);
                if (c %= 11,
                10 == c)
                    for (c = 0,
                    d = 0; 8 > d; d++)
                        c += parseInt(b.charAt(d)) * (d + 3);
                return c %= 10,
                c == b.substr(8)
            }
            if (10 == b.length) {
                var e = function(b) {
                    var c = parseInt(b.substr(0, 2), 10) + 1900
                      , d = parseInt(b.substr(2, 2), 10)
                      , e = parseInt(b.substr(4, 2), 10);
                    if (d > 40 ? (c += 100,
                    d -= 40) : d > 20 && (c -= 100,
                    d -= 20),
                    !a.fn.bootstrapValidator.helpers.date(c, d, e))
                        return !1;
                    for (var f = 0, g = [2, 4, 8, 5, 10, 9, 7, 3, 6], h = 0; 9 > h; h++)
                        f += parseInt(b.charAt(h)) * g[h];
                    return f = f % 11 % 10,
                    f == b.substr(9, 1)
                }
                  , f = function(a) {
                    for (var b = 0, c = [21, 19, 17, 13, 11, 9, 7, 3, 1], d = 0; 9 > d; d++)
                        b += parseInt(a.charAt(d)) * c[d];
                    return b %= 10,
                    b == a.substr(9, 1)
                }
                  , g = function(a) {
                    for (var b = 0, c = [4, 3, 2, 7, 6, 5, 4, 3, 2], d = 0; 9 > d; d++)
                        b += parseInt(a.charAt(d)) * c[d];
                    return b = 11 - b % 11,
                    10 == b ? !1 : (11 == b && (b = 0),
                    b == a.substr(9, 1))
                };
                return e(b) || f(b) || g(b)
            }
            return !1
        },
        _ch: function(a) {
            if (!/^CHE[0-9]{9}(MWST)?$/.test(a))
                return !1;
            a = a.substr(3);
            for (var b = 0, c = [5, 4, 3, 2, 7, 6, 5, 4], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d), 10) * c[d];
            return b = 11 - b % 11,
            10 == b ? !1 : (11 == b && (b = 0),
            b == a.substr(8, 1))
        },
        _cy: function(a) {
            if (!/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a))
                return !1;
            if (a = a.substr(2),
            "12" == a.substr(0, 2))
                return !1;
            for (var b = 0, c = {
                0: 1,
                1: 0,
                2: 5,
                3: 7,
                4: 9,
                5: 13,
                6: 15,
                7: 17,
                8: 19,
                9: 21
            }, d = 0; 8 > d; d++) {
                var e = parseInt(a.charAt(d), 10);
                d % 2 == 0 && (e = c[e + ""]),
                b += e
            }
            return b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[b % 26],
            b == a.substr(8, 1)
        },
        _cz: function(b) {
            if (!/^CZ[0-9]{8,10}$/.test(b))
                return !1;
            b = b.substr(2);
            var c = 0
              , d = 0;
            if (8 == b.length) {
                if (b.charAt(0) + "" == "9")
                    return !1;
                for (c = 0,
                d = 0; 7 > d; d++)
                    c += parseInt(b.charAt(d), 10) * (8 - d);
                return c = 11 - c % 11,
                10 == c && (c = 0),
                11 == c && (c = 1),
                c == b.substr(7, 1)
            }
            if (9 == b.length && b.charAt(0) + "" == "6") {
                for (c = 0,
                d = 0; 7 > d; d++)
                    c += parseInt(b.charAt(d + 1), 10) * (8 - d);
                return c = 11 - c % 11,
                10 == c && (c = 0),
                11 == c && (c = 1),
                c = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][c - 1],
                c == b.substr(8, 1)
            }
            if (9 == b.length || 10 == b.length) {
                var e = 1900 + parseInt(b.substr(0, 2))
                  , f = parseInt(b.substr(2, 2)) % 50 % 20
                  , g = parseInt(b.substr(4, 2));
                if (9 == b.length) {
                    if (e >= 1980 && (e -= 100),
                    e > 1953)
                        return !1
                } else
                    1954 > e && (e += 100);
                if (!a.fn.bootstrapValidator.helpers.date(e, f, g))
                    return !1;
                if (10 == b.length) {
                    var h = parseInt(b.substr(0, 9), 10) % 11;
                    return 1985 > e && (h %= 10),
                    h == b.substr(9, 1)
                }
                return !0
            }
            return !1
        },
        _de: function(b) {
            return /^DE[0-9]{9}$/.test(b) ? (b = b.substr(2),
            a.fn.bootstrapValidator.helpers.mod_11_10(b)) : !1
        },
        _dk: function(a) {
            if (!/^DK[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [2, 7, 6, 5, 4, 3, 2, 1], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d), 10) * c[d];
            return b % 11 == 0
        },
        _ee: function(a) {
            if (!/^EE[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [3, 7, 1, 3, 7, 1, 3, 7, 1], d = 0; 9 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 10 == 0
        },
        _es: function(a) {
            if (!/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a))
                return !1;
            a = a.substr(2);
            var b = function(a) {
                var b = parseInt(a.substr(0, 8), 10);
                return b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23],
                b == a.substr(8, 1)
            }
              , c = function(a) {
                var b = ["XYZ".indexOf(a.charAt(0)), a.substr(1)].join("");
                return b = parseInt(b, 10),
                b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23],
                b == a.substr(8, 1)
            }
              , d = function(a) {
                var b, c = a.charAt(0);
                if (-1 != "KLM".indexOf(c))
                    return b = parseInt(a.substr(1, 8), 10),
                    b = "TRWAGMYFPDXBNJZSQVHLCKE"[b % 23],
                    b == a.substr(8, 1);
                if (-1 != "ABCDEFGHJNPQRSUVW".indexOf(c)) {
                    for (var d = 0, e = [2, 1, 2, 1, 2, 1, 2], f = 0, g = 0; 7 > g; g++)
                        f = parseInt(a.charAt(g + 1)) * e[g],
                        f > 9 && (f = Math.floor(f / 10) + f % 10),
                        d += f;
                    return d = 10 - d % 10,
                    d == a.substr(8, 1) || "JABCDEFGHI"[d] == a.substr(8, 1)
                }
                return !1
            }
              , e = a.charAt(0);
            return /^[0-9]$/.test(e) ? b(a) : /^[XYZ]$/.test(e) ? c(a) : d(a)
        },
        _fi: function(a) {
            if (!/^FI[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [7, 9, 10, 5, 8, 4, 2, 1], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 11 == 0
        },
        _fr: function(b) {
            if (!/^FR[0-9A-Z]{2}[0-9]{9}$/.test(b))
                return !1;
            if (b = b.substr(2),
            !a.fn.bootstrapValidator.helpers.luhn(b.substr(2)))
                return !1;
            if (/^[0-9]{2}$/.test(b.substr(0, 2)))
                return b.substr(0, 2) == parseInt(b.substr(2) + "12", 10) % 97;
            var c, d = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
            return c = /^[0-9]{1}$/.test(b.charAt(0)) ? 24 * d.indexOf(b.charAt(0)) + d.indexOf(b.charAt(1)) - 10 : 34 * d.indexOf(b.charAt(0)) + d.indexOf(b.charAt(1)) - 100,
            (parseInt(b.substr(2), 10) + 1 + Math.floor(c / 11)) % 11 == c % 11
        },
        _gb: function(a) {
            if (!(/^GB[0-9]{9}$/.test(a) || /^GB[0-9]{12}$/.test(a) || /^GBGD[0-9]{3}$/.test(a) || /^GBHA[0-9]{3}$/.test(a) || /^GB(GD|HA)8888[0-9]{5}$/.test(a)))
                return !1;
            a = a.substr(2);
            var b = a.length;
            if (5 == b) {
                var c = a.substr(0, 2)
                  , d = parseInt(a.substr(2));
                return "GD" == c && 500 > d || "HA" == c && d >= 500
            }
            if (11 == b && ("GD8888" == a.substr(0, 6) || "HA8888" == a.substr(0, 6)))
                return "GD" == a.substr(0, 2) && parseInt(a.substr(6, 3)) >= 500 || "HA" == a.substr(0, 2) && parseInt(a.substr(6, 3)) < 500 ? !1 : parseInt(a.substr(6, 3)) % 97 == parseInt(a.substr(9, 2));
            if (9 == b || 12 == b) {
                for (var e = 0, f = [8, 7, 6, 5, 4, 3, 2, 10, 1], g = 0; 9 > g; g++)
                    e += parseInt(a.charAt(g)) * f[g];
                return e %= 97,
                parseInt(a.substr(0, 3)) >= 100 ? 0 == e || 42 == e || 55 == e : 0 == e
            }
            return !0
        },
        _gr: function(a) {
            if (!/^GR[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2),
            8 == a.length && (a = "0" + a);
            for (var b = 0, c = [256, 128, 64, 32, 16, 8, 4, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = b % 11 % 10,
            b == a.substr(8, 1)
        },
        _el: function(a) {
            return /^EL[0-9]{9}$/.test(a) ? (a = "GR" + a.substr(2),
            this._gr(a)) : !1
        },
        _hu: function(a) {
            if (!/^HU[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [9, 7, 3, 1, 9, 7, 3, 1], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 10 == 0
        },
        _hr: function(b) {
            return /^HR[0-9]{11}$/.test(b) ? (b = b.substr(2),
            a.fn.bootstrapValidator.helpers.mod_11_10(b)) : !1
        },
        _ie: function(a) {
            if (!/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a))
                return !1;
            a = a.substr(2);
            var b = function(a) {
                for (; a.length < 7; )
                    a = "0" + a;
                for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++)
                    c += parseInt(a.charAt(d)) * (8 - d);
                return c += 9 * b.indexOf(a.substr(7)),
                b[c % 23]
            };
            return /^[0-9]+$/.test(a.substr(0, 7)) ? a.charAt(7) == b(a.substr(0, 7) + a.substr(8) + "") : -1 != "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(a.charAt(1)) ? a.charAt(7) == b(a.substr(2, 5) + a.substr(0, 1) + "") : !0
        },
        _it: function(b) {
            if (!/^IT[0-9]{11}$/.test(b))
                return !1;
            if (b = b.substr(2),
            0 == parseInt(b.substr(0, 7)))
                return !1;
            var c = parseInt(b.substr(7, 3));
            return 1 > c || c > 201 && 999 != c && 888 != c ? !1 : a.fn.bootstrapValidator.helpers.luhn(b)
        },
        _lt: function(a) {
            if (!/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = a.length, c = 0, d = 0; b - 1 > d; d++)
                c += parseInt(a.charAt(d)) * (1 + d % 9);
            var e = c % 11;
            if (10 == e) {
                c = 0;
                for (var d = 0; b - 1 > d; d++)
                    c += parseInt(a.charAt(d)) * (1 + (d + 2) % 9)
            }
            return e = e % 11 % 10,
            e == a.charAt(b - 1)
        },
        _lu: function(a) {
            return /^LU[0-9]{8}$/.test(a) ? (a = a.substr(2),
            a.substr(0, 6) % 89 == a.substr(6, 2)) : !1
        },
        _lv: function(b) {
            if (!/^LV[0-9]{11}$/.test(b))
                return !1;
            b = b.substr(2);
            var c = parseInt(b.charAt(0))
              , d = 0
              , e = []
              , f = 0
              , g = b.length;
            if (c > 3) {
                for (d = 0,
                e = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1],
                f = 0; g > f; f++)
                    d += parseInt(b.charAt(f)) * e[f];
                return d %= 11,
                3 == d
            }
            var h = parseInt(b.substr(0, 2))
              , i = parseInt(b.substr(2, 2))
              , j = parseInt(b.substr(4, 2));
            if (j = j + 1800 + 100 * parseInt(b.charAt(6)),
            !a.fn.bootstrapValidator.helpers.date(j, i, h))
                return !1;
            for (d = 0,
            e = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9],
            f = 0; g - 1 > f; f++)
                d += parseInt(b.charAt(f)) * e[f];
            return d = (d + 1) % 11 % 10,
            d == b.charAt(g - 1)
        },
        _mt: function(a) {
            if (!/^MT[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [3, 4, 6, 7, 8, 9, 10, 1], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 37 == 0
        },
        _nl: function(a) {
            if (!/^NL[0-9]{9}B[0-9]{2}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [9, 8, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b %= 11,
            b > 9 && (b = 0),
            b == a.substr(8, 1)
        },
        _no: function(a) {
            if (!/^NO[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [3, 2, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = 11 - b % 11,
            11 == b && (b = 0),
            b == a.substr(8, 1)
        },
        _pl: function(a) {
            if (!/^PL[0-9]{10}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], d = 0; 10 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b % 11 == 0
        },
        _pt: function(a) {
            if (!/^PT[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [9, 8, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = 11 - b % 11,
            b > 9 && (b = 0),
            b == a.substr(8, 1)
        },
        _ro: function(a) {
            if (!/^RO[1-9][0-9]{1,9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = a.length, c = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - b), d = 0, e = 0; b - 1 > e; e++)
                d += parseInt(a.charAt(e)) * c[e];
            return d = 10 * d % 11 % 10,
            d == a.substr(b - 1, 1)
        },
        _ru: function(a) {
            if (!/^RU([0-9]{9}|[0-9]{12})$/.test(a))
                return !1;
            if (a = a.substr(2),
            10 == a.length) {
                for (var b = 0, c = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0], d = 0; 10 > d; d++)
                    b += parseInt(a.charAt(d)) * c[d];
                return b %= 11,
                b > 9 && (b %= 10),
                b == a.substr(9, 1)
            }
            if (12 == a.length) {
                for (var e = 0, f = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0], g = 0, h = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0], d = 0; 11 > d; d++)
                    e += parseInt(a.charAt(d)) * f[d],
                    g += parseInt(a.charAt(d)) * h[d];
                return e %= 11,
                e > 9 && (e %= 10),
                g %= 11,
                g > 9 && (g %= 10),
                e == a.substr(10, 1) && g == a.substr(11, 1)
            }
            return !1
        },
        _rs: function(a) {
            if (!/^RS[0-9]{9}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 10, c = 0, d = 0; 8 > d; d++)
                c = (parseInt(a.charAt(d)) + b) % 10,
                0 == c && (c = 10),
                b = 2 * c % 11;
            return (b + parseInt(a.substr(8, 1))) % 10 == 1
        },
        _se: function(b) {
            return /^SE[0-9]{10}01$/.test(b) ? (b = b.substr(2, 10),
            a.fn.bootstrapValidator.helpers.luhn(b)) : !1
        },
        _si: function(a) {
            if (!/^SI[0-9]{8}$/.test(a))
                return !1;
            a = a.substr(2);
            for (var b = 0, c = [8, 7, 6, 5, 4, 3, 2], d = 0; 7 > d; d++)
                b += parseInt(a.charAt(d)) * c[d];
            return b = 11 - b % 11,
            10 == b && (b = 0),
            b == a.substr(7, 1)
        },
        _sk: function(a) {
            return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a) ? (a = a.substr(2),
            a % 11 == 0) : !1
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.vin = {
        validate: function(a, b) {
            var c = b.val();
            if ("" == c)
                return !0;
            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(c))
                return !1;
            c = c.toUpperCase();
            for (var d = {
                A: 1,
                B: 2,
                C: 3,
                D: 4,
                E: 5,
                F: 6,
                G: 7,
                H: 8,
                J: 1,
                K: 2,
                L: 3,
                M: 4,
                N: 5,
                P: 7,
                R: 9,
                S: 2,
                T: 3,
                U: 4,
                V: 5,
                W: 6,
                X: 7,
                Y: 8,
                Z: 9,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                0: 0
            }, e = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], f = 0, g = c.length, h = 0; g > h; h++)
                f += d[c.charAt(h) + ""] * e[h];
            var i = f % 11;
            return 10 == i && (i = "X"),
            i == c.charAt(8)
        }
    }
}(window.jQuery),
function(a) {
    a.fn.bootstrapValidator.validators.zipCode = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        validate: function(a, b, c) {
            var d = b.val();
            if ("" == d || !c.country)
                return !0;
            var e = (c.country || "US").toUpperCase();
            switch (e) {
            case "CA":
                return /^(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}\s?[0-9]{1}(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}$/i.test(d);
            case "DK":
                return /^(DK(-|\s)?)?\d{4}$/i.test(d);
            case "GB":
                return this._gb(d);
            case "IT":
                return /^(I-|IT-)?\d{5}$/i.test(d);
            case "NL":
                return /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(d);
            case "SE":
                return /^(S-)?\d{3}\s?\d{2}$/i.test(d);
            case "US":
            default:
                return /^\d{4,5}([\-]\d{4})?$/.test(d)
            }
        },
        _gb: function(a) {
            for (var b = "[ABCDEFGHIJKLMNOPRSTUWYZ]", c = "[ABCDEFGHKLMNOPQRSTUVWXY]", d = "[ABCDEFGHJKPMNRSTUVWXY]", e = "[ABEHMNPRVWXY]", f = "[ABDEFGHJLNPQRSTUWXYZ]", g = [new RegExp("^(" + b + "{1}" + c + "?[0-9]{1,2})(\\s*)([0-9]{1}" + f + "{2})$","i"), new RegExp("^(" + b + "{1}[0-9]{1}" + d + "{1})(\\s*)([0-9]{1}" + f + "{2})$","i"), new RegExp("^(" + b + "{1}" + c + "{1}?[0-9]{1}" + e + "{1})(\\s*)([0-9]{1}" + f + "{2})$","i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], h = 0; h < g.length; h++)
                if (g[h].test(a))
                    return !0;
            return !1
        }
    }
}(window.jQuery);

/*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length)
                return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"),
            c = new a.validator(b,this[0]),
            a.data(this[0], "validator", c),
            c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                    e = c.settings.submitHandler.call(c, c.currentForm, b),
                    c.submitButton && d.remove(),
                    void 0 !== e && e)
                }
                return c.settings.debug && b.preventDefault(),
                c.cancelSubmit ? (c.cancelSubmit = !1,
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0,
                !1) : d() : (c.focusInvalid(),
                !1)
            })),
            c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [],
            b = !0,
            c = a(this[0].form).validate(),
            this.each(function() {
                b = c.element(this) && b,
                b || (d = d.concat(c.errorList))
            }),
            c.errorList = d),
            b
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (null != j && null != j.form) {
                if (b)
                    switch (d = a.data(j.form, "validator").settings,
                    e = d.rules,
                    f = a.validator.staticRules(j),
                    b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)),
                        delete f.messages,
                        e[j.name] = f,
                        c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {},
                        a.each(c.split(/\s/), function(b, c) {
                            i[c] = f[c],
                            delete f[c],
                            "required" === c && a(j).removeAttr("aria-required")
                        }),
                        i) : (delete e[j.name],
                        f)
                    }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j),
                g.required && (h = g.required,
                delete g.required,
                g = a.extend({
                    required: h
                }, g),
                a(j).attr("aria-required", "true")),
                g.remote && (h = g.remote,
                delete g.remote,
                g = a.extend(g, {
                    remote: h
                })),
                g
            }
        }
    }),
    a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }),
    a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b),
        this.currentForm = c,
        this.init()
    }
    ,
    a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b),
            a.validator.format.apply(this, c)
        }
        : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
        c.constructor !== Array && (c = [c]),
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}","g"), function() {
                return c
            })
        }),
        b)
    }
    ,
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]);
                    var c = a.data(this.form, "validator")
                      , d = "on" + b.type.replace(/^validate/, "")
                      , e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm),
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)),
                    a.each(c, function(a, c) {
                        d[c] = b
                    })
                }),
                c = this.settings.rules,
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }),
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                a.extend(this.submitted, this.errorMap),
                this.invalid = a.extend({}, this.errorMap),
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
                    this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f),
                this.currentElements = a(f),
                d = this.groups[f.name],
                d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))),
                    e && e.name in g.invalid && (g.currentElements.push(e),
                    h = g.check(e) && h))
                }),
                c = this.check(f) !== !1,
                h = h && c,
                c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
                h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b),
                    this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }),
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++)
                        this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""),
                        this.findByName(a[b].name).removeClass(this.settings.validClass);
                else
                    a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a)
                    a[b] && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""),
                this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this
                  , c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]),
                    !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0,
                    !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = a([]),
                this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(),
                this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b), f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(),
                "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"),
                d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"),
                d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
                    return b
                }).length, h = !1, i = this.elementValue(b);
                if ("function" == typeof f.normalizer) {
                    if (i = f.normalizer.call(b, i),
                    "string" != typeof i)
                        throw new TypeError("The normalizer should return a string value.");
                    delete f.normalizer
                }
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters),
                        "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1,
                        "pending" === c)
                            return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c)
                            return this.formatAndAdd(b, e),
                            !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j),
                        j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                        j
                    }
                }
                if (!h)
                    return this.objectLength(f) && this.successList.push(b),
                    !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a])
                        return arguments[a]
            },
            defaultMessage: function(b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>")
                  , e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }),
                this.errorMap[a.name] = c,
                this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))),
                a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++)
                    c = this.errorList[a],
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0,
                    b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""),
                d = h,
                this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b),
                h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"),
                j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f,
                a(b).attr("aria-describedby", j),
                e = this.groups[b.name],
                e && (g = this,
                a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))),
                !c && this.settings.success && (h.text(""),
                "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)),
                this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b))
                  , d = a(b).attr("aria-describedby")
                  , e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)),
                a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c))
                        return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++,
                a(b).addClass(this.settings.pendingClass),
                this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[b.name],
                a(b).removeClass(this.settings.pendingClass),
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(),
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return c = "string" == typeof c && c || "remote",
                a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {}
              , d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }),
            c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d),
            isNaN(d) && (d = void 0)),
            d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                "required" === c ? (d = b.getAttribute(c),
                "" === d && (d = !0),
                d = !!d) : d = f.attr(c),
                this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength,
            e
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()),
                this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {}
              , d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
            c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1)
                    return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                    case "string":
                        f = !!a(e.depends, c.form).length;
                        break;
                    case "function":
                        f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)),
                    delete b[d])
                }
            }),
            a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }),
            a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }),
            a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                b[this] = [Number(c[0]), Number(c[1])]))
            }),
            a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max],
            delete b.min,
            delete b.max),
            null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength],
            delete b.minlength,
            delete b.maxlength)),
            b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }),
                b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c,
            a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b],
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c))
                    return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e, f = a(c).attr("type"), g = "Step attribute on input type " + f + " is not supported.", h = ["text", "number", "range"], i = new RegExp("\\b" + f + "\\b"), j = f && !i.test(h.join()), k = function(a) {
                    var b = ("" + a).match(/(?:\.(\d+))?$/);
                    return b && b[1] ? b[1].length : 0
                }, l = function(a) {
                    return Math.round(a * Math.pow(10, e))
                }, m = !0;
                if (j)
                    throw new Error(g);
                return e = k(d),
                (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
                this.optional(c) || m
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }),
                b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c))
                    return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                i.originalMessage = i.originalMessage || this.settings.messages[c.name][e],
                this.settings.messages[c.name][e] = i.message,
                d = "string" == typeof d && {
                    url: d
                } || d,
                h = a.param(a.extend({
                    data: b
                }, d.data)),
                i.old === h ? i.valid : (i.old = h,
                f = this,
                this.startRequest(c),
                g = {},
                g[c.name] = b,
                a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage,
                        j ? (h = f.formSubmitted,
                        f.resetInternals(),
                        f.toHide = f.errorsFor(c),
                        f.formSubmitted = h,
                        f.successList.push(c),
                        f.invalid[c.name] = !1,
                        f.showErrors()) : (d = {},
                        g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }),
                        d[c.name] = i.message = g,
                        f.invalid[c.name] = !0,
                        f.showErrors(d)),
                        i.valid = j,
                        f.stopRequest(c, j)
                    }
                }, d)),
                "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(),
        c[e] = d)
    }) : (b = a.ajax,
    a.ajax = function(d) {
        var e = ("mode"in d ? d : a.ajaxSettings).mode
          , f = ("port"in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(),
        c[f] = b.apply(this, arguments),
        c[f]) : b.apply(this, arguments)
    }
    ),
    a
});

// Flying Pages js

"use strict";
function flyingPages() {
    var a = new Set
      , b = new Set
      , c = document.createElement("link")
      , d = c.relList && c.relList.supports && c.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting"in IntersectionObserverEntry.prototype
      , e = navigator.connection && (navigator.connection.saveData || (navigator.connection.effectiveType || "").includes("2g"));
    if (!e && d) {
        var f = function(a) {
            return new Promise(function(b, c) {
                var d = document.createElement("link");
                d.rel = "prefetch",
                d.href = a,
                d.onload = b,
                d.onerror = c,
                document.head.appendChild(d)
            }
            )
        }
          , g = function(a) {
            var b = setTimeout(function() {
                return p()
            }, 5e3);
            f(a).catch(function() {
                return p()
            }).finally(function() {
                return clearTimeout(b)
            })
        }
          , h = function(c) {
            var d = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1];
            if (!(b.has(c) || a.has(c))) {
                var e = window.location.origin;
                if (c.substring(0, e.length) === e && window.location.href !== c) {
                    for (var f = 0; f < window.FPConfig.ignoreKeywords.length; f++)
                        if (c.includes(window.FPConfig.ignoreKeywords[f]))
                            return;
                    d ? (g(c),
                    b.add(c)) : a.add(c)
                }
            }
        }
          , i = new IntersectionObserver(function(a) {
            a.forEach(function(a) {
                if (a.isIntersecting) {
                    var b = a.target.href;
                    h(b, !window.FPConfig.maxRPS)
                }
            })
        }
        )
          , j = function() {
            return setInterval(function() {
                Array.from(a).slice(0, window.FPConfig.maxRPS).forEach(function(c) {
                    g(c),
                    b.add(c),
                    a.delete(c)
                })
            }, 1e3)
        }
          , k = null
          , l = function(a) {
            var c = a.target.closest("a");
            c && c.href && !b.has(c.href) && (k = setTimeout(function() {
                h(c.href, !0)
            }, window.FPConfig.hoverDelay))
        }
          , m = function(a) {
            var c = a.target.closest("a");
            c && c.href && !b.has(c.href) && h(c.href, !0)
        }
          , n = function(a) {
            var c = a.target.closest("a");
            c && c.href && !b.has(c.href) && clearTimeout(k)
        }
          , o = window.requestIdleCallback || function(a) {
            var b = Date.now();
            return setTimeout(function() {
                a({
                    didTimeout: !1,
                    timeRemaining: function c() {
                        var a = Math.max;
                        return a(0, 50 - (Date.now() - b))
                    }
                })
            }, 1)
        }
          , p = function() {
            document.querySelectorAll("a").forEach(function(a) {
                return i.unobserve(a)
            }),
            a.clear(),
            document.removeEventListener("mouseover", l, !0),
            document.removeEventListener("mouseout", n, !0),
            document.removeEventListener("touchstart", m, !0)
        };
        window.FPConfig = Object.assign({
            delay: 0,
            ignoreKeywords: [],
            maxRPS: 3,
            hoverDelay: 50
        }, window.FPConfig),
        j(),
        o(function() {
            return setTimeout(function() {
                return document.querySelectorAll("a").forEach(function(a) {
                    return i.observe(a)
                })
            }, 1e3 * window.FPConfig.delay)
        });
        var q = {
            capture: !0,
            passive: !0
        };
        document.addEventListener("mouseover", l, q),
        document.addEventListener("mouseout", n, q),
        document.addEventListener("touchstart", m, q)
    }
}
flyingPages();
