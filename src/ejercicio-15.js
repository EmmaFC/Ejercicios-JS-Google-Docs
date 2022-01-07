// EJERCICIO-15:

export let numberCommonDividers = (num_01, num_02) => {
    for(let i = 0; i<=9; i++){
        if (num_01 % i == 0 && num_02 % i == 0) {
            document.getElementById('ejercicio-15-solucion').innerHTML = `${i} es divisor común de los números ${num_01} y ${num_02}`;
        }
    }
}