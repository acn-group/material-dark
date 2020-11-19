$(document).ready(function () {

    // Realtime visitors widget map
    if($('.map-visitors')[0]) {
        $('.map-visitors').vectorMap({
            map: 'world_en',
            backgroundColor: 'rgba(0,0,0,0)',
            color: '#486372',
            borderColor: '#486372',
            hoverOpacity: 1,
            selectedColor: '#e9f0f3',
            enableZoom: false,
            showTooltip: true,
            normalizeFunction: 'polynomial',
            selectedRegions: ['US', 'EN', 'NZ', 'CN', 'JP', 'SL', 'BR', 'AU', 'EG', 'BA'],
            onRegionClick: function (event) {
                event.preventDefault();
            }
        });
    }

    // All maps
    if($('.jqvmap')[0]) {
        $('.jqvmap').each(function () {
            var map = $(this).data('map');

            $(this).vectorMap({
                map: map,
                backgroundColor: 'rgba(0,0,0,0)',
                color: '#f0f6f9',
                borderColor: '#f0f6f9',
                hoverColor: '#fff',
                selectedColor: '#fff',
                enableZoom: true
            });
        });
    }
});