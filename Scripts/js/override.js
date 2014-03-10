//dom ready functions
$(function(){
  insert_header();
  insert_about();
  $('.datepicker').pickadate();
  $('.submit-idea').on('click', insert_idea_to_project);
});

function insert_header() {
  $.get('header_bar.html', function(data) {
      $('#insert-header').html(data);
  });
}

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
  remove_summary();
  $('.submit-idea').removeClass('hidden');

}

function insert_idea_to_project() {
  $('.left-group').empty();
  $.get('idea_to_project.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();
  $('.submit-idea').addClass('hidden');

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').removeClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').addClass('inactive');
}

function insert_project_setup() {
  $('.left-group').empty();
  $.get('project_setup.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();
  $('.submit-idea').addClass('hidden');

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').removeClass('inactive');
  $('#top-bar-execution').addClass('inactive');
}

function insert_execution_phase() {
  $('.left-group').empty();
  $.get('execution_phase.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();

  $('.submit-idea').addClass('hidden');

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').removeClass('inactive');
  $('#top-bar-closeout').addClass('inactive');
}

function insert_closeout() {
  console.log('closeout');
  $('.left-group').empty();
  $.get('closeout.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();

  $('.submit-idea').addClass('hidden');

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').addClass('inactive');
  $('#top-bar-closeout').removeClass('inactive');
}

function insert_top_bar() {
  $('#insert-top').addClass('hidden');
  $.get('top_bar.html', function(data) {
      $('#insert-top').html(data);
  });
  $('#insert-top').fadeIn(1500);
  $('#insert-top').delay(500).removeClass('hidden');

}

function insert_bottom_bar() {
  $.get('bottom_bar.html', function(data) {
      $('#insert-bottom').html(data);
  });
}

function insert_summary() {
  $('.idea-summary').empty();
  $.get('summary.html', function(data) {
      $('.idea-summary').html(data);
  });
}

function remove_summary() {
  $('.idea-summary').empty();
}

function start_idea() {
  $('#main-page').parent().slideUp( 600, function() {
    $('#main-page').slideUp( 50 );
    insert_start();
    insert_top_bar();
    insert_bottom_bar();
    $('.share-an-idea').addClass('hidden');
    $('.submit-idea').removeClass('hidden');
  });

  $('#main-page').parent().slideDown( 50, function() {
    $('#main-page').slideDown( 600 );
  });
}

function nav_button_hover() {
  $(this).addClass('nav-hover');
}

function nav_button_leave() {
  $(this).removeClass('nav-hover');
}

function bubble_hover() {
  console.log('hover');
  $(this).addClass('bubble-hover');
}

function bubble_leave() {
  $(this).removeClass('bubble-hover');
}