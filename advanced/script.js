
// advanced Exercise 1 sum;
var sum = 0;
var multi = 0;
var divi = 0;


function sumFunction() {
  var a=7;
  var b=14;
  
  var c="21";
  var c=Number(c);
  console.log(typeof(c));
  var d='32';
  
  var d=Number(d);
  console.log(typeof(d));
  var e=42;
  
  
  sum = a+b+c+d+e;
  console.log(sum);


  

  // var n = str.indexOf("welcome");
  document.getElementById("new_text1").innerHTML ="(a + b + c + d + e)" ;
  document.getElementById("sum").innerHTML =sum;

  
}

// advanced Exercise 1 multply;



function multiFunction() {
 
  var f ='1';
  var f=Number(f);
  console.log(typeof(f));
  var g=15;
  var h= 8;

  var i="1";
  var i=Number(i);
  console.log(typeof(i));
 
 
  multi = f*g*h*i;
  console.log(multi);


  // var n = str.indexOf("welcome");
  document.getElementById("new_text1").innerHTML ="(f*g*h*i)" ;
  document.getElementById("multi").innerHTML =multi;

  
}


// advanced Exercise 1 division;


function diviFunction() {

  var divi=(multi/sum).toFixed(3);
    
  

  
  document.getElementById("new_text1").innerHTML ="(result of multiplication / result of sum)" ;
  document.getElementById("divi").innerHTML =divi;

  
}



// Advanced Exercise 2

// From the following multidimensional Array:

// [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]

// Select and output the numbers 11, 25, 17, 27 and 0 in the console.

var twoDarray=[   [1, 2, 1, 24], 
                  [8, 11, 9, 4],
                  [7, 0, 7, 27],
                  [7, 4, 28, 14],
                  [3, 10, 25, 7],
                  [21, 4, 6, 17],
                  [3, 5, 26, 3] ];

console.log(twoDarray[1][1]+"\n"+twoDarray[4][2]+"\n"+twoDarray[5][3]+"\n"+twoDarray[2][3]+"\n"+twoDarray[2][1]+"\n");


var text="Vienna is a nice city";
var temp = new Array();
   temp = text.split(' ');

let n=temp.length;
console.log(n);
var string="";
var new_temp=[temp,
            temp,
            temp,
            temp,
            temp];

console.log(new_temp);
for(let i= 0;i<n;i++){
  for(let j=i;j<i+1;j++){
    string += "\t";
    console.log(string+(new_temp[i][j])+"\n"); 
    
  }
 
 
  
}

// Challenge 2 | String Manipulation

var challenge_2="Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";



var challenge_2temp=new Array();


// we use split method for string to array;
challenge_2temp=challenge_2.split("$");
console.log(challenge_2temp);

// we use join()method for making an array to string without comma...
var challenge_2temp=challenge_2temp.join(" ");

console.log(challenge_2temp);














// -------------------------------------

// advanced Exercise 1