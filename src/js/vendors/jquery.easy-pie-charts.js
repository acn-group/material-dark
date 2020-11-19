$(document).ready(function () {

    if($('.easy-pie-chart')[0]) {
        $('.easy-pie-chart').each(function () {
            var size = $(this).data('size');
            var trackColor = $(this).data('track-color');
            var barColor = $(this).data('bar-color');

            $(this).easyPieChart ({
                easing: 'easeOutBounce',
                barColor: barColor,
                trackColor: trackColor,
                scaleColor: 'rgba(0,0,0,0)',
                lineCap: 'round',
                lineWidth: 2,
                size: size,
                animate: 3000,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

            $(this).find('.easy-pie-chart__value').css({
                fontSize: size/5 + 'px'
            })
        });
    }

});