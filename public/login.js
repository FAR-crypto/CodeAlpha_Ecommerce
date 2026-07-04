function togglePassword(){

const input=document.getElementById("password");

input.type=input.type==="password"?"text":"password";

}

async function login(){

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

if(email===""||password===""){

alert("Fill all fields");

return;

}

try{

const res=await fetch("/api/auth/login",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email,

password

})

});

const data=await res.json();

if(!res.ok){

alert(data.message);

return;

}

localStorage.setItem("token",data.token);

localStorage.setItem("user",JSON.stringify(data.user));

alert("Login Successful");

window.location.href="index.html";

}

catch(err){

console.log(err);

alert("Server Error");

}

}