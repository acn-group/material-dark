$(document).ready(function () {
    if ($('.color-picker')[0]) {
        $('.color-picker__value').colorpicker();

        $('body').on('change', '.color-picker__value', function () {
            $(this).closest('.color-picker').find('.color-picker__preview').css('backgroundColor', $(this).val());
        });
    }
});