$(document).ready(function(){

    if ($('.flot-bar')[0]) {
        // Chart Data
        var barChartData = [
            {
                label: '2018',
                data: [[1,60], [2,30], [3,50], [4,100], [5,10], [6,90], [7,85]],
                bars: {
                    order: 0,
                    fillColor: {
                        colors: ['#196aa3', '#27a4fb']
                    }
                },
                color: '#27a4fb'
            },
            {
                label: '2018',
                data: [[1,20], [2,90], [3,60], [4,40], [5,100], [6,25], [7,65]],
                bars: {
                    order: 1,
                    fillColor: {
                        colors: ['#b08517', '#ffc021']
                    }
                },
                color: '#ffc021'
            },
            {
                label: '2020',
                data: [[1,100], [2,20], [3,60], [4,90], [5,80], [6,10], [7,5]],
                bars: {
                    order: 2,
                    fillColor: {
                        colors: ['#9c213c', '#f93964']
                    }
                },
                color: '#2cc56f'
            }
        ];


        // Chart Options
        var barChartOptions = {
            series: {
                bars: {
                    show: true,
                    barWidth: 0.075,
                    fill: 1,
                    lineWidth: 0,
                    align: "center"
                }
            },
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
                },
                shadowSize: 0
            },
            legend:{
                container: '.flot-chart-legends--bar',
                backgroundOpacity: 0.5,
                noColumns: 0,
                lineWidth: 0,
                labelBoxBorderColor: 'rgba(255,255,255,0)'
            }
        };

        // Create chart
        $.plot($('.flot-bar'), barChartData, barChartOptions);
    }
});
