$(document).ready(function () {
  const scrollbar = $('.scrollbar');
  if (scrollbar[0]) {
    scrollbar.overlayScrollbars({
      className: 'os-theme-light',
      scrollbars: {
        autoHide: 'l',
        clickScrolling: true
      }
    });
  }
});