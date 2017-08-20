// Scroll to a div #id, & Scrollify plugin
$(document).ready(function() {
    $('#my_link_about').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $('#my_link_home').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        }, 1000);
    });
});

$(document).scroll(function() {
    if ($(document).scrollTop() > 600) {
        $('.navbar').css({'background':'linear-gradient(to right, rgba(255,0,0,0), rgba(0,0,0,1))'});
        $('ul.nav').css({'marginTop':'5px'});
    } else {
        $('.navbar').css({'background':'transparent',  'boxShadow' :' unset'});
        $('ul.nav').css({'marginTop':'5px'});
    }
});

$(function() {
    $.scrollify({
        section : 'section'
    });
});
// Jquery-UI Datepicker plugin

$( function() {
    $( '#datepicker' ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-100:+0'
    });
} );
