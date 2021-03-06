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
  } else if (this.size === "Large") {
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
      var selectedToppings = $(this).val();
      customerPizza.selectToppings(selectedToppings);
    });
 
    var finalSize = pizzaSize
    var finalSauce = pizzaSauce
    var finalToppings = pizzaToppings
    var finalPrice = customerPizza.price()
    
    $("#finalPrice").html("$" + finalPrice + ".00");
    finalToppings.forEach(function(item) {
      $("#finalToppings").append("<li>" + item + "</li>");
    });
    $("#finalSauce").html(finalSauce);
    $("#finalSize").html(finalSize);
    $(".results").show();
    $("#pizzaInput").hide();
    });
  });