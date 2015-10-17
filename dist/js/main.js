$(document).ready(function() {
  $('.image-holder').last().addClass('last-child');
  $('.image-holder').colorbox({
    width: 400,
    height: 400,
    rel: 'group1',
    loop: false,
    onComplete: function() {
      var timeAnim = setTimeout($.colorbox.next, 500);
      if ($.colorbox.element().hasClass('last-child')) {
        clearTimeout(timeAnim);
        $.colorbox.close();
      }
    }
  }).first().click();

});
