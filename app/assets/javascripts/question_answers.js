$(document).ready(function(){
  var $body = $('body');
  $('.new_question_answer').on('submit', makeHeart);
  $('.edit_question_answer').on('submit', makeHeart);
  function makeHeart(e){
    var $bubble = $("<div class='bubble'/>").css({
      'left': 50,
      'top': 50,
      'width': 50 + 'px',
      'height': 50 + 'px',
    });
    $bubble.appendTo($body);

    $bubble.animate({top: -200}, 3000, removeBubble);
    function removeBubble(){
      $bubble.remove();
    }
  }
});
