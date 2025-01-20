
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
const resultCarrozza = document.getElementById('result-carrozza');
const resultOffer = document.getElementById("result-offer");
const resultCp = document.getElementById('result-cp');
const priceTotal = document.getElementById('priceTotal');


// 4. Al click del pulsante il programma calcola il prezzo e lo stampa in pagina

genera.addEventListener ('click' , function () {

let priceBasis = parseFloat(km.value) * priceKm;

let discount = 0
let offer = "Biglietto Standard";
    if (eta.value === 'Minorenne') {
        discount = (priceBasis * 20) / 100;
        offer = "Biglietto Young"
    }
    else if (eta.value === 'Over 65') {
        discount = (priceBasis * 40) / 100;
        offer = "Biglietto Boomer"
    }

    const carrozza = Math.floor(Math.random() * 19) + 1;
const randomCodiceCp = Math.random()* 10000;

let priceToPay = priceBasis - parseFloat(discount);

resultName.innerHTML = nomeCognome.value;
resultOffer.innerHTML = offer;
resultCarrozza.innerHTML = carrozza;
priceTotal.innerHTML = `Euro ${priceToPay.toFixed(2)}`;
// priceTotal = priceTotal.toFixed(2);
resultCp.innerHTML = `CP${randomCodiceCp.toFixed()}`;


});

