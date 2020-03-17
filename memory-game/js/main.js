const cards=[
{
	rank:'Queen',
	suit: 'Hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank:'Queen',
	suit: 'Diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank:'King',
	suit: 'Hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank:'King',
	suit: 'Diamonds',
	cardImage: "images/king-of-diamonds.png"
}];

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));}

cards.sort(function(a, b) {
	return getRandomInt(cards.length) - getRandomInt(cards.length);
});

const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	setTimeout(function(){
		if(!alert("You found a match!")){window.location.reload();};
	}, 300);
	} else {
	console.log("Sorry, try again");
	setTimeout(function(){
		if(!alert("Sorry, try again")){window.location.reload();};
	}, 300);
	}
}

function flipCard(){
	let cardId = this.getAttribute('data-id');
	console.log("User flipped "+cards[cardId].rank);
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch()
	}
}

function createBoard(){
	for (let i = 0; i < cards.length; i++){
	const cardElement = document.createElement('img');
	cardElement.setAttribute('src','images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click',flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	};
}

createBoard()