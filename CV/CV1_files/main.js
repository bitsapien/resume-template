
// This is what changes body from hidden
(function($) {

  $(document.body).fadeIn(1200);

})(jQuery);
$(document).ready(function() {
   
    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

/* Tooltip enable*/

$(".fa").focus(function(){
 $('#hover-text').html($(this).attr("prop"));
 $('#hover-text').css('opacity','1');
});

$(".fa").hover(function(){
 $('#hover-text').html($(this).attr("prop"));
 $('#hover-text').css('opacity','1');
});
$(".fa").mouseout(function(){
 $('#hover-text').css('opacity','0');
});

});



