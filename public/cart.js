let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}

function loadCart() {

    const cartItems = document.getElementById("cartItems");

    if (cart.length === 0) {

        cartItems.innerHTML = "<h2>Your Cart is Empty 🛒</h2>";

        return;

    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((product, index) => {

        if (!product.quantity)

            product.quantity = 1;

        const subtotal = product.price * product.quantity;

        total += subtotal;

        cartItems.innerHTML += `

        <div class="product-card">

            <img src="${product.image}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <h4>

            Quantity

            <button onclick="decrease(${index})">-</button>

            ${product.quantity}

            <button onclick="increase(${index})">+</button>

            </h4>

            <h3>

            Subtotal : ₹${subtotal}

            </h3>

            <button onclick="removeItem(${index})">

            Remove

            </button>

        </div>

        `;

    });

    const delivery = total > 0 ? 99 : 0;

    const gst = Math.round(total * 0.05);

    const grandTotal = total + delivery + gst;

    cartItems.innerHTML += `

    <div class="product-card">

        <h2>Order Summary</h2>

        <p>Products Total : ₹${total}</p>

        <p>Delivery Charge : ₹${delivery}</p>

        <p>GST (5%) : ₹${gst}</p>

        <hr>

        <h2>Grand Total : ₹${grandTotal}</h2>

        <button onclick="checkout()">

        Proceed To Checkout

        </button>

    </div>

    `;

    saveCart();

}

function increase(index) {

    cart[index].quantity++;

    loadCart();

}

function decrease(index) {

    if (cart[index].quantity > 1)

        cart[index].quantity--;

    loadCart();

}

function removeItem(index) {

    cart.splice(index, 1);

    loadCart();

}

function checkout() {

    window.location.href = "checkout.html";

}

loadCart();