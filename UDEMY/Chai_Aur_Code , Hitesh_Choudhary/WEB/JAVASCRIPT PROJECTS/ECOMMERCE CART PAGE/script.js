// By Hitesh

// document.addEventListener("DOMContentLoaded", () => {
//   const products = [
//     { id: 1, name: "Product 1", price: 29.99 },
//     { id: 2, name: "Product 2", price: 19.99 },
//     { id: 3, name: "Product 3", price: 59.999 },
//   ];

//   const cart = [];

//   const productList = document.getElementById("product-list");
//   const cartItems = document.getElementById("cart-items");
//   const emptyCartMessage = document.getElementById("empty-cart");
//   const cartTotalMessage = document.getElementById("cart-total");
//   const totalPriceDisplay = document.getElementById("total-price");
//   const checkOutBtn = document.getElementById("checkout-btn");

//   products.forEach((product) => {
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("product");
//     productDiv.innerHTML = `
//     <span>${product.name} - $${product.price.toFixed(2)}</span>
//     <button data-id="${product.id}">Add to cart</button>
//     `;
//     productList.appendChild(productDiv);
//   });

//   productList.addEventListener("click", (e) => {
//     if (e.target.tagName === "BUTTON") {
//       const productId = parseInt(e.target.getAttribute("data-id"));
//       const product = products.find((p) => p.id === productId);
//       addToCart(product);
//     }
//   });

//   function addToCart(product) {
//     cart.push(product);
//     renderCart();
//   }

//   function renderCart() {
//     cartItems.innerText = "";
//     let totalPrice = 0;

//     if (cart.length > 0) {
//       emptyCartMessage.classList.add("hidden");
//       cartTotalMessage.classList.remove("hidden");
//       cart.forEach((item, index) => {
//         totalPrice += item.price;
//         const cartItem = document.createElement("div");
//         cartItem.innerHTML = `
//         ${item.name} - $${item.price.toFixed(2)}
//         `;
//         cartItems.appendChild(cartItem);
//         totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
//       });
//     } else {
//       emptyCartMessage.classList.remove("hidden");
//       totalPriceDisplay.textContent = `$0.00`;
//     }
//   }

//   checkOutBtn.addEventListener("click", () => {
//     cart.length = 0;
//     alert("Checkout successfully");
//     renderCart();
//   });
// });

// By Me

document.addEventListener("DOMContentLoaded", () => {
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

    // Products List Object
    const products_Object_Array = [
        { id: 1, name: "product1", price: 100 },
        { id: 2, name: "product2", price: 200 },
        { id: 3, name: "product3", price: 300 },
    ];

    // Dynamically Show The Products On The Products List Section
    products_Object_Array.forEach(iterator => {
        const dynamic_Display_Products = document.createElement("div");
        dynamic_Display_Products.classList.add("product");

        dynamic_Display_Products.innerHTML = `<span>${iterator.name} - Price $${iterator.price.toFixed(2)}</span> 
                                              <button data-id="${iterator.id}">Add To Cart</button>`;

        productList.appendChild(dynamic_Display_Products);
    });

    // Specify The Add To cart Button On The Lists Of The Products
    productList.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const product_Id = parseInt(event.target.getAttribute("data-id"));

            // Find the product by ID
            const product_Find = products_Object_Array.find(iterator => iterator.id === product_Id);

            // Add To Cart Function Call
            add_To_Cart(product_Find);
        }
    });

    // Products Going To The Cart | Saved
    function add_To_Cart(product_Saved_To_Cart) {
        cart.push(product_Saved_To_Cart);

        // Render Cart In Display
        render_Cart();
    }

    // Render Saved Cart Items To The Display
    function render_Cart() {
        cartItems.innerHTML = "";

        let total_Price = 0;

        if (cart.lengt > 0) {
            emptyCartNotifier.classList.add("hidden");
            cartTotal.classList.remove("hidden");

            cart.forEach((item) => {
                total_Price += item.price;

                const cartItem = document.createElement("div");
                cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;

                cartItems.appendChild(cartItem);
            });

            totalPrice.textContent = `$${total_Price.toFixed(2)}`;
        } else {
            
            totalPrice.textContent = `$0.00`;
        }
    }

    checkoutButton.addEventListener("click", () => {
        cart.length = 0;
        alert("Checkout Successful");

        render_Cart();
    });
});