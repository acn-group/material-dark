$(document).ready(function () {
    var statsData1 = [
        {
            label: '2019',
            color: '#ffc021',
            lines: {
                show: true,
                lineWidth: 2,
                fill: 1,
                fillColor: {
                    colors: ['rgba(255, 192, 33, 0.0)', 'rgba(255, 192, 33, 0.25)']
                }
            },
            data: [[10, 70], [20, 20], [30, 60], [40, 10], [50, 60], [60, 5], [70, 90]]
        }
    ];

    var statsData2 = [
        {
            label: '2019',
            color: '#27a4fb',
            lines: {
                show: true,
                lineWidth: 2,
                fill: 1,
                fillColor: {
                    colors: ['rgba(39, 164, 251, 0.0)', 'rgba(39, 164, 251, 0.25)']
                }
            },
            data: [[10, 1], [20, 30], [30, 10], [40, 60], [50, 5], [60, 100], [70, 1], [80, 50]]
        }
    ];

    var statsData3 = [
        {
            label: '2019',
            color: '#ac66f5',
            lines: {
                show: true,
                lineWidth: 2,
                fill: 1,
                fillColor: {
                    colors: ['rgba(172, 102, 245, 0.0)', 'rgba(172, 102, 245, 0.25)']
                }
            },
            data: [[10, 90], [20, 10], [30, 30], [40, 1], [50, 50], [60, 10], [70, 80], [80, 50]]
        }
    ];

    var statsOption1 = {
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
            show: false
        },
        legend: {
            show: false
        }
    };

    var statsOption2 = {
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
            show: false
        },
        legend: {
            show: false
        }
    };

    var statsOption3 = {
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
            show: false
        },
        legend: {
            show: false
        }
    };

    if ($('.stats')[0]) {
        $.plot($('.stats__1'), statsData1, statsOption1);
        $.plot($('.stats__2'), statsData2, statsOption2);
        $.plot($('.stats__3'), statsData3, statsOption3);
    }
});