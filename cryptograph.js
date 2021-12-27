
function encrypt(text){
    let newArr = [];
    for(let i = 0; i <text.length ; i++){
        let code = text.toUpperCase().charCodeAt(i);
        newArr.push(code)
    }
    let coded = newArr.map(newCode => newCode + 10);
    let newCode = String.fromCharCode(...coded);
    console.log(newCode)
}

encrypt("Hello tomorrow");

function decrypt(text){
    let newArr = [];
    for(let i = 0; i <text.length ; i++){
        let code = text.toUpperCase().charCodeAt(i);
        newArr.push(code)
    }
    let coded = newArr.map(newCode => newCode - 10);
    let newCode = String.fromCharCode(...coded);
    console.log(newCode)
}

decrypt("ROVVY")
