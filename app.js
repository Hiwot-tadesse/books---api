const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');

const app = express();

app.use(bodyParser.json());

mongoose
    .connect('mongodb://127.0.0.1:27017/books', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.use('/books', bookRoutes);
app.use(express.json()); 


app.use('/api', bookRoutes)

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
