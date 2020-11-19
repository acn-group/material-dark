// Disable Dropzone auto discover
if($('#dropzone-upload')[0]) {
    Dropzone.autoDiscover = false;
}

$(document).ready(function () {
    if($('#dropzone-upload')[0]) {
        $('#dropzone-upload').dropzone({
            url: "/file/post",
            addRemoveLinks: true
        });
    }
});