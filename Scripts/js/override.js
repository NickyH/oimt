//dom ready functions
$(function(){
  insert_header();
  insert_about();
  $('.datepicker').pickadate();
  $('.submit-idea').on('click', insert_thank_you);
});

function icon_downer_click() {
  window.location = '/';
}

function show_assess_panel() {
  $('.panel-idea-assessment').removeClass('hidden');
  var scrollAmount = ($('.panel-idea-assessment').offset().top);
  $('html, body').animate({ scrollTop: scrollAmount });
  $('.bubble.idea').addClass('inactive');
  $('.bubble.idea').removeClass('inactive');
}

function insert_header() {
  $.get('header_bar.html', function(data) {
      $('#insert-header').html(data);
  });
}

function insert_left_idea_project() {
  $.get('left_bar_idea_project.html', function(data) {
      $('#insert-left').html(data);
  });
}

function insert_left_project_setup() {
  $.get('left_bar_project_setup.html', function(data) {
      $('#insert-left').html(data);
  });
}

function insert_left_project_execution() {
  $.get('left_bar_execution.html', function(data) {
      $('#insert-left').html(data);
  });
}

function insert_left_bar_completion() {
  $.get('left_bar_completion.html', function(data) {
      $('#insert-left').html(data);
  });
}

function insert_left_closeout() {
  $.get('left_closeout.html', function(data) {
      $('#insert-left').html(data);
  });
}

function insert_left_start() {
  $.get('left_bar_start.html', function(data) {
      $('#insert-left').html(data);
  });
}

function remove_left() {
  $('#insert-left').empty();
}

function insert_about() {
  $('#main-page').empty();
  $.get('about.html', function(data) {
      $('#main-page').html(data);
  });
}

function insert_thank_you() {
  $('#main-page').empty();
  $.get('thankyou.html', function(data) {
      $('#main-page').html(data);
  });
  $('.submit-idea').addClass('hidden');
}

function insert_start() {
  $('#main-page').empty();
  $.get('start.html', function(data) {
      $('#main-page').html(data);
  });
  remove_summary();
  remove_left();
  remove_top_bar();

  $('#top-bar-start').removeClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').addClass('inactive');
  $('#top-bar-completion').addClass('inactive');
  $('#top-bar-closeout').addClass('inactive');
}

function insert_assess_start() {
  $('#main-page').empty();
  $.get('assess_start.html', function(data) {
      $('#main-page').html(data);
  });
  remove_summary();
  insert_left_start();
  insert_top_bar();

  $('.submit-idea').addClass('hidden');

  $('#top-bar-start').removeClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').addClass('inactive');
  $('#top-bar-completion').addClass('inactive');
  $('#top-bar-closeout').addClass('inactive');
}

function insert_idea_list() {
  $('#main-page').empty();
  $.get('idea_list.html', function(data) {
      $('#main-page').html(data);
  });
  remove_summary();
  $('.submit-idea').addClass('hidden');
}

function insert_idea_to_project() {
  $('.left-group').empty();
  $.get('idea_to_project.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();
  insert_left_idea_project();

  $('.submit-idea').addClass('hidden');
  $('.assess-idea').addClass('hidden');

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').removeClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').addClass('inactive');
  $('#top-bar-completion').addClass('inactive');
  $('#top-bar-closeout').addClass('inactive');
}

function insert_project_setup() {
  $('.left-group').empty();
  $.get('project_setup.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();
  insert_project_summary();

  insert_left_project_setup();

  $('.submit-idea').addClass('hidden');
  $('.assess-idea').addClass('hidden');

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').removeClass('inactive');
  $('#top-bar-execution').addClass('inactive');
  $('#top-bar-completion').addClass('inactive');
  $('#top-bar-closeout').addClass('inactive');
}

function insert_execution_phase() {
  $('.left-group').empty();
  $.get('execution_phase.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();
  insert_project_summary();

  insert_left_project_execution()

  $('.submit-idea').addClass('hidden');
  $('.assess-idea').addClass('hidden');

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').removeClass('inactive');
  $('#top-bar-completion').addClass('inactive');
  $('#top-bar-closeout').addClass('inactive');
}

function insert_completion() {
  $('.left-group').empty();
  $.get('completion.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();
  insert_project_summary();

  insert_left_bar_completion()

  $('.submit-idea').addClass('hidden');
  $('.assess-idea').addClass('hidden');

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').addClass('inactive');
  $('#top-bar-completion').removeClass('inactive');
  $('#top-bar-closeout').addClass('inactive');
}

function insert_closeout() {
  $('.left-group').empty();
  $.get('closeout.html', function(data) {
      $('.left-group').html(data);
  });
  insert_summary();
  insert_project_summary();

  insert_left_closeout()

  $('.submit-idea').addClass('hidden');
  $('.assess-idea').addClass('hidden');

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').addClass('inactive');
  $('#top-bar-completion').addClass('inactive');
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

function remove_top_bar() {
  $('#insert-top').empty();
}

function insert_summary() {
  $('.idea-summary').empty();
  $.get('summary.html', function(data) {
      $('.idea-summary').html(data);
  });
}

function insert_project_summary() {
  $('.project-summary').empty();
  $.get('project_summary.html', function(data) {
      $('.project-summary').html(data);
  });
}

function remove_summary() {
  $('.idea-summary').empty();
}

function start_idea() {
    insert_start();
    remove_top_bar();
}

function nav_button_hover() {
  $(this).addClass('nav-hover');
  $(this).find('.menu-icon-yellow').removeClass('hidden');
  $(this).find('.menu-icon').addClass('hidden');
  $(this).find('.caret').addClass('hover');
}

function nav_button_leave() {
  $(this).removeClass('nav-hover');
  $(this).find('.menu-icon-yellow').addClass('hidden');
  $(this).find('.menu-icon').removeClass('hidden');
  $(this).find('.caret').removeClass('hover');
}

function bubble_hover() {
  $(this).addClass('bubble-hover');
}

function bubble_leave() {
  $(this).removeClass('bubble-hover');
}

function get_val_table_ID () {
  var thisObj = $(this).children('input');
  var tableID = $(this).parents('form').children('table').attr('id');
  table_search(thisObj, tableID);
}

function table_search(thisObj, tableID) {
  var $rows = $("#"+tableID+" tr");
  var val = '^(?=.*\\b' + $.trim($(thisObj).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
      reg = RegExp(val, 'i'),
      text;

  $rows.show().filter(function() {
      text = $(this).text().replace(/\s+/g, ' ');
      return !reg.test(text);
  }).hide();
  $('thead tr').show();
}