// EJERCICIO-08:

export let countVowelA = (frase) => {
    let vowel_a = /[a]/gi;
    let numa = frase.match(vowel_a);
    if(frase.match(vowel_a) && numa == 1) {
        document.getElementById('ejercicio-08-solucion').innerHTML = `Ejercicio 08: Hay ${numa} vocal A en la frase`;
    }
    if(frase.match(vowel_a) && numa > 1) {
        document.getElementById('ejercicio-08-solucion').innerHTML = `Ejercicio 08: Hay ${numa} vocales A en la frase`;
    }
    document.getElementById('ejercicio-08-solucion').innerHTML = `Ejercicio 08: No hay vocales A en la frase`;
}