
document.addEventListener("DOMContentLoaded", () =>{

	const cart = [];

	// Dynamically Change Products
	const productList = document.getElementById("product-list");

	// Items In cart | Cart Is Empty Or Not Notifier Paragraph
	const cartItems = document.getElementById("cart-item");
	const emptyCartNotifier = document.getElementById("empty-cart");

	// Total Cart Items When Empty It's Going To Be Hidden  |  Total Price | Checkout Button
	const cartTotal = document.getElementById("cart-Total");
	const totalPrice = document.getElementById("total-price");
	const checkoutButton = document.getElementById("checkout-btn");


	//Products List Object
	const products_Object_Array = [
		{id:1, name:"product1", price:100},
		{id:2, name:"product2", price:200},
		{id:3, name:"product3", price:300},
	];


	products_Object_Array.forEach(iterator => {
		const dynamic_Display_Products = document.createElement("div");
		dynamic_Display_Products.classList.add("product");

		dynamic_Display_Products.innerHTML = `<span>${iterator.name} - Price $${iterator.price.toFixed(2)}</span> 
											  <button data-id="${iterator.id}">Add To Cart</button>`;

		productList.appendChild(dynamic_Display_Products);
	});


	productList.addEventListener("click", (event) =>{
		if (event.target.tagName === "BUTTON"){

		 	  const product_Id = parseInt(event.target.getAttribute("data-id"));
			  const product_Find = products_Object_Array.find(iterator => iterator.id === product_Id);

			  console.log(product_Find);

			  // Add To Cart Function Call
			  add_To_Cart(product_Id);
		}
	});

	// Products Going To The Cart
	function add_To_Cart(product_Saved_To_Cart){
		cart.push(product_Saved_To_Cart);

		// Render Cart In Display
		render_Cart();
	}

	// Render Saved Cart Items To The Display
	function render_Cart(){
		cartItems.innerText = " ";
		let total_Price = 0;

		if (cart.length > 0){
			emptyCartNotifier.classList.add("Hidden");
			cartTotal.classList.remove("hidden");

			cart.forEach((item , index) => {
 				total_Price += item.price;
				 const cartItem = document.createElement("div");

				 cartItem.innerHTML = `${item.price} - $${item.price.toFixed(2)}`;

				 cartItems.appendChild(cartItem);

				 total_Price.textContent = `${totalPrice.toFixed(2)}`;
			});
		}else {
			emptyCartNotifier.classList.remove("hidden");
			totalPrice.textContent = `0.00`;

		}
	}

	checkoutButton.addEventListener("click", () => {
		cart.length = 0;
		alert("Checkout Successful");

		render_Cart();
	});

});

