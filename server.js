const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const dotenv = require('dotenv').config()

const passport = require("passport");
const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db || process.env.MONGODB_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
})

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// process.env.port is Heroku's port if you choose to deploy the app there
const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {
    // app.use(express.static('client/build'));
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
