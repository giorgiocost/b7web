$(function () {
    // $('button.btn.btn--white.btn--border').bind("click", function () {
    //     $('.conteudo').load("teste.html");
    // })

    $('button.btn.btn--white.btn--border').bind("click", function () {
        // $.post('teste.html', function (data) {
        //     $('.conteudo').html(data);
        // })

        $.get('teste.html', function (data) {
            $('.conteudo').html(data);
        });
    });
})