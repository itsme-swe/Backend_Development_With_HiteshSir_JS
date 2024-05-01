import mongoose, { mongo } from "mongoose"
import { Product } from "./product.model"

const orderItemSchema = new mongoose.Schema(
    {
        // Reference to the product being ordered
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },

        quantity: {
            type: Number,
            required: true
        }
    }
)

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true
        },

        // Reference to the customer who placed the order
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        orderItems: {
            type: [orderItemSchema]
        },

        address: {
            type: String,
            required: true
        }, 

        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"],
            default: "PENDING"
        }
    }, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)
