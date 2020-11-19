$(document).ready(function () {
    var scrollbar = $('.scrollbar');
    if(scrollbar[0]) {
        scrollbar.overlayScrollbars({
            scrollbars: {
                autoHide: 'l',
                clickScrolling: true
            },
            className: 'os-theme-light'
        });
    }
});