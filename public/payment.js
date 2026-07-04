const payment = localStorage.getItem("paymentMethod");

const container = document.getElementById("paymentContainer");

if(payment==="UPI"){

container.innerHTML=`

<h2>UPI Payment</h2>

<input
type="text"
id="upi"
placeholder="Enter UPI ID">

<button onclick="payNow()">

Pay Now

</button>

`;

}

else if(payment==="Card"){

container.innerHTML=`

<h2>Card Payment</h2>

<input
type="text"
id="card"
placeholder="Card Number">

<input
type="text"
id="expiry"
placeholder="MM/YY">

<input
type="password"
id="cvv"
placeholder="CVV">

<button onclick="payNow()">

Pay Now

</button>

`;

}

else{

container.innerHTML=`

<h2>

Cash On Delivery

</h2>

<p>

You will pay when your order arrives.

</p>

<button onclick="payNow()">

Place Order

</button>

`;

}

function payNow(){

localStorage.removeItem("cart");

window.location.href="success.html";

}