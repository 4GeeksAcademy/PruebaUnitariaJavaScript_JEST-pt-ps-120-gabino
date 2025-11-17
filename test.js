//Importar la función sum del archivo app.js
const{sum}=require('./app.js')

//Comienza tu primera prueba
test('adds 14 + 9 to equal 23',()=>{
    //Dentro de la prueba llamaos a nuestra fucnión sum con 2 números
    let total=sum(14,9);

    //Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


//One euro is:
let oneEuroIs ={
    "JPY": 156.6, //yapan yen
    "USD": 1.07, //us dollar
    "GBP": 0.87, //british pound
}

 const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('Convertir 1 euro a 1.07 dollares', ()=>{
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test('Convertir 1 dólar a yenes', ()=>{
    const expected = (1 / 1.07) * 156.6;
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
});

test('Convertir 1 yen a libras', ()=>{
    const expected = (1 / 156.6) * 0.87;
    expect(fromYenToPound(1)).toBeCloseTo(expected);
});

