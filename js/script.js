/*----- constants -----*/ 

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];

const masterDeck = builtMasterDeck();

/*----- app's state (variables) -----*/ 
let cardCount, currCard, shuffledDeck, playDeck, compDeck, winner;

/*----- cached element references -----*/ 

// ICE BOX CODE BELOW

// const countEls = {
//     player: document.getElementById('counter1'),
//     comp: document.getElementById('counter2'),
// }
const playerCountEl = document.getElementById('counter1')
const compCountEl = document.getElementById('counter2')

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

    // playerDeck = [];
    
    // compDeck = [];
    
    winner = null // player or comp 
    
    builtShuffledDeck();
    render();
    // console.log(`The player has ${playerDeck.length} cards`);
}

function render() {
    //render scores
    //ICE BOX ISSUE BELOW
    // for (let key in cardCount) {
    //     console.log(`The player has ${playerDeck.length} cards`);
    //     console.log(`The computer has ${compDeck.length} cards`)
    //     // countEls[key].textContent = `${key}Deck.length`;
    //     countEls
    // }
    cardCount.player = (playerCountEl.textContent = playerDeck.length);
    cardCount.comp = (compCountEl.textContent = compDeck.length);
    
}

function builtShuffledDeck() {
    let tempDeck = masterDeck.slice();
    shuffledDeck = [];
    while (tempDeck.length) {
        let rndIdx = Math.floor(Math.random() * tempDeck.length);
        shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    splitDeck();
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
    return deck;
};

function splitDeck() {
    playerDeck = shuffledDeck.slice(26, (shuffledDeck.length + 1));
    compDeck = shuffledDeck.slice(0, 26)
    return 
}


console.log(masterDeck);
console.log(shuffledDeck);