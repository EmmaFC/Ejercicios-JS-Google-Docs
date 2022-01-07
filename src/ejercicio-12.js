// EJERCICIO-12:

export let checkNumberDivisibleBy = (num_01) => {
    let dividers = [2,3,5,7]
    let count = 0;
    for (let i = 0; i<dividers.length; i++){
        if (num_01 % i  == 0) {
            return count++;
        }
        if (num_01 % i != 0){
            return count;
        }
    }
    document.getElementById('ejercicio-12-solucion').innerHTML = `El número ${num_01} es divisible por ${count} de los siguientes números: 2, 3, 5 o 7`;    

}