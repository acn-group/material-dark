$(document).ready(function(){
    var sweetalertBackdrop = 'rgba(#1e2a31, 0.5)';
    var sweetalertBackground = '#f0f6f9';
    var sweetalertPadding = '3rem 3rem 1.75rem';

    // Basic
    $('#sa-basic').click(function(){
        swal.fire({
            text: 'You clicked the button!',
            background:sweetalertBackground,
            backdrop: sweetalertBackdrop,
            buttonsStyling: false,
            padding: sweetalertPadding,
            customClass: {
                confirmButton: 'btn btn-link',
                title: 'ca-title',
                container: 'ca'
            }
        })
    });

    // Title
    $('#sa-basic-title').click(function(){
        swal.fire({
            title: 'Good job!',
            text: 'You clicked the button!',
            background: sweetalertBackground,
            backdrop: sweetalertBackdrop,
            buttonsStyling: false,
            padding: sweetalertPadding,
            customClass: {
                confirmButton: 'btn btn-link',
                title: 'ca-title',
                container: 'ca'
            }
        })
    });

    // Footer
    $('#sa-basic-footer').click(function(){
        swal.fire({
            title: 'Good job!',
            text: 'You clicked the button!',
            background: sweetalertBackground,
            backdrop: sweetalertBackdrop,
            buttonsStyling: false,
            padding: sweetalertPadding,
            customClass: {
                confirmButton: 'btn btn-link',
                title: 'ca-title',
                container: 'ca'
            },
            footer: '<a href>Why do I have this issue?</a>'
        })
    });

    // Long content
    $('#sa-basic-content').click(function(){
        swal.fire({
            title: 'Good job!',
            text: 'Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.',
            background: sweetalertBackground,
            backdrop: sweetalertBackdrop,
            buttonsStyling: false,
            padding: sweetalertPadding,
            customClass: {
                confirmButton: 'btn btn-link',
                container: 'ca'
            }
        })
    });

    // HTML content
    $('#sa-basic-html').click(function(){
        swal.fire({
            title: '<span class="text-green">Good</span> &nbsp;job!',
            html: '<span class="text-red">You</span> clicked this <u>awesome</u> button! <i class="text-yellow zwicon-smile"></i>',
            background: sweetalertBackground,
            backdrop: sweetalertBackdrop,
            buttonsStyling: false,
            padding: sweetalertPadding,
            customClass: {
                confirmButton: 'btn btn-link',
                title: 'ca-title',
                container: 'ca'
            }
        })
    });

    // Popup types
    $('.btn-sa-types').on('click', function(){
        var type = $(this).data('type')

        swal.fire({
            type: type.toLowerCase(),
            title: type + '!',
            text: 'You clicked the ' + type.toLowerCase() + ' button!',
            background: sweetalertBackground,
            backdrop: sweetalertBackdrop,
            buttonsStyling: false,
            padding: sweetalertPadding,
            customClass: {
                confirmButton: 'btn btn-link',
                title: 'ca-title',
                container: 'ca'
            }
        })
    });

    // Position
    $('.btn-sa-position').on('click', function(){
        var position = $(this).data('position')

        swal.fire({
            position: position,
            title: 'Good job!!',
            text: 'You clicked the right button!',
            background: sweetalertBackground,
            backdrop: sweetalertBackdrop,
            buttonsStyling: false,
            padding: sweetalertPadding,
            customClass: {
                confirmButton: 'btn btn-link',
                title: 'ca-title',
                container: 'ca'
            }
        })
    });
});