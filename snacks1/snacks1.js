// Snack 1:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// array di bici
let biciCorsaArray = [
    { nome: "Mountain Bike", peso: 6.5 },
    { nome: "Ibrida", peso: 8.0 },
    { nome: "Cicloturismo", peso: 6.81}
]

console.log(biciCorsaArray);

var pesoMinimo = 999;

// scorriamo l'array e salviamo la bici con peso minore (utilizzando destructuring e template literal)
for (var i = 0; i < biciCorsaArray.length; i++) {
    var { peso } = biciCorsaArray[i];

    if (peso < pesoMinimo) {
        pesoMinimo = peso;
    }

    console.log(peso);
}



