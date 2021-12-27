
function encrypt(text){
    let newArr = []; //initiates new array
    for(let i = 0; i <text.length ; i++){
        let code = text.charCodeAt(i); //for loop loops through each character, changing each character to an ASCII number using the charCodeAt() method 
        newArr.push(code); //push each code variable to newArr array on every loop 
    }
    let coded = newArr.map(newCode => newCode + 5); //map method which takes every number value in the newArr array and adds 5 to each and returns a new array 'coded' 
    let newCode = String.fromCharCode(...coded); //String.fromCharCode() method takes an argument of arrays(ASCII numbers) and converts all of them to strings ,toUpperCase() method converts each character of the string to uppercase in order to maintain uniformity. stores the result in the 'newCode' variable
    console.log(newCode); // logs the results to console
}
encrypt("Hello");

function decrypt(text){
    let newArr = []; //initiates new array
    for(let i = 0; i <text.length ; i++){
        let code = text.charCodeAt(i); //for loop loops through each character,changing each character to an ASCII number using the charCodeAt() method 
        newArr.push(code); //push each code variable to newArr array on every loop 
    }
    let coded = newArr.map(newCode => newCode - 5); //map method which takes every number value in the newArr array and subtracts 5 from each and returns a new array 'coded' 
    let newCode = String.fromCharCode(...coded); //String.fromCharCode() method takes an argument of arrays(ASCII numbers) and converts all of them to strings ,toUpperCase() method converts each character of the string to uppercase in order to maintain uniformity. stores the result in the 'newCode' variable
    console.log(newCode); // logs the results to console
}

decrypt("Mjqqt");

