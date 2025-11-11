//Esta es mi función que suma dos números
const sum = (a,b) => {
    return a+b
}
//Registro la entrada de dos números 
console.log(sum(7,3))

//One euro is:
let oneEuroIs ={
    "JPY": 156.6, //yapan yen
    "USD": 1.07, //us dollar
    "GBP": 0.87, //british pound
}


//Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    //Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    //Retornamos el valor en dólares
    return valueInDollar;
}

//Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen= (dollar)=>{
    let euro = dollar / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    return yen;
}

//Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = (yen)=>{
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;
    return pound;
}


//Exporta la función para usarla en otros dispositivos
//(similar a la palabra clave "export" cuando se usa webpack)
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};


