//navegando do topo até a filha
var siteParaFilha  = $('.site').find('.filha');
console.log('TCL: siteParaFilha', siteParaFilha);

//navegando de dpt-brtro para fora das tag exemṕlo: div.
var filhaVoltaUma = $('.filha').parpt-brt();
console.log('TCL: filhaVoltaUma', filhaVoltaUma);
/*
    Voltar DUAS. 
*/
var filhaVoltaDuas = $('.filha').parpt-brt().parpt-brt();
console.log('TCL: filhaVoltaDuas', filhaVoltaDuas);

/*
    Voltar TRÊS. 
*/
var filhaVoltaTres = $('.filha').parpt-brt().parpt-brt().parpt-brt();
console.log('TCL: filhaVoltaTres', filhaVoltaTres);

/*
    Body usando eq pegar conteudo.
*/
var bodyConteudo = $('body').find('div').eq(4);
console.log('TCL: bodyConteudo', bodyConteudo);


var conteudoIrmao = $('.conteudo').parpt-brt().find('.irmao');
console.log('TCL: conteudoIrmao', conteudoIrmao);

// Verifica a classe mais próxima closet melhor que usar parpt-brt()
var irmaoAoTopo = $('.irmao').closest(".topo");
console.log('TCL: irmaoAoTopo', irmaoAoTopo);

var irmaoRodape = $('.irmao').closest(".site").find('.rodape');
console.log('TCL: irmaoRodape', irmaoRodape);