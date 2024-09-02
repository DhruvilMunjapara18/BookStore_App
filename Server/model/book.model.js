const mongoose = require("mongoose")


const bookSchema = mongoose.Schema({
    name: String,
    pricen: Number,
    category: String,
    image: String,
    title: String
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;