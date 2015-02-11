//dom ready functions
$(function(){
  insert_header();
  // insert_about();
  insert_home();
  insert_bottom();
  $('.datepicker').pickadate();
});

function icon_downer_click() {
  window.location = '/';
}

function insert_bottom() {
  $('#insert-bottom').empty();
  $.get('bottom_bar.html', function(data) {
      $('#insert-bottom').html(data);
  });
}

function remove_bottom() {
  $('#insert-bottom').empty();
}

function insert_reports() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('summary_dashboard.html', function(data) {
      $('#main-page').html(data);
  });
}

function insert_rd() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('rd_index.html', function(data) {
      $('#main-page').html(data);
  });
}

function insert_rd_summary () {
  $('#insert-left').empty();
  $('#main-page').empty();
  $.get('rd_summary.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

function insert_new_rd() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('rd_snapshot.html', function(data) {
      $('#main-page').html(data);
  });
  insert_rd_top_bar();
  $('html, body').animate({ scrollTop: 0 });
}

function insert_rollover_rd() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('rd_rollover.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

function insert_prefilled_rd() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('rd_prefilled.html', function(data) {
      $('#main-page').html(data);
  });
  insert_rd_top_bar();
  $('html, body').animate({ scrollTop: 0 });
  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#rd-top-bar-snapshot').removeClass('inactive');
}

function insert_rd_snapshot() {
  $('#insert-left').empty();
  $('#main-page').empty();
  $.get('rd_snapshot.html', function(data) {
      $('#main-page').html(data);
  });
  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#rd-top-bar-snapshot').removeClass('inactive');
}

function insert_rd_documents() {
  $('#insert-left').empty();
  $('#main-page').empty();
  $.get('rd_documents.html', function(data) {
      $('#main-page').html(data);
  });
  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#rd-top-bar-documents').removeClass('inactive');
  $('html, body').animate({ scrollTop: 0 });
  $( '#icon-rd-comms').addClass('enableMouseLeave');
  $( '#icon-rd-docs').removeClass('enableMouseLeave');
}

function insert_rd_communications() {
  $('#insert-left').empty();
  $('#main-page').empty();
  $.get('rd_communications.html', function(data) {
      $('#main-page').html(data);
  });
  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('html, body').animate({ scrollTop: 0 });
  $( '#icon-rd-docs').addClass('enableMouseLeave');
  $( '#icon-rd-comms').removeClass('enableMouseLeave');
}

function insert_rd_case() {
  $('#insert-left').empty();
  $('#main-page').empty();
  $.get('rd_case.html', function(data) {
      $('#main-page').html(data);
  });
  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#rd-top-bar-case').removeClass('inactive');
  $('html, body').animate({ scrollTop: 0 });
}

function insert_rd_review() {
  $('#insert-left').empty();
  $('#main-page').empty();
  $.get('rd_review.html', function(data) {
      $('#main-page').html(data);
  });
  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#rd-top-bar-review').removeClass('inactive');
  $('html, body').animate({ scrollTop: 0 });
}

function insert_login() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('login.html', function(data) {
      $('#main-page').html(data);
  });
}

function insert_registration() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('registration.html', function(data) {
      $('#main-page').html(data);
  });
}

function insert_forgot() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('forgot.html', function(data) {
      $('#main-page').html(data);
  });
}

function insert_admin() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('admin.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

function insert_add_pm() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('add_project_manager.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

function insert_forgot_confirmation() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('forgot_confirmation.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

function insert_admin_confirmation() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('admin_confirmation.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

function insert_add_pm_confirmation() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('add_pm_confirmation.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

// function insert_change_password() {
//   $('#insert-left').empty();
//   remove_top_bar();
//   $('#main-page').empty();
//   $.get('change_password.html', function(data) {
//       $('#main-page').html(data);
//   });
//   $('html, body').animate({ scrollTop: 0 });
// }

function insert_user_profile() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('user_profile.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

function insert_change_password_confirmation() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('change_password_confirmation.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

function register_login_proceed() {
  //do this after user has registered an account, or logged in, log user in
  //return to previous action such as 'share an idea' page or
  //go to home page
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('registration_confirmation.html', function(data) {
      $('#main-page').html(data);
  });
}

function insert_shared_idea() {
  $('#insert-left').empty();
  remove_top_bar();
  $('#main-page').empty();
  $.get('shared_idea.html', function(data) {
      $('#main-page').html(data);
  });
  $('html, body').animate({ scrollTop: 0 });
}

function show_assess_panel() {
  $('.panel-idea-assessment').removeClass('hidden');
  var scrollAmount = ($('.panel-idea-assessment').offset().top);
  $('html, body').animate({ scrollTop: scrollAmount });
  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#top-bar-assess').removeClass('inactive');
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

function insert_home() {
  $('#main-page').empty();
  $.get('home.html', function(data) {
      $('#main-page').html(data);
  });
}

function insert_thank_you() {
  $('#main-page').empty();
  $.get('thankyou.html', function(data) {
      $('#main-page').html(data);
  });
  $('.submit-idea').addClass('hidden');
  $('html, body').animate({ scrollTop: 0 });
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
  remove_bottom();
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

function insert_assess_information() {
  $('#main-page').empty();
  $.get('assess_information.html', function(data) {
      $('#main-page').html(data);
  });
  $('#left-bar-assess-idea-idea').addClass('inactive');
  $('#left-bar-assess-idea-information').removeClass('inactive');
  $('#left-bar-assess-idea-assess').addClass('inactive');
}

function insert_assess_assess() {
  $('#main-page').empty();
  $.get('assess_assess.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-assess-idea-idea').addClass('inactive');
  $('#left-bar-assess-idea-information').addClass('inactive');
  $('#left-bar-assess-idea-assess').removeClass('inactive');
}

function insert_idea_list() {
  $('#main-page').empty();
  $.get('idea_list.html', function(data) {
      $('#main-page').html(data);
  });
  remove_summary();
  remove_top_bar();
  remove_left();
  $('.submit-idea').addClass('hidden');
  $('html, body').animate({ scrollTop: 0 });
}

function insert_project_list() {
  $('#main-page').empty();
  remove_top_bar();
  remove_left();
  $.get('project_list.html', function(data) {
      $('#main-page').html(data);
  });
}

//project setup pages insert
function insert_project_setup_communication() {
  $('#main-page').empty();
  $.get('idea_to_project_communication.html', function(data) {
      $('#main-page').html(data);
  });
  insert_left_idea_project();

  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#top-bar-project-setup').removeClass('inactive');

  $('#left-bar-itp-comm').removeClass('inactive');
  $('#left-bar-itp-business').addClass('inactive');
  $('#left-bar-itp-review').addClass('inactive');
  $('#left-bar-itp-plan').addClass('inactive');
}

function insert_project_setup_businesscase() {
  $('#main-page').empty();
  $.get('idea_to_project.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-itp-comm').addClass('inactive');
  $('#left-bar-itp-business').removeClass('inactive');
  $('#left-bar-itp-review').addClass('inactive');
  $('#left-bar-itp-plan').addClass('inactive');
}

function insert_project_setup_review() {
  $('#main-page').empty();
  $.get('idea_to_project_approve.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-itp-comm').addClass('inactive');
  $('#left-bar-itp-business').addClass('inactive');
  $('#left-bar-itp-review').removeClass('inactive');
  $('#left-bar-itp-plan').addClass('inactive');
}

function insert_project_setup_plan() {
  $('#main-page').empty();
  $.get('project_setup.html', function(data) {
      $('#main-page').html(data);
  });

  $('#left-bar-itp-comm').addClass('inactive');
  $('#left-bar-itp-business').addClass('inactive');
  $('#left-bar-itp-review').addClass('inactive');
  $('#left-bar-itp-plan').removeClass('inactive');
}

function insert_execution_phase() {
  $('#main-page').empty();
  $.get('execution_phase.html', function(data) {
      $('#main-page').html(data);
  });

  insert_left_project_execution()

  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#top-bar-execution').removeClass('inactive');

  $('.left-bar .bubble-container .bubble').addClass('inactive');
  $('#left-bar-exec-update').removeClass('inactive');
}

function insert_execution_steps() {
  $('#main-page').empty();
  $.get('execution_steps.html', function(data) {
      $('#main-page').html(data);
  });

  $('.left-bar .bubble-container .bubble').addClass('inactive');
  $('#left-bar-exec-steps').removeClass('inactive');
}

function insert_execution_risks() {
  $('#main-page').empty();
  $.get('execution_risks.html', function(data) {
      $('#main-page').html(data);
  });

  $('.left-bar .bubble-container .bubble').addClass('inactive');
  $('#left-bar-exec-risks').removeClass('inactive');
}

function insert_execution_reports() {
  $('#main-page').empty();
  $.get('execution_reports.html', function(data) {
      $('#main-page').html(data);
  });

  $('.left-bar .bubble-container .bubble').addClass('inactive');
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

  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#top-bar-completion').removeClass('inactive');
}

function insert_closeout() {
  $('#main-page').empty();
  $.get('closeout.html', function(data) {
      $('#main-page').html(data);
  });
  insert_summary();
  insert_project_summary();

  insert_left_closeout()

  $('.top-bar .bubble-container .bubble').addClass('inactive');
  $('#top-bar-closeout').removeClass('inactive');
}

function insert_top_bar() {
  $.get('top_bar.html', function(data) {
      $('#insert-top').html(data);
  });
}

function insert_rd_top_bar() {
  $.get('rd_top_bar.html', function(data) {
      $('#insert-top').html(data);
  });
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
  $('#top-bar-completion').removeClass('no-click');
  insert_completion();
}

function select_all_in_table(e) {
  var table= $(e.target).closest('table');
  $('td input:checkbox',table).prop('checked', this.checked);
}

function select_all_in_row(e) {
  var row= $(e.target).closest('tr');
  $('td input:checkbox',row).prop('checked', this.checked);
}

function add_another_panel () {
  var panel_copy = $(this).parents('.panel').clone();
  $(this).addClass('disabled');
  var new_panel = $(this).parents('.panel').parents('.col-lg-12').append(panel_copy);
  $('.row:first .panel:last').children('.panel-body').children('.form-horizontal').children('.form-column').children('.form-group:last').children().children('.delete-panel').removeClass('hidden');
}

function delete_this_panel () {
  $(this).parents('.panel').prev('.panel').children('.panel-body').children('.form-horizontal').children('.form-column').children('.form-group:last').children().children('.repeat-panel').removeClass('disabled');
  $(this).parents('.panel').remove();
}

function unhide_review_panel() {
  $('.panel.approve-reject').removeClass('hidden');
  $('.panel.request-signoff').addClass('hidden');
}

function unhide_approved_panel() {
  $('.panel.stage-approved').removeClass('hidden');
  $('.panel.approve-reject').addClass('hidden');

}

function unhide_rejected_panel() {
  $('.panel.stage-rejected').removeClass('hidden');
  $('.panel.approve-reject').addClass('hidden');
}