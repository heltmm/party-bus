# _Pizza Builder_

#### _Code Review Week 4, 08.25.2017_

#### By _**Mark Helt**_

## Description

_This webpage takes user input and creates a pizza object which then calls a prototype to generate the cost of the pizza and print the pizza on the page.  That pizza object is then put in a cart object and a prototype is called to generate the total cost of multiple pizzas._

## Specs
| **Specification**                         | **Input**                                                                                     | **Output**                                                                                            |
|-------------------------------------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Take user input and make a pizza object   | size = large, crust = thin crust, sauce = red, toppings = onion, olive                        | pizza{ size= "large"; crust = "thin crust"; sauce= "red"; toppings=["onion","olive"]; price; }        |
| Determine price based on pizza parameters | pizza {size= "large"; crust = "thin crust"; sauce= "red"; toppings=["onion","olive"]; price;} | pizza{ size= "large"; crust = "thin crust"; sauce= "red"; toppings=["onion","olive"]; price = 8.99; } |
| Add pizza to a cart object                | pizza1                                                                                        | Cart{ pizzas = [pizza1]; total; }                                                                     |
| Determine total base on cart parameters   | Cart                                                                                          | Cart{ pizzas =[pizza1]; total = 8.99; }                                                               |## Setup

* _Open Web Browser._
* _type https://heltmm.github.io/pizza-builder into url bar._
* _Or click this link: [Pizza Builder](https://heltmm.github.io/pizza-builder)_

## Known Bugs

_None_

## Support and contact details

_If you have any technical issues please contact me at_
_heltmm@gmail.com_

## Technologies Used

_HTML, CSS, Bootstrap, javascript, jquery_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2016 **_Mark Helt_**
https://heltmm.github.io/party-bus/
