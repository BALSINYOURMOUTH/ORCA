let cart = [];

const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
};

const updateCart = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="assets/img/${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>`;
    });

    updateCartTotal();
};

const updateCartTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
};

const removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
};

const proceedToCheckout = () => {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
};
