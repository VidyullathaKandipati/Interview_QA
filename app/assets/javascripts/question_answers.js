$(document).ready(function(){
  var $body = $('body');
  $('.new_question_answer').on('submit', makeHeart);
  $('.edit_question_answer').on('submit', makeHeart);
  function makeHeart(e){
    setTimeout(80000);
    var $heart = $("<div class='heart'/>").css({
      'left': 500,
      'top': 500,
      'width': 50 + 'px',
      'height': 50 + 'px',
    });
    $heart.appendTo($body);

    $heart.animate({top: -200}, 30000, removeBubble);
    function removeBubble(){
      $heart.remove();
    }
  }
});
