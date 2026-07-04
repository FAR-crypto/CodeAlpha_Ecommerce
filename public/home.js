let allProducts = [];

async function loadProducts() {

    try {

        const res = await fetch("/api/products");

        allProducts = await res.json();

        displayProducts(allProducts);

    }

    catch (error) {

        console.log(error);

    }

}

function displayProducts(products) {

    const productGrid = document.getElementById("productGrid");

    productGrid.innerHTML = "";

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    products.forEach(product => {

        const liked = wishlist.some(item => item._id === product._id);

        productGrid.innerHTML += `

        <div class="product-card">

            <div class="wishlist-icon"
                 onclick="toggleWishlist('${product._id}')">

                ${liked ? "❤️" : "🤍"}

            </div>

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button onclick="addToCart('${product._id}')">

                Add To Cart

            </button>

        </div>

        `;

    });

}



function addToCart(id) {

    const product = allProducts.find(p => p._id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    showToast("✅ Added To Cart");

}

function searchProducts() {

    const keyword = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const filtered = allProducts.filter(product =>

        product.name.toLowerCase().includes(keyword) ||

        product.category.toLowerCase().includes(keyword)

    );

    displayProducts(filtered);

}

function filterCategory(category) {

    if (category === "All") {

        displayProducts(allProducts);

        return;

    }

    const filtered = allProducts.filter(product =>

        product.category === category

    );

    displayProducts(filtered);

}

function showToast(message){

const toast=document.createElement("div");

toast.innerText=message;

toast.style.position="fixed";

toast.style.top="30px";

toast.style.right="30px";

toast.style.background="#22c55e";

toast.style.color="white";

toast.style.padding="15px 25px";

toast.style.borderRadius="10px";

toast.style.fontWeight="600";

toast.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

toast.style.zIndex="9999";

toast.style.animation="slideUp .4s ease";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},2000);

}
function toggleWishlist(id){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const product = allProducts.find(p => p._id === id);

    const exists = wishlist.find(item => item._id === id);

    if(exists){

        wishlist = wishlist.filter(item => item._id !== id);

    }

    else{

        wishlist.push(product);

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayProducts(allProducts);

}
loadProducts();