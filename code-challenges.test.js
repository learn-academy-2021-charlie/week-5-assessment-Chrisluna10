// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("code", () => {
    test("returns a coded message", () => {
      expect(code(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(code(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(code(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })


// b) Create the function that makes the test pass.

// create function called letterValue
// parameter = string
// create a variable that converts certain letters to numbers using colon to define a property
//if statement (if the length of the string is 1, return the string with the new assignments from the number variable)
// return the string with toLowerCase to eliminate any uppercase letters
//split the string into individual strings to itterate through
//map through each string
//join the string back into one.

const letterValue = (string) => {
    var number={
        a: 4, e: 3, i: 1, o: 0
    }
    if(string.length == 1) return number[string] || string;
    return string.toLowerCase().split('').map(letterValue).join('');
    
}

console.log(letterValue(secretCodeWord1))
console.log(letterValue(secretCodeWord2))
console.log(letterValue(secretCodeWord3))

//I was able to get the first and third variable to work but the o was not converting to a 0 for some reason.

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]

describe("letter", () => {
    test("returns all the words that contain the letter a", () => {
      expect(letter(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
      expect(letter(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
    })
  })

// b) Create the function that makes the test pass.

//create a function called letter that takes in an array
//filter through the array and lowercase each value and whether or not it includes "a"
//return that array with value that includes "a"

const letter = (array) => {
    return array.filter(value => value.toLowerCase().includes("a"))
        }

console.log(letter(arrayOfWords1))
console.log(letter(arrayOfWords2))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
    test("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
  })



// b) Create the function that makes the test pass.

// const fullHouse = (array) => {
//     for(let i=0; i<array.length; i++){
//         if(array[i] === )
//     }
// }

// create function called letterValue
// parameter = array
// create a variable with an empty array to take in the values.
// The second part of this function was put together from internet sources.
// I understand most of how this code was put together but I could not find information on like 130 and 132.

const fullHouse = (arr) => {
    let count = []
    for(let x of arr){
      count[x] = (count[x] || 0) + 1;
    }
    let value = Object.values(count);
    if((value[0] === 2 && value[1] === 3) || (value[1] === 2 && value[0] === 3)){
      return true;
    }
    return false;
  }

  console.log(fullHouse(hand1))
  console.log(fullHouse(hand2))
  console.log(fullHouse(hand3))