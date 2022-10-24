const express = require('express');
const mongoose = require('express');
const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded())

const employeeRoutes = require("./routes/employee");
const userRoutes = require('./routes/user');

const DB_URL = "mongodb+srv://abdelazizomar:okv6kN0Vev3rw5dZ@cluster0.qax1zpt.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority"

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the MongoDB Atlas Server");
}).catch(err => {
    console.log("Could not connect to the database...", err)
    process.exit();
})

app.use("api/user/", userRoutes)
app.use("api/employee/", employeeRoutes)

app.route("/")
    .get((req, res) =>{
    res.send("<h1>Assigment 1 --- Full Stack Develpoment</h1>");
});

app.listen(SERVER_PORT, () => {
    console.log(`Server started at http://localhost:${SERVER_PORT}/`);
});