/*
=======================================================

** Week 6 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create an object called "me" that describes you with your name, city, and job title.
//    Display the content of the object in the HTML page.
var me = {
  name: "Lee",
  city: "Denver",
  job_title: "copy editor",
  family: ["Ju", " Nara"]
}
console.log(me)
document.getElementById("q1").innerHTML = "<p>" + me.name + "</p>" + "<p>" + me.city +"<p>" + me.job_title


// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members and display in the HTML page.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

document.getElementById("q2").innerHTML = "<p>" + me.family+ "</p>"
console



// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city and display the results in the HTML page.
document.getElementById("q3a").innerHTML = "<p>" + me.city + "</p>"
document.getElementById("q3b").innerHTML = "<p>" + (me['city']) + "</p>"









// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };


// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
document.getElementById("q4").innerHTML = "<p>" + invitees.adults[0].dinnerChoice[1] + "</p>"

// 5. Access Pablo's table number.
document.getElementById("q5").innerHTML = "<p>" + invitees.children[1].table + "</p>"

// 6. Access Lauren's seating specialConsideration.
document.getElementById("q6").innerHTML = "<p>" + invitees.adults[2].specialConsiderations['seating'] + "</p>"

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
document.getElementById("q7").innerHTML = "<p>" + invitees.adults[1].dinnerChoice[2] + "</p>"

// 8. Access Ada's allergies.
document.getElementById("q8").innerHTML = "<p>" + invitees.children[2].allergies + "</p>"

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
document.getElementById("q9").innerHTML = "<p>" + "Lauren's appetizer is " + invitees.adults[2].dinnerChoice[0] + ". " + "She will be eating " +  invitees.adults[2].dinnerChoice[1]
+ "for dinner, and has selected " + invitees.adults[2].dinnerChoice[2] + " as her dessert." + "</p>"






// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
var jsWorkshop = new Object()
console.log(jsWorkshop);

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
jsWorkshop.classmates = ['Mark', 'Luke', 'Peter', 'Paul']

document.getElementById("q11").innerHTML = "<p>" + jsWorkshop.classmates + "</p>"

// 12. Get the length of the fourth classmate's name.
document.getElementById("q12").innerHTML = "<p>" + jsWorkshop.classmates[3].length + "</p>"


// 13. Clear the classmates value.
jsWorkshop.classmates = '';
console.log(jsWorkshop)





// ADVANCED TRACK
// A. Create an empty object called "books".
var books = {};
console.log(books);

// B. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.

// Final desired result:
    // var books = {ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             }
    var bookone = {
      title: 'I am',
      author: 'me',
      pages: 1
    }

    var booktwo = {
      title: 'your',
      author: 'you',
      pages: 2,
    }

    var bookthree = {
      title: 'she',
      author: 'her',
      pages: 3,
    }

    books.isbn123= bookone;
    books.isbn1234= booktwo;
    books.isbn12345= bookthree;

    console.log(books);
// C. Access the author of the first book.
console.log(books.isbn123.author);
// D. Get the length of the author the the third book.
console.log(books.isbn12345.author.length);
// E. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)
bookone.dateRead = 'today'
booktwo.dateread = 'tomorrow'
bookthree.dateRead = 'yesterday'
console.log(books);
// F. Remove the second book from the books object.
books.isbn1234.delete
console.log(books);
// G. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
