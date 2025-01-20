
/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole. */


// 1. Imposto Variabili che manipolano elementi del Dom

let nomeCognome = document.getElementById ("name")

let km = document.getElementById ("km")

let eta = document.getElementById ("age")

console.log (nomeCognome , km , eta)

let genera = document.getElementById("generate")

// 2. Imposto Variabile prezzo per Km

const priceKm = 0.21;

// 3. Definiamo le variabili risultato


const resultName = document.getElementById('result-name');
const resultKm = document.getElementById('result-km');
const resultAge = document.getElementById('result-age');
const resultCp = document.getElementById('result-cp');
const priceTotal = document.getElementById('priceTotal');


// 4. Al click del pulsante il programma calcola il prezzo e lo stampa in pagina

genera.addEventListener ('click' , function () {

let priceBasis = km * priceKm;

let discount = ("")
    if (eta === 'Minorenne') {
        discount = (priceBasis * 20) / 100;
    }
    else if (eta === 'Over 65') {
        discount = (priceBasis * 40) / 100;
    }
    else if (eta === 'Maggiorenni'){
    discount = 0;
    }

const randomCodiceCp = Math.random();
let priceToPay = priceBasis - parseFloat(discount);

resultName.innerHTML = nomeCognome.value;
resultKm.innerHTML = km.value;
resultAge.innerHTML = eta.value;
priceTotal.innerHTML = priceToPay.toFixed(2);
// priceTotal = priceTotal.toFixed(2);
resultCp.innerHTML = randomCodiceCp.toFixed(5);


});


/*

 let priceToPay = totalPrice - discount;
 priceToPay = (priceToPay.toFixed(2));
 console.log ( "Il Totale da pagare è:" , priceToPay , "€") ;



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
*/




// 5.
