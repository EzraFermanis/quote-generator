
var quotes = ["A dog will flatter you but you have to flatter the cat.- George Mikes", "You can keep a dog; but it is the cat who keeps people, because cats find humans useful domestic animals.- George Mikes",
"You own a dog but you feed a cat.- Jenny de Vries", "Some people say that cats are sneaky, evil, and cruel. True, and they have many other fine qualities as well. - Missy Dizick",
"One is never sure, watching two cats washing each other, whether it's affection, the taste or a trial run for the jugular.- Helen Thomson",
"Thousands of years ago, cats were worshipped as gods. Cats have never forgotten this.- Anonymous", "A cat sees no good reason why it should obey another animal, even if it does stand on two legs.- Sarah Thompson",
"Cats are kindly masters, just so long as you remember your place.- Paul Gray", "One must love a cat on its own terms.- Paul Gray"];


$(document).ready(function() {

	var gotButton = function(){document.getElementById("quoteButton");
	};

	var generateQuote = function() {
			$("#quoteButton").mouseup( function () {
				// console.log("event is working");
				var randomNum = Math.floor((Math.random() * 3));
				console.log(quotes[randomNum]);
						
					// else if (randomNum === 1) {
					// 		console.log(quotes[1]);
					// 	}
					// else	{
					// 		console.log(quotes[2]);
					// 	}
				
		});
	}

	generateQuote();

});





























