const user = JSON.parse(localStorage.getItem("user"));

if(user){

document.getElementById("username").innerText = user.username;

document.getElementById("email").innerText = user.email;

}

document.getElementById("orders").innerText = Math.floor(Math.random()*10);

function logout(){

localStorage.removeItem("token");

localStorage.removeItem("user");

alert("Logged Out Successfully");

window.location.href = "login.html";

}