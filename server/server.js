const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS middleware
const Test = require('./model/testModel');

const app = express();
const port = 3000;

const uri = "mongodb+srv://admin:admin@cluster0.prkqtng.mongodb.net/testDocuments?retryWrites=true&w=majority";
const clientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, clientOptions)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

app.use(cors()); // Enable CORS for all routes

app.get('/', async (req, res) => {
    try {
        const testDocument = await Test.findOne({ tittel: 'test' });
        console.log(testDocument);

        res.send(testDocument);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
