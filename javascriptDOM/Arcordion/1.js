$(document).ready(function() {
    $('.slide').hide()
    $("#accordion").find("div[role|='button']").click(function() {
      $("#accordion").find("div[role|='button']").removeClass('active');
      $('.slide').slideUp('fast');
      var selected = $(this).next('.slide');
      if (selected.is(":hidden")) {
        $(this).next('.slide').slideDown('fast');
        $(this).toggleClass('active');
      }
    });
  });