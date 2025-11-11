//Esta es mi función que suma dos números
const sum = (a,b) => {
    return a+b
}

//Registro la entrada de dos números 
console.log(sum(7,3))

//Exporta la función para usarla en otros dispositivos
//(similar a la palabra clave "export" cuando se usa webpack)
module.exports={sum};