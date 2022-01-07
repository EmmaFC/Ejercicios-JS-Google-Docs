// EJERCICIO-12:

export let checkNumberDivisibleBy = (num_01) => {
    if (num_01 % 2 == 0 || num_01 % 3 == 0 || num_01 % 5 == 0 || num_01 % 7 == 0) {
    document.getElementById('ejercicio-12-solucion').innerHTML = `El número ${num_01} es divisible por 2, 3, 5 o 7`;
    }
    document.getElementById('ejercicio-12-solucion').innerHTML = `El número ${num_01} no es divisible por 2, 3, 5 ni 7 `;

}