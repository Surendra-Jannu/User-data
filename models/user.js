const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        maxlength:10 
    },
    role: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    gender: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 10
    },
    status: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
}));

function validateUser(user) {
    const schema = {
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        role: Joi.string().min(5).max(250).required(),
        gender: Joi.string().min(5).max(10).required(),
        password: Joi.string().min(5).max(1024).required(),
        status: Joi.string().min(5).max(250).required(),
        
        
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
