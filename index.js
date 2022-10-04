const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const express = require('express');
const app = express();
const db = 'mongodb+srv://mongodb:ij7qNUWGfamf24Kv@cluster0.cf1pzhv.mongodb.net/?retryWrites=true&w=majority'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true
      })
// mongoose.connect('mongodb+srv://mongodb:ij7qNUWGfamf24Kv@cluster0.cf1pzhv.mongodb.net/?retryWrites=true&w=majority,{ user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true }')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/users', users);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
 
 
// mongodb+srv://abcdef:Abcd@123@cluster0.cf1pzhv.mongodb.net/?retryWrites=true&w=majority

// mongodb://username:password@localhost:27012/database
// mongodb+srv://<username>:<password>@cluster0.cf1pzhv.mongodb.net/?retryWrites=true&w=majority
// 'mongodb://abcdef:Abcd@123@localhost:4000/database'