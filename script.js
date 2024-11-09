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

// Prezzo per km (puoi modificarlo)
const prezzoPerKm = 0.21;

// tutti gli elementi del form
const nomeField = document.getElementById("nomeField");
const cognomeField = document.getElementById("cognomeField");
const etaField = document.getElementById("etaField");
const kmField = document.getElementById("kmField");
const form = document.getElementById("form");

// tutti gli elementi del biglietto da stampare 
const nomeOutput = document.getElementById("nome-output");
const offertaOutput = document.getElementById("offerta-output");
const carrozzaOutput = document.getElementById("carrozza-output");
const codiceCPOutput = document.getElementById("codice-cp-output");
const priceOutput = document.getElementById("price-output");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita l'invio del form e il ricaricamento della pagina

    // Prendo i valori dai campi del form
    const nome = nomeField.value;
    const cognome = cognomeField.value;
    const eta = parseInt(etaField.value);
    const km = parseInt(kmField.value);

    // Calcolo del prezzo
    let prezzoBase = km * prezzoPerKm;
    let prezzoFinale = prezzoBase;

    // Applicazione degli sconti in base all'età
    if (eta < 19) {
        prezzoFinale *= 0.8; // Sconto del 20% per i minorenni
    } else if (eta > 64) {
        prezzoFinale *= 0.6; // Sconto del 40% per gli over 65
    }

    // Popolamento dei dati nel biglietto
    nomeOutput.innerText = nome + " " + cognome;
    offertaOutput.innerText = "Standard"; // Offerta fissa per semplicità
    carrozzaOutput.innerText = "1"; // Carrozza fissa per semplicità
    codiceCPOutput.innerText = "12345"; // Codice CP fittizio
    priceOutput.innerText = prezzoFinale.toFixed(2) + " €"; // Prezzo con 2 decimali
});




