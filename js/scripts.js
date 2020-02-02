// Business Logic (User doesn't see)
function Pizza(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings
}

Pizza.prototype.selectToppings = function (ingredients) {
  this.toppings.push(ingredients);

}

Pizza.prototype.price = function() {
  var totalPrice = 0;
  if (this.size === "Small") {
    totalPrice += 6;
  } else if (this.size === "Medium") {
    totalPrice += 10;
  } else if (this.size === "Large"){
    totalPrice += 16;
  }
  return totalPrice
}

// Front End Logic (User Sees)
$(document).ready(function(){
  $("form#pizzaInput").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var pizzaSauce = $("input:radio[name=pizzaSauce]:checked").val();
    var pizzaToppings = [];
    var customerPizza = new Pizza(pizzaSize, pizzaSauce, pizzaToppings);
    $("input:checkbox[name=pizzaAdditions]:checked").each(function() {
      var inputtedToppings = $(this).val();
      customerPizza.selectToppings(inputtedToppings);
    });
 
    var finalSize = pizzaSize
    var finalSauce = pizzaSauce
    var finalToppings = pizzaToppings
    var finalPrice = customerPizza.price();
    console.log(finalToppings)
    $("#finalPrice").html("$" + finalPrice);
    for(var i = 0; i < pizzaToppings.length; i += 1);
      $("#finalToppings").append("<li>" + finalToppings[i] + "</li>");
    $("#finalSauce").html(finalSauce);
    $("#finalSize").html(finalSize);
    $(".results").show();
    $("#pizzaInput").hide();
    console.log(finalToppings)
    console.log(finalPrice)
    });
  });