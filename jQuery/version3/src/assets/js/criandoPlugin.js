(function ($) {

    $.fn.mostrarLinkReal = function () {
        this.each(function () {
            var link = $(this).attr('href');
            $(this).append('('+link+')');
        });  
    }

    return this;

}(jQuery));