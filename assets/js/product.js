// Sample product data
const products = [
    {
        id: 1,
        title: "Orca T-Shirt",
        price: 29.99,
        description: "High-quality T-shirt featuring the Orca logo. Comfortable, stylish, and perfect for everyday wear.",
        image: "product1.jpg"
    },
    {
        id: 2,
        title: "Orca Hoodie",
        price: 49.99,
        description: "Warm and stylish Orca hoodie. Perfect for cooler weather.",
        image: "product2.jpg"
    },
    {
        id: 3,
        title: "Orca Cap",
        price: 19.99,
        description: "Classic Orca cap, a must-have accessory.",
        image: "product3.jpg"
    },
    // Add more products as needed
];

// Function to get product ID from URL
function getProductID() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'), 10);
}

// Function to load product details
function loadProductDetails(productID) {
    const product = products.find(p => p.id === productID);
    
    if (product) {
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-img').src = `assets/img/${product.image}`;
        document.getElementById('add-to-cart-btn').onclick = () => addToCart(product.id);
    } else {
        // Handle product not found
        document.querySelector('.product-detail').innerHTML = `<p>Product not found.</p>`;
    }
}

// Function to add product to cart (you'll need to implement cart logic)
function addToCart(productID) {
    alert(`Added product ${productID} to cart`);
}

// Load related products (optional, could be dynamically filtered)
function loadRelatedProducts(currentProductID) {
    const relatedProductsContainer = document.getElementById('related-products');
    const relatedProducts = products.filter(p => p.id !== currentProductID);
    
    relatedProducts.forEach(product => {
        relatedProductsContainer.innerHTML += `
            <div class="product-item">
                <img src="assets/img/${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>`;
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const productID = getProductID();
    loadProductDetails(productID);
    loadRelatedProducts(productID);
});
