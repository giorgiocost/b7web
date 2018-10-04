function eventoDoBotao(e) {
    e.preventDefault(); //não envia formulário
    var teste = $("#nome").val();
    alert(e.type);
}

$(function () { 

    $('button').on('click', eventoDoBotao);
    $('button').on('mouseover', eventoDoBotao);

 })