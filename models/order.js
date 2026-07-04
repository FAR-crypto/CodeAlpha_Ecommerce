const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: [

        {

            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },

            quantity: {
                type: Number,
                default: 1
            }

        }

    ],

    totalPrice: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        enum: ["COD", "UPI", "Card"],
        default: "COD"
    },

    orderStatus: {
        type: String,
        enum: [
            "Pending",
            "Confirmed",
            "Shipped",
            "Delivered"
        ],
        default: "Pending"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Order", orderSchema);