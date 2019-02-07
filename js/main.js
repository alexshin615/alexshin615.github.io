/* ================== 
    AngularJS ngView
   ================== */

var app = angular.module('kasaApp', ['ngRoute', 'ngAnimate']);
app.config(function ($routeProvider ,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider   
    
    // HOME PAGE
    .when("/", {
        templateUrl : "views/home.html",
    })
    
    // ABOUT PAGE
    .when("/about", {
        templateUrl : "views/about.html",
    })

    // OFFICERS PAGE
    .when("/officers", {
        templateUrl : "views/officers.html",
    })
    
    // GALLERY PAGE
    .when("/gallery", {
        templateUrl : "views/gallery.html",
    })
    
    // EVENTS PAGE
    .when("/events", {
        templateUrl : "views/events.html",
    })

    // CONTACTS PAGE
    .when("/contacts", {
        templateUrl : "views/contacts.html",
    });
    
});

/* ==================
 *  Scrolling Effect
 * ================== */
function scrollFunction()
{
    if ($(window).scrollTop() != 0)
        $('html, body').animate({scrollTop: 0}, 500);
}

/* =======================
 *  Toggle Hamburger Menu
 * ======================= */
$(function(){
  $('.navbar-toggle, nav').click(function(){
    $('.navbar-toggle').toggleClass('navbar-on');
    $('nav').fadeToggle();
    $('nav').removeClass('nav-hide');
  });
});

/* =================
    Sticky Nav Bar
   ================= */
$(window).scroll(function(){
    var pos = $('#logo').height();
    if($(this).scrollTop()>pos)
    {
        $('.topnav').addClass("sticky");
        $('.dummynav').addClass("dummyactive");
    }
    else
    {
        $('.topnav').removeClass("sticky"); 
        $('.dummynav').removeClass("dummyactive");
    }
})


