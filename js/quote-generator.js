
var quotes = ["A dog will flatter you but you have to flatter the cat.- George Mikes", 
"You can keep a dog; but it is the cat who keeps people, because cats find humans useful domestic animals.- George Mikes",
"You own a dog but you feed a cat.- Jenny de Vries", 
"Some people say that cats are sneaky, evil, and cruel. True, and they have many other fine qualities as well. - Missy Dizick",
"One is never sure, watching two cats washing each other, whether it's affection, the taste or a trial run for the jugular.- Helen Thomson",
"Thousands of years ago, cats were worshipped as gods. Cats have never forgotten this.- Anonymous", 
"A cat sees no good reason why it should obey another animal, even if it does stand on two legs.- Sarah Thompson",
"Cats are kindly masters, just so long as you remember your place.- Paul Gray", 
"One must love a cat on its own terms.- Paul Gray",
"What greater gift than the love of a cat. - Charles Dickens",
"A cat has absolute emotional honesty: human beings, for one reason or another, may hide their feelings, but a cat does not. - Ernest Hemingway",
"Of all God's creatures, there is only one that cannot be made slave of the leash. That one is the cat. If man could be crossed with the cat it would improve the man, but it would deteriorate the cat. - Mark Twain",
"I love cats because I enjoy my home; and little by little, they become its visible soul. - Jean Cocteau",

];

$(document).ready(function() {

	var gotButton = function(){document.getElementById("quoteButton");
	};

	var generateQuote = function() {
			$("#quoteButton").mouseup( function () {
				// console.log("event is working");
				var randomNum = Math.floor((Math.random() * 12));
				console.log(quotes[randomNum]);
					document.getElementById("quotes").innerHTML = quotes[randomNum];
				$(this).attr("href", 'https://twitter.com/intent/tweet?text=%20Stressed%20is%20dessert%20spelt%20backwards.')
		});
	}

	generateQuote();

});





























