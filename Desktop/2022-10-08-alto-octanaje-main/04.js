/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function doble(array) {
  // la funcion recibe un array de numeros enteros y debe devolver otro arreglo con el doble de cada valor
  // ej:
  //doble([1, 2, 3]) devuelve [2, 4, 6]
  // Tu código aca:
  //termininado... 
  let arr = string.split('');
  let nuevoArray = [];
  for ( let i = 0 ; i < arr.length ; i ++ ) {
      nuevoArray.push(Number(arr[i]));
    }
  for ( let i = 0 ; i < nuevoArray.length ; i ++ ) {
     if ( nuevoArray[i] < 5 ) {
          nuevoArray[i] = 0;
        } else {
          nuevoArray[i] = 1;
        }
    }
    let stringOtraVez = nuevoArray.join('');
    return stringOtraVez;
}

// No modifiques nada debajo de esta linea //

module.exports = doble