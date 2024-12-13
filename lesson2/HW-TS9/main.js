var Card = /** @class */ (function () {
    function Card(cardValues, color, cardSuit) {
        this.cardValues = cardValues;
        this.color = color;
        this.cardSuit = cardSuit;
    }
    return Card;
}());
var suits = ['spade', 'diamond', 'heart', 'club'];
var values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var cards = [];
for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
    var suit = suits_1[_i];
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        var card = ({ cardSuit: suit, cardValues: value });
        if (card.suit === 'heart' || card.suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);
var spadeAce = cards.filter(function (card) { return card.cardValues === 'ace' && card.cardSuit === 'spade'; });
console.log(cards.filter(function (card) { return card.cardValues === 'ace' && card.cardSuit === 'spade'; }));
console.log(cards.filter(function (card) { return card.cardValues === '6'; }));
console.log(cards.filter(function (card) { return card.color === 'red'; }));
console.log(cards.filter(function (card) { return card.cardSuit === 'diamond'; }));
console.log(cards.filter(function (card) { return card.cardSuit === 'club' && (card.cardValues !== '6' && card.cardValues !== '7' && card.cardValues !== '8' && card.cardValues !== '9'); }));
