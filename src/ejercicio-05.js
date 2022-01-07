// EJERCICIO-05:

export let getHigherNumber = (num_01, num_02) => {
    (num_01 < num_02)? document.getElementById('ejercicio-05-solucion').innerHTML = `Ejercicio 05: El mayor número entre ${num_01} y ${num_02} es el: ${num_02}` : 
    document.getElementById('ejercicio-05-solucion').innerHTML = `Ejercicio 05: El mayor número entre ${num_01} y ${num_02} es el: ${num_01}`;
}