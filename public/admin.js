async function loadProducts(){

const res=await fetch("/api/products");

const products=await res.json();

const grid=document.getElementById("adminProducts");

grid.innerHTML="";

products.forEach(product=>{

grid.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<p>${product.category}</p>

<button onclick="deleteProduct('${product._id}')">

🗑 Delete

</button>

</div>

`;

});

}

async function addProduct(){

const product={

name:document.getElementById("name").value,

description:document.getElementById("description").value,

image:document.getElementById("image").value,

price:Number(document.getElementById("price").value),

category:document.getElementById("category").value,

stock:Number(document.getElementById("stock").value),

rating:Number(document.getElementById("rating").value)

};

const res=await fetch("/api/products/add",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(product)

});

const data=await res.json();

alert(data.message);

loadProducts();

}

async function deleteProduct(id){

if(!confirm("Delete Product?"))

return;

await fetch("/api/products/"+id,{

method:"DELETE"

});

loadProducts();

}

loadProducts();