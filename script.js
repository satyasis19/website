// script.js

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to 'Add to Cart' buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCountElement = document.getElementById('cart-count');
  let cartCount = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartCountElement.textContent = cartCount;
      alert('Item added to cart!');
    });
  });

  // Add event listener for search functionality
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
      // Implement search functionality here
    } else {
      alert('Please enter a search term.');
    }
  });
});
