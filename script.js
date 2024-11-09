"use strict"
console.clear();

// // Posta la domanda quanti km e l'età
// const input = prompt("Inserisci il numero di km che vuoi effettuare e la tua età, separati da una virgola (es: 100, 30):");
// console.log(input);

// // Convertito le stringhe in numeri
// const [km, eta] = input.split(",").map(Number);

// // Visualizza i km e l'età con descrizioni
// console.log(`Km che vuoi percorrere: (${km}) e anni di età (${eta}).`);

// // Prezzo al chilometro
// const totkm = 0.21;

// // Calcolo prezzo totale e il prezzo finale con i vari sconti del 20% e del 40%
// let prezzoBase = km * totkm;
// let prezzoFinale = prezzoBase;

// // Applicazione sconti 
// if (eta < 19) {
//     let sconto = prezzoBase * 0.20; // Calcola il 20% del prezzo base
//     prezzoFinale = prezzoBase - sconto; // Sottrai lo sconto dal prezzo base
// }
// else if (eta > 64) {
//     let sconto = prezzoBase * 0.40; // Calcola il 40% del prezzo base
//     prezzoFinale = prezzoBase - sconto; // Sottrai lo sconto dal prezzo base
// }

// // Prezzo finale con massimo due decimali
// console.log(`Il prezzo finale del viaggio è: ${prezzoFinale.toFixed(2)} €`);

const elInputName = document.getElementById("nome");
console.log(elInputName);

const elP = document.getElementById("risultatoNome");
console.log(elP);


// const myButton = document.querySelector("button");

// myButton.addEventListener("click", function (event){
//     console.log(elInputName.value);
//     elP.innerText = elInputName.value;

// })








