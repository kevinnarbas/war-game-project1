/*----- constants -----*/ 

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];

const masterDeck = builtMasterDeck();

/*----- app's state (variables) -----*/ 
let cardCount, compCard, playerCard, shuffledDeck, playDeck, compDeck, winner;

/*----- cached element references -----*/ 

// ICE BOX CODE BELOW

// const countEls = {
//     player: document.getElementById('counter1'),
//     comp: document.getElementById('counter2'),
// }
const playerCountEl = document.getElementById('counter1')
const compCountEl = document.getElementById('counter2')
const playerCardRender = document.querySelector('.playcard1')
const compCardRender = document.querySelector('.playcard2')


/*----- event listeners -----*/ 
document.getElementById('next').addEventListener('click', playRound);
document.getElementById('reset').addEventListener('click', resetGame);

/*----- functions -----*/
init();

function init() {
    cardCount = {
        player: 0,
        comp: 0,
    };

    compCard = [];
    playerCard = [];

    // playerDeck = [];
    
    // compDeck = [];
    
    winner = null // player or comp 
    
    playerCardRender.innerHTML = `<div class="card back-blue"></div>`;
    compCardRender.innerHTML = `<div class="card back-blue"></div>`;
    


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

function playRound() {
    if (playerDeck.length > 0 && compDeck.length > 0) {
        compCard = compDeck.shift();
        playerCard = playerDeck.shift();
        renderCard(compCard, compCardRender);
        renderCard(playerCard, playerCardRender);
        console.log(compCard);
        console.log(playerCard);
        
        checkRoundWinner();
        render();
    } else {
        renderWinner();
    }
}

function checkRoundWinner() {

    if (playerCard.value > compCard.value) { 
        playerDeck = playerDeck.concat(playerCard);
        playerDeck = playerDeck.concat(compCard);
        console.log('player wins');
        // console.log(playerCard.length);
    }
    else if (playerCard.value == compCard.value) {
        console.log('go to war');
        goToWar();
    }
    else {
        compDeck = compDeck.concat(compCard);
        compDeck = compDeck.concat(playerCard);
        console.log('computer wins');
    }
}

function goToWar() {
    let playerWar = [];
    let compWar = [];
    for(let i = 0; i <= 3; i++) {
        compWar.push(compDeck.shift());
        playerWar.push(playerDeck.shift());
    };
    playerCard = [playerCard, ...playerWar];
    compCard = [compCard, ...compWar];
    console.log(playerWar, compWar);
    console.log(playerCard, compCard);
    renderWarCards(playerCard, playerCardRender);
    renderWarCards(compCard, compCardRender);
    checkWarWinner();

}

function checkWarWinner() {
    if (playerCard[playerCard.length - 1].value > compCard[compCard.length - 1].value) { 
        playerDeck = (playerDeck.concat(playerCard, compCard));
        // playerDeck = [playerDeck, ...compCard];
        console.log('player wins');
        // console.log(playerCard.length);
    }
    else if (playerCard[playerCard.length - 1].value == compCard[compCard.length - 1].value) {
        console.log('go to war');
        goToWarAgain();
    }
    else {
        compDeck = compDeck.concat(compCard, playerCard);
        // compDeck = [compDeck, ...playerCard];
        console.log('computer wins');
    }
    // playerDeck.flat(2);
    // compDeck.flat(2);
    playerCard = [];
    compCard = [];
}
function goToWarAgain() {
    let playerWarTwo = [];
    let compWarTwo = [];
    for(let i = 0; i <= 3; i++) {
        compWarTwo.push(compDeck.shift());
        playerWarTwo.push(playerDeck.shift());
    };
    playerCard = playerCard.concat(playerWarTwo);
    compCard = compCard.concat(compWarTwo);
    console.log(playerWarTwo, compWarTwo);
    console.log(playerCard, compCard);
    checkWarWinner();
}

function renderCard(card, player) {
    player.innerHTML = `<div class="card ${card.face}"></div>`;
}

function renderWarCards(card, player) {
    player.innerHTML = '';
    for (let i = 0; i <= card.length - 1; i++){
        player.innerHTML += `<div class="card ${card[i].face}"></div> <br />`
    }
    
    
}

function renderWinner() {
    if (compDeck.length > playerDeck.length) {
        return alert('Computer has won')
    } else {
        return alert('Computer has won')
    }; 
}


function resetGame() {
    init();
}

console.log(masterDeck);
console.log(shuffledDeck);