// EJERCICIO-19:

export let checkDni = (dni_number) => {

    do {
        dni_number = prompt ('Introduce un dato numérico');
    } while (isNaN(dni_number))

    do {
        dni_number = prompt ('Introduce un número válido');
     } while (dni_number < 0 || dni_number > 99999999)


    if  (dni_number > 0 || dni_number <= 99999999){
        let result = dni_number % 23;
        let dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let DNI = result + dniLetters[result];
        document.getElementById('ejercicio-19-solucion').innerHTML = `El DNI es: ${DNI}`;
    }
}
