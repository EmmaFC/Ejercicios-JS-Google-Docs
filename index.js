/* Ejercicio:01 */ import {writeHelloWorld} from "./src/ejercicio-01.js";
/* Ejercicio:02 */ import {sumar} from "./src/ejercicio-02.js";
/* Ejercicio:03 */ import {writeUserName} from "./src/ejercicio-03.js";
/* Ejercicio:04 */ import {sumGivenNumbers} from "./src/ejercicio-04.js";
/* Ejercicio:05 */ import {getHigherNumber} from "./src/ejercicio-05.js";
/* Ejercicio:06 */ import {getHigherNumberOf3} from "./src/ejercicio-06.js";
/* Ejercicio:07 */ import {numberDivisibleBy2} from "./src/ejercicio-07.js";
/* Ejercicio:08 */ import {countVowelA} from "./src/ejercicio-08.js";
/* Ejercicio:09 */ import {getVowels} from "./src/ejercicio-09.js";
/* Ejercicio:10 */ import {getNumberOfVowels} from "./src/ejercicio-10.js";
/* Ejercicio:11 */ import {getNumberOfEachVowel} from "./src/ejercicio-11.js";
/* Ejercicio:12 */ import {checkNumberDivisibleBy} from "./src/ejercicio-12.js";
/* Ejercicio:13 */ import {sayNumberDivisibleBy} from "./src/ejercicio-13.js";
/* Ejercicio:14 */ import {numberDividers} from "./src/ejercicio-14.js";
/* Ejercicio:15 */ import {numberCommonDividers} from "./src/ejercicio-15.js";
/* Ejercicio:16 */ import {isPrimeNumber} from "./src/ejercicio-16.js";
/* Ejercicio:17 */ import {checkCanDrive} from "./src/ejercicio-17.js";
/* Ejercicio:18 */ import {checkExamScore} from "./src/ejercicio-18.js";
/* Ejercicio:19 */ import {checkDNI} from "./src/ejercicio-19.js";

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
    checkExamScore(6);
    checkDNI(254236);
}

app()