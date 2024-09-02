"use strict";

//Laver en prompt med tekst
const birthYear = prompt("Enter your birthyear");

//Definerer årstal
const currentYear = 2024;

//Regner alder ud ved at trække årstallet fra fødselsår
const age = currentYear - parseInt(birthYear);

//Skriver ud til konsol
console.log(age);

alert(`Din alder er ${age}`);