$(function () {
    
    $('.btn--blue').on('click', function () {
        $('.conteudo--1').animate({
            "margin-left": "+=50",
            "margin-top": 20,
            "opacity": 0.5,
            "border-radius": 75,
        }, 1000);
    });

    $('.btn--green').on('click', function () {
        $('.conteudo--2').animate({
            "margin-left": 150,
            "margin-top": 20,
            "opacity": 0.5,
            "border-radius": 75,
        }, {
            duration: 1500,
            start: function () {
                console.log("Animação começou");
            },
            step: function () {
                console.log("Nova Etapa"); 
            },
            complete: function () {
                $('.conteudo--2').animate({
                    "width": 150,
                    "height": 150,
                    "margin-left": 0,
                    "margin-top": 5,
                    "border-radius": 0, 
                }, 1500);
            }
        });
    });

    $('.btn--stop').on('click', function () {
        $('.conteudo--2').stop();
    });
})