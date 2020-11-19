$(document).ready(function () {
    // Date and time
    if($('.datetime-picker')[0]) {
        $('.datetime-picker').flatpickr({
            enableTime: true,
            nextArrow: '<i class="zwicon-chevron-right" />',
            prevArrow: '<i class="zwicon-chevron-left" />'
        });
    }

    // Date only
    if($('.date-picker')[0]) {
        $('.date-picker').flatpickr({
            enableTime: false,
            nextArrow: '<i class="zwicon-chevron-right" />',
            prevArrow: '<i class="zwicon-chevron-left" />'
        });
    }
});