function Pizza(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings
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
    console.log(this.pizzaToppings)
}

// Pizza.prototype.price = function() {
  
// }




var customerPizza = new Pizza(pizzaSize, pizzaSauce, pizzaToppings)



$(document).ready(function(){
  $("form#pizzaInput").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var pizzaSauce = $("input:radio[name=pizzaSize]:checked").val();
    var pizzaToppings = [];
    $("input:checkbox[name=pizzaToppings]:checked").each(function(){
        var pizzaToppings = $(this).val();
        inputToppings.push(pizzaToppings);
      });
      
      
      console.log(pizzaToppings)
      console.log(pizzaSize)
      console.log(pizzaSauce)
    });
  });

 