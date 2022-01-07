// EJERCICIO-13:

export let sayNumberDivisibleBy = (num_01) => {
    if (num_01 % 2 == 0) {
        document.getElementById('ejercicio-12-solucion').innerHTML = `El número ${num_01} es divisible por 2`;
    }
    if (num_01 % 3 == 0) {
        document.getElementById('ejercicio-12-solucion').innerHTML = `El número ${num_01} es divisible por 3`;
    }
    if (num_01 % 5 == 0) {
        document.getElementById('ejercicio-12-solucion').innerHTML = `El número ${num_01} es divisible por 5`;
    }
    if (num_01 % 7 == 0) {
        document.getElementById('ejercicio-12-solucion').innerHTML = `El número ${num_01} es divisible por 7`
    }
    document.getElementById('ejercicio-12-solucion').innerHTML = `El número ${num_01} no es divisible por 2, 3, 5 ni 7 `;
}