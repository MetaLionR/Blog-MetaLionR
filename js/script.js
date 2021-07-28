var jQuery = function ($) {
  $('.menu-triger').on('click', function (e) {
    console.log('123');
    if ($('.menu-popup').is(':visible')) {
      $('.menu-popup').hide();
    } else {
      $('.menu-popup').show();
    }
  });
};
