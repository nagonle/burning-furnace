const mongoose = require('mongoose')


const schema = new mongoose.Schema(
    {
        id: Number,
        brand: String,
        description: String,
        image: String,
        price: Number
    },
    {
        versionKey: false,
        collection: 'products'
    }
)

const Products = mongoose.model("Products", schema)
module.exports = Products
