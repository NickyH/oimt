//dom ready functions
$(function(){
  insert_header();
  insert_about();
  $('.datepicker').pickadate();
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

function insert_assess_assess() {
  $('#main-page').empty();
  $.get('assess_assess.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-assess-idea-idea').addClass('inactive');
  $('#left-bar-assess-idea-assess').removeClass('inactive');
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
  $('#main-page').empty();
  $.get('idea_to_project.html', function(data) {
      $('#main-page').html(data);
  });
  insert_left_idea_project();

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').removeClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').addClass('inactive');
  $('#top-bar-completion').addClass('inactive');
  $('#top-bar-closeout').addClass('inactive');

  $('#left-bar-itp-business').removeClass('inactive');
  $('#left-bar-itp-review').addClass('inactive');
  $('#left-bar-itp-approve').addClass('inactive');
}

function insert_idea_to_project_review() {
  $('#main-page').empty();
  $.get('idea_to_project_review.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-itp-business').addClass('inactive');
  $('#left-bar-itp-review').removeClass('inactive');
  $('#left-bar-itp-approve').addClass('inactive');
}

function insert_idea_to_project_approve() {
  $('#main-page').empty();
  $.get('idea_to_project_approve.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-itp-business').addClass('inactive');
  $('#left-bar-itp-review').addClass('inactive');
  $('#left-bar-itp-approve').removeClass('inactive');
}

function insert_project_setup() {
  $('#main-page').empty();
  $.get('project_setup.html', function(data) {
      $('#main-page').html(data);
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
  $('#main-page').empty();
  $.get('execution_phase.html', function(data) {
      $('#main-page').html(data);
  });

  insert_left_project_execution()

  $('#top-bar-start').addClass('inactive');
  $('#top-bar-idea-to-project').addClass('inactive');
  $('#top-bar-project-setup').addClass('inactive');
  $('#top-bar-execution').removeClass('inactive');
  $('#top-bar-completion').addClass('inactive');
  $('#top-bar-closeout').addClass('inactive');

  $('#left-bar-exec-update').removeClass('inactive');
  $('#left-bar-exec-steps').addClass('inactive');
  $('#left-bar-exec-risks').addClass('inactive');
  $('#left-bar-exec-reports').addClass('inactive');
}

function insert_execution_steps() {
  $('#main-page').empty();
  $.get('execution_steps.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-exec-update').addClass('inactive');
  $('#left-bar-exec-steps').removeClass('inactive');
  $('#left-bar-exec-risks').addClass('inactive');
  $('#left-bar-exec-reports').addClass('inactive');
}

function insert_execution_risks() {
  $('#main-page').empty();
  $.get('execution_risks.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-exec-update').addClass('inactive');
  $('#left-bar-exec-steps').addClass('inactive');
  $('#left-bar-exec-risks').removeClass('inactive');
  $('#left-bar-exec-reports').addClass('inactive');
}

function insert_execution_reports() {
  $('#main-page').empty();
  $.get('execution_reports.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-exec-update').addClass('inactive');
  $('#left-bar-exec-steps').addClass('inactive');
  $('#left-bar-exec-risks').addClass('inactive');
  $('#left-bar-exec-reports').removeClass('inactive');
}

function insert_completion() {
  $('#main-page').empty();
  $.get('completion.html', function(data) {
      $('#main-page').html(data);
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
  $('#main-page').empty();
  $.get('closeout.html', function(data) {
      $('#main-page').html(data);
  });
  insert_summary();
  insert_project_summary();

  insert_left_closeout()

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
  $('#insert-top').fadeIn(500);
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

function toggle_rw_select(pill) {
  $(pill).toggleClass('inactive');
  $(pill).parents('.col-sm-4').siblings().children('ul').children('li').children('.pill-select').addClass('inactive');
  $(pill).parents('.col-sm-4').siblings().children('ul').children('li').children('.pill-select').children('.pull-right').html('&#10008');

  if($(pill).hasClass('inactive')) {
    $(pill).children('.pull-right').html('&#10008');
  }

  else {
    $(pill).children('.pull-right').html('&#10004');
  }
}

function show_share_idea_inputs() {
  $('#form-share-idea').removeClass('hidden');
  $('#form-progress-idea').addClass('hidden');
  $('#form-end-idea').addClass('hidden');

  var pill = $(this).children('li').children('.pill-select');
  toggle_rw_select(pill);
  return false;
}

function show_progress_idea_inputs() {
  $('#form-progress-idea').removeClass('hidden');
  $('#form-share-idea').addClass('hidden');
  $('#form-end-idea').addClass('hidden');

  var pill = $(this).children('li').children('.pill-select');
  toggle_rw_select(pill);
  return false;
}

function show_end_idea_inputs() {
  $('#form-end-idea').removeClass('hidden');
  $('#form-progress-idea').addClass('hidden');
  $('#form-share-idea').addClass('hidden');

  var pill = $(this).children('li').children('.pill-select');
  toggle_rw_select(pill);
  return false;
}

function show_recommend() {
  $('#form-recommend').removeClass('hidden');
  $('#form-not-recommend').addClass('hidden');

  var pill = $(this).children('li').children('.pill-select');
  toggle_rw_select(pill);
  return false;
}

function show_not_recommend() {
  $('#form-recommend').addClass('hidden');
  $('#form-not-recommend').removeClass('hidden');

  var pill = $(this).children('li').children('.pill-select');
  toggle_rw_select(pill);
  return false;
}

function show_not_approve() {
  $('#form-approve').addClass('hidden');
  $('#form-not-approve').removeClass('hidden');

  var pill = $(this).children('li').children('.pill-select');
  toggle_rw_select(pill);
  return false;
}

function show_approve() {
  $('#form-approve').removeClass('hidden');
  $('#form-not-approve').addClass('hidden');

  var pill = $(this).children('li').children('.pill-select');
  toggle_rw_select(pill);
  return false;
}

function show_hide_resume_assess_button () {
  $('#resume-assess').toggleClass('hidden');
  $('#place-idea-on-hold').toggleClass('hidden');
  $('#progress-idea').toggleClass('btn-success').toggleClass('btn-default');
}

function check_category_value () {
    if ($(this).val() === 'A - Proceed') {
        $('#group-proj-del-plan').addClass('hidden');
        $('#task-matrix').removeClass('hidden');
    }
    else if ($(this).val() === 'B - Major Project' || 'C - Large & Complex') {
        $('#group-proj-del-plan').removeClass('hidden');
        $('#task-matrix').addClass('hidden');
    }
    else {
        $('#group-proj-del-plan').removeClass('hidden');
        $('#task-matrix').addClass('hidden');
    }
}

function toggle_approve_completion () {
  if ($(this).prop('checked')===true) {
    $('#top-bar-completion').removeClass('no-click');
  }
  if ($(this).prop('checked')===false) {
    $('#top-bar-completion').addClass('no-click');
  }
}