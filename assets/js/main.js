$(window).each(function(){
    $('.nav-link.active').removeClass('active');
});

$('.tituloFormulario').click(function(){
    $('.formulario').toggleClass('active');
});

var position = $(window).scrollTop(); 

$(window).scroll(function(){
    
//     var scroll = $(window).scrollTop();
    
//     if(scroll > position) {
//         $(".navigation-clean").css('position', 'sticky');
//     } else {
//          console.log('scrollUp');
//          $(".navigation-clean").css('position', 'initial');
//     }
//     position = scroll;
    
    var top=$(window).scrollTop();
    
    if(top >100){
        $(".navigation-clean").css('padding', '6px');
        $(".navbar-brand img").css('width', '80px');
        
        
    } else {
        $(".navigation-clean").css('padding', '16px');
        $(".navbar-brand img").css('width', '125px');
    }
})

