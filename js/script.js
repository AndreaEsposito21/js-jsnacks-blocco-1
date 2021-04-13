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

var arrayZucchinePiccole = [];

var arrayZucchineGrandi= [];

// Somma dei pesi di tutte le zucchine
//
var sommaPesoZucchine = 0;
for (var i = 0; i < arrayZucchine.length; i++) {
    var thisZucchine = arrayZucchine[i];

    // Somma peso totale zucchine
    sommaPesoZucchine += thisZucchine.peso;
    
    // Lunghezza zucchine
    //
    // Se la lunghezza delle zucchine è inferiore a 15, allora riempiranno arrayZucchinePiccole
    // Altrimenti se la lunghezza delle zucchine è maggiore di 15, priempiranno arrayZucchineGrandi
    if (thisZucchine.lunghezza < 15) {

        arrayZucchinePiccole.push(thisZucchine);

    } else if (thisZucchine.lunghezza > 15) {
        
        arrayZucchineGrandi.push(thisZucchine);

    };
};

console.log('Somma peso totale: ', sommaPesoZucchine, 'kg');


