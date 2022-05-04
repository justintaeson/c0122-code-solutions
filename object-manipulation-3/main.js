console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Justin',
    hand: [],
    score: null
  },
  {
    name: 'Damien',
    hand: [],
    score: null
  },
  {
    name: 'Jacob',
    hand: [],
    score: null
  },
  {
    name: 'Steve',
    hand: [],
    score: null
  }
];

const deck = [];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

function createDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const cardObject = {};
      cardObject.suit = suits[i];
      cardObject.rank = values[j];
      deck.push(cardObject);
    }
  }
  return deck;
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const placeholder = deck[i];
    deck[i] = deck[j];
    deck[j] = placeholder;
  }
  return deck;
}

function playGame() {
  createDeck();
  shuffleDeck();
  for (let i = 0; i < players.length; i++) {
    const firstCard = Math.floor(Math.random() * 52);
    const secondCard = Math.floor(Math.random() * 52);
    players[i].hand.push(deck[firstCard]);
    players[i].hand.push(deck[secondCard]);
  }
  getScore();
  let winner = '';
  let topScore = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].score > topScore) {
      topScore = players[i].score;
      winner = players[i].name;
    }
  }
  console.log('Winner', winner);
}

function getScore() {
  for (let i = 0; i < players.length; i++) {
    const firstCard = players[i].hand[0];
    const secondCard = players[i].hand[1];
    let firstCardRank = players[i].hand[0].rank;
    let secondCardRank = players[i].hand[1].rank;
    if (firstCard.rank === 'jack' || firstCard.rank === 'queen' || firstCard.rank === 'king') {
      firstCardRank = '10';
    }
    if (secondCard.rank === 'jack' || secondCard.rank === 'queen' || secondCard.rank === 'king') {
      secondCardRank = '10';
    }
    if (firstCard.rank === 'ace') {
      firstCardRank = '11';
    }
    if (secondCard.rank === 'ace') {
      secondCardRank = '11';
    }
    const firstCardScore = parseInt(firstCardRank);
    const secondCardScore = parseInt(secondCardRank);
    players[i].score = firstCardScore + secondCardScore;
  }
}

playGame();
