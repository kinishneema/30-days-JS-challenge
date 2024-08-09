const productsContainer = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
let cart = [];

// Function to fetch and display products
function displayProducts() {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
                    <img src="${product.image}" alt="${
          product.name
        }" class="product-image">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${
                      product.id
                    })">Add to Cart</button>
                `;
        productsContainer.appendChild(productCard);
      });
    });
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}

// Function to update cart display
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((product) => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    cartItems.appendChild(cartItem);
    total += product.price;
  });
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

displayProducts();
