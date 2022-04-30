
//1. funcion para detectar contenido en una variable
/*
var text = 'hoy no llovio';

function detectar_contenido (texto){

    if (texto.includes('cumpleaños')){ //true o un false
        console.log('cumpleaños feliz te deseamos a ti');
    }else{
        console.log('no hay cumpleaños');
    }

}

detectar_contenido(text);
*/

//2. hacer busqueda profunda de un texto
/*
var text= 'que lindo amanecio hoy, que lastima que hoy no es mi cumpleaños';


function busqueda_profunda(texto){
    
    if (texto.includes('cumpleaños')){
        if (texto.includes('no')){
            console.log('no hay cumpleaños');
        }else{
            console.log('cumpleaños feliz te deseamos a ti');
        }

    }else{
        console.log('no hay cumpleaños');
    }


}

busqueda_profunda(text);
*/

//3. usando la libreria math

//var numero = 3.56;

//console.log(Math.ceil(numero)) //-->redondea hacia arriba 4
//console.log(Math.floor(numero)) //-->redondea hacia arriba 3

//4.Numeros Random si yo quiero utilizar un numero aleatorio del 0 al 2
/*
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
  console.log(getRandomInt(2));
*/

//5. obtener logaritmos a base 10

/*
var numero_que_queremos_evaluar = 50;

function log10 (numero){
    return Math.log10(numero);
}

console.log (log10(numero_que_queremos_evaluar));
*/

//6. Imprimir todos los numeros pares del 0 a 10
/*
var numero_inicial = 30;

function imprimir_numeros_pares (numero_inicial){

    while (numero_inicial<50){ //mientras el numero inicial vaya del 0 al 10

        if (numero_inicial%2==0){ //significa que este numero es par
            console.log(numero_inicial);
        }
        numero_inicial = numero_inicial+1; 
    }

}

imprimir_numeros_pares(numero_inicial);
*/
