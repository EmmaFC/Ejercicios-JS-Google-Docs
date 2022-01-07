// EJERCICIO-09:

export let getVowels = (frase) => {
    let vowels = /[aeiou]/gi;
    let all_vowels = frase.match(vowels);
    document.getElementById('ejercicio-09-solucion').innerHTML = `Hay estas vocales en la frase: ${all_vowels}`;
}