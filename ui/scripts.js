$(document).ready(function() {
    $('.page').hide();
    $("body").css("background-color", "rgba(0, 0, 0, 0.0)");
});

window.addEventListener('message', function(event) {
    var item = event.data;
    if (item.type === 'ShowImage') {
        $('.page').show();
        $('#image').attr('src', item.url);
        $("body").css("background-color", "rgba(0, 0, 0, 0.5)");
        $('#exit').on("click", function() { CloseImage() });
        $('#image').on("click", function() { CloseImage() });
    }
});

function CloseImage() {
    $('#image').attr('src', '');
    $('.page').hide();
    $("body").css("background-color", "rgba(0, 0, 0, 0.0)");
    $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));  
}