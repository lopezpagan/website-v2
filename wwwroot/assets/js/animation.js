(function($) {
    $(window).scroll(function(){

        var wScroll = $(this).scrollTop();
        var wScrollReverse = 1-(wScroll/500);

        //console.log(wScroll);

        $('.hero-content').css({
            'transform': 'translate(0px, -' + wScroll/2 + '%)'
        });

        $('.hero-content').css({
            'opacity': wScrollReverse.toFixed(2)
        });


        //console.log(wScrollReverse.toFixed(2));
    })

})(jQuery);
