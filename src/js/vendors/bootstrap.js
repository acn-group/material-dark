$(document).ready(function () {
    // Popovers
    if($('[data-toggle="popover"]')[0]) {
        $('[data-toggle="popover"]').popover();
    }

    // Tooltips
    if($('[data-toggle="tooltip"]')[0]) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // File browser
    $('.custom-file-input').on('change', function () {
        var fileName = $(this).val();
        $(this).next('.custom-file-label').html(fileName);
    });

    // Toast
    $('[data-dismiss="toast"]').on('click', function () {
        $(this).closest('.toast').toast('hide');
    });
});