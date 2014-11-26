function questionerInitalize() {
  $("#submitQuestion").click(function() {
    var question = $('#question').val();
    $.post("ask", {question: question}, function(data) {
      $(".askQuestion").fadeOut()
    })
  })

  setInterval(function() {
    $.get('questions').done(function(data) {
      var questions = data.questions,
          questionsDiv = $('.questions'),
          askAvailable = true;

      questionsDiv.empty()
      if(questions.length < 20) {
        for (var i = 0, questionsLength = questions.length; i < questionsLength; i ++) {
          var questionDiv, questionText, correctness, correct,
            questionResponses, respondYes, respondNo;

          questionDiv = $("<div class='question' data-id="+questions[i].id+">")
          questionText = $("<div class='questionText'>")
          correctness = $('<div class="correctness">')
          if (questions[i].correct === null) {
            correct = 'Waiting for Response'
            askAvailable = false
          } else {
            correct = questions[i].correct ? "Yes" : "No"
          }
          questionText.text(questions[i].text)
          correctness.text(correct)
          questionDiv.append(questionText)
          questionDiv.append(correctness)
          questionsDiv.append(questionDiv)
        }
        if (askAvailable) {
          $(".askQuestion").fadeIn()
        } else {
          $(".askQuestion").hide()
        }
      } else {
        questionsDiv.append("<h2>Out Of Questions!</h2>")
      }
    })
  },1500)
}