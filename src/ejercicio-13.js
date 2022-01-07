// EJERCICIO-13:

export let sayNumberDivisibleBy = (num_01) => {
    let dividers= [2,3,5,7];
    let count = 0;
    for (let i = 0; i<=dividers.length; i++){
        
        if (num_01 % i  == 0) {
            document.getElementById('ejercicio-12-solucion').innerHTML = `Ejercicio 13: El número ${num_01} es divisible por ${i}`;
        }
        if (num_01 % i != 0){
            return count++;
        }
        if (count == 4){
            document.getElementById('ejercicio-12-solucion').innerHTML = `Ejercicio 13: El número ${num_01} no es divisible por 2, 3, 5 ni 7 `;
        }
    }
}