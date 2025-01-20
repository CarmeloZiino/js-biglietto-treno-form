/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// 1. Impostare Variabili (Nome, Cognome, Età, Chilometri da percorrere)

let firstName = prompt("Qual è il tuo nome?", "Carmelo");

console.log("Nome:", firstName);

let lastName = prompt("Qual è il tuo cognome?", "Ziino");

console.log("Cognome:", lastName);

let age = prompt("Qual è la tua età?", "27");

console.log("Età:", age, "anni");

let km = prompt("Quanti chilometri dovrai percorrere?", "1312");

console.log("Chilometri da Percorrere:", km , "km");

// 2. Definire il prezzo del biglietto in base ai km (0.21€ al km) - Att! Secondo la mia interpretazione dell'esercizio, non va visualizzato in Console.

const priceKm = 0.21;

// 3. Calcolare il Prezzo Totale senza Sconti

let totalPrice = km * priceKm;

console.log("Per il tuo viaggio il prezzo è di:", totalPrice, "€");

// 3. Calcolare lo Sconto {(Se < di 18 è del 20%) oppure (Se > 65 è del 40% )}

let discount = ("")

if (age <18) {
     discount = (totalPrice * 20) / 100;
     discount = (discount.toFixed(2));
     console.log ("Hai maturato uno sconto di:" , discount , "€");
 }
else if (age >65) {
     discount = (totalPrice * 40) / 100;
     discount = (discount.toFixed(2));
     console.log ("Hai maturato uno sconto di:" , discount , "€");
 }
 else {
    discount = 0;
    discount = (discount.toFixed(2));
    console.log ("Mi spiace... non hai maturato alcuno sconto.");
 }

 // 4. Applicare lo Sconto al Prezzo Totale

 let priceToPay = totalPrice - discount;
 priceToPay = (priceToPay.toFixed(2));
 console.log ( "Il Totale da pagare è:" , priceToPay , "€") ;
