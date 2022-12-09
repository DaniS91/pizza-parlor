// Business Logic

function Pizza(size, sauce, meat, veggies, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.meat = meat;
  this.veggies = veggies;
  this.toppings = toppings;
}

Pizza.prototype.baseCost = function() {
  if (this.size === "small") {
    return 8;
  } else if (this.size === "medium") {
    return 10;
  } else {
    return 12;
  }
}

Pizza.prototype.toppingsCost = function() {
  let veggiesTotal = (this.veggies.length + 1);
  let toppingsTotal = (this.toppings.length + 1);
  return veggiesTotal + toppingsTotal;
}