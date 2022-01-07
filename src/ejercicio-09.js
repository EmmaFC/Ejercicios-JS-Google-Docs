// EJERCICIO-09:

export let getVowels = (frase) => {
    let vowels = /[aeiou]/gi;
    let all_vowels = frase.match(vowels);
    if (all_vowels > 1 ) {
        document.getElementById('ejercicio-09-solucion').innerHTML = `Hay estas vocales en la frase: ${all_vowels}`;
    }
    if (all_vowels == 1 ) {
        document.getElementById('ejercicio-09-solucion').innerHTML = `Hay esta vocal en la frase: ${all_vowels}`;
    }
    if (all_vowels == 0 ) {
        document.getElementById('ejercicio-09-solucion').innerHTML = `No hay vocales en la frase`;
    }
}