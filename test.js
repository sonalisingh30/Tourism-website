// Sample product data (replace with your actual data)
const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
    { id: 4, name: "Product 4", price: "$40" },
    { id: 5, name: "Product 5", price: "$50" },
    { id: 6, name: "Product 6", price: "$60" },
    { id: 7, name: "Product 7", price: "$70" }
];

const productContainer = document.getElementById('product-container');
const loadMoreBtn = document.getElementById('load-more-btn');
let visibleCount = 3; // Number of products initially visible

// Function to display products
function displayProducts() {
    // Clear existing content
    productContainer.innerHTML = '';

    // Loop through products and display them
    for (let i = 0; i < visibleCount && i < products.length; i++) {
        const product = products[i];
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.textContent = `${product.name} - ${product.price}`;
        productContainer.appendChild(productItem);
    }

    // Show/hide load more button based on remaining products
    if (visibleCount < products.length) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

// Initial display
displayProducts();

// Event listener for load more button
loadMoreBtn.addEventListener('click', () => {
    visibleCount += 3; // Increase the visible count by 3
    displayProducts(); // Redraw the products
});
