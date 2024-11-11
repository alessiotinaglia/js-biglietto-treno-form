"use strict"

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

// Costanti
const prezzoPerKm = 0.21;
const numeroCarrozza = Math.floor(Math.random() * 50) + 1;
const codiceCP = Math.floor(Math.random() * 100000) + 1;

// tutti gli elementi del form
const nomeField = document.getElementById("nome-field");
const cognomeField = document.getElementById("cognome-field");
const etaField = document.getElementById("eta-field");
const kmField = document.getElementById("km-field");
const form = document.getElementById("form");

// tutti gli elementi del biglietto da stampare 
const nomeOutput = document.getElementById("nome-output");
const offertaOutput = document.getElementById("offerta-output");
const carrozzaOutput = document.getElementById("carrozza-output");
const codiceCPOutput = document.getElementById("codice-cp-output");
const priceOutput = document.getElementById("price-output");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Prendo i valori dai campi del form
    const nome = nomeField.value;
    const cognome = cognomeField.value;
    const eta = parseInt(etaField.value);
    const km = parseInt(kmField.value);

    // Stampiamo i valori nella console
    console.log("Nome: " + nome);
    console.log("Cognome: " + cognome);
    console.log("Età: " + eta);
    console.log("Km: " + km);

    // Calcolo del prezzo
    let prezzoBase = km * prezzoPerKm;
    let prezzoFinale = prezzoBase;

    // Applicazione degli sconti in base all'età
    let categoria = '';
    if (eta <= 18) {
        categoria = 'Young';
        prezzoFinale *= 0.8;
    } else if (eta <= 64) {
        categoria = 'Standard';
    } else {
        categoria = 'Senior';
        prezzoFinale *= 0.6;
    }

    // Popolamento dei dati nel biglietto
    nomeOutput.innerText = nome + " " + cognome;
    offertaOutput.innerText = categoria;
    carrozzaOutput.innerText = numeroCarrozza;
    codiceCPOutput.innerText = codiceCP;
    priceOutput.innerText = prezzoFinale.toFixed(2) + " €";

    document.getElementById("biglietto").style.display = "block";
    biglietto.style.display = "block";
});

// selezionando il bottone del reset, resetta il form e nasconde la parte sotto
document.getElementById("button-reset").addEventListener("click", function () {
    document.getElementById("biglietto").style.display = "none";
});




