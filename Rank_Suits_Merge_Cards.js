var ranks = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["d", "c", "s", "h"];
var deck= [];
suits.forEach(function(suit){
  ranks.forEach(function(rank){
    deck.push(new Card(rank, suit));
  })
});

function Card(rank, suit){
  this.card = rank;
  this.suit = suit;
}

deck;



