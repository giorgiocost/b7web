
//alternar classe com toggleClass
$(function() {
    // $('#buttonClass').click(function() {
    //     $(this).toggleClass("buttonClass")
    // });

    // bind ou on
    $('#buttonClass').bind('click',function(){
        $(this).toggleClass("buttonClass");
    });

    //removendo evento unbind ou off
        // $('#buttonClass').unbind('click');

});