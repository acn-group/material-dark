$(document).ready(function(){
    // Make some sample data
    var pieData = [
        {data: 1, color: '#27a4fb', label: 'Toyota'},
        {data: 2, color: '#ffc021', label: 'Nissan'},
        {data: 3, color: '#2cc56f', label: 'Hyundai'},
        {data: 5, color: '#f93964', label: 'Daihatsu'}
    ];
    
    // Pie Chart
    if($('.flot-pie')[0]){
        $.plot('.flot-pie', pieData, {
            series: {
                pie: {
                    show: true,
                    stroke: {
                        width: 3,
                        color: '#2b3c46'
                    }
                }
            },
            legend: {
                container: '.flot-chart-legend--pie',
                noColumns: 0,
                lineWidth: 0,
                labelBoxBorderColor: 'rgba(0,0,0,0)'
            }
        });
    }
    
    // Donut Chart
    if($('.flot-donut')[0]){
        $.plot('.flot-donut', pieData, {
            series: {
                pie: {
                    innerRadius: 0.5,
                    show: true,
                    stroke: {
                        width: 3,
                        color: '#2b3c46'
                    }
                }
            },
            legend: {
                container: '.flot-chart-legend--donut',
                noColumns: 0,
                lineWidth: 0,
                labelBoxBorderColor: 'rgba(0,0,0,0)'
            }
        });
    }
});