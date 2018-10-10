$('#form').on('submit', function (e) {
    e.preventDefault();     
    
    var form = $('#form').serialize();
    
    $.ajax({
        type: 'GET',
        url:  'ajax.php',
        data: form,
        success:function (resultado) {
            $('.resultado').html(resultado);
        },
        error:function () {
            alert("Ocorreu um erro");
        }
    });
    
});