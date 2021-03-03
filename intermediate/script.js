// // Intermediate 1

// /* Write a JavaScript program that will sort the following values alphabetically: Tesla, Audi, Renault, Volvo, Mazda, Fiat and Ferrari.

// (Use an array to contain these values)*/

// // var cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
// /* console.log(cars);
// console.log(cars.sort()); */


// // Intermediate 1 - advanced option

// function myFunction() {
//   var cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];

//   //  var cars_sorted = cars.sort(); -> if we sort the array here then the array changed everywhere 

//   document.getElementById("new_text1").innerHTML = cars;
//   //  document.getElementById("new_text2").innerHTML = cars_sorted;  -> this won't work

//   document.getElementById("new_text2").innerHTML = cars.sort();  // you have to sort it here
// }


//-----------------------------------------------


// Intermediate 2.1
/*  The first array contains the following values:
 apple, banana, kiwi

Using different methods, the output should be as follows:
apple, banana, kiwi, orange
apple, banana, kiwi
(Each statement should be outputted on a separate line.)*/

var fruits = ['apple', 'banana', 'kiwi'];
fruits.push('orange'); // you should push always separately from console.log
console.log(fruits);

fruits.pop();
console.log(fruits);


// Intermediate 2.2
/*  The second array contains the following values:
monkey, horse, dog
Using different methods, the output should be as follows:
dog, horse, monkey
cat, dog, horse, monkey*/

var animals = ['monkey', 'horse', 'dog'];
animals.sort();
console.log(animals);
animals.unshift('cat');
console.log(animals);


// Intermediate 3
/* Create a variable containing the following string:
"mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
Create a program that will output each fruit on a separate line in the web browser:

mango 

cherries 

kiwi 

grapes

pear 

peach 

orange 

lemon */

var fruits_new = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
var temporary = new Array();
temporary = fruits_new.split('/');
console.log(temporary);