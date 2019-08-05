/*----- constants -----*/ 

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];

const masterDeck = builtMasterDeck();

/*----- app's state (variables) -----*/ 
let cardCount, currCard, shuffledDeck, playDeck, compDeck, winner;

/*----- cached element references -----*/ 


/*----- event listeners -----*/ 


/*----- functions -----*/
init();

function init() {
    cardCount = {
        player: 0,
        comp: 0,
    };

    currCard = {
        player: 'back',
        comp: 'back',
    };

    playDeck = [];

    compDeck = [];

    shuffledDeck = [];

    winner = null // player or comp 
}

function builtMasterDeck() {
    let deck = [];
    suits.forEach(function(suit) {
        ranks.forEach(function (rank) {
            deck.push({
                face: `${suit}${rank}`,
                value: Number(rank),
                
            });
        });
    });
};


function builtShuffledDeck() {
    let tempDeck = masterDeck.slice();
    shuffledDeck = [];
    while (tempDeck.length) {
        let rdxIdx = Math.floor(Math.random * tempDeck.length);
        shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    console.log(tempDeck)
}
console.log(masterDeck);
console.log(shuffledDeck);