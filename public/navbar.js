const navbar = document.getElementById("navbarLinks");

const user = JSON.parse(localStorage.getItem("user"));

if(user){

navbar.innerHTML=`

<a href="index.html">Home</a>

<a href="cart.html">Cart</a>

<div class="profile-menu">

<button class="profile-btn">

👤 ${user.username} ▼

</button>

<div class="dropdown">

<a href="profile.html">

👤 My Profile

</a>

<a href="wishlist.html">

❤️ Wishlist

</a>

<a href="cart.html">

🛒 Cart

</a>

<a href="#" onclick="logout()">

🚪 Logout

</a>

</div>

</div>

`;

}

function logout(){

localStorage.removeItem("token");

localStorage.removeItem("user");

localStorage.removeItem("cart");

window.location.href="login.html";

}