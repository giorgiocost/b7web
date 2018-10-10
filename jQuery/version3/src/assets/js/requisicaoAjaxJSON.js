$('#form').on('submit', function (e) {
    e.preventDefault();     
    
    var form = $(this).serialize();
    
    $.ajax({
        type: 'POST',
        url:  'ajax.php',
        data: form,
        dataType: 'json',
        success: function (a) {
            console.log(a);
        },
        error: function () {
            alert("Ocorreu um erro");
        }
    });
});