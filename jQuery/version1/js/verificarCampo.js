$('#salvo').attr('checked',false);
$('#nome').attr('disabled',true);

$('#nome').removeAttr("disabled");


var elementoNativoExemploUm = $('li').eq(5)[0];
console.log('TCL: elementoNativoExemploUm', elementoNativoExemploUm);

var elementoNativoExemploDois = $('li')[5];
console.log('TCL: elementoNativoExemploDois', elementoNativoExemploDois);


var valorOption = $('#idade').val();
console.log('TCL: valorOption', valorOption);

var alterarTerceiroDaLista = $('li').eq(2).html("Item 3 <strong style='color: blue'>(Alterado)</strong>");

$("li").eq(4).remove();
