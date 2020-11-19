$(document).ready(function () {
    if($('.text-counter')[0]) {
        $('.text-counter').each(function () {
            var minLength = $(this).data('min-length') || 0;
            var maxLength = $(this).data('max-length');

            $(this).textcounter({
                min: minLength,
                max: maxLength,
                countDown: true,
                inputErrorClass: 'is-invalid',
                counterErrorClass: 'text-red'
            });
        });
    }
});