$(document).ready(function () {
    if($('.rating')[0]) {
        $('.rating').each(function () {
            var rating = $(this).data('rating');

            $(this).rateYo({
                rating: rating,
                normalFill: '#4f6c7d',
                ratedFill: '#f0f6f9'
            });
        });
    }
});