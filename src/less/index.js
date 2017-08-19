
    $(document).scroll(function() {
        if ($(document).scrollTop() > 600) {
            $('.navbar').css({'background':'linear-gradient(to right, rgba(255,0,0,0), rgba(0,0,0,1))', 'boxShadow' :' 0px 0px 5px rgb(0, 0, 0)'});
            $('ul.nav').css({'marginTop':'5px'});
        } else {
            $('.navbar').css({'background':'transparent',  'boxShadow' :' unset'});
            $('ul.nav').css({'marginTop':'5px'});
        }
        // console.log($(document).scrollTop());
    });
    $(function() {
        $.scrollify({
            section : 'section'
        });
    });

