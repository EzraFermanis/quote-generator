
var quotes = ["Cats are the best", "Cats are cray cray", "Cats are cool"]

$(document).ready(function() {

		
var generateQuote = function(event) {
		event.onmouseup" {
		var randomNum = Math.floor((Math.random() * 11));
		switch(randomNum) {
			case 0:
				console.log(quotes[0]);
				break;
			case 1:
				console.log(quotes[1]);
				break;
			case 2:
				console.log(quotes[2]);
				break;
		}

	}
}

document.addEventListener("onmouseup", mouseup);
generateQuote();




};






















