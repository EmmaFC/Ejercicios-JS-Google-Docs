// EJERCICIO-11:

export let getNumberOfEachVowel = (frase) => {
    let vowel_a = /[a]/gi;
    let vowel_e = /[e]/gi;
    let vowel_i = /[i]/gi;
    let vowel_o = /[o]/gi;
    let vowel_u = /[u]/gi;
    let number_of_a = frase.match(vowel_a);
    let number_of_e = frase.match(vowel_e);
    let number_of_i = frase.match(vowel_i);
    let number_of_o = frase.match(vowel_o);
    let number_of_u = frase.match(vowel_u);
    let numberVowels = number_of_a.length + number_of_e.length +number_of_i.length + number_of_o.length + number_of_u.length;
    
    if (numberVowels > 0 ){
        document.getElementById('ejercicio-11-solucion').innerHTML = 
        `Hay ${number_of_a.length} vocales a, ${number_of_e.length}vocales e, ${number_of_i.length} vocales i, ${number_of_o.length}vocales o, ${number_of_u.length} vocales u en la frase`;
    }
        document.getElementById('ejercicio-11-solucion').innerHTML = 
        `No hay vocales en la frase`;
    }
