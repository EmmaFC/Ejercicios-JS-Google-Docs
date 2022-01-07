// EJERCICIO-16:

export let isPrimeNumber = (num_01) => {
    (num_01 % 1 == 0 && num_01 % num_01 == 0)? 
    document.getElementById('ejercicio-16-solucion').innerHTML = `Ejercicio 16: El número ${num_01} es primo`:
    document.getElementById('ejercicio-16-solucion').innerHTML = `Ejercicio 16: El número ${num_01} no es primo`;
}