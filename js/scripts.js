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

//UI Logic

function handleForm(event) {
  event.preventDefault();
  const sizeInput = document.querySelector("input[name=size]:checked").value;
  const sauceInput = document.querySelector("input[name=sauce]:checked").value;
  const meatInput = document.querySelector("input[name=meat]:checked").value;
  const veggiesInputs = document.querySelectorAll("input[name=veggies]:checked");
  const toppingsInputs = document.querySelectorAll("input[name=toppings]:checked");
  let veggiesArray = [];
  veggiesInputs.forEach(function(input) {
    veggiesArray.push(input.value);
  });
  let toppingsArray = [];
  toppingsInputs.forEach(function(input) {
    toppingsArray.push(input.value);
  });
  let newPizza = new Pizza(sizeInput, sauceInput, meatInput, veggiesArray, toppingsArray);
  document.querySelector(".total-price").innerHTML = null;
  document.querySelector(".total-price").innerHTML = `$${newPizza.totalCost().toString()}`;
  document.querySelector(".hidden").removeAttribute("class", "hidden");
}

function resetForm(event) {
  event.preventDefault();
  location.reload();
}
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
  document.querySelector("form").addEventListener("reset", resetForm);
  });