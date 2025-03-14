
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

