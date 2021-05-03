// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

//array delle squadre 
var squadre = [
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: "Fiorentina",
        punti_fatti: 0,
        falli_subiti: 0
    },

    {
        nome: "Inter",
        punti_fatti: 0,
        falli_subiti: 0
    }

]


// genera un numero random tra 0 e 100
function rndMinMax(min,max){
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// genero le statistiche random non restituisce nulla
function genRndStats(listaSquadre) {
    for (var squadraCorrente of listaSquadre){
        squadraCorrente.punti_fatti = rndMinMax(0,100);
        squadraCorrente.falli_subiti = rndMinMax(0,100);
    }    
}

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
function creaSquadreFiltrate(listaSquadre) {
    const squadreFiltrate = [];

    for (const squadraCorrente of listaSquadre) {
        const { nome, falli_subiti } = squadraCorrente;
       
        squadreFiltrate.push({
            nome,
            falli_subiti
        });
    }

    return squadreFiltrate;
}


// CORPO DEL PROGRAMMA 
genRndStats(squadre)

const nuoveSquadre = creaSquadreFiltrate(squadre);

console.log(squadre);
console.log(nuoveSquadre);

