function Pizza(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings
}

// Pizza.prototype.size = function() {
//   if (this.size === "small") {
//     this.price += 6;
//   } else if (this.size === "medium") {
//     this.price += 10;
//   } else
//     this.price += 16;
// }


Pizza.prototype.selectToppings = function (ingredients) {
  this.toppings.push(ingredients);

}

Pizza.prototype.price = function() {
  var totalPrice = 0;
  if (this.size === "small") {
    totalPrice += 6;
  } else if (this.size === "medium") {
    totalPrice += 10;
  } else if (this.size === "large") {
    totalPrice += 16;
  }
  return totalPrice
}








$(document).ready(function(){
  $("form#pizzaInput").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var pizzaSauce = $("input:radio[name=pizzaSauce]:checked").val();
    var pizzaToppings = [];
    var customerPizza = new Pizza(pizzaSize, pizzaSauce, pizzaToppings);
    $("input:checkbox[name=pizzaToppings]:checked").each(function() {
        var selectedToppings = $(this).val();
        customerPizza.selectToppings(selectedToppings);
      });
    var finalSize = pizzaSize
    var finalSauce = pizzaSauce
    var finalToppings = pizzaToppings.join()
    var finalPrice = customerPizza.price()
    
    $("#finalPrice").html(finalPrice);
    $("#finalToppings").html(finalToppings);
    $("#finalSauce").html(finalSauce);
    $("#finalSize").html(finalSize);




      console.log(pizzaToppings)
      console.log(pizzaSize)
      console.log(pizzaSauce)
    });
  });