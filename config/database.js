const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB CONNECTD SUCCESSFULLY"))
    .catch( (error) => {
        console.log("db facing connection issues");
        console.log(error);
        //shutdown, exit with error,abnormal termination
        process.exit(1);
    })
};

module.exports = connectWithDb;