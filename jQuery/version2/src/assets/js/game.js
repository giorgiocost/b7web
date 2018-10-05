$(function () {
    var count = 0;

    $('#bolinha').focus();
    $('#bolinha').on("keydown", function (e) { 
        var mais = count= count+3; 
        count= count+3;       
        if(e.keyCode == 39){ 
            //direita
            mais;
            $('#bolinha').attr("style","margin-left: "+mais+"px");

        }else if(e.keyCode == 37){
            //esquerda
            count= count-3;
            $('#bolinha').attr("style","margin-left: "+count+"px");
    
        }else if(e.keyCode == 38){
            //sobe
            count= count-3; 
            $('#bolinha').css({"margin-top":""+count+"px"}); 
        }else if(e.keyCode == 40){
            //desce
            mais
            $('#bolinha').css({"margin-top":""+mais+"px"});
        }
    
    });    
});