//dom ready functions
$(function(){

    $('.share-an-idea').on('click', start_idea);

});


function start_idea() {
$('.panel-about').parent().slideUp( 500, function() {
    $('.panel-start-idea').parent().slideUp();
    $('.panel-about').addClass('hidden');
    $('.panel-start-idea').parent().slideDown( 500, function() {
        $('.panel-start-idea').removeClass('hidden');
        });
    });
}