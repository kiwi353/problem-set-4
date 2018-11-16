/*
 * Hello. 2 points.
 */

function hello() {

  let p = document.getElementById("output1");
  p.innerHTML = "Hello, AP Computer Science Principles!";
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  let p = document.getElementById("output2");
  name = prompt("Enter Your Name Here:");
  p.innerHTML = "Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  let p = document.getElementById("output3");
  p.innerHTML = `${cels} degrees Celsius equals ${(Math.round((cels*(9/5)+32)*100))/100} degrees Fahrenheit.`;

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  let p = document.getElementById("output4");
  p.innerHTML = `${fahr} degrees Fahrenheit equals ${(Math.round(((fahr-32)*(5/9))*100))/100} degrees Celsius.`;

  // WRITE YOUR EXERCISE 4 CODE HERE

  ///////////////////////////// DO NOT MODIFYxs
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let miles = (inches - inches%63360)/63360;
  let yards = (inches - miles*63360 - inches%36)/36;
  let feets = (inches - miles*63360 - yards*36 - inches%12)/12;
  inches = inches%12;
  let p = document.getElementById("output5");
  p.innerHTML = (`Miles: ${miles}<br>Yards: ${yards}<br>Feet: ${feets}<br>Inches: ${inches}`);

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let kilometers = (centimeters - centimeters%100000)/100000;
  let meters = (centimeteers - kilometers*100000 - centimeters%100)/100;
  centimeters = centimeters%100;
  let p = document.getElementById("output6");
  p.innerHTML = (`Kilometers: ${kilometers}<br>Meters: ${meters}<br>Centimeters: ${centimeters}`);
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let gallons = (fluidOunces - fluidOunces%128)/128;
  let quarts = (fluidOunces - gallons*128 - fluidOunces%32)/32;
  let pints = (fluidOunces - gallons*128 - quarts*32 - fluidOunces%16)/16;
  let cups = (fluidOunces - gallons*128 - quarts*32 - pints*16 - fluidOunces%8)/8;
  fluidOunces = fluidOunces%8;
  let p = document.getElementById("output7");
  p.innerHTML = (`Gallons: ${gallons}<br>Quarts: ${quarts}<br>Pints: ${pints}<br>Cups: ${cups}<br>Fluid Ounces: ${fluidOunces}`);
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let tons = (ounces - ounces%32000)/32000;
  let pounds = (ounces - tons*32000 - ounces%16)/16;
  ounces = ounces%16;
  let p = document.getElementById("output8");
  p.innerHTML = (`Tons: ${tons}<br>Pounds: ${pounds}<br>Ounces: ${ounces}`);
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = (pennies - pennies%100)/100;
  let quarters = (pennies - dollars*100 - pennies%25)/25;
  let dimes = (pennies - dollars*100 - quarters*25 - pennies%10)/10;
  let nickles = (pennies - gallons*100 - quarters*25 - dimes*10 - pennies%5)/5;
  pennies = pennies%5;
  let p = document.getElementById("output9");
  p.innerHTML = (`Dollars: ${dollars}<br>Quarters: ${quarters}<br>Dimes: ${dimes}<br>Nickles: ${nickles}<br>Pennies: ${pennies}`);
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
