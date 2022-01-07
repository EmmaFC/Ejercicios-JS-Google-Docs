// EJERCICIO-14:

export let numberDividers = (num_01) => {
    for(let i = 0; i<10; i++){
        if (num_01 % i == 0) {
            let divider = document.createElement('p');
            divider.innerHTML = `X El número ${num_01} es divisible por ${i}`;
            document.getElementById('ejercicio-14-solucion').appendChild (divider);
        }
        `El número ${num_01} no es divisible por ${i}`
    }
}