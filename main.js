//getting(deals) cards from id 'cards'
var showCards = document.getElementById("cards");

//button to run on click, displays new deck
showCards.onclick = function() {
    var cardContainer = document.getElementById('container');
    cardContainer.innerHTML = "";
    displayCards();
  if (document.getElementById("clearcards")== null) {
    createReset();
  }
};

function createReset() {
    var reset = document.createElement('button');
    reset.setAttribute("id", "reset");
    reset.innerHTML = "Reset";
    reset.onclick = function () {
      document.getElementById('container').innerHTML = "";
      document.body.removeChild(reset);
    }
    document.body.insertBefore(reset, document.body.children[1]);
}



//function that is run when deal is clicked, function
function displayCards() {
    //makes new deck via newDeck function
    var deck = newDeck();
    ///new shuffled cards
    var shuffledCards = shuffleCards(deck);

    for (var i = 0; i < deck.length; i++) {
        var card = document.createElement('div');
        card.className = "card";
        var cardContainer = document.getElementById('container');
        cardContainer.appendChild(card);
        card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

    }
}

// Creates a deck of 52 cards
function newDeck(){
  // variables
  // var ranks = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  var suits = ["d", "c", "s", "h"];
  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];
  var deck = [];
  // for loops
  for (i = 0; i < ranks.length; i++) {
    for (j = 0; j < suits.length; j++) {
      ranks[i].suit = suits[j];
      deck.push({
        card: ranks[i].card, suit: ranks[i].suit});
    }
  }
//have to return new array at the end of a function to be able to run the function
  return deck;
};

newDeck();


// Shuffles the Deck
// Shuffles the Deck
function shuffleCards(newDeck){
    var m = newDeck.length;
    while (m) {
      var i = Math.floor(Math.random() * m--);
      var t = newDeck[m];
      newDeck[m] = newDeck[i];
      newDeck[i] = t;
    }
    return newDeck;
};
