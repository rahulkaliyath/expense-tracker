const mongoose = require('mongoose');
const config = require('config');
const MONGO_URI = config.get('MONGO_URI');

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true ,
            useFindAndModify:false
        });

        console.log("Connected To MongoDB");

    } catch (error) {
        console.log("MongoDB Connection Failed",error.message);
    }
}

module.exports = connectDB;