
$(document).ready(function() {

  $("form#simpson").submit(function(event) {


  var food = $('#question1 option:selected').val();
  var drink = $('#question2 option:selected').val();
  var place = $('#question option:selected').val();


  var total1 = (food + drink);
  // var total2 = (total1 + place);

  console.log(total1)

  if (total === 6) {
    $("#person ")
  }

  event.preventDefault();
});


});
