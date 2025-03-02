
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
	const products_Object = [
		{id:1, name:"product1", price:100},
		{id:2, name:"product2", price:200},
		{id:3, name:"product3", price:300},
	];


	products_Object.forEach(iterator => {
		const dynamic_Display_Products = document.createElement("div");
		dynamic_Display_Products.classList.add("product");

		dynamic_Display_Products.innerHTML = `<span>${iterator.name} - Price $${iterator.price.toFixed(2)}</span> 
											  <button data-id="${iterator.id}">Add To Cart</button>`;

		productList.appendChild(dynamic_Display_Products);
	})


	productList.addEventListener("click", (event) =>{
		if (event.target.tagName === "BUTTON"){
		 	  const product_Id = parseInt (event.target.getAttribute("data-id"));
		}
	})












})

