function encrypt(text){
    for(let i = 0; i <text.length ; i++){
        let code = text.toUpperCase().charCodeAt(i);
        console.log(code);
    }
}

encrypt("Hello world");

function decrypt(arr){
    let code = String.fromCharCode(...arr).toUpperCase();
    console.log(code);
}

decrypt([73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116]);
