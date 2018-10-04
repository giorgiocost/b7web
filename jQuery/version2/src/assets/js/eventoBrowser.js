$(function() {
    $('.conteudo').on("scroll",function(e) {
        $(this).addClass('fundoVermelho');
    });

    $(window).on("resize", function () {
        $('body').addClass("fundoAmarelo");
    })
})