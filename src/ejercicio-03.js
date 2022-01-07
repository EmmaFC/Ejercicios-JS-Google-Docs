// EJERCICIO-03:

export let writeUserName = () =>{
    let givenName = prompt('Introduce tu nombre de usuario');
    let userName = () => document.getElementById('ejercicio-03-solucion').innerHTML = givenName;
    userName();
}