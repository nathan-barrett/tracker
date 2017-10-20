$('document').ready(function() {
  var addQuesVal = function (_ques1, _ques2, _ques3, _ques4, _ques5) {
    return _ques1 + _ques2 + _ques3 + _ques4 + _ques5;
  };
  $('form#tracker').submit(function(event) {
    event.preventDefault();
    var inputName = $("input#nameInput").val();
    var quesOne = parseInt($("select#describeInput").val());
    var quesTwo = parseInt($("select#goalInput").val());
    var quesThree = parseInt($("select#interestInput").val());
    var quesFour = parseInt($("select#foodInput").val());
    var quesFive = parseInt($("select#bugInput").val());
    var totalQuesVal = addQuesVal(quesOne, quesTwo, quesThree, quesThree, quesFour, quesFive);
    if (totalQuesVal >= 5 && totalQuesVal <= 7) {
      $("#defaultName").hide();
      $("#surveyName").text(inputName);
      $("#defaultPhoto").hide();
      $("#cssDesignResult").hide();
      $("#rubyRailsResult").hide();
      $("#cSharpResult").slideDown();
    }
    else if (totalQuesVal >= 8 && totalQuesVal <= 12) {
      $("#defaultName").hide();
      $("#surveyName").text(inputName);
      $("#defaultPhoto").hide();
      $("#cSharpResult").hide();
      $("#rubyRailsResult").hide();
      $("#cssDesignResult").slideDown();
    }
    else if (totalQuesVal >= 12) {
      $("#defaultName").hide();
      $("#surveyName").text(inputName);
      $("#defaultPhoto").hide();
      $("#cSharpResult").hide();
      $("#cssDesignResult").hide();
      $("#rubyRailsResult").slideDown();

    }

  });











});
