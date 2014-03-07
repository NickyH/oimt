//dom ready functions
$(function(){
  insert_about();
  $('.datepicker').pickadate();
  $('.share-an-idea').on('click', start_idea);

});

function insert_about() {
  $('.right-group').empty();
  $.get('about.html', function(data) {
      $('.right-group').html(data);
  });
}

function insert_start() {
  $('.right-group').empty();
  $.get('start.html', function(data) {
      $('.right-group').html(data);
  });
}

function insert_top_bar() {
  $.get('top_bar.html', function(data) {
      $('#insert-top').html(data);
  });
}

function start_idea() {
  $('#main-page').parent().slideUp( 600, function() {
    $('#main-page').slideUp( 50 );
    insert_start();
    insert_top_bar();
    $('.share-an-idea').addClass('hidden');
  });

  $('#main-page').parent().slideDown( 50, function() {
    $('#main-page').slideDown( 600 );
  });
}