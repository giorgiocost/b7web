$(function() {
    $('.botao').on('mousedown', function() {
       console.log("Apertou mouse"); 
    });
    $('.botao').on('mouseup', function() {
        console.log("Soltou mouse"); 
    });
    $('.botao').on('mousemove', function() {
        console.log("Moveu mouse"); 
    });
    $('.botao').on('mouseover', function() {
        console.log("Em cima mouse"); 
    });
    $('.botao').on('click', function() {
        console.log("Click"); 
    });
    $('.botao').on('dblclick', function() {
        console.log("Click duplo"); 
    });
});
     