function sendFeedbackForm() {
  var name = $("input#feedbackForm__name").val();
  var email = $("input#feedbackForm__email").val();
  var phone = $("input#feedbackForm__phone").val();
  var message = $("textarea#feedbackForm__message").val();
  var page_id = "[[*id]]";
  
    var dataString = 'NAME=' + name + '&EMAIL=' + email + '&PHONE=' + phone + '&MESSAGE=' + message + '&id=' + page_id; 
    $.ajax({
      type: 'POST',
      url: '[[~10]]',
      data: dataString,
      success: function() {
        setTimeout(function() {
                $( "#form-success" ).fadeOut("fast",function() {
                    $( "#form-button" ).fadeIn("fast");
                });
            }, 10000);
        yaCounter31958351.reachGoal('feedback');
      },
      error:  function(){
            alert('Упс, произошла какая-то странная ошибка. Попробуйте повторить запрос, а если ошибка повторится, свяжитесь с веб-мастером по электронной почте webmaster@winbd.ru');
        }
    });
}