// Exercise -1 - Quelle sera la valeur de C à la fin de cet algoritme?

// let A = 12;
// let B = 2 ;
// let C = A * B;
// console.log(C)


// Exer-2: Quel serait la valeur de c à la fin de cette algo?

/*let A = "123";
let B = "12";
let C = A + B;
console.log(C)*/

//******************************************************************************************* */

//Exer - 3 : -  écrire un algoritme qui demande à l'utilisateur 
//le prix Hors taxe d'un objet et qui donne sa valeur TTC (multiplier le prix par 1.196).


/*var prixHT = 2

var prixTTC = prixHT * 1.196

prixTTC = 2..*/

/*********************************************************************************** */

// Exer 4 -;

// var yt = prompt('Quel est votre prénom ?')
// var kj = prompt('Entrez votre nom') 
// var go = prompt('"Bonjour ", prenom, " votre nom est ", nom')

//************************************************************************************ */

//Exercise- 5.

//Variable n en Entier

/*var to = prompt("Entrez un nombre : ")
//Lire n
// Si n > 0 Alors
  var be = prompt('Ce nombre est positif' )
// Sinon
  var gik = prompt("Ce nombre est négatif")
// Finsi
// Fin*/


//console.log()

//Exercise 6' ****************************************************

//function getFilm(age) {// Variable age en Entier
// Début

// let age = prompt("Entrez l’âge de l’enfant : ") 
//Lire age
//Si age < 13 Alors
// if (age < 13) {
//     return "Action Man"
// }
// if (age >= 13 && age < 18) {
//     return "Matrix"
    
// }
//     return "Evil Dead"
// }
// console.log(getFilm(10))
// console.log(getFilm(13))
// console.log(getFilm(19))


// Exercise 7:******************************

/*const correctNumber = 7;  // Set the correct number

// Loop until the user inputs the correct number
while (true) {
    // Ask the user to input a number between 0 and 10
    const userNumber = parseInt(prompt("Please enter a number between 0 and 10:"));
    
    // Check if the user's number is correct
    if (userNumber === correctNumber) {
        console.log("Congratulations! You guessed the correct number.");
        break;
    }
}*/



// Exercise - 8:  ***************************************

// Ask the user to input a digit
// const digit = parseInt(prompt("Please enter a digit:"));

// // Loop from the entered digit down to 0
// for (let i = digit; i >= 0; i--) {
//     console.log(i);
// }

//******************************************************************

// Exercise - 9:

// Loop until the user guesses the correct number
/*while (true) {
    // Ask the user to input a guess
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
    
    // Check if the user's guess is correct
    if (userGuess === correctNumber) {
        console.log("Congratulations! You guessed the correct number.");
        break;
    }
    
    // Provide feedback to the user about their guess
    if (userGuess > correctNumber) {
        console.log("Your guess is too high.");
    } else {
        console.log("Your guess is too low.");
    }
}

//********************************************************* */

//Exrcise 10:

/*const chiffres = [10, 15, 20, 15, 14, 8];
let somme = 0;

// Parcourir le tableau et ajouter chaque valeur à la somme
for (let i = 0; i < chiffres.length; i++) {
    somme += chiffres[i];
}

console.log("La somme des valeurs du tableau est : " + somme);*/

//*************************************************************************//


// Exercise - 11 :

// Demander à l'utilisateur de saisir le nombre d'élèves
/*const numStudents = parseInt(prompt("Veuillez entrer le nombre d'étudiants :"));

// Initialise un tableau vide pour stocker les notes
notes constantes = [] ;

// Boucle sur le nombre d'étudiants et demande leurs notes
for (let i = 0; i < numStudents; i++) {
    const grade = parseFloat(prompt(`Veuillez saisir la note de l'élève ${i+1}:`));
    notes.push(note);
}

// Imprimer les notes sur la console
console.log("Les notes de la classe sont :", notes);*/

//****************************************************** */

// Exercise - 12:


// // Ask the user to input the number of students
// const numStudents = parseInt(prompt("Please enter the number of students:"));

// // Initialize an empty array to store the grades
// const grades = [];

// // Loop over the number of students and ask for their grades
// for (let i = 0; i < numStudents; i++) {
//     const grade = parseFloat(prompt(`Please enter the grade for student ${i+1}:`));
//     grades.push(grade);
// }

// // Calculate the average grade
// const sum = grades.reduce((total, grade) => total + grade, 0);
// const average = sum / grades.length;

// // Find the number of students above the average grade
// let numAboveAverage = 0;
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] > average) {
//         numAboveAverage++;
//     }
// }

// // Print the grades, average, and number of students above average to the console
// console.log("The grades for the class are:", grades);
// console.log("The average grade is:", average.toFixed(2));
// console.log(`There are ${numAboveAverage} students above the average grade.`);

//*************************************************************** */

// Exercise - 13 :

// const counts = [[0, 18], [1, 45], [45, 48], [-3, 2]];

// // Initialize a variable to store the largest value
// let largestValue = counts[0][0];

// // Loop over the array and compare each value to the current largest value
// for (let i = 0; i < counts.length; i++) {
//     for (let j = 0; j < counts[i].length; j++) {
//         if (counts[i][j] > largestValue) {
//             largestValue = counts[i][j];
//         }
//     }
// }

// console.log("The largest value in the array is:", largestValue);

//************************************************************** */

// Exercise - 14 :

// const word = prompt("Please enter a word:");
// const numLetters = word.length;
// console.log(`The word "${word}" has ${numLetters} letters.`);

//********************************************************* */

// Exercise - 15 ;

// // Generate a random number between 0 and 5
// const randomNumber = Math.floor(Math.random() * 6);

// // Initialize a variable to store the user's guess
// let userGuess;

// // Loop until the user guesses the correct number
// while (userGuess !== randomNumber) {
//     // Ask the user to guess the number
//     userGuess = parseInt(prompt("Please guess a number between 0 and 5:"));

//     // Check if the user's guess is bigger, smaller, or equal to the random number
//     if (userGuess > randomNumber) {
//         console.log("Your guess is too big. Please try again.");
//     } else if (userGuess < randomNumber) {
//         console.log("Your guess is too small. Please try again.");
//     } else {
//         console.log("Congratulations! You guessed the correct number.");
//     }
// }

//***************************************************** */

// Exercise - 16 : 

// function compare(A, B) {
//     if (A > B) {
//     return 0;
//     } else {
//     return 1;
//     }
//     }

//     // const result = compare(5, 3);
// console.log(result); // Output: 0

//********************************************************* */

// Exercise - 17 :

// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// const words = ["banana", "apple", "cherry", "date"]; words.sort(); console.log(words); // Output: ["apple", "banana", "cherry", "date"]

//************************************************************ */

// Exercise - 18 ;

// function findLargestNumber(numbers) {
//     let largest = numbers[0]; // initialize largest to first element of the array
//     // loop through each element of the array and compare with current largest
//     for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//     largest = numbers[i];
//     }
//     }
//     return largest;
    


// const numbers = [5, 2, 8, 1, 6] ; const largest = findLargestNumber(numbers) ; console.log(largest) ;

//***************************************************************** */

// Exercise - 19:

// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//     count++;
//     }
//     }
//     return count;
//     }
//     Here's an example usage of the function:
//     const str = "Hello, world!";
//     const vowelCount = countVowels(str);
//     console.log(vowelCount); // Output: 3

//************************************************************ */

// Exercise - 20 : 

// function getEvenNumbers(inputArray) {
//     // Crée un nouveau tableau contenant les nombres pairs
//     let evenNumbers = [] ;
//     // Itère à travers le tableau d'entrée
//     for (let i = 0 ; i < inputArray.length ; i++) {
//     // Vérifie si le nombre actuel est pair
//     if (inputArray[i] % 2 === 0) {
//     // Ajoute le nombre pair au nouveau tableau
//     evenNumbers.push(inputArray[i]) ;
//     }
//     }

//     // Retourne le nouveau tableau contenant uniquement les nombres pairs
//     return evenNumbers ;
//     }
//     //Vous pouvez utiliser cette fonction comme suit :
//     let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] ;
//     let evenNumbers = getEvenNumbers(inputArray) ;
//     console.log(evenNumbers) ; // Sortie : [2, 4, 6, 8]

//************************************************************ */

// Exercise - 21 :

// function reverseWords(inputString) {
//     // Divise la chaîne d'entrée en un tableau de mots
//     let wordsArray = inputString.split(' ') ;
//     // Itère à travers le tableau de mots et inverse chaque mot
//     let reversedWordsArray = wordsArray.map(function(word) {
//     return word.split('').reverse().join('') ;
//     }) ;
//     // Réunir les mots inversés en une chaîne de caractères et la renvoyer
//     return reversedWordsArray.join(' ') ;
//     }


//     //Vous pouvez utiliser cette fonction comme suit :
    
//     let inputString = 'Hello world, how are you?' ;
//     let reversedString = reverseWords(inputString) ;
//     console.log(reversedString) ; // Résultat : 'olleH dlrow, woh era ?uoy'.

//************************************************************* */

// Exercises de l'algoritme, exam - 2/em part. 14.03.23

// Exercise 1:

// Voici comment réécrire la fonction length() en JavaScript en utilisant le nom myLength()


/*function myLength(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}*/

//*************************************************************************************** */

// Exercise - 2:

// Voici comment réécrire la fonction trim() en JavaScript en utilisant le nom myTrim() :

// function myTrim(str) {
//   let start = 0;
//   let end = str.length - 1;

//   while (start < end && str[start] === " ") {
//     start++;
//   }

//   while (end > start && str[end] === " ") {
//     end--;
//   }

//   return str.substring(start, end + 1);
// }

//****************************************************************************************** */

//Exercise 1Bis:

// let number = 0;

// while (number < 1 || number > 3) {
//   number = parseInt(prompt("Veuillez entrer un nombre entre 1 et 3 :"));

//   if (number < 1 || number > 3) {
//     alert("Le nombre entré est invalide. Veuillez réessayer.");
//   }
// }

// alert("Le nombre entré est " + number + ".");

//***************************************************************************************** */

//Exercise 2Bis:

// let number = 0;

// while (number < 10 || number > 20) {
//   number = parseInt(prompt("Veuillez entrer un nombre entre 10 et 20 :"));

//   if (number < 10) {
//     alert("Plus grand !");
//   } else if (number > 20) {
//     alert("Plus petit !");
//   }
// }

// alert("Le nombre entré est " + number + ".");

//****************************************************************************************** */

// Exercise - 3:

// let startNumber = parseInt(prompt("Veuillez entrer un nombre de départ :"));

// for (let i = startNumber + 1; i <= startNumber + 10; i++) {
//   console.log(i);
// }

//************************************************************************************** */

// Exercise - 4:

// Voici comment réécrire l'algorithme précédent en utilisant une instruction Pour (for) :

// let startNumber = parseInt(prompt("Veuillez entrer un nombre de départ :"));

// for (let i = startNumber; i < startNumber + 10; i++) {
//   console.log(i + 1);
// }

//************************************************************************************** */

// Exercise 5:

// let nombre = parseInt(prompt("Entrez un nombre : "));
// console.log(`Table de ${nombre} :`);
// for (let i = 1; i <= 10; i++) {
//     let produit = nombre * i;
//     console.log(`${nombre} x ${i} = ${produit}`);
// }

//*************************************************************************************** */

// Exercise - 6:

// let nombre_depart = parseInt(prompt("Entrez un nombre entier : "));
// let somme = 0;

// for(let i = 1; i <= nombre_depart; i++) {
//     somme += i;
// }

// console.log("La somme des entiers jusqu'à", nombre_depart, "est", somme);

//************************************************************************************** */

// Exercise - 7:

// let nombre_depart = parseInt(prompt("Entrez un nombre entier : "));
// let factorielle = 1;

// for(let i = 1; i <= nombre_depart; i++) {
//     factorielle *= i;
// }

// console.log("La factorielle de", nombre_depart, "est", factorielle);

//********************************************************************************** */

// Exercise - 8:

// Initialisation de la variable max avec une valeur très petite
// let max = -999999999;

// // Boucle pour demander successivement 20 nombres à l'utilisateur
// for (let i = 0; i < 20; i++) {
//   let nombre = prompt("Entrez un nombre :");

//   // Conversion de la chaîne de caractères en nombre entier
//   nombre = parseInt(nombre);

//   // Vérification si le nombre entré est plus grand que le maximum actuel
//   if (nombre > max) {
//     max = nombre;
//   }
// }

// // Affichage du plus grand nombre
// alert("Le plus grand nombre est : " + max);

//************************************************************************************* */

// Exercise - 9:

// Initialisation de la variable max avec une valeur très petite
// let max = -999999999;
// let nombre;
// // Boucle pour demander successivement 20 nombres à l'utilisateur
// while (nombre !== 0) {
//   let nombre = prompt("Entrez un nombre :");

//   // Conversion de la chaîne de caractères en nombre entier
//   nombre = parseInt(nombre);

//   // Vérification si le nombre entré est plus grand que le maximum actuel
//   if (nombre > max) {
//     max = nombre;
//   }
// }

// // // Affichage du plus grand nombre
// alert("Le plus grand nombre est : " + max);

//************************************************************************************* */

// Exercise - 10:

// Demander à l'utilisateur le numéro de l'anniversaire n
// let n = parseInt(prompt("Entrez le numéro de l'anniversaire n de Marie :"));

// // Initialisation de la somme initiale et de l'âge initial
// let somme = 0;
// let age = 0;

// // Boucle pour ajouter la somme à chaque anniversaire
// while (age < n) {
//   age++;
//   somme += 100 + age * 2;
// }

// // Affichage de la somme à l'anniversaire n
// alert("À l'anniversaire n°" + n + ", Marie aura " + somme + "€ sur son compte.");

