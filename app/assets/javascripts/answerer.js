function answererInitalize() {
  function respond(element, response) {
    var this_div = $(element)
    var questionDiv = this_div.parents('.question')
    var questionID = questionDiv.data('id')
    
    console.log(questionID)
    $.post("respond/"+questionID, {response: response}, function(data) {
      this_div.parent().fadeOut()
      var yesNo = data.correct ? "Yes" : "No"
      $(".correctness", questionDiv).text(yesNo)
    })
  }
  $(".respondYes").click(function() {
    respond(this, true)
  })
  $(".respondNo").click(function() {
    respond(this, false)
  })

  $("#submitAnswer").click(function() {
    var answer = $('#answer').val()
    $.post("create_answer", {answer: answer}, function(data) {
      $(".createAnswer").fadeOut()
      $(".answerShow").text(data.answer)
    })
  })

  setInterval(function() {
    $.get('questions').done(function(data) {
      var questions = data.questions,
          questionsDiv = $('.questions');

      questionsDiv.empty()
      for (var i = 0, questionsLength = questions.length; i < questionsLength; i ++) {
        var questionDiv, questionText, correctness, correct,
          questionResponses, respondYes, respondNo;

        questionDiv = $("<div class='question' data-id="+questions[i].id+">")
        questionText = $("<div class='questionText'>")
        correctness = $('<div class="correctness">')
        if (questions[i].correct === null) {
          correct = ''
          questionResponses = $('<div class="questionResponses">')
          respondYes = $("<button class='respondYes'>Yes</button>")
          respondNo = $("<button class='respondNo'>No</button>")
          respondYes.click(function() {
            respond(this, true)
          })
          respondNo.click(function() {
            respond(this, false)
          })
          questionResponses.append(respondYes)
          questionResponses.append(respondNo)
        } else {
          correct = questions[i].correct ? "Yes" : "No"
        }

        questionText.text(questions[i].text)
        correctness.text(correct)
        questionDiv.append(questionText)
        questionDiv.append(correctness)
        questionDiv.append(questionResponses)
        questionsDiv.append(questionDiv)
      }
    })
  },1500)
}