const suits = ["diamonds", "clubs", "spades", "hearts"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const makeDeck = (suits, values) => {
  let deck = [];
  const makeSuit = (suit, values) => values.map(x => `${x} of ${suit}`);
  suits.forEach(x => {
    deck = [...deck, ...makeSuit(x, values)];
  });
  return deck;
};

console.log(makeDeck(suits, values));
