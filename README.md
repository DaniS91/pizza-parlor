# _Build Your Own Pizza Application_

#### By _Dani Steely_

#### _This is a simple webpage that allows a user to select pizza toppings for a pizza order. The website compiles all selections and outputs a total price for the order_

## Technologies Used

* _HTML_
* _CSS_
* _Javscript_
* _Markdown_
* _TDD_

## Description

_This is a simple webpage where a user can build their own pizza using selections on a form, with options for: pizza size, sauce, meat, veggies, and additional toppings. On submit, these selections are compiled into a pizza object, which also includes a totalCost method that calculates the total price of the pizza based on the selections. The total price is outputted to a div under the form. There is also a reset button that reloads the form._

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html_

## Known Bugs

* _Checkboxes in the form include options for 'none', which affects the total price output. I would like to add functionality that unhides the other options when 'none' is deselected. Not necessarily a bug, but this does affect the total price outputted and I would like to fix it asap._

## _Test-Driven Development Section_

#### _Describe: Pizza()_
_Test: It should return a pizza object with a size property and a sauce property_
_Code: const myPizza = new Pizza("small", "red");_
_Expected Outcome:Pizza { size: "small", sauce: "red" }_

_Test: It should return a pizza object with five total properties: size, sauce, meat, veggies, and toppings_
_Code: const myPizza = new Pizza("small", "red", "pepperoni", ["spinach", "onion"], ["parmesan", "anchovies"]);_
_Expected Outcome:Pizza { size: "small", sauce: "red", meat: "pepperoni", veggies: ["spinach", "onion"], toppings: ["parmesan", "anchovies"] }_

#### _Describe: Pizza.prototype.baseCost()_
_Test: With each instance of the Pizza object, it should return the price of the base pizza based only on the size property_
_Code: myPizza.sizeCost();_
_Expected Outcome: 8_

#### _Describe: Pizza.prototype.toppingsCost()_
_Test: With each instance of the Pizza object, it should return the total price of the toppings based on the arrays of selected veggies and toppings_
_Code: myPizza.toppingsCost();_
_Expected Outcome: 2_

_Test: Should return 0 if both of the veggies and toppings properties are "none"_
_Code: myPizza.toppingsCost();_
_Expected Outcome: 0_

_Test: Should return .5 if either of the toppings or veggies properties is "none" and one other option is selected_
_Code: myPizza.toppingsCost();_
_Expected Outcome: .5_

#### _Describe: Pizza.prototype.totalCost()_
_Test: With each instance of the Pizza object, it should return the total price of the pizza based on the baseCost and toppingsCost properties_
_Code: myPizza.totalCost();_
_Expected Outcome: 10_


## License

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) _12/8/22_ _Dani Steely_
