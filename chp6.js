
// Take a number in a variable
let a = 10;

// Display the initial value of a
document.write("The value of a is " + a + "<br>");

// Increment a using prefix increment operator
document.write("The value of ++a is " + ++a + "<br>");
document.write("Now the value of a is " + a + "<br>");

// Increment a using postfix increment operator
document.write("The value of a++ is " + a++ + "<br>");
document.write("Now the value of a is " + a + "<br>");

// Decrement a using prefix decrement operator
document.write("The value of --a is " + --a + "<br>");
document.write("Now the value of a is " + a + "<br>");

// Decrement a using postfix decrement operator
document.write("The value of a-- is " + a-- + "<br>");
document.write("Now the value of a is " + a + "<br>");
  

//question 2//
let A = 2;
let b = 1;
let result = --a - --b + ++b + b--;

console.log("a is " + a);
console.log("b is " + b);
console.log("Result is " + result);


//question 3//
let name = prompt("Please enter your name:");
alert("Hello, " + name + "!");

//question 5//
document.write("<table border='1'>");
  document.write("<tr><th>Multiplication Table of 4</th></tr>");
  document.write("<tr><td>4 x 1 = 4</td></tr>");
  document.write("<tr><td>4 x 2 = 8</td></tr>");
  document.write("<tr><td>4 x 3 = 12</td></tr>");
  document.write("<tr><td>4 x 4 = 16</td></tr>");
  document.write("<tr><td>4 x 5 = 20</td></tr>");
  document.write("<tr><td>4 x 6 = 24</td></tr>");
  document.write("<tr><td>4 x 7 = 28</td></tr>");
  document.write("<tr><td>4 x 8 = 32</td></tr>");
  document.write("<tr><td>4 x 9 = 36</td></tr>");
  document.write("<tr><td>4 x 10 = 40</td></tr>");
  document.write("</table>");

  //question 6//
  let subject1 = prompt("Enter subject 1 name:");
  let subject2 = prompt("Enter subject 2 name:");
  let subject3 = prompt("Enter subject 3 name:");

  // Total marks for each subject is 100, store it in another variable
  let totalMarks = 100;

  // Take obtained marks for first subject from user and stored it in different variable
  let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

  // Take obtained marks for remaining 2 subjects from user and store them in variables
  let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
  let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

  // Calculate total marks and percentage
  let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
  let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

  // Show the result in browser
  document.write("<table border='1'>");
  document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarks + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarks + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarks + "</td></tr>");
  document.write("<tr><th>Total</th><th>" + totalObtainedMarks + "</th><th>" + totalMarks * 3 + "</th></tr>");
  document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
  document.write("</table>");



