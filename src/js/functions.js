/*------------------------------
        Page loader
-------------------------------*/
$(window).on('load',function () {
    setTimeout(function () {
        $('.page-loader').fadeOut();
    }, 500);
});

$(document).ready(function(){
    /*------------------------------
        Sub menu toggle
    -------------------------------*/
    if($('.navigation__sub')[0]) {
        $('.navigation__sub > a').on('click', function (e) { 
            e.preventDefault();
            $(this).next('ul').stop(true, false).slideToggle(300);
        });
    }


    /*------------------------------
        Top search
    -------------------------------*/
    if($('.search')[0]) {
        var $searchInput = $('.search__input');

        // Bring search reset icon when focused
        $searchInput.on('focus', function(){
            $('.search').addClass('search--focused');
        });

        // Add focus state
        $('.top-nav__search').on('click', function (e) {
            e.preventDefault();

            $('.search').addClass('search--focused');
            $('.search__input').focus();
        });

        // Remove focus state
        $('.search__reset').on('click', function () {
            $('.search').removeClass('search--focused ');
            $('.search__input').val('');
        });

        // Take off reset icon if input length is 0, when blurred
        $searchInput.on('blur', function(){
            var x = $(this).val();

            if (!x.length > 0) {
                $('.search').removeClass('search--focused');
            }
        });
    }


    /*--------------------------------------------
        Sidebars (Navigation and Notifications)
    ---------------------------------------------*/
    // Backdrop
    function sidebarBackdrop () {
        $('.main').append('<div class="sidebar-backdrop" />')
    }

    // Notification open
    $('[data-notification]').on('click', function(e) {
        e.preventDefault();

        var panel = $(this).data('notification');

        $('.notifications__panel').hide();
        $(panel).show();
        sidebarBackdrop();
        $('.notifications').addClass('sidebar--active');
    });

    // Navigation open
    $('.navigation-toggle').on('click', function () {
        sidebarBackdrop();
        $('.navigation').addClass('sidebar--active');
    });

    // Close
    $('body').on('click', '.sidebar__close, .sidebar-backdrop', function () {
        $('.sidebar').removeClass('sidebar--active');
        $('.sidebar-backdrop').remove();
    });


    /*------------------------------------------------
        Time
    -------------------------------------------------*/
    if($('.time')[0]) {
        var newDate = new Date();
        newDate.setDate(newDate.getDate());

        setInterval( function() {
            var seconds = new Date().getSeconds();
            $('.time__sec').html(( seconds < 10 ? '0' : '' ) + seconds);
        },1000);

        setInterval( function() {
            var minutes = new Date().getMinutes();
            $('.time__min').html(( minutes < 10 ? '0' : '' ) + minutes);
        },1000);

        setInterval( function() {
            var hours = new Date().getHours();
            $('.time__hours').html(( hours < 10 ? '0' : '' ) + hours);
        }, 1000);
    }


    /*------------------------------------------------
        Toolbar
    -------------------------------------------------*/
    // Open
    $('.toolbar__search-open').on('click', function () {
        $(this).closest('.toolbar').find('.toolbar__search').fadeIn(200);
        $(this).closest('.toolbar').find('.toolbar__search input').focus();
    });

    //Close
    $('.toolbar__search-close').on('click', function () {
        $(this).closest('.toolbar').find('.toolbar__search input').val('');
        $(this).closest('.toolbar').find('.toolbar__search').fadeOut(200);
    });


    /*------------------------------------------------
       Login
    -------------------------------------------------*/
    $('[data-login-switch]').on('click', function (e) {
        e.preventDefault();
        var block = $(this).data('login-switch');

        $('.login__block').removeClass('active');
        $(block).addClass('active');
    });
});
