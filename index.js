//server extensiate

const express = require("express");
const app = express();
//env file ke configur.ko load karti hai process object ke andar
require("dotenv").config();
//process object se PORT no. lene ki kosis karti haii nhii milta haii to bydefault 3000
const PORT = process.env.PORT || 3000;

//middlewaresor parse json
app.use(express.json());
//import route
const blog = require("./routes/blog")
//mount the api routes
app.use("/api/v1", blog);

//connection with db
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at port no. ${PORT}`);
})

//default route
app.get("/", (req,res) => {
    res.send(`<h1>Homepage</h1>`);
})