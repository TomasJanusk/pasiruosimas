// let words = "This is sample sentence";

// let max = "";

// function findLongestWord(text) {
//   let wordArray = words.split(" ");
//   for (let i = 0; i < wordArray.length; i++) {
//     if (wordArray[i].length > max.length) {
//       max = wordArray[i];
//     }
//   }
//   return max;
// }
// console.log(findLongestWord(words));

// //----------------------------------------------

// let maxNumber = [];

// function findMax(...numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//       maxNumber = numbers[i];
//     }
//   }
//   return maxNumber;
// }
// console.log(findMax(1, 45, 78, 456, 34));
// //-----------------------------------------------
// function reverseString(str) {
//   let splitString = str.split("");
//   let reverseArray = splitString.reverse();
//   let joinArray = reverseArray.join("");
//   return joinArray;
// }

// console.log(reverseString("krokodilas"));
// //---------------------------------------------------

// function titleCase(str) {
//   let splitStr = str.toLowerCase().split(" ");
//   for (let i = 0; i < splitStr.length; i++) {
//     splitStr[i] =
//       splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }
//   return splitStr.join(" ");
// }

// console.log(titleCase("this is a sample sentence"));
// //------------------------------------------------------------

// let booksArray = [
//   {
//     name: "Fantasy",
//     books: [
//       {
//         isbn: "FAN001",
//         release_date: 2022,
//         title: "D Fantasy Book 1",
//         num_of_pages: 120,
//         price: 125.56,
//       },
//       {
//         isbn: "FAN002",
//         release_date: 2021,
//         title: "C Fantasy Book 2",
//         num_of_pages: 150,
//         price: 25.56,
//       },
//       {
//         isbn: "FAN003",
//         release_date: 2020,
//         title: "A Fantasy Book 3",
//         num_of_pages: 170,
//         price: 35.7,
//       },
//       {
//         isbn: "FAN004",
//         release_date: 2019,
//         title: "B Fantasy Book 4",
//         num_of_pages: 190,
//         price: 40.1,
//       },
//     ],
//   },
//   {
//     name: "Poetry",
//     books: [
//       {
//         isbn: "POE001",
//         release_date: 2008,
//         title: "X Poetry Book 1",
//         num_of_pages: 99,
//         price: 36.78,
//       },
//       {
//         isbn: "POE002",
//         release_date: 2023,
//         title: "C Poetry Book 2",
//         num_of_pages: 139,
//         price: 78.8,
//       },
//       {
//         isbn: "POE003",
//         release_date: 2006,
//         title: "D Poetry Book 3",
//         num_of_pages: 159,
//         price: 56.6,
//       },
//       {
//         isbn: "POE004",
//         release_date: 2005,
//         title: "A Poetry Book 4",
//         num_of_pages: 179,
//         price: 78.7,
//       },
//     ],
//   },
//   {
//     name: "Horror",
//     books: [
//       {
//         isbn: "HOR001",
//         release_date: 2004,
//         title: "G Horror Book 1",
//         num_of_pages: 300,
//         price: 100.05,
//       },
//       {
//         isbn: "HOR002",
//         release_date: 2006,
//         title: "E Horror Book 2",
//         num_of_pages: 500,
//         price: 250.5,
//       },
//       {
//         isbn: "HOR003",
//         release_date: 2023,
//         title: "F Horror Book 3",
//         num_of_pages: 600,
//         price: 13.37,
//       },
//       {
//         isbn: "HOR004",
//         release_date: 2000,
//         title: "R Horror Book 4",
//         num_of_pages: 650,
//         price: 85.36,
//       },
//     ],
//   },
// ];

// function displayBooksByCategory(category) {
//   let filteredArray = booksArray.filter((categoryObj) => {
//     return categoryObj.name.toLowerCase() === category.toLowerCase();
//   });

//   // Clear any previous results
//   document.querySelector("ul").innerHTML = "";

//   // Check if the category exists
//   if (filteredArray.length === 0) {
//     alert("No books found for the specified category.");
//     return;
//   }

//   // Display the books in the specified category
//   for (let book of filteredArray[0].books) {
//     const li = document.createElement("li");
//     li.innerHTML = `<h3>${book.title}</h3>`;
//     document.querySelector("ul").appendChild(li);
//   }
// }

// // Prompt the user for a category
// let category = prompt("Įveskite kategoriją");

// displayBooksByCategory(category);
////----------------------------------------------------------------------
const array = [
  {
    id: 1,
    patarimas:
      "Kiekvieną dieną užrašykite, ką išmokote ir ką norėtumėte dar išmokti. Tai padės jums stebėti savo pažangą ir identifikuoti sritis, kuriose reikia tobulėti.",
  },
  {
    id: 2,
    patarimas:
      "Ieškokite mokymosi partnerio arba draugo, su kuriuo galėtumėte dalintis žiniomis ir mokytis kartu. Diskutuodami su kitu žmogumi galite giliau suprasti temą ir lengviau įsisavinti naują medžiagą.",
  },
  {
    id: 3,
    patarimas:
      "Sukurkite efektyvią laiko valdymo sistemą, kuri padės jums efektyviau planuoti mokymosi laiką ir išlaikyti produktyvumą.",
  },
  {
    id: 4,
    patarimas:
      "Naudokite mokymosi programas ir technologijas, kurios gali padėti jums įsisavinti medžiagą interaktyviai ir įdomiai.",
  },
  {
    id: 5,
    patarimas:
      "Pasirinkite kokybiškus mokymosi vadovėlius, kurie gerai struktūruoti ir pateikia aiškią informaciją. Tai padės jums suprasti sunkias temas lengviau.",
  },
  {
    id: 6,
    patarimas:
      "Kiekvieną dieną sukurti mokymosi įpročius ir laikytis jų. Nuoseklumas yra labai svarbus norint pasiekti mokymosi tikslus.",
  },
  {
    id: 7,
    patarimas:
      "Sukurkite raminančią mokymosi aplinką, kurioje galėtumėte susikoncentruoti ir dirbti be pertraukų.",
  },
  {
    id: 8,
    patarimas:
      "Nustatykite aiškius ir realistiškus mokymosi tikslus, kurie padės jums sukoncentruoti pastangas į svarbiausias sritis.",
  },
  {
    id: 9,
    patarimas:
      "Išmokite įvairias mokymosi strategijas, kurios geriausiai atitinka jūsų mokymosi stilių ir poreikius.",
  },
  {
    id: 10,
    patarimas:
      "Nustatykite sau mokymosi apdovanojimus už pasiektus tikslus arba sėkmes mokymosi procese. Tai padės jums išlaikyti motyvaciją ir džiugintis savo pažanga.",
  },
];

function createMessage() {
  for (let i = 0; i < array.length; i++) {
    let h1 = document.createElement("h1");
    h1.textContent = array[i].patarimas;
    let div = document.createElement("div");
    if (i === 0) {
      div.setAttribute("class", "carousel-item active");
    } else {
      div.setAttribute("class", "carousel-item");
    }
    h1.setAttribute("class", "d-block w-100");
    div.append(h1);
    let carusele = document.querySelector("#carusele");
    carusele.append(div);
  }
}
createMessage();
