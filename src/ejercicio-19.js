// EJERCICIO-19:

export let checkDNI = (number) => {
    do {
       alert ('El dato a introducir debe ser un número')
    } while (isNaN(number))
    do {
        alert (`El número introducido no es válido`);
     } while (number < 0 || number > 99999999)

    if  (number > 0 || number <= 99999999){
        let result = number % 23;
        let dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let DNI = result + dniLetters[result];
        document.getElementById('ejercicio-19-solucion').innerHTML = `El DNI es: ${DNI}`;
    }
}



/* 
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)

 */