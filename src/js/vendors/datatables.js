$(document).ready(function () {
    if($('#data-table')[0]) {

        // Custom action links
        var dataTableActions =  '<i class="zwicon-more-h" data-toggle="dropdown" />' +
            '<div class="dropdown-menu dropdown-menu-right">' +
            '<a href="" data-table-action="print" class="dropdown-item">Print</a>' +
            '<a href="" data-table-action="fullscreen" class="dropdown-item">Fullscreen</a>' +
            '<div class="dropdown-divider" />' +
            '<div class="dropdown-header border-bottom-0 pb-0">Download as:</div>' +
            '<a href="" data-table-action="excel" class="dropdown-item">Excel (.xlsx)</a>' +
            '<a href="" data-table-action="csv" class="dropdown-item">CSV (.csv)</a>' +
            '</div>';

        // Initiate data-table
        $('#data-table').DataTable({
            autoWidth: false,
            responsive: true,
            lengthMenu: [[15, 30, 45, -1], ['15 Rows', '30 Rows', '45 Rows', 'Everything']],
            language: {
                searchPlaceholder: "Search for records..." // Search placeholder
            },
            "sDom": '<"dataTables__top"flB<"dataTables_actions">>rt<"dataTables__bottom"ip><"clear">',
            buttons: [ // Data table buttons for export and print
                {
                    extend: 'excelHtml5',
                    title: 'Export Data'
                },
                {
                    extend: 'csvHtml5',
                    title: 'Export Data'
                },
                {
                    extend: 'print',
                    title: 'Material Admin'
                }
            ],
            initComplete: function() {
                $('.dataTables_actions').html(dataTableActions);
            }
        });

        // Data table button actions
        $('body').on('click', '[data-table-action]', function (e) {
            e.preventDefault();

            var action = $(this).data('table-action');

            if(action === 'excel') {
                $('#data-table_wrapper').find('.buttons-excel').click();
            }
            if(action === 'csv') {
                $('#data-table_wrapper').find('.buttons-csv').click();
            }
            if(action === 'print') {
                $('#data-table_wrapper').find('.buttons-print').click();
            }
            if(action === 'fullscreen') {
                var parentCard = $(this).closest('.card');

                if(parentCard.hasClass('card--fullscreen')) {
                    parentCard.removeClass('card--fullscreen');
                    $body.removeClass('data-table-toggled');
                }
                else {
                    parentCard.addClass('card--fullscreen')
                    $body.addClass('data-table-toggled');
                }
            }
        });
    }
});