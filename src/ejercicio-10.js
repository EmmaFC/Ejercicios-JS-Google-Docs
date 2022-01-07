// EJERCICIO-10:

export let getNumberOfVowels = (frase) => {
    let vowels = /[aeiou]/gi;
    let all_vowels = frase.match(vowels);
    if (all_vowels > 1 ) {
        document.getElementById('ejercicio-10-solucion').innerHTML = `Hay ${all_vowels} vocales en la frase`;
    }
    if (all_vowels == 1 ) {
        document.getElementById('ejercicio-10-solucion').innerHTML = `Hay ${all_vowels} vocal en la frase`;
    }
    document.getElementById('ejercicio-10-solucion').innerHTML = `No hay vocales en la frase`;
}