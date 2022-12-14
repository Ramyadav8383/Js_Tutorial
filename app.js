// ---------------------------------------------
// 02_basics
// helper methods
// document.write("hello world");
// alert("hello world");
// console.log("helllo world");

// document.write("hello world");
// alert("hello world");
// console.log("hello world");

// document.write({ name: "ram" });
// alert({ name: "ram" });
// console.log({ name: "ram" });
// --------------------------------------------
// 03_statements and comments
// I woke up early him today
// statements - sets of instructions
// comments - ctrl+/
// This is console statement
// console.log("Hello world");
// console.log("Hello people");
// console.log("Hello pidoori");
// console.log("Hello Mommy");
// console.log("Hello chetii");
// console.log("Hello Lailuuu");
// console.log("Hello Lala");
// console.log("Hello pita ji");
// document.write("hello world");
// ------------------------------------------------
// 04_variables
// variables- most basic building block
// variables- stores, access , modify === value
// Declare , assignment operator, assign value
// assign variable value later , modify existing
// let Name = "Ram Narayan Yadav Noida Up Uk";
// let address, zip, state;
// address = "101 main street";
// zip = "201304";
// state = "up";
// Name = "pidoori";
// console.log(address, zip, state);
// console.log(Name);

// --------------------------------------------
// 05_variables Naming
// can contain digits, letters, underscore, $
// must start with letter, $ or _

// no Keyword
// cannot start with numbers
// case sensitive - Fullname vs fullname

// camelCase or underscore

// let random123_$ = "random";
// let Random123$ = "random2";
// console.log(random123_$);
// console.log(Random123$);

// --------------------------------------
// 06_const,let,var
// using var
// var value = "some value";
// value = "some More Value";

// using let
// let name = "Ram";
// name = "Harry";

// using const (constant)  -can't Re-assign
// const lastName = "Narayan";

// console.log(value);
// console.log(name);
// console.log(lastName);

// --------------------------------------
// 07_variable_challange
// variable #1
// let firstName = "ram";
// let address = "main street";
// address = "first street";
// console.log(firstName);
// console.log(address);

// variable #2
// let street = "main street";
// let country = "India";
// let fullMailingAddress = street + country;
// console.log(fullMailingAddress);

// 08_quotation marks
// " " or ' '
// ``
// const Name = "Ram's Narayan yadav";
// console.log(Name);

// ---------------------------------
// 09_string conactination
// string concatination - Combine String values
// `` - backticks (template strings) easier option.

// const name = "ram";
// const lastName = "Yadav";

// let fullName = name + " " + lastName;

// console.log("hello there your full name is: " + fullName);

// const website = "google";

// const url = "https://www." + website + ".com";

// console.log(url);

// ---------------------------------------
// 10_number_basics
// numbers
// loosely Typed = don't declare type
// const number = 40;
// let dummy = 1.234;
// dummy = "hey bro";
// const number2 = 1.456;
// const number3 = "1.456";
// basic mathematic operations
// const add = number + number2;
// const sub = number - number2;
// const mul = number * number2;
// const div = number / number2;

// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(number);
// console.log(number2);
// console.log(number3);

// --------------------------------------
// 11_number_additional
// Numbers
// += ,-=, /=, *=, ++, --, %
// modulus (%) operator returns the remainder after integer division
// let number = 40;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number -= 5;
// number++;
// number++;
// number--;

// modulus
// const slices = 10;
// const children = 3;
// const amount = slices % children;
// const amount = slices / children;

// random operation
// const random = 4 + 6 + 10 * 10;
// const random2 = (4 + 6 + 10) * 10;

// console.log(random);
// console.log(random2);
// console.log(amount);
// console.log(number);

// -------------------------------------
// 12_implicit type conversion
// string concatination
// const name = "ram";
// const lastName = "yadav";
// const fullName = name + " " + lastName;
// console.log(fullName);

// number concatination
// const number = 20;
// const number2 = 30;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// let number3 = 10;
// let number4 = 40;

// number4 = "40";

// const result2 = number3 - number4;
// const result2 = number3 / number4;
// const result2 = number3 + number4;
// console.log(result2);

// const randomNumber = 13;
// document.querySelector(".form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   let value = document.getElementById("amount").value;
//   value = parseInt(value);
//   console.log("input value Type");
//   console.log(value);
//   console.log("sum of two values");
//   console.log(randomNumber + value);
// });

// --------------------------------------
// 13_datatypes in js
// Data Types - 7 Total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
//object - Arrays, Functions, Objects

//typeof- operator (typeof variables) (typeof value)

// string

// number

// Boolean

// Null

// Undefined

// symbol(ES6)
