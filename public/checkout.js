function placeOrder(){

    const name=document.getElementById("name").value.trim();

    const phone=document.getElementById("phone").value.trim();

    const address=document.getElementById("address").value.trim();

    const city=document.getElementById("city").value.trim();

    const pincode=document.getElementById("pincode").value.trim();

    const payment=document.getElementById("payment").value;

    if(
        name==="" ||
        phone==="" ||
        address==="" ||
        city==="" ||
        pincode==="" ||
        payment==="")
    {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("paymentMethod",payment);

    window.location.href="payment.html";

}