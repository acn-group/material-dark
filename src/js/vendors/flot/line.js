$(document).ready(function(){

    if ($('.flot-line')[0]) {
        // Chart Data
        var lineChartData = [
            {
                label: '2018',
                data: [[1,60], [2,90], [3,30], [4,90], [5,30], [6,55], [7,80]],
                color: '#27a4fb'
            },
            {
                label: '2019',
                data: [[1,80], [2,60], [3,100], [4,30], [5,50], [6,25], [7,55]],
                color: '#f93964'
            }
        ];

        // Chart Options
        var lineChartOptions = {
            series: {
                lines: {
                    show: true,
                    barWidth: 0.05,
                    fill: 0
                }
            },
            shadowSize: 0.1,
            grid : {
                borderWidth: 0,
                show : true,
                hoverable : true,
                clickable : true
            },
            yaxis: {
                tickColor: '#344b58',
                tickDecimals: 0,
                font: {
                    lineHeight: 13,
                    style: 'normal',
                    color: '#54748a',
                    size: 10
                },
                shadowSize: 0
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
            legend:{
                container: '.flot-chart-legends--line',
                backgroundOpacity: 0.5,
                noColumns: 0,
                lineWidth: 0,
                labelBoxBorderColor: 'rgba(255,255,255,0)'
            }
        };

        // Create chart
        $.plot($('.flot-line'), lineChartData, lineChartOptions);
    }
});
