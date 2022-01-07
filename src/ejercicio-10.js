// EJERCICIO-10:

export let getNumberOfVowels = (frase) => {
    let vowels = /[aeiou]/gi;
    let all_vowels = frase.match(vowels);
    if (all_vowels > 1 ) {
        document.getElementById('ejercicio-10-solucion').innerHTML = `Ejercicio 10: Hay ${all_vowels} vocales en la frase`;
    }
    if (all_vowels == 1 ) {
        document.getElementById('ejercicio-10-solucion').innerHTML = `Ejercicio 10: Hay ${all_vowels} vocal en la frase`;
    }
    document.getElementById('ejercicio-10-solucion').innerHTML = `Ejercicio 10: No hay vocales en la frase`;
}