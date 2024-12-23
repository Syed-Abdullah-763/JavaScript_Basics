
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


// ********Condition**********
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

// var num1 = +prompt("Enyter First Number", "Type Here");
// var opt = prompt("Enyter Function", "+ , - , * , /");
// var num2 = +prompt("Enyter Second Number", "Type Here");

// if (opt == "+") {
//    console.log(num1 + num2);
// } else if (opt == "-") {
//     console.log(num1 - num2);
// } else if (opt == "*") {
//     console.log(num1 * num2);
// } else if (opt == "/") {
//     console.log(num1 / num2);
// } else {
//     console.log("SYNTAX ERROR");
// }





// *******Leacture#06********
// Gates opt
// And opt
// || => OR opt

// And =>  && => true && true => true
// And =>  && => false && true => false
// And =>  && => true && false => false
// And =>  && => false && false => false
// condition1 && condition2

// condition1 || condition2
// true || true = > true
// false || true = > true
// true || false = > true
// false || false = > false

// var age = 25;
// var gender = "male";

// if (age == 18 && gender == "male") {
//     console.log("if condition");
//   } else {
//     console.log("else condition");
//   }

// if (age == 18 && gender == "male") {
//   console.log("if condition");
// } else {
//   console.log("else condition");
// }

// if (userAge >= 18) {
//   // value check or sath type b check hogi
//   console.log("allow");
// } else {
//   console.log("not allow");
// }

// console.log("Allow");
// console.log("Not Allow");

// var gender = "other";
// if (gender == "male" || gender == "female") {
//   console.log("allow");
// } else {
//   console.log("not allow");
// }

// true
// var a = false
// var a = 0;
// var a = "";
// var a = undefined;
// var a = null;
// var a = NaN;
// if (a) {
//   console.log("if");
// } else {
//   console.log("else");
// }

// var htmlMarks = +prompt("Enter HTML marks");
// var cssMarks = +prompt("Enter CSS marks");
// var javaScriptMarks = +prompt("Enter javaScript marks");
// var reactMarks = +prompt("Enter React marks");
// var nodeMarks = +prompt("Enter Node marks");

// var total = htmlMarks + cssMarks + javaScriptMarks + reactMarks + nodeMarks;
// console.log("total=>", total);
// // var per = (total / 500) * 100;
// var per = 90;
// console.log("per", per);
// 90 > 100 => A+
// 80 > 89 => A
// 70 > 79 => B
// 60 > 69 => C
// 0 > 59 => Ghr jao beta!

// if (per >= 90 && per <= 100) {
//   console.log("A+");
// } else if (per >= 80 && per <= 89) {
//   console.log("A");
// } else if (per >= 70 && per <= 79) {
//   console.log("B");
// } else if (per >= 60 && per <= 69) {
//   console.log("C");
// } else if (per >= 0 && per <= 59) {
//   console.log("FAILED!");
// } else {
//   console.log("Invalid Percentage");
// }

// if (per >= 90 && per <= 100) {
//   console.log("A+");
// } else if (per >= 80 && per < 90) {
//   console.log("A");
// } else if (per >= 70 && per < 80) {
//   console.log("B");
// } else if (per >= 60 && per < 70) {
//   console.log("C");
// } else if (per >= 0 && per < 60) {
//   console.log("FAILED!");
// } else {
//   console.log("Invalid Percentage");
// }

// calculator using => If statement
// &&
// mark sheet using => If statement




// -----Grade System-------

// var mathMarks = +prompt("Enter Your Math marks");
// var computerMarks = +prompt("Enter Your Computer marks");
// var chemistryMarks = +prompt("Enter Your Chemistry marks");
// var physicsMarks = +prompt("Enter Your Physics marks");
// var englishMarks = +prompt("Enter Your English marks");

// var totalNumber = mathMarks + computerMarks + chemistryMarks + physicsMarks + englishMarks;
// var percentage = totalNumber / 500 *100; 

// if (percentage >= 90 && percentage <= 100) {
//     console.log("Total Marks:" , totalNumber);
//     console.log("Percentage:" ,percentage + "%");
//     console.log("Grade:" ,"A++");
// } else if (percentage >= 80 && percentage < 90) {
//     console.log("Total Marks:" , totalNumber);
//     console.log("Percentage:" ,percentage + "%");
//     console.log("Grade:" ,"A+");
// } else if (percentage >= 70 && percentage < 80) {
//     console.log("Total Marks:" , totalNumber);
//     console.log("Percentage:" ,percentage + "%");
//     console.log("Grade:" ,"A");
// } else if (percentage >= 60 && percentage < 70) {
//     console.log("Total Marks:" , totalNumber);
//     console.log("Percentage:" ,percentage + "%");
//     console.log("Grade:" ,"B");
// } else if (percentage >= 50 && percentage < 60) {
//     console.log("Total Marks:" , totalNumber);
//     console.log("Percentage:" ,percentage + "%");
//     console.log("Grade:" ,"C");
// } else if (percentage >= 40 && percentage < 50) {
//     console.log("Total Marks:" , totalNumber);
//     console.log("Percentage:" ,percentage + "%");
//     console.log("Grade:" ,"D");
// } else if (percentage >= 0 && percentage < 40) {
//     console.log("Total Marks:" , totalNumber);
//     console.log("Percentage:" ,percentage + "%");
//     console.log("Fail");
// } else {
//     console.log("User Error");
// }



// // -----Custom Condition-----

// var age = +prompt("Type Your Age", "Write here...");
// var campus = prompt("Type Campus Name", "Write here...")

// if (age >= 18 && (campus == "ZA Campus" || campus == "Head Campus")) {
//     console.log("You are able to attend class.");
// } else {
//     console.log("You are not able to attend class.");
// }