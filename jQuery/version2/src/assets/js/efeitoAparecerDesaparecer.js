$(function() {
    // $('.quadrado').on('click', function () {
    //     $(this).toggle("slow");
    // });

    $('#controlador').on('mouseup', function () {
        $('.quadrado').hide("fast");
    });

    $('#controlador').on('mousedown', function () {
        $('.quadrado').show("slow");
        teste = false;
    });
    
});