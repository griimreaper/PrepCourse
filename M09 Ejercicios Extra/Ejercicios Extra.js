/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array = []
   for(key in objeto){
      array.push([key, objeto[key]])
   }return array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {}
   var letras = string.split("")
   for(i=0;i<letras.length;i++){
   var cantidad =letras.filter(letra => letra == letras[i])
   objeto[letras[i]] = cantidad.length
}return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
var mayúscula = [] 
var minuscula = []
var letras = string.split("")
for(i=0;i<letras.length;i++){
   if(letras[i] == letras[i].toUpperCase()){mayúscula.push(letras[i])}
   else {minuscula.push(letras[i])}
}
var union = mayúscula.join('')+ minuscula.join('')
return union
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var reverse = []
   var letra = []
   var palabras = frase.split("")
   palabras.reverse()
   var union = palabras.join("")
   let espacio = union.split(" ")
   for(i=0;i<espacio.length;i++){
      reverse.unshift(espacio[i])
   }
   var final = reverse.join(" ")
   return final
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var capicua = numero.toString().split("").reverse().join("");
   
   if(numero==capicua){
      return "Es capicua"
   }else {return "No es capicua"}
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newarray = []
   var letras = string.split("")
   for(i=0;i<letras.length;i++){
      if(letras[i] != "a"&& letras[i] != "b"&&letras[i] !="c"){
      newarray.push(letras[i])
   }
   var final = newarray.join("")
   }
   return final
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arreglo = arrayOfStrings
   var save_I = null
   var save_j= null
   for(i=0; i<arreglo.length - 1; i++){
      for(j=i+1; j<arreglo.length; j++){
         if(arreglo[i].length>arreglo[j].length){
            save_I= arreglo[i]
            save_j= arreglo[j]
            arreglo[i] = save_j
            arreglo[j] = save_I
         }
      }
   }
   return arreglo
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = [];
   let cantidadMay = [];
   let cantidadMen = [];

   if (array1 > array2) {
      cantidadMay = array1;
      cantidadMen = array2;
   } else {
      cantidadMay = array2;
      cantidadMen = array1;
   }

   for (let x = 0; x < cantidadMay.length - 1; x++) {
      if (cantidadMay.includes(cantidadMen[x])) {
      newArray.push(cantidadMen[x]);
      }
   }
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
