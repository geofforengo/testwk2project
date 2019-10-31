$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();


    var animal = $("input:radio[name=animal]:checked").val();

    var time = $("input:radio[name=time]:checked").val();

    var problem = $("input:radio[name=problem]:checked").val();

    var frustrate = $("input:radio[name=frustrate]:checked").val();

    var color = $("input:radio[name=color]:checked").val();
});
    // var result = ();
    // var result1 = ();
    // var result2 = ();
    var results = [];

    console.log(time);

      if (animal === "cat" || animal === "dog") {
      var result = ("Ruby");
      results.push(result);
      }
      else (animal === "walrus") {
      var result = ("C++")
      results.push(result);
      }


      if (time === "morning" || time === "night") {
      var result1 = ("Swift")
      results.push(result1);
      }
      else (time === "neither") {
      var result1 = ("Python")
      results.push(result1);
      }


      if (problem === "yes") {
      var result2 = ("React")
      results.push(result2);
      }
      else  (problem === "no") {
      var result2 = ("GO")
      results.push(result2);
    }
      // } else {
      // $("basic").show();
    console.log(result1);
    console.log(result2);
    console.log(results);
    $("p#final").append(results);
  });
