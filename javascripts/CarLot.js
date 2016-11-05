var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function () {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      	inventory = JSON.parse(this.responseText);
      	console.log(this);
      	console.log(inventory);
      	loadCarsToDOM(inventory);
      });
      
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  };

})();