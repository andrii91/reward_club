$(document).ready(function () {
  $('input').styler();

  $('.order-btn').click(function (e) {
    if($(this).hasClass('disabled')) {
      return false;
    }else{
      
    }
  })

  $('#confirm').change(function () {
    if ($(this).prop('checked')) {
      $(this).parents('.row').find('.order-btn').removeClass('disabled')
    } else {
      $(this).parents('.row').find('.order-btn').addClass('disabled')
    }
  })
});