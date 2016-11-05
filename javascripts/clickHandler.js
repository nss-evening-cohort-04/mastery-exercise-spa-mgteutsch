var CarLot = (function (clickyCards) {

var descriptionEditor = document.getElementById("description-editor");

	clickyCards.activateEvents = function() {
		var carCards = document.getElementsByClassName("basicCarCard"); //Can't do "by ID" because the DOM Handler isn't creating unique id's
		var clickedCard = "";
		for (var i = 0; i < carCards.length; i++) {
			carCards[i].addEventListener("click", function(clickevent) {
				
				//Clears styling settings back to basicCarCard:
				for (var j = 0; j < carCards.length; j++) {
					carCards[j].classList.remove("selectedCarCard");	
           		};
           		//for reference: http://stackoverflow.com/questions/9780443/how-to-select-all-children-of-an-element-with-javascript-and-change-css-property


				//Identifies the clicked card, applies new border/background:
				var clickedCard = clickevent.target.parentNode;
				console.log(clickedCard);
				clickedCard.classList.add("selectedCarCard");				


				//Description Editor:
				descriptionEditor.focus();
				descriptionEditor.value = "";
				descriptionEditor.addEventListener("keyup", function() {
					if (clickedCard.classList.contains("selectedCarCard")) {
						var newDescription = descriptionEditor.value;
						clickedCard.querySelector(".carDescription").innerHTML = newDescription;
					};
				});
			});
		};
	}; 	

return clickyCards;

})(CarLot || {});