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
  } else if(this.veggies.toString("") ==="none"){
    return ((this.toppings.length) * .5);
  } else if(this.toppings.toString("") ==="none"){
    return ((this.veggies.length) * .5);
  }else {
    return ((this.veggies.length + this.toppings.length) * .5);
  }
}

Pizza.prototype.totalCost = function() {
  let toppingsCost = this.toppingsCost();
  let baseCost = this.baseCost();
  return (toppingsCost + baseCost);
}