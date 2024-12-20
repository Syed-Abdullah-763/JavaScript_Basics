
// *********Operators**********


// var a = "10";
// var b = "20";
// console.log(a + b);
// console.log(a - b);
// console.log("80" - 20 + 10);
// console.log("80" + 20 + 10);
// console.log(80 + 20 + "10");
// console.log(80 + 20 - "10");




// var a = 10;

// a += 1;
// a++
// ++a
// console.log(a++, a)
// console.log(++a, a)
// console.log("a=>", a)

// var myName = "Syed";
// myName += " " + "Abdullah";
// console.log(myName);

// var a = 8;
// a++ + a++ + ++a - --a - ++a + a++ + --a
// console.log(a++ + a++ + ++a - --a - ++a + a++ + --a)


// ******Condition********
// var age = 19;

// if (age == 18) {
//     console.log("Allow")
// } else {
//     console.log("Don't Allow");
// }


// var age = "18";

// if (age == 18) {
//     console.log("You can use thus web.")
// } else {
//     console.log("You can't use thus web.")
// }

// if (age === 18) {
//     console.log("You can use thus web.")
// } else {
//     console.log("You can't use thus web.")
// }



// var num1 = "100";

// if (typeof(num1) == "number") {
//     console.log(true);
// } else {
//     console.log(false);
// }

// num1 = 100;
// if (typeof(num1) == "number") {
//     console.log(true);
// } else {
//     console.log(false);
// }


// var age = prompt("Enter Your Age");

// if (age == 18) {
//     console.log(true);
    
// } else {
//     console.log(false);
// }


// var age = +prompt("Enter Your Age");

// if (age === 18) {
//     console.log(true);
    
// } else {
//     console.log(false);
// }


// 18 , 20 , 25 , 30 => allow
// var age = 20;
// if (age == 18) {
//   console.log("allow");
// } else if (age == 20) {
//   console.log("allow");
// } else if (age == 25) {
//   console.log("allow");
// } else {
//   console.log("not allow");
// }

// if(age == 20){
//   console.log("allow")
// }else{
//   console.log("not allow")
// }

// var gender = "male";
// if (gender == "male") {
//   console.log("larka hai");
// } else {
//   console.log("pata nahi");
// }


// var age = prompt("enter your age");
// if (age >=  18) {
//   console.log("ALLOW");
// } else {
//   console.log("not allow");
// }



// ----calculator-----

var num1 = +prompt("Enyter First Number", "Type Here");
var opt = prompt("Enyter Function", "+ , - , * , /");
var num2 = +prompt("Enyter Second Number", "Type Here");

if (opt == "+") {
   console.log(num1 + num2);
} else if (opt == "-") {
    console.log(num1 - num2);
} else if (opt == "*") {
    console.log(num1 * num2);
} else if (opt == "/") {
    console.log(num1 / num2);
} else {
    console.log("SYNTAX ERROR");
}