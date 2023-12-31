const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);

const port = 8000;
const DB_URL =
  "mongodb+srv://prakash14:prakash14@cluster0.hvj6tki.mongodb.net/mernCrud?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => {
        console.log('DB Conncted');
    })
    .catch((err) => console.log('DB connection error.', err))

app.listen(port, () => {
    console.log(`App is running o ${port}`);
});