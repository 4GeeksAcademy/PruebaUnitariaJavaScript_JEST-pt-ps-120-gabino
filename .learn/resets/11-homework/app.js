//Esta es mi función que suma dos números
const sum = (a,b) => {
    return a+b
}
//Registro la entrada de dos números 
console.log(sum(7,3))

//Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    //Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    //Retornamos el valor en dólares
    return valueInDollar;
}

//Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    //Convertimos el valor a yenes japoneses
    let valueInYen = valueInDollar * 156.5;
    //Retornamos el valor en yenes
    return valueInYen;
}

//Exporta la función para usarla en otros dispositivos
//(similar a la palabra clave "export" cuando se usa webpack)
module.exports = {sum, fromEuroToDollar, fromDollarToYen};


