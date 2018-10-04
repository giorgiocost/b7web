//adicionado classe a um elemento
$('h1').addClass('fundoVermelho');

//removendo classe de um elemento
//$('h1').removeClass('fundoVermelho');


//verificar se há classe css
if( $('h1').hasClass('fundoVermelho')){
// alert("Tem Fundo Vermelho");
}else{
// alert("Não tem fundo vermelho");
}

//verificar se há algum elemento no documento HTML.
if($('.conteudo').length > 0){
    alert("Existe sim");
}else{
    alert("Não existe");
}





$('h1.titulo').css(
    {
        "color": 'black',
        "background": 'blue'
    }
);

$('h2').css("background", "#999");

