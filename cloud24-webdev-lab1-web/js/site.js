import services from "./services.js";

let cart = [];

function loadServices() {
  loadServicesFromStorage();
  const servicesGrid = document.getElementById("servicesGrid");
  services.forEach((service, index) => {
    servicesGrid.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100">
                    <img src="${service.image}" class="card-img-top" alt="${service.alt}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-center">${service.name}</h5>
                        <p class="card-text text-center price-text">$${service.price}</p>
                        <button class="btn mt-auto" onclick="addToCart(${index})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
  });
}

function addToCart(index) {
  const service = services[index];
  cart.push(service);
  displayToast(service.name);
  updateCartItemCount();
  saveCartToStorage();
}

function removeFromCart(index) {
  cart = cart.filter((_, i) => i !== index);
  updateCartDisplay();
  updateCartItemCount();
  saveCartToStorage();
}

function displayToast(serviceName) {
  const toastBody = document.querySelector("#cartToast .toast-body");
  toastBody.textContent = `Added "${serviceName}" to your cart. Hope you're ready for this!`;

  const toastElement = document.getElementById("cartToast");
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}

function toggleCart() {
  toggleCartVisibility();
  updateCartDisplay();
}

function toggleCartVisibility() {
  const cartModal = document.getElementById("cartModal");
  cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cartItems");
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <p class="text-center">Your cart is empty. Guess you're still deciding what bad decisions to make today.</p>
            <butto
        `;
  } else {
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="d-flex justify-content-between align-items-center mb-3">
            <p class="mb-0">${item.name} - <span class="price-text">$${item.price}</span></p>
            <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join("");
  }
}

function updateCartItemCount() {
  const cartButton = document.getElementById("cartItemCount");
  cartButton.textContent = `${cart.length}`;
}

function clearCart() {
  cart = [];
  updateCartDisplay();
  updateCartItemCount();
  saveCartToStorage();
}

function loadServicesFromStorage() {
  const cartString = localStorage.getItem("cart");
  if (cartString) {
    cart = JSON.parse(cartString);
    updateCartItemCount();
  }
}

function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleCart = toggleCart;
window.clearCart = clearCart;

window.onload = loadServices;

