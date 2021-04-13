// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola la somma del peso di tutte le zucchine.
//
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var arrayZucchine = [
    {
        'variante': 'blu',
        'peso': 1,
        'lunghezza': 6
    },

    {
        'variante': 'rossa',
        'peso': 2,
        'lunghezza': 9
    },

    {
        'variante': 'gialla',
        'peso': 3,
        'lunghezza': 15
    },

    {
        'variante': 'verde',
        'peso': 4,
        'lunghezza': 8
    },

    {
        'variante': 'viola',
        'peso': 5,
        'lunghezza': 13
    },

    {
        'variante': 'arancione',
        'peso': 16,
        'lunghezza': 67
    },

    {
        'variante': 'turchese',
        'peso': 7,
        'lunghezza': 42
    },

    {
        'variante': 'magenta',
        'peso': 11,
        'lunghezza': 55
    },

    {
        'variante': 'oliva',
        'peso': 21,
        'lunghezza': 72
    },

    {
        'variante': 'scarlatto',
        'peso': 5,
        'lunghezza': 14
    }
];

var sommaPesoZucchine = 0;

// Array zucchine lunghe < 15 cm
var arrayZucchinePiccole = [];

// Array zucchine lunghe > 15 cm
var arrayZucchineGrandi= [];

// Peso totale di arrayZucchine
var sommaPesiZucchineTotali = pesoZucchine(arrayZucchine);
console.log('Somma peso totale: ', sommaPesiZucchineTotali, 'kg');

// Lunghezza zucchine
//
for (var j = 0; j < arrayZucchine.length; j++) {
    var thisLunghezza = arrayZucchine[j];

    // Se la lunghezza delle zucchine è inferiore a 15, allora riempiranno arrayZucchinePiccole
    // Altrimenti se la lunghezza delle zucchine è maggiore di 15, priempiranno arrayZucchineGrandi
    if (thisLunghezza.lunghezza < 15) {

        arrayZucchinePiccole.push(thisLunghezza);

    } else if (thisLunghezza.lunghezza > 15) {
        
        arrayZucchineGrandi.push(thisLunghezza);

    };
};

// Peso totale di arrayZucchinePiccole
var sommaPesiZucchinePiccole = pesoZucchine(arrayZucchinePiccole);
console.log('Somma peso zucchine piccole: ', sommaPesiZucchinePiccole, 'kg');

// Peso totale di arrayZucchineGrandi
var sommaPesiZucchineGrandi = pesoZucchine(arrayZucchineGrandi);
console.log('Somma peso zucchine grandi: ', sommaPesiZucchineGrandi, 'kg');

// Funzione che somma i pesi delle zucchine
//
function pesoZucchine(arrayOggettiZucchine) {
    // Somma dei pesi di tutte le zucchine
    for (var i = 0; i < arrayOggettiZucchine.length; i++) {
        var thisZucchine = arrayOggettiZucchine[i];

        // Somma peso zucchine
        sommaPesoZucchine += thisZucchine.peso;
    };

    return sommaPesoZucchine;
};

