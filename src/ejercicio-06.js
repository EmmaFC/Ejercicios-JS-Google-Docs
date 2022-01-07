// EJERCICIO-06:

export let getHigherNumberOf3 = (num_01,num_02,num_03) => {
    (num_01 < num_02 && num_03 < num_02)? document.getElementById('ejercicio-06-solucion').innerHTML = `El mayor número es el: ${num_02}` : 
    (num_01 > num_02 && num_01 > num_03)? document.getElementById('ejercicio-06-solucion').innerHTML = `El mayor número es el: ${num_01}` : 
    document.getElementById('ejercicio-06-solucion').innerHTML = `El mayor número es el: ${num_03}`;
}