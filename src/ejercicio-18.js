// EJERCICIO-18:

export let checkExamScore = (nota) => {
    (nota < 5)? 
    document.getElementById('ejercicio-18-solucion').innerHTML = `Nota: suspenso`:
    (nota >= 5 && nota < 7)? 
    document.getElementById('ejercicio-18-solucion').innerHTML = `Nota: suficiente`:
    (nota >= 7 && nota < 9)? 
    document.getElementById('ejercicio-18-solucion').innerHTML = `Nota: notable`:
    (nota > 9 && nota <=10)? 
    document.getElementById('ejercicio-18-solucion').innerHTML = `Nota: sobresaliente`:
    document.getElementById('ejercicio-18-solucion').innerHTML = `La nota introducida no es válida`;
}