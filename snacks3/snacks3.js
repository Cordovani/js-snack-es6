// RECAP SVOLTO IN AULA
var array = [10, 5, 6, 11, 20];

// FUNZIONI
function numeroPari(elemento) {
    return elemento % 2 == 0;
}

function numeroDispari(elemento) {
    return elemento % 2 == 0;
}

/**
 * Non si può filtrare un array con il .map!!
 */
function filtraPariMap(array) {
    return array.map(function (value, index) {
        return value % 2 == 0;
    });
}

// var array = [10, 5, 6, 11, 20];
// var array = [true,false,true,false,true]; (diventerebbe così con il .map)

// map restituisce un array di stessa lunghezza e gli elementi sono gli elementi dell'array di partenza cambiati della funzione
function raddoppio(array) {
    return array.map(element => element * 2);
}


// la funzione raddoppia l'array con un ciclo for normale
function raddoppioFor(array) {
    const result = [];
    for (var i = 0; array.length; i++) {
        result.push(array[i] * 2);
    }
    return result;
}

// la funzione restituisce un sotto-array 
function sublist(array, startIndex, endIndex) {
    return array.filter((element, index) => index >= startIndex && index <= endIndex);
}

// Sublist con for each 
function sublistForeach(array, startIndex, endIndex) {
    if (index >= startIndex && index <= endIndex) {
        result.push(element);
    }

    return result;
};

// CORPO DEL PROGRAMMA
var array = [10, 5, 6, 11, 20];
​
var nuovoArray = sublist(array, 1, 3);

console.log(nuovoArray);
​
var nuovoArray2 = sublistForeach(array, 1, 3);
​​
console.log(nuovoArray);
console.log(nuovoArray2);
​console.log(raddoppio(nuovoArray2));
















// NOTE 
// si può scrivere l'IF in una riga?
// approfondire le arrow-function