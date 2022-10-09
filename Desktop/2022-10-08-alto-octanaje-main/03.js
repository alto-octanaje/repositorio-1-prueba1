/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function fakeBinary2(string) {
  // La funcion llamada 'fakeBinary' recibe como argumento un string con numeros y debe devolver un string en donde se remplaza los numeros menores de 5 con '0'
  // y los numeros iguales o mayores a 5 con '1'
  // Por ej:
  // fakeBinary2('5627') devuelve "1101"
  // fakeBinary("729") devuelve "101"
  // Tu código aca:
  
  let nuevo = [];
  let arr = string.split('');
      for ( let i = 0 ; i < arr.length ; i ++ ) {
          nuevo.push(Number(arr[i]));
        }
      for ( let i = 0 ; i < nuevo.length ; i ++ ) {
         if ( nuevo[i] < 5 ) {
              nuevo[i] = 0;
            } else {
              nuevo[i] = 1;
            }
        }
        let juntar = nuevo.join('');
        return juntar;
}

// No modifiques nada debajo de esta linea //

module.exports = fakeBinary2