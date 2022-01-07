// EJERCICIO-03:

export let writeUserName = () =>{
    let givenName = prompt('Introduce tu nombre de usuario');
    document.getElementById('ejercicio-03-solucion').innerHTML = `Ejercicio 03: Nombre de usuario: ${givenName}`;
}