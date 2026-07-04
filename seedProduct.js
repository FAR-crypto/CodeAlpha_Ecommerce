const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

    console.log("MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany([

        {
            name:"Nike Air Max",
            description:"Comfortable running shoes",
            image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
            price:2999,
            category:"Shoes",
            stock:20,
            rating:5
        },

        {
            name:"Adidas Sneakers",
            description:"Stylish everyday sneakers",
            image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
            price:3499,
            category:"Shoes",
            stock:15,
            rating:4.8
        },

        {
            name:"iPhone 16 Pro",
            description:"Apple flagship smartphone",
            image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
            price:129999,
            category:"Mobiles",
            stock:10,
            rating:5
        },

        {
            name:"Samsung Galaxy S25",
            description:"Premium Android smartphone",
            image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
            price:99999,
            category:"Mobiles",
            stock:12,
            rating:4.9
        },

        {
            name:"Sony Headphones",
            description:"Noise cancelling headphones",
            image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
            price:4999,
            category:"Electronics",
            stock:30,
            rating:4.9
        },

        {
            name:"Canon DSLR Camera",
            description:"Professional photography camera",
            image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
            price:45999,
            category:"Camera",
            stock:8,
            rating:5
        },

        {
            name:"Apple Watch",
            description:"Smart fitness watch",
            image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
            price:39999,
            category:"Watch",
            stock:18,
            rating:4.8
        },

        {
            name:"MacBook Air M4",
            description:"Powerful lightweight laptop",
            image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
            price:119999,
            category:"Laptop",
            stock:7,
            rating:5
        }

    ]);

    console.log("✅ Products Inserted Successfully");

    process.exit();

})
.catch(err=>console.log(err));