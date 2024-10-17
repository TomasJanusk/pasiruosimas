// const div = document.querySelector("#app");
// const button = document.createElement("button");
// button.textContent = "BUTTON";
// div.append(button);

// const eventHandler = () => {
//   for (let i = 1; i <= 10; i++) {
//     let but = document.createElement("button");
//     but.style.backgroundColor = "limegreen";
//     but.style.color = "white";
//     but.textContent = "Click";
//     div.append(but);
//   }
// };
// button.addEventListener("click", eventHandler);
// //-----------------------------------------------
// let userList = [
//   "Gabriele",
//   "Laura",
//   "Greta",
//   "Egle",
//   "Ieva",
//   "Milda",
//   "Jurgita",
//   "Rasa",
//   "Giedre",
//   "Ingrida",
// ];

// for (let user of userList) {
//   if (user.length == 5 || user.toLocaleLowerCase() === "milda") {
//     console.log(user);
//   }
// }
// //--------------------------------------------------------
// let students = [
//   {
//     id: 1,
//     firstName: "Jonas",
//     lastName: "Jonaitis",
//     age: 30,
//     email: "jonas@gmail.com",
//     group: "students",
//   },
//   {
//     id: 2,
//     firstName: "Jonas",
//     lastName: "Jonaitis",
//     age: 22,
//     email: "jonas@gmail.com",
//     group: "students",
//   },
//   {
//     id: 3,
//     firstName: "Jonas",
//     lastName: "Jonaitis",
//     age: 23,
//     email: "jonas@gmail.com",
//     group: "students",
//   },
//   {
//     id: 4,
//     firstName: "Jonas",
//     lastName: "Jonaitis",
//     age: 30,
//     email: "jonas@gmail.com",
//     group: "students",
//   },
//   {
//     id: 5,
//     firstName: "Jonas",
//     lastName: "Jonaitis",
//     age: 24,
//     email: "jonas@gmail.com",
//     group: "students",
//   },
// ];

// console.log(`Studentu sarasas:`);
// for (let student of students) {
//   console.log("-----------------------------");
//   if (student.age <= 25) {
//     for (let property in student) {
//       console.log(`${property}:${student[property]}`);
//     }
//   }
// }
// //--------------------------------------------------------------
// let firstName = prompt("Ivesk varda");
// alert(firstName);
// //----------------------------------------------------------------
// let guestNumber = prompt("Ivesk sveciu skaiciu");

// let guestList = [];

// for (let i = 0; i < guestNumber; i++) {
//   let guestName = prompt(`Iveskite ${i + 1}-o svecio varda`);
//   guestList.push(guestName);
// }
// console.log("Sveciu sarasas:");
// for (let guest of guestList) {
//   console.log(guest);
// }
// //----------------------------------------------------------------
// function firstAndLastEl(string) {
//   let firstEl = string[0];
//   let lastEl = string[string.length - 1];

//   if (firstEl === "p" && lastEl === "p") {
//     return string.slice(1, -1);
//   } else if (firstEl === "p") {
//     return string.slice(1);
//   } else if (lastEl === "p") {
//     return string.slice(0, -1);
//   } else {
//     return string;
//   }
// }

// console.log(firstAndLastEl("Kaunas"));
// //------------------------------------------------------------------
// const addNumber = (...numbers) => {
//   let sum = 0;
//   for (let num of numbers) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(addNumber(5, 5, 5));
// //--------------------------------------------------------------
// const addNumber2 = (...numbers) => {
//   const sum = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
//   return sum;
// };

// console.log(addNumber2(3, 7, 4, 6));
// //----------------------------------------------------------------
// const div = document.querySelector("#app");
// const button = document.createElement("button");
// button.textContent = "Click";
// button.style.backgroundColor = "red";
// button.style.color = "white";
// div.append(button);

// const sectionHandler = () => {
//   for (let i = 1; i <= 4; i++) {
//     const section = document.createElement("section");
//     section.textContent = "labas";
//     section.style.color = "white";
//     section.style.backgroundColor = "blue";
//     div.append(section);
//   }
// };
// button.addEventListener("click", sectionHandler);
////-----------------------------------------------------
// const articles = document.querySelectorAll("article");

// for (let article of articles) {
//   article.addEventListener("click", (e) => {
//     console.log(e.target)
//     e.target.style.backgroundColor = "#ddaa33";
//   });
// }
////---------------------------------------------------------------
// document.querySelector("form").addEventListener("submit", (e) => {
//     e.preventDefault()
//   for (let article of document.querySelectorAll("article h1")) {
//     article.innerHTML = document.querySelector("input").value;
//   }
// });
////-----------------------------------------------------------
// document.querySelector(".todo form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   let li = document.createElement("li");
//   li.textContent = document.querySelector(".todo form input").value;
//   document.querySelector('.todo ul').append(li)
// });
////--------------------------------------------------------------
// document.querySelector(".feedback form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   let h2 = document.createElement("h2");
//   h2.textContent = document.querySelector("#exampleFormControlInput1").value;
//   document.querySelector("#generalDiv").append(h2);
//   let h5 = document.createElement("h5");
//   h5.textContent = document.querySelector("#exampleFormControlInput2").value;
//   document.querySelector("#generalDiv").append(h5);
//   let p = document.createElement("p");
//   p.textContent = document.querySelector("#exampleFormControlTextarea1").value;
//   document.querySelector("#generalDiv").append(p);
// });
////---------------------------------------------------------

// document.querySelector(".feedback form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   let columns = parseInt(
//     document.querySelector("#exampleFormControlInput1").value
//   );
//   let row = parseInt(document.querySelector("#exampleFormControlInput2").value);
//   let tableHTML = `<table border='1'>`;
//   for (let i = 0; i < row; i++) {
//     tableHTML += `<tr>`;
//     for (let j = 0; j < columns; j++) {
//       tableHTML += `<td>CELL</td>`;
//     }
//   }
//   tableHTML += `</tr>`;
//   tableHTML += `</table`;
//   document.querySelector(".table").innerHTML = tableHTML;
// });
////-------------------------------------------------------------------
// const students = [
//   "Audrius",
//   "Karolis",
//   "Jonas",
//   "Arunas",
//   "Giedrius",
//   "Viktorija",
//   "Erika",
//   "Auge",
//   "Violeta",
//   "Deimante",
// ];

// let ranStud = [];

// for (let i = 0; i < 10; i++) {
//   ranStud.push(students[Math.floor(Math.random() * students.length)]);
// }
// console.log(ranStud);

// let sk = 0;
// for (let student of students) {
//   sk += 1;                              //sunumeruoja studentu vardus
//   let li = document.createElement("ol");
//   li.textContent = `${sk}. ${student}`;
//   document.querySelector("ul").append(li);
//   if (student.length > 6) {
//     li.style.color = "red";
//   } else {
//     li.style.color = "blue";
//   }
// }

// let newStudents= []

// for (let i = 0; i < students.length; i++) {
//     let studentName = students[i];
//     let newStudentName = studentName[0] + studentName[studentName.length - 1];
//     newStudents.push(newStudentName);
//     newStudents.join(',')
//     let h1=document.createElement('h1')
//     h1.textContent=newStudentName
//     document.querySelector("ul").append(h1);
// }
////---------------------------------------------------------------------

// for (let i = 0; i < 16; i++) {
//   let div = document.createElement("div");

//   div.style.backgroundColor = "red";
//   div.style.height = "200px";
//   div.style.width = "25%";
//   document.querySelector(".row").append(div);
// }
// const random = () => {
//   return Math.floor(Math.random() * 255);
// };

// const randomBg = () => {
//   return `rgb(${random()},${random()},${random()})`;
// };

// for (let div of document.querySelectorAll(".row div")) {
//   div.onclick = (e) => {
//     e.target.style.backgroundColor = randomBg();
//   };
// }
// //--------------------------------------------------------------------



const imagesArray = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
];

const button1 = document.querySelector("#rodyti");

button1.addEventListener("click", () => {
  displayImages(imagesArray);
  button1.style.display = "none";
});

const button2 = document.querySelector("#maisyti");

button2.addEventListener("click", () => {
  shuffle(imagesArray);
  clearImages(); // Clear the current images
  displayImages(imagesArray); // Display the shuffled images
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function clearImages() {
  const ul = document.querySelector("ul");
  ul.innerHTML = ""; // Clear all the existing images from the list
}

function displayImages(array) {
  const ul = document.querySelector("ul");
  for (let i = 0; i < array.length; i++) {
    let newImage = document.createElement("img");
    newImage.src = array[i];
    newImage.style.height = "25%";
    newImage.style.width = "25%";

    let li = document.createElement("li");
    li.append(newImage);
    ul.appendChild(li);

    newImage.addEventListener("dblclick", (e) => {
      e.target.src = "images/4.jpg";
      
    });
  }
}
//-------------------------------------------------------------------



