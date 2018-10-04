$(function(){
    $('#nome').on("keydown", function (e) {
        console.log('TCL: e', e.keyCode);
        /* if(e.keyCode == 65){
            alert("Você apertou a do teclado"+e.keyCode)
        }else{
            alert("Não !!!");
        } */
        
    });

    $('#nome').on("keyup", function(e){
        console.log('TCL: e', e.keyCode);
        /* if(e.keyCode == 65){
            alert("Você apertou a do teclado"+e.keyCode)
        }else{
            alert("Não !!!");
        } */
    })
});