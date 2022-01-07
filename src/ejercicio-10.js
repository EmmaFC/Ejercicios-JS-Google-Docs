// EJERCICIO-10:

export let getNumberOfVowels = (frase) => {
    let vowels = /[aeiou]/gi;
    let all_vowels = frase.match(vowels);
    document.getElementById('ejercicio-10-solucion').innerHTML = `Hay ${all_vowels.length} vocales en la frase`;
}