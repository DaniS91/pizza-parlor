# _Build Your Own Pizza Application_

#### By _Dani Steely_

#### _{Brief description of application}_

## Technologies Used

* _HTML_
* _CSS_
* _Javscript_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html_

## Known Bugs

* _Any known issues_
* _should go here_

## _Test-Driven Development Section_

#### _Describe: Pizza()_
_Test: It should return a pizza object with a size property and a sauce property_
_Code: const myPizza = new Pizza("small", "red");_
_Expected Outcome:Pizza { size: "small", sauce: "red" }_

_Test: It should return a pizza object with five total properties: size, sauce, meat, veggies, and toppings_
_Code: const myPizza = new Pizza("small", "red", "pepperoni", ["spinach", "onion"], ["parmesan", "anchovies"]);_
_Expected Outcome:Pizza { size: "small", sauce: "red", meat: "pepperoni", veggies: ["spinach", "onion"], toppings: ["parmesan", "anchovies"] }_

#### _Describe: Pizza.prototype.baseCost_
_Test: With each instance of the Pizza object, it should return the price of the base pizza based only on the size property_
_Code:_ 
_const myPizza = new Pizza("small", "red", "pepperoni", ["spinach", "onion"], ["parmesan", "anchovies"]);_
_myPizza.baseCost;_
_Expected Outcome:_
_Pizza { size: "small", sauce: "red", meat: "pepperoni", veggies: ["spinach", "onion"], toppings: ["parmesan", "anchovies"]}_
_8_





## License

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) _12/8/22_ _Dani Steely_
