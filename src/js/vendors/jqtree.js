$(document).ready(function () {
    var treeviewData = [
        {
            name: 'node1',
            children: [
                {
                    name: 'node1_1',
                    children: [
                        { name: 'node1_1_1' },
                        { name: 'node1_1_2' },
                        { name: 'node1_1_3' }
                    ]
                },
                { name: 'node1_2' },
                { name: 'node1_3' }
            ]
        },
        {
            name: 'node2',
            children: [
                { name: 'node2_1' },
                { name: 'node2_2' },
                { name: 'node2_3' }
            ]
        },
        {
            name: 'node3',
            children: [
                { name: 'node3_1' },
                { name: 'node3_2' },
                { name: 'node3_3' }
            ]
        }
    ];

    var treeviewSimpleData = [
        {
            name: 'node1',
            children: [
                { name: 'node1_1' },
                { name: 'node1_2' },
                { name: 'node1_3' }
            ]
        },
        {
            name: 'node2',
            children: [
                { name: 'node2_1' },
                { name: 'node2_2' },
                { name: 'node2_3' }
            ]
        }
    ];

    var treeviewEscapeData = [
        {
            label: 'node1',
            children: [
                { name: '<a href="example1.html">node1_1</a>' },
                { name: '<a href="example2.html">node1_2</a>' },
                '<a href="example3.html">Example </a>'
            ]
        }
    ];

    if($('.treeview')[0]) {
        $('.treeview').tree({
            data: treeviewData,
            closedIcon: $('<i class="zwicon-plus"></i>'),
            openedIcon: $('<i class="zwicon-minus"></i>')
        });
    }

    if($('.treeview-expanded')[0]) {
        $('.treeview-expanded').tree({
            data: treeviewSimpleData,
            autoOpen: true,
            closedIcon: $('<i class="zwicon-plus"></i>'),
            openedIcon: $('<i class="zwicon-minus"></i>')
        });
    }

    if($('.treeview-drag')[0]) {
        $('.treeview-drag').tree({
            data: treeviewSimpleData,
            dragAndDrop: true,
            autoOpen: true,
            closedIcon: $('<i class="zwicon-plus"></i>'),
            openedIcon: $('<i class="zwicon-minus"></i>')
        });
    }

    if($('.treeview-escape')[0]) {
        $('.treeview-escape').tree({
            data: treeviewEscapeData,
            autoEscape: false,
            autoOpen: true,
            closedIcon: $('<i class="zwicon-plus"></i>'),
            openedIcon: $('<i class="zwicon-minus"></i>')
        });
    }
});