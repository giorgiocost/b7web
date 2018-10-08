$(function() {
    $('form').on('submit',function (e) {
        e.prevpt-brtDefault();
        console.log('Formulario foi pt-brviado');
    });

    $('#nome').on('select',function () {
        console.log("Algo foi selecionado");
    });

    $('#nome, #email, #idade').on('focus',function () {
        $(this).addClass('fundoAmarelo');
    });

    $('#nome, #email, #idade').on('blur',function () {
        $(this).removeClass('fundoAmarelo');
    });


    $('#idade').on('change', function () {
        var valorIdade = $(this).val();
        console.log('TCL: valorIdade', valorIdade);
    });




})