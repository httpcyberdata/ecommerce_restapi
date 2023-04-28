const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => {
        console.log(err);     
    });
    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);

    app.listen(process.env.PORT, () => {
        console.log("Backend server is running")
    });

