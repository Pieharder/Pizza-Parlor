function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.size = function() {
  if (this.size === "small") {
    this.price += 6;
  } else if (this.size === "medium") {
    this.price += 10;
  } else
    this.price += 16;
}


Pizza.prototype.pizzaToppings



Pizza.prototype.price







var customerPizza = new Pizza(0, [], 0)

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