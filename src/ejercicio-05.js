// EJERCICIO-05:

export let getHigherNumber = (num_01, num_02) => {
    (num_01 < num_02)? document.getElementById('ejercicio-05-solucion').innerHTML = `El mayor número es el: ${num_02}` : 
    document.getElementById('ejercicio-05-solucion').innerHTML = `El mayor número es el: ${num_01}`;
}