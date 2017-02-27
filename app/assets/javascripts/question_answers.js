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

  //Hiding all the answers
  $('.answer').hide();

  //Click on the question shows answers
  $('.question').on('click',showAnswer);
  function showAnswer(){
    q_id = $(this).attr('id');
    $('#answer'+q_id).toggle();
  }
});
