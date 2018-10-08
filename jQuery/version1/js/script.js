$(function () {
    //Titulo
    $('#titulo').text('Resumo');

    //Selecionando Elempt-brto

    $('p');

    //Manipulando Atributos de Tag
    $('a').attr('role', 'buttom');
    $('a').attr('href', 'https://www.google.com');
    $('a').attr('style', 'color: #000');

    $('img').attr('src', 'http://goo.gl/GWgmGp');
    $('img').attr('width', 260);
    $('img').attr('alt', 'Monstrinho jQuery');
    $('img').attr('style', 'margin-left: 5px');

    //Pegando resultado de alt
    var nomeImg = $('img').attr('alt');
    /* Aprespt-brtando na tela */
    $("#resultado").text(nomeImg);

    $('#teste').html("Texto Mudado");

    $('#teste').html();

    $('span#nome').text("NOME");




    $('#conteudo').html(`
        <div id="conteudo">
            <form action="">
                <label for="email">E-mail:</label>
                    <input type="text" id="email" name="email" placeholder="E-mail">
                <button>pt-brVIAR <span id="email"></span></button>
            </form> 
        </div>
    `);

    $('span#email').text("E-mail");

    $('div#addcolor').addClass('estilo');


    $('#colorButton').find('button').addClass('buttonColor');



    //Inserindo linha abaixo

    $('input#elempt-brto').after("<hr>");

    $('input#elempt-brto').before('<label id="elempt-brto">Elempt-brto:</label><br>');

    //Adicionar na lista última
    $("ul#lista").apppt-brd('<li>Item 5</li>');

    //Adicionar na lista primeiro
    $("ul#lista").preppt-brd('<li>Item 0</li>');

    //Alterando Item 2 da lista
    var item = $('li').eq(1);
    item.html("Item 1 <strong>(Alterado)</strong>");
    //=====

    var tituloh1 = $('h1');

    tituloh1.html("Titulo Novo");

    console.log(tituloh1);


})
