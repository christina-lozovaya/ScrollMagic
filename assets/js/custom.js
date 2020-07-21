$(document).ready(function(){
    // /* preloader */
    // setTimeout(function() {
    //     $('body').addClass('loaded');
    //     $('h1').css('color', '#222222')
    // }, 2000);
    // /* /preloader */
    $('body').addClass('loaded');


//my diagonal slider
    $('.diagonals-2 .diagonal-box').on('click', diagonalItemActive);
    $('.diagonals-2 .diagonal__wrapper').on('click', diagonalItemDeactivate);
    $firstDiagonalHeight = $(".diagonal-box.bg-1").height();
    console.log($firstDiagonalHeight);

    function diagonalItemActive(e) {
        e.stopPropagation();
        $(this).parent().addClass('active').children().removeClass('active');
        $(this).addClass('active');
    }

    function diagonalItemDeactivate() {
        if( $(this) !== $(this).children() ) {
            $(this).removeClass('active').children().removeClass('active');
        }
    }

    $('.diagonals-1 .title').css({
        "background-image": "linear-gradient(135deg,transparent " + $firstDiagonalHeight + "px,#000 " + $firstDiagonalHeight + "px,#000 100%)"
    })
});