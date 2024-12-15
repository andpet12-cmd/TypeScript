interface Card {
    cardValues: string;
    color: string;
    cardSuit: string;
}

const suits: string[] = ['spade', 'diamond', 'heart', 'club'];
const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards: Card[] = [];

for (const suit of suits) {
    for (const value of values) {
        const card: Card = {cardSuit: suit, cardValues: value, color: ''};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

const spadeAce: Card[] = cards.filter(card => card.cardValues === 'ace' && card.cardSuit === 'spade');
console.log(spadeAce);

console.log(cards.filter(card => card.cardValues === 'ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.cardValues === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'club' && (card.cardValues !== '6' && card.cardValues !== '7' && card.cardValues !== '8' && card.cardValues !== '9')));