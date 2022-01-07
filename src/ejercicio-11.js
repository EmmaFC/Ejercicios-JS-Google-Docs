// EJERCICIO-11:

export let getNumberOfEachVowel = (frase) => {
    let vowels = /[aeiou]/gi;
    let all_vowels = frase.match(vowels);
    let a,e,i,o,u = 0;
    all_vowels.forEach(vowel => {
        (vowel == /a/gi)? a++ : 
        (vowel == /e/gi)? e++ : 
        (vowel == /i/gi)? i++ :
        (vowel == /o/gi)? o++ :
        (vowel == /e/gi)? u++ :
        document.getElementById('ejercicio-11-solucion').innerHTML = 
        `No hay vocales en la frase`;
        document.getElementById('ejercicio-11-solucion').innerHTML = 
        `Hay ${a} vocales a, ${e}vocales e, ${i} vocales i, ${o}vocales o, ${u}vocales u en la frase`;
    });
}
