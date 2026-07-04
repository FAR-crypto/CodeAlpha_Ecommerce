function togglePassword(id){

const input=document.getElementById(id);

input.type=input.type==="password"?"text":"password";

}

async function register(){

const username=document.getElementById("username").value.trim();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

const confirmPassword=document.getElementById("confirmPassword").value;

if(username===""){

alert("Enter Username");

return;

}

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){

alert("Enter Valid Email");

return;

}

const passwordRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(!passwordRegex.test(password)){

alert("Password must contain:\n\n• 8 Characters\n• Uppercase\n• Lowercase\n• Number\n• Special Character");

return;

}

if(password!==confirmPassword){

alert("Passwords do not match");

return;

}

try{

const res=await fetch("/api/auth/register",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

username,

email,

password

})

});

const data=await res.json();

alert(data.message);

if(res.ok){

window.location.href="login.html";

}

}

catch(err){

alert("Server Error");

console.log(err);

}

}