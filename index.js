import {writeHelloWorld} from "./src/ejercicio-01.js";
import {sumar} from "./src/ejercicio-02.js";
import {writeUserName} from "./src/ejercicio-03.js";
import {sumGivenNumbers} from "./src/ejercicio-04.js";
import {getHigherNumber} from "./src/ejercicio-05.js";
import {getHigherNumberOf3} from "./src/ejercicio-06.js";
import {numberDivisibleBy2} from "./src/ejercicio-07.js";
import {countVowelA} from "./src/ejercicio-08.js";
import {getVowels} from "./src/ejercicio-09.js";
import {getNumberOfVowels} from "./src/ejercicio-10.js";
import {getNumberOfEachVowel} from "./src/ejercicio-11.js";
import {checkNumberDivisibleBy} from "./src/ejercicio-12.js";
import {sayNumberDivisibleBy} from "./src/ejercicio-13.js";
// import {numberDividers} from "./src/ejercicio-14.js";
// import {numberCommonDividers} from "./src/ejercicio-15.js";
// import {isPrimeNumber} from "./src/ejercicio-16.js";
// import {checkCanDrive} from "./src/ejercicio-17.js";
// import {writeUserName} from "./src/ejercicio-18.js";
// import {writeUserName} from "./src/ejercicio-19.js";
// import {writeUserName} from "./src/ejercicio-20.js";


function app() {

    let num_01 = parseInt(prompt ('Introduce el primer número'));
    let num_02 = parseInt(prompt ('Introduce el segundo número'));
    let num_03 = parseInt(prompt ('Introduce el tercer número'));
    let frase = prompt ('Introduce una frase');

    writeHelloWorld();
    sumar(3,5);
    writeUserName();
    sumGivenNumbers(num_01,num_02);
    getHigherNumber(num_01,num_02);
    getHigherNumberOf3(num_01,num_02,num_03);
    numberDivisibleBy2(num_01);
    countVowelA(frase);
    getVowels(frase);
    getNumberOfVowels(frase);
    getNumberOfEachVowel(frase);
    checkNumberDivisibleBy(num_01);
    sayNumberDivisibleBy(num_01);
    numberDividers(num_01);
    numberCommonDividers(num_01,num_02);
    isPrimeNumber(num_01);
    checkCanDrive(34);

}

app()