var addQuesVal = function (_ques1, _ques2, _ques3, _ques4, _ques5) {
  return _ques1 + _ques2 + _ques3 + _ques4 + _ques5;
};
$('document').ready(function() {


  $('form#tracker').submit(function(event) {
    var ques1 = parseInt($("select#describeInput").val());
    var ques2 = parseInt($("select#goalInput").val());
    var ques3 = parseInt($("select#interestInput").val());
    var ques4 = parseInt($("select#foodInput").val());
    var ques5 = parseInt($("select#bugInput").val());

    var totalQuesVal = ques1 + ques2 + ques3 + ques4 + ques5;

    console.log(totalQuesVal);
    event.preventDefault();
  });











});
