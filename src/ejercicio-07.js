// EJERCICIO-07:

export let numberDivisibleBy2 = (num_01) => {
    if (num_01 % 2 == 0){
        document.getElementById('ejercicio-07-solucion').innerHTML = `Ejercicio 07: ${num_01} es divisible por 2`;
        return;
    } 
    document.getElementById('ejercicio-07-solucion').innerHTML = `Ejercicio 07: ${num_01} no es divisible por 2`;
}