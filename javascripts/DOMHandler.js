var loadCarsToDOM = function (inventory) {
	var carDataOutput = "";
		carDataOutput += '<div class="container">';
		carDataOutput += '<div class="row">';
		// 	The above carDataOuput can be consolidated into 1 line,
		//	but it is more "mentally digestible" to see it broken out

	var counter = 0;

	for (var i = 0; i < inventory.cars.length; i++) {
		var car = inventory.cars[i];
		counter = counter + 1;
		carDataOutput += '<div class="col-md-4 basicCarCard">';
       		carDataOutput += '<div class="carYear">' + car.year + '</div>';
       		carDataOutput += '<div class="carMake">' + car.make + '</div>';
       		carDataOutput += '<div class="carModel>' + car.model + '</div>';
		  	carDataOutput += '<div class="carPrice">' + '$' + car.price + '</div>';
			carDataOutput += '<div class="carDescription">' + car.description + '</div>';
      	carDataOutput += '</div>';

      	//To make only rows of 3 cards:
      	if (counter % 3 === 0) {
      		carDataOutput += '</div>'; // closes row after 3 cards
      		carDataOutput += '<div class="row">'; // then opens new row
      	} 	
	}

	carDataOutput += '</div>' // to close the container above

document.getElementById("carOutput").innerHTML = carDataOutput;

CarLot.activateEvents(); //calls the click events from clickHandler.js
};

CarLot.loadInventory();