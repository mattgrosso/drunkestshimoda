(function() {
  'use strict';

  var randomDegrees = Math.floor(Math.random() * 1500) + 1000;

  $('.spin-button').click(function (event) {
    $(this).addClass('clicking');
    setTimeout(function() {
      $('.spin-button').removeClass('clicking');
    }, 100);
    $(this).addClass('clicking');
    randomDegrees = randomDegrees + Math.floor(Math.random() * 1500) + 1000;
    $('.spinner').css('transform', `rotate(${randomDegrees}deg)`)
  })
})();
