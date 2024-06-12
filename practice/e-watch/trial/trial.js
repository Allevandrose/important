// Get all cards
const cards = document.querySelectorAll('.card');

// Add event listener to each card
cards.forEach(card => {
  const addToCartButton = card.querySelector('.add-to-cart-button');
  addToCartButton.addEventListener('click', addToCart);
});

// Function to add to cart
function addToCart() {
  // Get card information
  const card = this.parentElement;
  const cardTitle = card.querySelector('.card-title').textContent;
  const cardDescription = card.querySelector('.card-description').textContent;
  const cardPrice = card.querySelector('.price').textContent.replace('Price:', '').trim();

  // Create cart item
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <h2>${cardTitle}</h2>
    <p>${cardDescription}</p>
    <p>Price: ${cardPrice}</p>
    <button class="remove-from-cart-button">Remove from Cart</button>
  `;

  // Get cart
  const cart = document.querySelector('.cart');

  // Add cart item to cart
  cart.appendChild(cartItem);

  // Remove from cart functionality
  const removeFromCartButton = cartItem.querySelector('.remove-from-cart-button');
  removeFromCartButton.addEventListener('click', removeFromCart);

  // Disable add to cart button
  this.disabled = true;
}

// Function to remove from cart
function removeFromCart() {
  // Get cart item
  const cartItem = this.parentElement;

  // Remove cart item from cart
  cartItem.remove();

  // Get add to cart button
  const addToCartButton = this.parentElement.querySelector('.add-to-cart-button');

  // Enable add to cart button
  addToCartButton.disabled = false;
}