$(document).ready(function () {
    var curvedLineChartData = [
        {
            label: '2019',
            color: '#f93964',
            lines: {
                show: true,
                lineWidth: 2,
                fill: 1,
                fillColor: {
                    colors: ['rgba(249, 57, 100, 0.0)', 'rgba(249, 57, 100, 0.5)']
                }
            },
            data: [[100, 30], [200, 80], [300, 10], [400, 60], [500, 5], [600, 90], [700, 10], [800, 90]]
        }
    ];

    var curvedLineChartOptions = {
        series: {
            shadowSize: 3,
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            },
            points: {
                show: false
            }
        },
        grid: {
            borderWidth: 0,
            show: true,
            hoverable: true,
            clickable: true
        },
        xaxis: {
            tickColor: 'rgba(255,255,255,0)',
            tickDecimals: 0,
            font: {
                lineHeight: 13,
                style: 'normal',
                color: '#54748a',
                size: 10
            }
        },
        yaxis: {
            tickColor: '#344b58',
            font: {
                lineHeight: 13,
                style: 'normal',
                color: '#54748a',
                size: 10
            },
            min: +5
        },
        legend:{
            container: '.flot-chart-legends--curved',
            backgroundOpacity: 0.5,
            noColumns: 0,
            lineWidth: 0,
            labelBoxBorderColor: 'rgba(255,255,255,0)'
        }
    };

    if ($('.flot-curved-line')[0]) {
        $.plot($('.flot-curved-line'), curvedLineChartData, curvedLineChartOptions);
    }
});