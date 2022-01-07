// EJERCICIO-14:

export let numberDividers = (num_01) => {
    for(let i = 0; i<=9; i++){
        if (num_01 % i == 0) {document.getElementById('ejercicio-14-solucion').innerHTML = `El número ${num_01} es divisible por ${i}`}
    }
}