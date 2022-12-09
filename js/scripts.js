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
  if (this.veggies.toString("") === "none" && this.toppings.toString("") === "none") {
    return 0;
  } else {
    return ((this.veggies.length + this.toppings.length) / 2);
  }
}