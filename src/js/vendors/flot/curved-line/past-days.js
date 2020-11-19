$(document).ready(function () {
    var pastDaysChartData = [{
        label: 'Data',
        color: '#8BC34A',
        stack: true,
        lines: {
            show: true,
            lineWidth: 2,
            fill: 1,
            fillColor: {
                colors: ['rgba(139,195,74,0)', 'rgba(139,195,74,0.1']
            }
        },
        data: [[10, 90], [20, 40], [30, 80], [40, 20], [50, 90], [60, 20], [70, 60]]
    }];

    var pastDaysChartOptions = {
        series: {
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            },
            lines: {
                show: false,
                lineWidth: 0
            }
        },
        grid: {
            borderWidth: 0,
            labelMargin:10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius:6

        },
        xaxis: {
            tickDecimals: 0,
            ticks: false
        },

        yaxis: {
            tickDecimals: 0,
            ticks: false
        },

        legend: {
            show: false
        }
    };

    if ($('.flot-past-days')[0]) {
        $.plot ($ ('.flot-past-days'), pastDaysChartData, pastDaysChartOptions);
    }
});