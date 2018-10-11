(function ($) {

    $.fn.mudarCorLink = function (cor) {
        this.each(function () {
            $(this).css({'color':cor});
        });  
    }

    return this;

}(jQuery));