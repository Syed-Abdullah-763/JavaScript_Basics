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

// ********Arrays*********

// var arr = ["Abdullah", "Mubbashir", "Maaz"];
// var arr_2 = ["a", "b", "c"];

// console.log(arr);
// console.log(arr_2);

// arr[6] = "Hamza";
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);

// var names = ["Abdullah", "Mubbashir", "Maaz"];

// // console.log(names[indexNumber] );

// console.log(names[2]);
// console.log(names[1]);
// console.log(names[0]);

// var arr = ["karachi", 2025, 1992, 24, 101, 804, true, undefined, null];
// console.log(arr.length);

// index= length - 1
// index= 0

// Methods

// pop , push => last index
// shift , unshift => first index

// var countries = ["Pakistan", "India", "Australia"];

// console.log("pop(remove) element =>", countries.pop());
// console.log("array after pop =>", countries);

// console.log("push(add) element =>", countries.push("England"));   // => length of array
// console.log("array after push =>", countries);

// console.log("remove(shift) element =>" , countries.shift());
// console.log( "array after shift=>" , countries);

// console.log("add(unshift) element=>" , countries.unshift("Dubai"));
// console.log( "array after shift=>" , countries);

// Summary
// pop => remove last value in array
// push => add last value in array
// shift => remmove first value in array
// unshift => add first value in array

// slice(start, end)
// slice(index No., length No.)

// length=>      1           2        3           4
// var cities = ["karachi", "lahore", "multan", "Islamabad"];
// index=>      0           1         2           3

// var arrCopy = cities.slice(1, 3);

// console.log( "array=>" , cities);
// console.log( "slice=>" , arrCopy);

// var arrCopy = cities.slice(0, -2);
// var arrCopy = cities.slice(0, -1);
// var arrCopy = cities.slice(0, 4);
// var arrCopy = cities.slice(0, -4);
// var arrCopy = cities.slice(-1);
// var arrCopy = cities.slice(1);
// var arrCopy = cities.slice(0, -1);
// console.log( "slice=>" , arrCopy);

// var arr = [1,2,3,4,5,6,7,8,9,10];

// var copyArr = arr.slice(2, 7);
// var copyArr = arr.slice(3);
// var copyArr = arr.slice(-1);
// var copyArr = arr.slice(0, -2);

// console.log(arr);
// console.log(copyArr);

// var arr = ["karachi", "lahore", "Islamabad"]

// var copyArr = arr.splice(2, 1) //Remove
// var copyArr = arr.splice(1, 2) //Remove

// var copyArr = arr.splice(2, 0, "Multan") //Addion
// var copyArr = arr.splice(2, 1, "Multan") //Replace

// console.log(arr);
// console.log(copyArr);

// var applied = ["Abdullah", "Sarib", "Zaid", "Mubbashir", "Hamza", "Umer", "Amin", "Ali"];

// console.log("Applied ->", applied);

// var winners = applied.slice(0, 3);
// var passed = applied.slice(3);

// console.log("Wnners ->", winners);
// console.log("Passed ->", passed);

// var lateApplied = applied.splice(2, 0, "Hmmad", "Amir", "Haseeb");
// var lateApplied = applied.splice(2, 1);
// var lateApplied = applied.splice(3, 1, "Kashif");

// var winners = applied.slice(0, 3);
// var passed = applied.slice(3);

// console.log("After Change");
// console.log("Applied ->", applied);
// console.log("Wnners ->", winners);
// console.log("Passed ->", passed);
// console.log("Late Applied ->", lateApplied);

// ********for-Loop*******

// for (var i = 1; i <= 10; i++) {
//     console.log("Hello World", i);
// }

// for (var i = 1; i <= 5; i++) {
//     document.write("number ", i + "<br />");
// }

// for(var i = 10; i >= 1; i--) {
//     document.write("decrement "+ i + "<br />");
// }

// for(var i = 2; i >= -20; i = i - 2) {
//     document.write("decrement "+ i + "<br />");
// }

// for (var i = 2; i >= 20; i = i + 2) {
//     document.write("decrement " + i + "<br />");
// }

// Table

// var tableNumber = +prompt("Which table do you want to print ?");
// var startingNumber = +prompt("Write starting point...");
// var endingNumber = +prompt("Write ending point...");

// var tableNumber = 2
// var startingNumber = 1
// var endingNumber = 10

// for (var i = startingNumber; i <= endingNumber; i++) {
//     document.write( tableNumber + " x " + i + " = " + i*tableNumber + "<br />");
// }

// var tableNumber = +prompt("Which table do you want to print ?");
// var startingNumber = +prompt("Write starting point...");
// var endingNumber = +prompt("Write ending point...");

// if (startingNumber <= endingNumber && typeof(tableNumber) == "number" && typeof(startingNumber) == "number" && typeof(endingNumber) == "number") {

//     for (var i = startingNumber; i <= endingNumber; i++) {
//         document.write( tableNumber + " x " + i + " = " + i*tableNumber + "<br />");
//     }

// } else {
//     document.write("Syntax Error");
// }

// var cities = [
//     "Karachi",
//     "Lahore",
//     "Multan",
//     "Islamabad",
// ];

// for (var i = 0; i <= cities.length; i++) {
//     document.write(cities[i] + "<br />");
// };

// for (var i = cities.length - 1; i >= 0; i--) {
//     document.write(cities[i] + "<br />");
// };

// Assignment

// var subjectName = [
//     "Html Marks:",
//     "CSS Marks:",
//     "JavaScript Marks:",
//     "React Marks:",
//     "Next.js Marks:",
// ];

// var scoreArr = [];

// var htmlMarks = +prompt("Enter your HTML marks..");
// var cssMarks = +prompt("Enter your CSS marks..");
// var javaScriptMarks = +prompt("Enter your JavaScript marks..");
// var reactJsMarks = +prompt("Enter your React.js marks..");
// var nextJsMarks = +prompt("Enter your Next.js marks..");

// // Push these input values in scoreArr
// scoreArr.push(htmlMarks, cssMarks, javaScriptMarks, reactJsMarks, nextJsMarks);

// // loop for print these values
// for (var i = 0; i < scoreArr.length; i++) {
//     document.write(subjectName[i] + " " + scoreArr[i] + "<br />");
// }

// checking existence of value in array

// var userCity = prompt("Enter Your City Name");

// var cities = ["Karachi", "Lahore", "Multan", "Islamabad"];

// var isMatch = false;

// for (var i = 0; i < cities.length; i++) {

//     if (userCity == cities[i]) {
//         isMatch = true;

//         alert("Welcome!");
//         document.write( i + 1 + "." + cities[i]);

//         break;
//     }
// }

// if(isMatch == false) {
//     alert("Your input is not found wrong.");
// }

// nested loop

// for (var i = 0; i <= 2; i++) {
//     console.log("Outer loop", i)
//     for (var j = 0; j <= 2; j++) {

//     console.log("Inner loop", j)
//     }
// }

// ***********String************

// var str = "often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.[10] Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime Javascript system for non-browser usage is Node.js."

// for (var i = 0; i < str.length; i++) {
//     if(str.slice(i, i + 10).toLowerCase() == "javascript") {
//         console.log(i);

//         var text = str.slice(0, i) + "Changed => js" + str.slice(i + 10, str.length);
//         console.log(text);

//         continue;
//     }
// }

// Methods of arrays

// var str = "Often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.[10] Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime Javascript system for non-browser usage is Node.js."

// console.log(str.toLocaleLowerCase().indexOf("javascript"));
// console.log(str.charAt(127));

// if()

// var arr = ["lahore", "karachi"];
// var indexNum = arr.indexOf(prompt("Enter yoyur city name"));
// // console.log("indexNum", indexNum);
// if (indexNum == -1) {
//   alert("not found");
// } else {
//   alert("welcome");
// }

// var word = prompt("Enter your word")
// var findIndex = str.toLowerCase().indexOf(word);
// console.log(findIndex)

// if(findIndex == -1) {
//     alert("Not Found.");
// } else {
//     alert(`Your word "${word}" exists on ${findIndex} index number`);
// }

// console.log(str.charAt(127));

// var str = "With HTML you can create HTML your own Website.";
// var replaceWoed = str.replaceAll("HTML", "HYPER TEXT MARKUP LANGUAGE");
// OR
// str = str.replace("HTML", "HYPER TEXT MARKUP LANGUAGE");
// str = str.replaceAll("HTML", "HYPER TEXT MARKUP LANGUAGE");

// var index = str.lastIndexOf("HTML");

// console.log(str);
// console.log(index);
// console.log(replaceWoed);

// indexOf => Find index of first match element from left to right
// lastIndexOf => Find index of first match element from right to left
// chatAt => Find character or value on defined index number
// replace => replace first match value from left to right
// replaceAll => replace all match values in the give string (from left to right)

// ******** Math Library ********

// Math.round => Convert decemal to integar according to round-of rule
// Math.floor => Convert decemal to integar by just removing point and values after point
// Math.ceil => Convert decemal to integar by increse a number (without using round-of rule)

// var num = 90.88;
// console.log(num);

// var round = Math.round(num);
// console.log(round);

// var floor = Math.floor(num);
// console.log(floor);

// num = 98.1
// console.log("Reinitialized => ",num);

// var ceil = Math.ceil(num);
// console.log(ceil);

// var userInput = +prompt("Enter number between 1 to 10");

// var number = Math.floor(Math.random() * 10 + 1);
// console.log("Your number is ",number);

// if(userInput == number) {
//     alert("Your number is matched");
// }else if (userInput - 1 == number || userInput + 1 == number){
//     alert("Your hit is very close");
// }else if (userInput > number){
//     alert("Your number is greater");
// }else if (userInput < number) {
//     alert("Your number is less");
// }else if (userInput < 1 || userInput > 10) {
//     alert("Invalid number");
// }else {
//     alert("Better luck, try again");
// }

// ********Conversoin of String to Number*******

// var str1 = "100";
// var str2 = "200";

// var add = str1 + str2;

// var number = Number(add);

// console.log(number);

// var con = Number("451.8989987878");
// var con1 = parseInt("451.8989987878");

// console.log( "Number " ,con);
// console.log( "ParesInt" ,con1);

// var str = 1200987;
// console.log(String(str));

// var number = str.toLocaleString();
// console.log("Number ", str);
// console.log("String", number);

// Nested Condition

// var userName = "syed.abdullah@gmail.com"
// var password = "syeddd@11"

// var userInput = " "
// var userPass = " "

// if(userInput == userName) {
//     if (userPass == password) {
//         console.log("You have successfully logged in");
//     }else {
//         console.log("Invalid password");
//     }
// }else {
//     console.log("Incorrect user name or password");
// }

// str convert into array
// var str = "saylani mass it training";
// var str = "saylani";
// console.log("str", str.split("a"));

// array convert into str
// join
// var arr = ["saylani", "smit", "hello", "world"];
// console.log(arr.join(" "));
// console.log(arr.reverse());

// var str = "HTML is the standard markup language for Web pages.";

// var arr = str.split(" ")

// var tempArr = []

// for(var i = 0; i < arr.length; i++) {
//     // var word = arr[i]
//     // console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());

//     tempArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
// }

// console.log(tempArr.join(" "));

// *********Date***********

// var date = new Date ()
// var date = new Date ("02 18 2025")
// var month = date.getMonth()

// console.log(date);

// var date = new Date()

// console.log(date);
// console.log("toDateString",date.toDateString());
// console.log("toISOString",date.toISOString());
// console.log("toJSON",date.toJSON());
// console.log("toUTCString",date.toUTCString());

// var myCreatedDate = new Date (2025, 1, 19)
// console.log(myCreatedDate.toUTCString());

// console.log(Date.now());

// var day = new Date().getDay()
// var hours = new Date().getHours()
// var year = new Date().getFullYear()
// var month = new Date().getMonth()
// var seconds = new Date().getSeconds()
// console.log(seconds);

// console.log(month);

// -----Age Calculator-------

// var userDOB = new Date (prompt("Enter your date of birth", "01 18 2025")).getTime();
// var currentDate = new Date().getTime();
// var ageMili = currentDate - userDOB;
// var age = ageMili / (1000 * 60 * 60 * 24 * 365)
// console.log(Math.floor(age));

// -------Sale Program------

// var currentDate = new Date ();
// // console.log(currentDate);
// var currentMillisecond = currentDate.getTime()

// var saleDate = new Date ("02 14 2025")
// // console.log(saleDate);
// var saleMilili = saleDate.getTime();

// var remainingDaysMilliseconds = saleMilili - currentMillisecond;
// var remaingDays = remainingDaysMilliseconds / (1000 * 60 * 60 * 24)
// var daysLeft = Math.ceil(remaingDays);

// document.write(`Only ${daysLeft} are left for exclusive sale.` + "<br />")
// document.write(`Go and check the sale now` + "<br />")

// ****************Functions******************

// function addition() {
//     var num1 = 10;
//     var num2 = 20;
//     console.log(num1 + num2);
// }
// addition();

// function sub (num1, num2) {
//     console.log(num1 - num2);
// }
// sub(100, 50)

// calculator

// function calc(){
//     var num1 = +prompt("Enter your number here")
//     var opt = prompt("Enter your Operator")
//     var num2 = +prompt("Enter your number here")

//     if(opt == "+") {
//         console.log(num1 + num2);
//     }else if (opt === "-") {
//         console.log(num1 - num2);
//     }else if (opt == "*") {
//         console.log(num1 * num2);
//     }else if (opt === "/") {
//         console.log(num1 / num2);
//     }
// }

// function greet() {
//     console.log("Hello world");
// }
// greet()

// function add(num1, num2) {
//     console.log("num2", num2);

//     if (num2 == undefined) {
//         num2 = 0;
//     }

//     console.log("num2", num2);
//     console.log(num1 + num2);
// }
// add(10)

// function add (num1 = 0, num2 = 0, num3 = 0) {
//     console.log(num1 + num2 + num3);
//     console.log("num1", num1);
//     console.log("num2", num2);
//     console.log("num3", num3);

// }
// add(50, 40)

// function greet (userName = "") {
//     alert ("Hello " + userName)
// }

// greet ("Abdullah")

// function foo () {
//     var add = 50 + 50;

//     return add
// }

// var temp = foo ();

// console.log(temp);

// function foo () {
//     var add = 50 + 50;

//     return "add"
// }

// var temp = foo ();

// console.log(temp);

// function addition (num1 = 0, num2 = 0) {
//     console.log(num1 + num2);

//     // return num1 + num2
//     // return "Hello"
// }

// var result = addition(100,400)

// console.log(result);

// function onePlusAvg (x, y) {

//     console.log("Done");

//     return 1 + (x + y) / 2
// }

// var a = 5;
// var b = 10;
// var c = 15;

// console.log("One plus average of a and b is ", onePlusAvg(a, b));
// console.log("One plus average of a and c is ", onePlusAvg(a, c));
// console.log("One plus average of b and c is ", onePlusAvg(b, c));

// Get Input Value

// function getValue() {
//     // console.log("get value");

//     var userName = document.getElementById("userName")
//     var password = document.getElementById("password")

//     console.log(userName.value);
//     console.log(password.value);
// }

// function setValue() {
//     var userName = document.getElementById("userName")
//     var password = document.getElementById("password")

//     userName.value = "Syed Abdullah"
//     password.value = "abdullah_1118"
// }

// function sqr(num) {
//     return num * num;
// }
// var result = sqr(prompt("Enter positive number!"))
// console.log(result);

// function factorial (num) {
//     if (num == 1) {
//         return 1;
//     }

//     return num * factorial(num - 1);
// }
// var result = factorial(5);
// console.log(result);

// function hypotenuse (per, base) {
//     function sqr(num) {

//         return num * num;
//     };

//     var hyp = Math.sqrt(
//         sqr(per) + sqr(base)
//     );

//     return hyp
// }
// var result = hypotenuse(5,4);
// console.log(result);

// function isPalindrome(str) {
//     var cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

//     var reverseStr = cleanStr.split("").reverse().join("");

//     return reverseStr === str;
// }
// var result = isPalindrome("madam")
// console.log(result);

// function upperCase(str) {
//     var splitStr = str.split(" ");

//     var capatalizedWords = splitStr.map(function (word) {
//        return word[0].toUpperCase() + word.slice(1);
//     });

//     return capatalizedWords.join(" ");
// }
// var result = upperCase("the quick brown fox")
// console.log(result);

// function longestWord (str) {
//     var longestWord = "";

//     var word = str.split(" ")

//     for(var i = 0; i < word.length; i++) {
//         if (word[i].length > longestWord.length) {
//             longestWord = word[i]
//         }
//     }

//     return longestWord;
// }
// var result = longestWord("Web development tool");
// console.log(result);

// function ocurrenceOfLetter (str, letter) {
//     var ocurrence = str.split("").filter(function (strLetter) {
//         return strLetter == letter;
//     });

//     return ocurrence.length;
// }

// var result = ocurrenceOfLetter("JSResourceS.com", "e");
// console.log(result);

// function foo() {
//     console.log("function hasbeen called");

// }

// function login() {
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     var emailVal = document.getElementById("emailVal");
//     var passVal = document.getElementById("passVal");

//     emailVal.innerHTML = email.value;
//     passVal.innerHTML = password.value;
// }

// function reset() {
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     var emailVal = document.getElementById("emailVal");
//     var passVal = document.getElementById("passVal");

//     email.value = "";
//     password.value = "";
//     emailVal.innerHTML = "";
//     passVal.innerHTML = "";
// }

// function showPass() {
//     var password = document.getElementById("password");
//     var icon = document.getElementById("icon")

//     if(password.type === "text") {
//         password.type = "password";

//         icon.innerHTML = "Show"
//     }else {

//         password.type = "text"
//         icon.innerHTML = "Hide"
//     }
// }

// function mouseIn () {
//     console.log("Mouse In Function Called");
// }

// function mouseOut () {
//     console.log("Mouse Out Function Called");
// }

// function mouseUp() {
//     console.log("Mouse Up Function Called");
// }

// function mouseDown() {
//     console.log("Mouse Down Function Called");
// }

// function mouseMove() {
//     console.log("Mouse Move Called");
// }

// function seeMore() {
//     var paraElement = document.getElementById("paraElement")
//     var shortPara = "Lorem ipsum dolor sit amet consectetur adipisicing."
//     var longPara = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores non beatae delectus dolor, saepe voluptas consectetur nihil sit porro."
//     var seemoer = document.getElementById("seemoer")

//     if (seemoer.innerHTML === "See more") {
//         paraElement.innerHTML = longPara;
//         seemoer.innerHTML = "See less"
//     } else {
//         paraElement.innerHTML = shortPara;
//         seemoer.innerHTML = "See more"
//     }
// }

// document.getElementById("btn").onclick = (evt) => {
//     console.log(evt);

//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

// }

// var btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     console.log("Event 1 Executed");
// })

// var func2 = function () {
//     console.log("Event 2 Executed");
// }
// btn.addEventListener("click", func2)

// btn.addEventListener("click", function () {
//     console.log("Event 3 Executed");
// })

// btn.removeEventListener("click", func2)

// var mode = "light"
// var body = document.querySelector("body")

// btn.addEventListener("click", function () {
//     if (mode === "light") {
//         mode = "dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }else {
//         mode = "light"
//         body.classList.add("light")
//         body.classList.remove("dark")
//     }

//     console.log(mode);
// })

// function mouseIn() {
//     var img = document.getElementById("img");

//     img.src = "./images/car2.jpg";
// }

// function mouseOut() {
//     var img = document.getElementById("img");

//     img.src = "./images/img1.png";
// }

// function submit() {
//     var input = document.getElementById("input");

//     if(input.value.length >= 3) {
//         input.style.border = "1px solid green";
//     }else {
//         input.style.border = "1px solid red";
//     }
// }

// function inputFocus(input, event) {
//     // console.log("focus(input)", input);

//     if (event === "focus") {
//         input.className = "color"
//     }else {
//         if (input.value.length >= 3) {
//             input.className = "green"
//         }else {
//             input.className = "red"
//         }
//     }
// }

// function handler(para) {
//     para.className += " largText"
// }

// function bigPara() {
//     var para = document.getElementById("para");

//     para.classList.add("bigText")
//     para.classList.remove("paraClass")
// }

// var heading = document.getElementsByClassName("heading")
// console.log("headings", heading);

// var headings = document.getElementsByTagName("h1")
// console.log("headings", headings);

// console.log("headings", headings[0].innerHTML);
// console.log("headings", headings[6].innerHTML);
// console.log("headings", headings[7].innerHTML);

// for (var i = 0; i < headings.length; i++) {

//     if ((i + 1) % 2 == 0) {
//         headings[i].style.backgroundColor = "black"
//         headings[i].style.color = "white"
//     }

// }

// var h1 = document.getElementById("h1")
// console.log("h1", h1.innerHTML);

// function onClick() {
//     var para = document.getElementById("para")

//     para.classList.remove("bigText", "paraClass")
// }

// console.log(document.childNodes[1].children[1].children);

// var parent = document.getElementById("parent")

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.lastElementChild.previousElementSibling);
// console.log(parent.firstElementChild.nextElementSibling);
// console.log(parent.firstElementChild.nextElementSibling.parentNode);

// var btn = document.getElementById("btn")
// // btn.onclick = foo;

// btn.setAttribute("onclick" , "foo()")
// // btn.setAttribute("class" , "myClass")

// function foo () {
//     console.log("Function called");

//     var check = btn.hasAttribute("class")
//     console.log("check", check);

//     var checkVal = btn.getAttribute("class")
//     console.log("checkVal", checkVal);

//     console.log(btn.attributes);

// }

// var parent = document.getElementById("parent")

// var h1 = document.createElement("h1")
// h1.innerHTML = "Hello World"
// parent.appendChild(h1)

// var parent = document.getElementById("parent");

// // console.log("parent", parent.nodeName);

// var h1Element = document.createElement("h1");

// h1Element.innerHTML = "Hello World";
// // console.log(h1Element);

// h1Element.setAttribute("onclick", "foo()");
// h1Element.style.color = "red";
// h1Element.style.fontSize = "40px";

// var h1Saylani = document.createElement("h1");
// h1Saylani.innerHTML = "Hello Saylani";
// // console.log(h1Saylani);

// parent.appendChild(h1Element);
// parent.appendChild(h1Saylani);

// function foo() {
//     console.log("Function called");
// }

// Objects

//  var obj = {
//     name: 'Abdullah',
//     age: 17,
//     course: "web and app development",
//  }

// console.log(obj);
// console.log(obj.name);
// console.log(obj["course"]);

// for (var objKey in obj) {
//     console.log(objKey);
//     console.log(obj[objKey]);
// }

// Car object example
// var car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2020,
//     color: 'Red',
//     mileage: 15000,
//     startEngine: function() {
//         console.log('Engine started');
//     },
//     drive: function(distance) {
//         this.mileage += distance;
//         console.log(`Driving ${distance} miles. Total mileage: ${this.mileage}`);
//     },
//     paint: function(newColor) {
//         this.color = newColor;
//         console.log(`Car painted to ${this.color}`);
//     }
// };

// // Accessing properties
// console.log(`Car brand: ${car.brand}`);
// console.log(`Car model: ${car.model}`);

// // Using methods
// car.startEngine();
// car.drive(100);
// car.paint('Blue');

// var obj = {
//     name: 'Abdullah',
//     age: 17,
//     course: "web and app development",
// }

// var checkProperty = "name" in obj;
// var checkProperty = "car" in obj;
// console.log(checkProperty);

// delete obj.name;
// console.log(obj);

// var std  = {
//     name: "Syed Abdullah",
//     class: "X-A",
//     rollNo: 323513,
// }

// var checkProp = "rollNo" in std;

// console.log(checkProp);

// delete std.class;

// std.name = "Syed Muhammad Abdullah";

// console.log(std);

// var obj = {
//     name: "Syed Abdullah",
//     rollNo: 517310,
//     courses: [
//         "Web and App",
//         "AI"
//     ],
//     marks: {
//         WebAndApp: 90,
//         ai: 80,
//     }
// }

// console.log(obj.courses[0]);
// console.log(obj.marks.WebAndApp);
// console.log(obj.name.length);

// for(var key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

// var obj = {
//     arr1: [1,2,3],
//     arr2: [4,5,6],
//     arr3: [7,8,9],
// }

// for (var key in obj) {

//     console.log(key);

//     // console.log(obj[key]);

//     for (var i = 0; i < obj[key].length; i++) {

//         console.log(obj[key][i]);
//     }
// }

// var std = {
//   firstName: "Syed",
//   lastName: "Abdullah",
//   getFullName: function () {
//     return this.firstName + this.lastName;
//   },
// };

// var fullName = std.getFullName();

// console.log("fullName", fullName);

// var obj = {
//     marks: {
//         html: 80,
//         css: 90,
//         js: 70,
//         react: 60,
//     },

//     getTotalMarks: function() {
//         var total = 0
//         for(var key in this.marks) {
//             total += this.marks[key];
//         }

//         return total
//     },
// }

// var totalMarks = obj.getTotalMarks();

// console.log(totalMarks);

// var obj = {
//     marks: {
//         html: 80,
//         css: 90,
//         js: 70,
//         react: 60,
//     },

//     getFullMarks: function () {
//         var total = 0;

//         for (var key in this.marks){
//             total += this.marks[key]
//             console.log(key, this.marks[key]);
//         }
//         return total;
//     }
// }

// var totalMarks = obj.getFullMarks();
// console.log("totalMarks",totalMarks);

// function Std (first = "", last = "") {
//     this.firstName = first;
//     this.lastName = last
// }

// var std1 = new Std("Syed", "Abdullah")
// std1.age = 17
// console.log(std1);

// ------Constructos------
// function Courses(name, days, campus, timing, trainer, passingStd) {
//     this.name = name;
//     this.days = days;
//     this.timing = timing;
//     this.campus = campus;
//     this.trainer = trainer;
//     this.passingStd = passingStd;

//     this.getCourseName = function () {
//         console.log("123", this.name);

//     }
// }

// Courses.prototype.instName = "SMIT"

// var course1 = new Courses(
//     "MWA",
//     "TTS",
//     "ZA",
//     null,
//     "JA"
// );
// course1.timing = {
//     start: "9am",
//     end: "11am",
// }
// course1.getCampusName = function () {
//     return this.campus
// }

// console.log(course1);
// console.log(course1, course1.getCourseName());

// var course2 = new Courses(
//     "MWA",
//     "MWF",
//     ["ZA", "Malir"],

//     {
//         start: "9pm",
//         end: "11pm",
//     },

//     "Jaffar Aman"
// );

// console.log(course2);

// var std1 = {
//     id: 101,
//     name: "Syed Abdullah",
//     age: 17,
//     email: "abdullah@gmail.com",
//     course: "Web And App",
//     isActive: true,
// }

// var std2 = {
//     id: 102,
//     name: "Amin Ahmed",
//     age: 16,
//     email: "amin@gmail.com",
//     course: "AI and Data Science",
//     isActive: true,
// }

// var std = [std1, std2]
// console.log(std[0]);

// var parent = document.getElementById("parent");

// var std = [
//     {
//         id: 102,
//         name: "Amin Ahmed",
//         age: 16,
//         email: "amin@gmail.com",
//         course: "AI and Data Science",
//         isActive: true,
//     },

//     {
//         id: 101,
//         name: "Syed Abdullah",
//         age: 17,
//         email: "abdullah@gmail.com",
//         course: "Web And App",
//         isActive: true,
//     },
// ]

// My Method
// for(var i = 0; i < std.length; i++) {

//     parent.innerHTML += `<tr></tr>`;

//     for(var key in std[i]) {
//         parent.lastElementChild.innerHTML += ` <td>${std[i][key]}</td> `
//     }
// }

// Sir's Method
// for(var i = 0; i < std.length; i++) {
//     parent.innerHTML += `<tr>
//                 <td>${std[i].id}</td>
//                 <td>${std[i].name}</td>
//                 <td>${std[i].age}</td>
//                 <td>${std[i].email}</td>
//                 <td>${std[i].course}</td>
//                 <td>${std[i].isActive}</td>
//             </tr>`
// }

// Local Storage

// function showVal() {
//     var input = document.getElementById("input")
//     // var userName = document.getElementById("userName")

//     // userName.innerHTML = input.value

//     localStorage.setItem("heading", input.value)

//     getVal()
// }

// function getVal() {
//     var value = localStorage.getItem("heading")
//     var userName = document.getElementById("userName")

//     userName.innerHTML = value;
// }

// localStorage.setItem("bool", true);

// var num = localStorage.getItem("bool")
// console.log(typeof num);

// var arr = ["Syed", "Abdullah"];

// var obj = {
//     a: 10,
//     b: 20,
// }

// console.log(arr);

// localStorage.setItem("obj", obj)

// var getObj = localStorage.getItem("obj")

// console.log(getObj);

// var arr = ["Syed", "Abdullah"];
// var str = JSON.stringify(arr)

// // console.log(str, typeof str);

// localStorage.setItem("userNames", str)

// var userArr = localStorage.getItem("userNames")
// var parseArr = JSON.parse(userArr)

// console.log('userArr', userArr);
// console.log('parseArr', parseArr);

// sessionStorage.setItem("hello", "world")

// var obj = {
//     a: 10,
//     b: 20,
// }

// localStorage.setItem("obj", obj)
// // console.log(localStorage.getItem("obj"));

// var str = JSON.stringify(obj)
// localStorage.setItem("obj", str)
// console.log(str);
// console.log(JSON.parse (str));

// var age = 19;

// switch (age) {
//   case 18:
//     console.log("Age is 18");
//     break;
//   case 20:
//     console.log("age is 20");
//     break;
//   case 22:
//     console.log("Age is 22");
//     break;
//   case 24:
//     console.log("age is 24");

//   default:
//     console.log("age is not matched");
// }




// var arr = ["Karachi", "Lahore", "Islamabad", "Multan"]

// var i = 3;

// // while (i < arr.length) {
// //     console.log(i, arr[i]);

// //     i++
// // }


// do {
//     console.log(arr[i]);
//     // console.log(i);


//     i--
// }
// while (i >= 0)






// function windowHanler(){

//     // window.open("./window.html", "win1", "height:300; width: 300")

//     // window.location.assign("./window.html")
//     // location.href = "./window.html"


// }



// console.log(window.location.hash);




// setTimeout(function () {
//     console.log("Hello");

// }, 2000)


// setInterval(function () {
//     console.log("Hello");

// }, 2000)


// function foo () {
//     console.log("Hello");

// }

// setTimeout(foo, 1000)




// var counter = 0

// var interval = setInterval (function () {
//     console.log(`Hello ${++counter}`);
//     if (counter === 5) {
//         clearInterval(interval)
//     }

// }, 1000)




// var interVal = setInterval(function () {
//     console.log("Interval");
// }, 1000)

// function stopInterval() {
//     clearInterval(interVal)
// }



// console.log("Hello 1");

// setTimeout(function() {
//     console.log("Hello 2");

// }, 1000)

// console.log("Hello 3");



// setInterval(function () {
//     console.log("Hello 1st");

// }, 2000)



// setInterval(function () {
//     console.log("Hello 2nd");

// }, 1000)




// const obj = {
//     name: "Abdullah",
//     age: 17,
//     email: "syed.abdullah7638@gmail.com",
// }

// for (let key in obj) {
//     console.log(obj[key]);
// }


// const {name ,age, email} = obj
// const {age, email} = obj

// console.log(name);
// console.log(age);
// console.log(email);


// let name = "Syed Abdullah"

// console.log(userName);
// console.log(name);





// const arr = ["Abdullah", 17, "male"]

// const [name, age, gander] = arr
// const [name, , gander] = arr
// const [, age, gander] = arr
// const [name, age,] = arr

// console.log(gander);
// console.log(age);
// console.log(name);





// function sum () {
//     console.log(this);
// }
// sum()




// const obj1 = {age: 17}
// const obj2 = obj1

// obj1.age = 20
// obj2.age = 20
// console.log(obj1);
// console.log(obj2);


// const obj1 = {
//     a: 10,
// }
// obj1.b = 20
// const obj2 = {...obj1}
// obj2.a = 50;

// console.log("obj1", obj1);
// console.log("obj2", obj2);


// const obj1 = {
//     a: 10,
//     nestedObj: {
//         b: 100,
//     }
// }

// const obj2 = {...obj1}
// obj2.nestedObj.b = 50;


// const obj1 = {
//     a: 10,
//     nestedObj: {
//         b: 100,
//     }
// }

// const obj2 = JSON.parse(JSON.stringify({...obj1}))
// obj2.nestedObj.b = 50;
// obj2.a = 70


// console.log("obj1", obj1);
// console.log("obj2", obj2);




// fetch("https://fakestoreapi.com/products/")
// .then(res => res.json())

// .then (result => {
//     result.forEach(element => {
//         console.log(element);

//     });
// })

// .catch (error => {
//     console.log("error", error);
// })




// const books = [
//     {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     yearPublished: 1925,
//     genre: "Classic",
//     pages: 180
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     yearPublished: 1960,
//     genre: "Fiction",
//     pages: 281
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     yearPublished: 1949,
//     genre: "Dystopian",
//     pages: 328
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     yearPublished: 1951,
//     genre: "Fiction",
//     pages: 214
//   },
// ];

// books.forEach( (val, index, arr) => {
//     console.log(val);
//     console.log(index);
//     console.log(arr);
// })


// const result = books.filter(ele => ele.yearPublished > 1940)
// console.log(result);

// const tittle = books.map (book => book.title)
// console.log(tittle);



// books.forEach (ele => {
//     ele.author = "Syed Abdullah"
// })
// console.log( "original array", books);


// const arr = [1,2,3,4,5,6,7,8,9]
// const newArr = arr.map(ele => ele + 10)
// console.log(newArr);
// console.log(arr);


// const myBook = books.find (ele => ele.yearPublished > 1950)
// const myBook = books.findIndex (ele => ele.yearPublished > 1950)
// console.log(myBook);




// setTimeout( () => {
//     console.log("Hello");
// },1000)

// fetch("https://fakestoreapi.com/products/")
// .then(ele => ele.json())
// .then (ele => {
//         console.log(ele);
// })
// .catch(err => {
//     console.log(err);

// })


// const promiseOne = new Promise((resolve, reject) => {
//     // setTimeout(()=> {
//     //     resolve("Abdullah")
//     // }, 2000)

//     setTimeout(()=> {
//         reject(new Error ("I am Error"))
//     }, 2000)
// })

// promiseOne.then ((value)=> {
//     console.log(value); 
// }) 
// promiseOne.catch((error) => {
//     console.log(error);
// })


// let p1 = new Promise ((resolve, reject)=> {
//     setTimeout(()=>{
//         console.log("Promise One is resolved");
//         resolve(56)
//     },1000)

// })

// p1.then((value)=>{
//     console.log(value);
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(10)
//         },2000)
//     })
// })
// .then((value)=> {
//     console.log("Promise Two Is Resolved");
//     console.log(value);

// })



const arr = [1, 2, 3, 4, 5, 6]

// const mapArr = arr.map((value) => {
//     // console.log(value);
//     // return value * 2
//     // return true
//     // return false
// })
// console.log(mapArr);


// const filterArr = arr.filter(value => {
//     if (value % 2 == 0) {
//         return true
//     }
// })
// console.log(filterArr);


// const myPromise = new Promise ((resolve, reject) => {
//     // const condition = true
//     const condition = false

//     if (condition) {
//         resolve("Promise Resolved")
//     }else {
//         reject("Promise Rejected")
//     }
// })

// myPromise.then ((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);

// })

// console.log(myPromise);



// const greet = () => {
//     try {
//         // let userName = "Syed Abdullah"
//         console.log("use1");
//         console.log("use1");
//         alert(userName)
//         console.log("use3");
//         console.log("use4");

//     } catch (error) {
//         console.log(error);

//     }
// }
// greet()
// console.log("Hello World");


// const greet = () => {
//     try {
//         const bool = false
//         if (bool) {
//             console.log("Success");
            
//         }else{
//             throw new Error("Condition is not matched!");
//         }
//     }
//     catch(error) {
//         console.log(error);
//     }
// }
// greet()


// const fetchProduct = async () => {
//     try{
//         console.log("API Calling");
//         const response = await fetch("https://fakestoreapi.com/products/").then((res) => res.json())
//         // const response = await fetch("https://fakestoreapi.com/product/").then((res) => res.json())
//         console.log(response);
        
//     } catch(error) {
//         console.log(error);
        
//     }
// }
// fetchProduct()



// ------Class------
// class std {
//     constructor(name,age,gender,email) {
//         this.name = name
//         this.age = age
//         this.gender = gender
//         this.email = email
//     }
// }
// console.log(std);

// const std1 = new std("Abdullah", 17, "male", "abdullah@gmail.com")
// console.log(std1);



// ------Inheritance------

// class commonFields {
//     constructor(name,age,email, gander) {
//         this.name = name
//         this.age = age
//         this.email = email
//         this.gander = gander
//     }
// }


// class std extends commonFields{
//     constructor(name,age,email, gander, stdId) {
//         super(name,age,email, gander)
//         this.stdId = stdId
//     }
// }

// class teacherObj extends commonFields{
//     constructor(name,age,email, gander, teacherId){
//         super(name,age,email, gander)
//         this.teacherId = teacherId
//     }
// }

// const std1 = new std("Abdullah", 17, "abdullah@gmail.com", "male", 101)
// const teacher1 = new teacherObj("Jaffar Aman", 24, "jaffar@gmail.com", "male", 101)
// console.log(std1);
// console.log(teacher1);



// import array from "./data.js";
// console.log(array);

// import {secondUserName, userName} from "./data1.js"
// console.log(userName);
// console.log(secondUserName);



// import { arr2 } from "./data.js"
// // console.log(arr1);
// console.log(arr2);


// import { myFunction } from './data1.js';

// myFunction(); // Will work

import { arr1, arr2 } from "./data1.js"
console.log(arr1);
console.log(arr2);