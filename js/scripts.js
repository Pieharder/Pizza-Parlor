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


Pizza.prototype.pizzaToppings = function () {
  this.totalToppings = 0
  for (var i = 0; i < this.toppings.length; i+= 1)
    this.totalToppings += this.toppings[i]
    console.log(totalToppings)
    console.log(pizzaToppings)
}

Pizza.prototype.price = function() {
  
}




var customerPizza = new Pizza(0, [], 0)

$(document).ready(function(){
  $("form#pizzaInput").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
      inputToppings = []
    $("input:checkbox[name=pizzaToppings]:checked").each(function(){
        var toppings = $(this).val();
        customerPizza.push(inputToppings);
      });
      console.log(toppings)
      console.log(pizzaSize)
    });
  });