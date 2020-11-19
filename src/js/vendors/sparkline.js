$(document).ready(function () {
    // Quick stats bar chart
    if($('.sparkline-bar-stats')[0]) {
        $('.sparkline-bar-stats').sparkline('html', {
            type: 'bar',
            height: 36,
            barWidth: 3,
            barColor: '#fff',
            barSpacing: 2
        });
    }

    //Sample Sparkline Line Chart
    if ($('.sparkline-line')[0]) {
        $('.sparkline-line').sparkline('html', {
            type: 'line',
            width: '100%',
            height: 50,
            lineColor: '#8BC34A',
            fillColor: 'rgba(0,0,0,0)',
            lineWidth: 1,
            maxSpotColor: '#8BC34A',
            minSpotColor: '#8BC34A',
            spotColor: '#8BC34A',
            spotRadius: 4,
            highlightSpotColor: '#8BC34A',
            highlightLineColor: '#8BC34A'
        });
    }

    //Sample Sparkline Bar Chart
    if ($('.sparkline-bar')[0]) {
        $('.sparkline-bar').sparkline('html', {
            type: 'bar',
            height: 40,
            barWidth: 3,
            barColor: '#8BC34A',
            barSpacing: 2
        });
    }

    //Sample Sparkline Tristate Chart
    if ($('.sparkline-tristate')[0]) {
        $('.sparkline-tristate').sparkline('html', {
            type: 'tristate',
            height: 40,
            posBarColor: '#53ffc1',
            zeroBarColor: '#53ffc1',
            negBarColor: '#FF7043',
            barWidth: 4,
            barSpacing: 2
        });
    }

    //Sample Sparkline Discrete Chart
    if ($('.sparkline-discrete')[0]) {
        $('.sparkline-discrete').sparkline('html', {
            type: 'discrete',
            height: 40,
            lineColor: '#f93964',
            thresholdColor: '#27a4fb',
            thresholdValue: 4
        });
    }

    //Sample Sparkline Bullet Chart
    if ($('.sparkline-bullet')[0]) {
        $('.sparkline-bullet').sparkline('html', {
            type: 'bullet',
            targetColor: '#fff',
            performanceColor: '#1f82c7',
            rangeColors: ['#8a1f37', '#c32d4e', '#f93964'],
            width: '100%',
            height: 50
        });
    }

    //Sample Sparkline Pie Chart
    if ($('.sparkline-pie')[0]) {
        $('.sparkline-pie').sparkline('html', {
            type: 'pie',
            height: 50,
            sliceColors: ['#ffe21f', '#f93964', '#ac66f5', '#27a4fb']
        });
    }
});