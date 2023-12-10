const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Aahaar:Aahaardsn@cluster0.vcnbn0b.mongodb.net/?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;

