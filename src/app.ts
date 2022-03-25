import mongoose from "mongoose";

mongoose.connect('');

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});