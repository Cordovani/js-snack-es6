// Snack 1:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// array di bici
let biciCorsaArray = [
    { nome: "Mountain Bike", peso: 6.5 },
    { nome: "Ibrida", peso: 8.0 },
    { nome: "Cicloturismo", peso: 6.81 }
]

console.log(biciCorsaArray);

// inizializzo peso e nome con la prima dell'array
var pesoMinimo = biciCorsaArray[0].peso;
var biciMinimo = biciCorsaArray[0].nome;

// scorriamo l'array e salviamo la bici con peso minore (utilizzando destructuring e template literal)
for (let i = 0; i < biciCorsaArray.length; i++) {
    var { nome, peso } = biciCorsaArray[i];

    if (peso < pesoMinimo) {
        
        pesoMinimo = peso;

    }

}

// stampa con il template literal 
// console.log(`la ${nome} è il tipo di bicicletta con il peso minore di ${peso}`)
console.log(`la tipologia ${biciMinimo} con il peso di ${pesoMinimo}kg è la bici più leggera`);


// NOTE
// e se ho due bici con lo stesso peso?