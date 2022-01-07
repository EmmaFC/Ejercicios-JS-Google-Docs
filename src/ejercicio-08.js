// EJERCICIO-08:

export let countVowelA = (frase) => {
    let vowel_a = /[a]/gi;
    let num_of_a = frase.match(vowel_a);
    if(num_of_a.length > 0) {
        document.getElementById('ejercicio-08-solucion').innerHTML = `Hay ${num_of_a.length} vocales A en la frase`;
    }
    document.getElementById('ejercicio-08-solucion').innerHTML = `No hay vocales A en la frase`;
}