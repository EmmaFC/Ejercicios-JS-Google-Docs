// EJERCICIO-19:

export let checkDni = () => {
    let dni_number = parseInt(prompt ('Introduce número DNI'));

    do {
       alert ('El dato a introducir debe ser un número')
    } while (isNaN(dni_number))

    if  (dni_number > 0 || dni_number <= 99999999){
        let result = dni_number % 23;
        let dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let DNI = result + dniLetters[result];
        document.getElementById('ejercicio-19-solucion').innerHTML = `El DNI es: ${DNI}`;
    }
    document.getElementById('ejercicio-19-solucion').innerHTML = `El número introducido no es válido`;
}




/* 
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)

 */