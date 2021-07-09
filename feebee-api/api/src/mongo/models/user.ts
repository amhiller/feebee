const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const userSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
        index: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },

    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    firstname: {
        type: String,
        required: false,
        unique: false,
    },

    lastname: {
        type: String,
        required: false,
        unique: false
    }



}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);