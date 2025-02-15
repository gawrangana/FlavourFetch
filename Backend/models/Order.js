const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerUID: {
    type: String,
    ref: "Customer",
    required: true,
  },
  ingredients: [
    {
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
        required: true,
      },
      ingredientName: {
        type: String,
        required: true,
      }, // Store the name of the ingredient
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: {
    type: String,
    enum: ["Cash on Delivery", "Debit/Credit"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "To-Be-Delivered", "Delivered", "Cancelled"],
    default: "Pending",
  },
  deliveryAddress: { type: String, required: true }, // Delivery address
  createdAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model("Order", OrderSchema);

// Default export
module.exports = OrderModel;
