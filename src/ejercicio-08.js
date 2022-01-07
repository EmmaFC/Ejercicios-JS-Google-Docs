// EJERCICIO-08:

export let countVowelA = (frase) => {
    let vowel_a = /[a]/gi;
    let num_of_a = frase.match(vowel_a);
    document.getElementById('ejercicio-08-solucion').innerHTML = `Hay ${num_of_a.length} vocales A en la frase`;
}