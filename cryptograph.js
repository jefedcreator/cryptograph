function encrypt(text){
    for(let i = 0; i <text.length ; i++){ // for loop, loops through each characater of the string
        let code = text.toUpperCase().charCodeAt(i); // toUpperCase() method convert each character of the string to uppercase. charCodeAt() takes each character of the string as argument and converts them to ASCII numbers. stores result in 'code' variable
        console.log(code); //logs the results to console
    }
}
encrypt("Hello world");

function decrypt(arr){
    let code = String.fromCharCode(...arr).toUpperCase(); // String.fromCharCode() method takes an argument of arrays and converts all of them to ASCII numbers,toUpperCase() method converts each character of the string to uppercase in order to maintain uniformity. stores the result in the 'code' variable
    console.log(code); // logs the results to console
}
decrypt([73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116]);
