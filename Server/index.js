const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const  bookRoute = require("./route/book.route.js")
const userRoute = require("./route/user.route.js")

const app = express();


app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = "mongodb://localhost:27017/bookstore";
try {
    mongoose.connect(URI);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

//  defining routes

app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`); 
});
