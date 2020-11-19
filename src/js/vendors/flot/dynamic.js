$(document).ready(function(){
    function chartUpdate() {
        plot.setData([dynamicChartData()]);
        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(chartUpdate, updateInterval);
    }

    function dynamicChartData() {
        if (data.length > 0)
            data = data.slice(1);

        while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            } else if (y > 75) {
                y = 75;
            }

            data.push(y);
        }

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    if ($('.flot-dynamic')[0]) {
        // Chart Data
        var data = [];
        var totalPoints = 300;

        // Chart Options
        var dynamicChartOptions = {
            series: {
                label: "Server Process Data",
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: 1,
                    fillColor: {
                        colors: ['rgba(2,219,197,0)', 'rgba(2,219,197,0.25']
                    }
                },
                color: '#02dbc5',
                shadowSize: 0
            },
            yaxis: {
                min: 0,
                max: 100,
                tickColor: '#344b58',
                font: {
                    lineHeight: 13,
                    style: 'normal',
                    color: '#54748a',
                    size: 10
                },
                shadowSize: 0

            },
            xaxis: {
                tickColor: 'rgba(0,0,0,0)',
                show: true,
                font: {
                    lineHeight: 13,
                    style: 'normal',
                    color: '#54748a',
                    size: 10
                },
                shadowSize: 0,
                min: 0,
                max: 250
            },
            grid: {
                borderWidth: 0,
                labelMargin:10,
                hoverable: true,
                clickable: true,
                mouseActiveRadius:6
            },
            legend:{
                container: '.flot-chart-legends--dynamic',
                backgroundOpacity: 0.5,
                noColumns: 0,
                lineWidth: 0,
                labelBoxBorderColor: 'rgba(255,255,255,0)'
            }
        };

        // Create Chart
        var plot = $.plot('.flot-dynamic', [ dynamicChartData() ], dynamicChartOptions);

        // Update function
        var updateInterval = 30;

        chartUpdate();
    }
});