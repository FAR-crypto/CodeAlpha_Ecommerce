const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const grid = document.getElementById("wishlistGrid");

function loadWishlist(){

    grid.innerHTML = "";

    if(wishlist.length === 0){

        grid.innerHTML = "<h2>Your wishlist is empty ❤️</h2>";

        return;

    }

    wishlist.forEach(product=>{

        grid.innerHTML += `

        <div class="product-card">

            <img src="${product.image}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button onclick="moveToCart('${product._id}')">

                Move To Cart

            </button>

        </div>

        `;

    });

}

function moveToCart(id){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = wishlist.find(p => p._id === id);

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    const updated = wishlist.filter(p => p._id !== id);

    localStorage.setItem("wishlist", JSON.stringify(updated));

    location.reload();

}

loadWishlist();