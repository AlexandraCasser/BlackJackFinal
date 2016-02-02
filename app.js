var bet = 0;

window.onload = function() {


var card = function(suit, cardValue, nameOfCard, cardImage) { //constructor for cards
	return {
    suit: suit,
    cardValue: cardValue,
    nameOfCard: nameOfCard,
    cardImage: cardImage,
	}
}

var player = function(chips) {
	return {	
	chips: 100,
}
}

var deckOfCards = [ 
aceOfHearts = new card("Hearts", 1 || 11, "Ace of Hearts", "CSS/images/AceImage.jpg"),
twoOfHearts = new card("Hearts", 2, "Two of Hearts"),
threeOfHearts = new card("Hearts", 3, "Three of Hearts"),
fourOfHearts = new card("Hearts", 4, "Four of Hearts"),
fiveOfHearts = new card("Hearts", 5, "Five of Hearts"),
sixOfHearts = new card("Hearts", 6, "Six of Hearts"),
sevenOfHearts = new card("Hearts", 7, "Seven of Hearts"),
eightOfHearts = new card("Hearts", 8, "Eight of Hearts"),
nineOfHearts = new card("Hearts", 9, "Nine of Hearts"),
tenOfHearts = new card("Hearts", 10, "Ten of Hearts"),
jackofHearts = new card("Hearts", 10, "Jack of Hearts"),
queenOfHearts = new card("Hearts", 10, "Queen of Hearts"),
kingOfHearts = new card("Hearts", 10, "King of Hearts"),

aceOfClubs = new card("Clubs", 1 || 11, "Ace of Clubs", "CSS/images/AceImage.jpg"),
twoOfClubs = new card("Clubs", 2, "Two of Clubs"),
threeOfClubs = new card("Clubs", 3, "Three of Clubs"),
fourOfClubs = new card("Clubs", 4, "Four of Clubs"),
fiveOfClubs = new card("Clubs", 5, "Five of Clubs"),
sixOfClubs = new card("Clubs", 6, "Six of Clubs"),
sevenOfClubs = new card("Clubs", 7, "Seven of Clubs"),
eightOfClubs = new card("Clubs", 8, "Eight of Clubs"),
nineOfClubs = new card("Clubs", 9, "Nine of Clubs"),
tenOfClubs = new card("Clubs", 10, "Ten of Clubs"),
jackofClubs = new card("Clubs", 10, "Jack of Clubs"),
queenOfClubs = new card("Clubs", 10, "Queen of Clubs"),
kingOfClubs = new card("Clubs", 10, "King of Clubs"),

aceOfDiamonds = new card("Diamonds", 1 || 11, "Ace of Diamonds", "CSS/images/AceImage.jpg"),
twoOfDiamonds = new card("Diamonds", 2, "Two of Diamonds"),
threeOfDiamonds = new card("Diamonds", 3, "Three of Diamonds"),
fourOfDiamonds = new card("Diamonds", 4, "Four of Diamonds"),
fiveOfDiamonds = new card("Diamonds", 5, "Five of Diamonds"),
sixOfDiamonds = new card("Diamonds", 6, "Six of Diamonds"),
sevenOfDiamonds = new card("Diamonds", 7, "Seven of Diamonds"),
eightOfDiamonds = new card("Diamonds", 8, "Eight of Diamonds"),
nineOfDiamonds = new card("Diamonds", 9, "Nine of Diamonds"),
tenOfDiamonds = new card("Diamonds", 10, "Ten of Diamonds"),
jackofDiamonds = new card("Diamonds", 10, "Jack of Diamonds"),
queenOfDiamonds = new card("Diamonds", 10, "Queen of Diamonds"),
kingOfDiamonds = new card("Diamonds", 10, "King of Diamonds"),

aceOfSpades = new card("Spades", 1 || 11, "Ace of Spades", "CSS/images/AceImage.jpg"),
twoOfSpades = new card("Spades", 2, "Two of Spades"),
threeOfSpades = new card("Spades", 3, "Three of Spades"),
fourOfSpades = new card("Spades", 4, "Four of Spades"),
fiveOfSpades = new card("Spades", 5, "Five of Spades"),
sixOfSpades = new card("Spades", 6, "Six of Spades"),
sevenOfSpades = new card("Spades", 7, "Seven of Spades"),
eightOfSpades = new card("Spades", 8, "Eight of Spades"),
nineOfSpades = new card("Spades", 9, "Nine of Spades"),
tenOfSpades = new card("Spades", 10, "Ten of Spades"),
jackofSpades = new card("Spades", 10, "Jack of Spades"),
queenOfSpades = new card("Spades", 10, "Queen of Spades"),
kingOfSpades = new card("Spades", 10, "King of Spades")
];

// Test: console.log(deckOfCards);

chipCounter = 100;
numberCounter = 0;
dealerNumberCounter = 0; 
var usedCards = [];
// var betFunction = function() {
// 	if (chipCounter === 100) {
// 		document.getElementbyId("bet-submit");
// 		$("#chipCounterID").html("bet")
// 	}
// }

// $("#chipCounterID").append(betFunction);

// function total() {
//     var bet = document.forms["betForm"]["sum1"].value;
//     var display=document.getElementbyId("display");
//     display.innerHTML=parseInt(bet);
//     return false;
// }

$("#submit").click(function () {
	bet = $("#sum1").val();
	// console.log($("#sum1").val());
	chipCounter -= bet;
	console.log(chipCounter);
	var $yourScoreDiv = $('#yourScore');
	console.log($yourScoreDiv);
	var $chipCounterIDDiv = $("#chipCounterID");
	// $chipCounterIDDiv.empty();
	var $gameDialogue = $('#game-dialogue');
	$gameDialogue.empty();
	$gameDialogue.html("You have " + chipCounter + " chips left.");	
	// var $betCounterDiv = $("#betCounter");
	// $betCounterDiv.append($chipCounterIDDiv);
	var $chipCounterDiv = $('#chipCounter');
	// $betCounterDiv.append($chipCounter;
	console.log(chipCounter);

});


// var $bet = $("#sum1").val();
// console.log($bet);


// Start of game -- First hit
$("#pCard1").click(function() { 
	//deals the player's card on clicking on player's card image/div
	// Tested: alert("this works");

	var random = (Math.floor(Math.random() * deckOfCards.length)); 
	//get a random card from deck by calling a random number and finding that point in the array, then logging its name and adding its value to the player's total
	// console.log(random);

	// this.innerHTML = (deckOfCards[random].cardImage);

	this.innerHTML = (deckOfCards[random].nameOfCard);

	usedCards.push(deckOfCards[random]);
	// console.log(usedCards);

		// if (usedCards)
	//makes div innerHTML name of card

	var newNumber = (deckOfCards[random].cardValue);
	//finds card value of random card

	// if (newNumber = 1 || 11) {
	// 	alert("this works")
	// } else {

	// }

	var numberPlusCard = (numberCounter += newNumber);
	// finds new number (old score plus new card value)
	// Tested: console.log(numberPlusCard);

	$("#counter").empty().append(numberPlusCard); //<----.empty = personal triumph
	//print new score to div
	// 	Test: var random = (Math.floor(Math.random() * deckOfCards.length)); 
	// Test: console.log(random);
	// var removeThis = deckOfCards[random];
	// Test: console.log(removeThis);

	  if (numberPlusCard === 21) {
    	alert("You win!");
    	(player.chips +=$("#sum1").val());
    	console.log(player.chips);

    } else if (numberPlusCard > 21) {
    	alert("Your luck's run out.")
    }

	var removed = deckOfCards.splice(random, 1);
	//removes dealt card

	//Test: console.log(removed.name);
	//Test: console.log(deckOfCards);
});


//========New function=======
	// $("#pCard1").click(function() {

	//dealerNumberCounter = 0; //dealing card to dealer
	// var nextRound = function() { 
	$("#dCard1").click(function() {

	var dealerRandom = (Math.floor(Math.random() * deckOfCards.length)); 

	// console.log(dealerRandom);

	this.innerHTML = (deckOfCards[dealerRandom].nameOfCard);

	var newDealerNumber = (deckOfCards[dealerRandom].cardValue);
	// console.log(newDealerNumber)

	var numberDealerPlusCard = (dealerNumberCounter += newDealerNumber);
	console.log(numberDealerPlusCard);

	$("#dealerCounter").empty().append(numberDealerPlusCard); 

	if (numberDealerPlusCard < 17) {
		$("#dealerCounter").empty().append(numberDealerPlusCard); 
	} else if (numberDealerPlusCard > 21) {
		alert("You win!");
		chipCounter = chipCounter + (bet * 2);
		console.log(chipCounter);
		var $gameDialogue = $('#game-dialogue');
		$gameDialogue.empty();
		$gameDialogue.html("You have " + chipCounter + " chips left.");	


}
})


	$("#stayCard").click(function() {

	var dealerRandom = (Math.floor(Math.random() * deckOfCards.length)); 

	// console.log(dealerRandom);

	this.innerHTML = (deckOfCards[dealerRandom].nameOfCard);

	var newDealerNumber = (deckOfCards[dealerRandom].cardValue);
	// console.log(newDealerNumber)

	var numberDealerPlusCard = (dealerNumberCounter += newDealerNumber);
	console.log(numberDealerPlusCard);

	$("#dealerCounter").empty().append(numberDealerPlusCard); 

	if (numberDealerPlusCard < 17) {
		$("#dealerCounter").empty().append(numberDealerPlusCard); 
	} else if (numberDealerPlusCard > 21) {
		alert("You win!");
		chipCounter = chipCounter + (bet * 2);
		console.log(chipCounter);
		var $gameDialogue = $('#game-dialogue');
		$gameDialogue.empty();
		$gameDialogue.html("You have " + chipCounter + " chips left.");	


}

	// } else

	// // if (numberDealerPlusCard >= 17 && numberDealerPlusCard <= 21) {
	// if (numberDealerPlusCard === 17 || 18 || 19 || 20) {

	// $("#dealerCounter").empty().append(17) 
	// }

	// $("#chipCounterID").empty().append(betFunction);

	// var removed = deckOfCards.splice(random, 1);

// };
// });

});

}

// });

// }


//=======================Get Winner Function==========================
// var getWinner = function {

// 	if (playerTotal === 21) {
// 		alert("You won this hand, partner.")
// 	} else if {
// 		(dealerTotal >= 17) {
// 			// disable their ability to play
// 		}
// 	} else if {
// 		(playerTotal < 21) {
// 			alert("You lose.")
// 		}
// 	}
// }


//===========================Code Graveyard=====================

//Create cards
//each array can get a class and have an image associated with it
// var cards = [[Ac, 2c, 3c, 4c, 5c, 6c, 7c, 8c, 9c, 10c, Jc, Qc, Kc]
// 						[]

// ];


// function Card(suit, value) {
//     this.suit = spades;}
    
// function getSuit() {
//     return Math.floor((Math.random() * 4) + 1);
// }
// function getNumber() {
//     return Math.floor((Math.random() * 13) + 1);
// }

// 	function getRandom(arr) {
//    var random1 = Math.floor((Math.random() * (arr.length)));
//    return arr[random1][Math.floor((Math.random() * (arr[random1].length)))];

// }

// function Card(number) {
//     this.number = (number % 13)+1;
//     this.realNumber = number;
// }


// var deck = [];
// for (i = 0; i < 52; i++) {
//     deck[i] = new Card(i);
// }

// var newDeck = function() {
//     for (i = 0; i < 52; i++) {
//         deck[i] = new Card(i);
//     }
// };

// var randomCard = function() {
//     var card = Math.floor(Math.random()*deck.length);      
//     return deck.splice(card, 1)[0];
// };

// var testCards = (deckOfCards[3].nameOfCard);

// var play = function() {
// 			if (turn) {
// 				$(pCard1).innertext(testCards);

// }
// }
	// document.getElementbyId("counter").textContent = (numberPlusCard);
	// var usedCards = []; //stores cards after they've been dealt
	// while (deckOfCards.length > 0);



	 	// $("#dCard1").click(function() { 

// 			if (numberPlusCard === numberDealerPlusCard) {
// 			alert("It's a push!")
// 		} 
		
// 			if (numberPlusCard > 21) {
// 			alert("You lost this one.");
// 			var chipCounter = (chipCounter - bet);
// 		} 
// 			if (numberPlusCard === 21) {
// 			alert("You win!");
// 			var chipCounter = (chipCounter + (bet * 2));
// 		}

// 	});


// }

// $("#pCard1").click(function() { //this works but also sucks
// 	$("#counter").innerHTML = (numberPlusCard);
// });


// $("#counter").innerHTML = ("numberPlusCard");


// var pointsCounter = function(){
// 	if ($("#pCard1") != null) {
// 	$("#counter").innertext = (numberPlusCard);
// 	}
// }

// var firstCard = function() {

// 	pCard2.innerHTML = (deckOfCards[random].nameOfCard);

// 		deckOfCards.splice(firstCard);
// }

// 	console.log(pCard2.innerHTML);


// hitMe.onclick = function (event) { //then send card to player, 

// 	while	pCard1.innerHTML = (deckOfCards[random].nameOfCard);
// 	}

// // then one to dealer, then repeat

