
// retrieving bun name

function browseload() {

	$(".flavor").click(function() {

		var flavorName = $(this).text();
		console.log(flavorName);
		localStorage.setItem("flavorName", JSON.stringify(flavorName))

	})
}


// loads text for the glazing drop down
function startup (){

	var nameofFlavor = JSON.parse(localStorage.getItem("flavorName"))

	document.getElementById("bunName").innerHTML = nameofFlavor + " Cinnamon Roll";
	document.getElementById("none").innerHTML = "None";
	document.getElementById("sugarmilk").innerHTML = "Sugar Milk";
	document.getElementById("vanillamilk").innerHTML = "Vanilla Milk";
	document.getElementById("doublechocolate").innerHTML = "Double Chocolate";
}

// changes price when quantity is changed
function changePrice () {

	var price = ["2", "6", "12", "24"]
	var priceNum = document.getElementById("mySelect").selectedIndex;
	document.getElementById("tPrice").innerHTML = "Total: $" + price[priceNum];

}

// changes image when glazing is changed
function changePic () {

    var imgsrc = document.getElementById("gDropdown").value
    document.getElementById("bunImg").src = imgsrc;

}




// array for items added to cart
var ItemsInCart = [];

// constructor function to create objects to be added to cart
function Bun(flavor, quantity, glazing, price) {

	this.flavor = flavor;
	this.quantity = quantity;
	this.glazing = glazing;
	this.price = price;

	}
   
// function after clicking on add to cart button
function AddToCart() {

	//retrieving object properties from detail page
    var nameAdd = document.getElementById("bunName").textContent;
    var quantityAdd = document.getElementById("mySelect").value;
    var sel = document.getElementById("gDropdown");
    var glazingAdd = sel.options[sel.selectedIndex].text;

    var price = ["2", "6", "12", "24"]
	var priceNum = document.getElementById("mySelect").selectedIndex;

	var subPrice = price[priceNum]


	// button pushes new bun into cart array
	var addBun = new Bun(nameAdd, quantityAdd, glazingAdd, subPrice)
	ItemsInCart.push(addBun);


	// visual indication of increased added cart items 
	document.getElementById("cartItemNumber").innerHTML = "(" + ItemsInCart.length + ")";

	// popup message
    var atCart = document.createElement("p")
    var addedtoCart = document.createTextNode("Added to cart!");
    atCart.appendChild(addedtoCart);    
    atCart.classList.add("added")

	// popup message for bun selected
    var bFlav = document.createElement("p")
    var bFlavor = document.createTextNode(nameAdd);
    bFlav.appendChild(bFlavor);
    bFlav.classList.add("nameAdded")

	// popup message for quantity selected
    var bQuan = document.createElement("p")
    var bQuantity = document.createTextNode("Quantity: " + quantityAdd);
    bQuan.appendChild(bQuantity);
    bFlav.classList.add("qAdded")

    var bGlaz = document.createElement("p")
    var bGlazing = document.createTextNode("Glazing: " + glazingAdd);
    bGlaz.appendChild(bGlazing);
    bFlav.classList.add("gAdded")

    document.getElementById("popupContent").appendChild(atCart);
    document.getElementById("popupContent").appendChild(bFlav);
    document.getElementById("popupContent").appendChild(bQuan);
    document.getElementById("popupContent").appendChild(bGlaz);

    // storing array in local storage
	localStorage.setItem("ItemsInCart", JSON.stringify(ItemsInCart))

	}

// retrieving array items from local storage in new array	
var storedItems = JSON.parse(localStorage.getItem("ItemsInCart"))


// loads when Shopping page loads
function showItem() {

	// displaying cart items in shopping cart page
	for (var i = 0; i < storedItems.length; i++){

		var bunContainer = document.createElement("div");
		bunContainer.classList.add("bunCon");

		// displaying bun flavor and glazing
		var bunDes = document.createElement("span")
		bunDes.classList.add("objectDes")

		var bunG = document.createElement("span")
		bunG.classList.add("objectG")

		var bunDescription = document.createTextNode(storedItems[i].flavor)
		var bunGlazing = document.createTextNode("Glazing: " + storedItems[i].glazing)

		bunDes.appendChild(bunDescription);
		bunG.appendChild(bunGlazing);
		
		
		// displaying bun quantity
		var bunQ = document.createElement("span")
		bunQ.classList.add("objectQ")

		var bunQuantity = document.createTextNode(storedItems[i].quantity)
		bunQ.appendChild(bunQuantity);

		// displaying bun price
		var bunP = document.createElement("span")
		bunP.classList.add("objectP")

		var bunPrice = document.createTextNode("$" + storedItems[i].price)
		bunP.appendChild(bunPrice);

		// displaying remove button
		var deleteButton = document.createElement("button")
		deleteButton.classList.add("dButton")

		var buttontext = document.createTextNode("Remove from cart")
		deleteButton.appendChild(buttontext)

		bunContainer.appendChild(bunDes);
		bunContainer.appendChild(bunG);
		bunContainer.appendChild(bunQ);
		bunContainer.appendChild(bunP);
		bunContainer.appendChild(deleteButton);

		document.getElementById("itemStored").appendChild(bunContainer);

		// calculates total price of items
		var nun = 0;
		var sum = nun += parseInt(storedItems[i].price)	

	}


	// remove from cart button
	$("button").click(function(){

		var index = $(this).parent().index();
		index = index - 1

		$(this).parent().remove();

		storedItems.splice(index,1);

		localStorage.setItem("ItemsInCart", JSON.stringify(storedItems))
		location.reload();
	})

	//displaying number of items in cart
	document.getElementById("itemstoredNumber").innerHTML = "(" + storedItems.length + ")";

	//
	var totalPrice = document.createElement("span");
	totalPrice.classList.add("TotalPrice");

	if (storedItems.length < 1){
		console.log("yay")

		bunTotalPrice = document.createTextNode("There are no items in your cart!");
		$("#Checkout").hide();
	} else {
			bunTotalPrice = document.createTextNode("Total: $" + sum);
		}


	totalPrice.appendChild(bunTotalPrice);
	document.getElementById("TotalPrice").appendChild(totalPrice);
	


}




$("#AddToCart").click(function() {

	$("#popupContent").show();
	$("#popupContent").fadeOut(4000,function(){
		
		$("#popupContent").empty();

		});


})

