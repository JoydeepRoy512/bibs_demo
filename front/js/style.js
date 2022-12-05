$(document).ready(function() {
    $('.navbar-light .dmenu').hover(function() {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function() {
        $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
    });

    $('.filter-button').click(function() {
        $('.filter-button').removeClass('id1');
        $(this).addClass('id1');

        const tab_name = $(this).attr('filter-button');
        $('.tab-content').addClass('d-none');
        $('.' + tab_name).removeClass('d-block');

        $('.tab-content').removeClass('d-block');
        $('.' + tab_name).addClass('d-block');
        console.log('.' + tab_name);

    });

    $('.student').click(function() {
        $('#student').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('.stu').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('#corporate').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.cor').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('#press').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.pre').css({
            'display': 'none',
            'transition': '0.5s'
        });
    });
    $('.corporate').click(function() {
        $('#student').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.stu').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('#corporate').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('.cor').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('#press').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.pre').css({
            'display': 'none',
            'transition': '0.5s'
        });
    });
    $('.press').click(function() {
        $('#student').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.stu').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('#corporate').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.cor').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('#press').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('.pre').css({
            'display': 'block',
            'transition': '0.5s'
        });
    });



    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {

        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }
    });

});

/*$( window ).load(function() {
  $('#id1').addClass('id1');
});*/

/*$(document).ready(function(){
 $("#jquery_jplayer_1").jPlayer({
  ready: function () {
   $(this).jPlayer("setMedia", {
    m4a: "../video/kapil-dev.mp4",
    //oga: "/media/mysound.ogg"
   });
  },
  swfPath: "/js",
  supplied: "m4a, oga"
 });
});*/