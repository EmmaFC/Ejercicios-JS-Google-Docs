// EJERCICIO-18:

export let checkExamScore = (nota) => {
    (nota < 5)? 
    document.getElementById('ejercicio-18-solucion').innerHTML = `Ejercicio 18: Nota: suspenso`:
    (nota >= 5 && nota < 7)? 
    document.getElementById('ejercicio-18-solucion').innerHTML = `Ejercicio 18: Nota: suficiente`:
    (nota >= 7 && nota < 9)? 
    document.getElementById('ejercicio-18-solucion').innerHTML = `Ejercicio 18: Nota: notable`:
    (nota > 9 && nota <=10)? 
    document.getElementById('ejercicio-18-solucion').innerHTML = `Ejercicio 18: Nota: sobresaliente`:
    document.getElementById('ejercicio-18-solucion').innerHTML = `Ejercicio 18: La nota introducida no es válida`;
}