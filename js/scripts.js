$(document).ready(function(){
  $("form#pizzaInput").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var toppings = [];
    $("input:checkbox[name=pizzaToppings]:checked").each(function(){
        var pizzaToppings = $(this).val();
        toppings.push(pizzaToppings);
      });
      console.log(toppings)
      console.log(pizzaSize)
    });
  });