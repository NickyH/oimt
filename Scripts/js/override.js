//dom ready functions
$(function(){
  insert_about();
  $('.datepicker').pickadate();
  $('.share-an-idea').on('click', start_idea);
  $('.submit-idea').on('click', insert_idea_to_project);

});

function insert_about() {
  $('.left-group').empty();
  $.get('about.html', function(data) {
      $('.left-group').html(data);
  });
}

function insert_start() {
  $('.left-group').empty();
  $.get('start.html', function(data) {
      $('.left-group').html(data);
  });
}

function insert_idea_to_project() {
  $('.left-group').empty();
  $.get('idea_to_project.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();
}

function insert_top_bar() {
  $.get('top_bar.html', function(data) {
      $('#insert-top').html(data);
  });
}

function insert_summary() {
  $('.right-group').empty();
  $.get('summary.html', function(data) {
      $('.right-group').html(data);
  });
}

function start_idea() {
  $('#main-page').parent().slideUp( 600, function() {
    $('#main-page').slideUp( 50 );
    insert_start();
    insert_top_bar();
    $('.share-an-idea').addClass('hidden');
    $('.submit-idea').removeClass('hidden');
  });

  $('#main-page').parent().slideDown( 50, function() {
    $('#main-page').slideDown( 600 );
  });
}