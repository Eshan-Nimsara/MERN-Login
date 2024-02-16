/*
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

const MONGODB_URI = 'mongodb+srv://agrimin:agrimin@cluster0.zmbmfqk.mongodb.net/';

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    EmployeeModel.findOne({ name: name })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Password is Incorrect!!!");
                }
            } else {
                res.json("No record exists!!!");
            }
        })
        .catch(error => {
            // Handle any errors that might occur during the database operation
            res.json("Error occurred: " + error.message);
        });
});


app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running!!!")
})

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!!');
});
*/

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

const MONGODB_URI = "mongodb+srv://agrimin:agrimin@cluster0.zmbmfqk.mongodb.net/";

app.post("/login", async (req, res) => {
    const { name, password } = req.body;
    const user = await EmployeeModel.findOne({ name: name });

    if (user) {
        if (user.password === password) {
            res.json("Success");
        } else {
            res.json("Password is Incorrect!!!");
        }
    } else {
        res.json("No record exists!!!");
    }
});

app.post("/register", async (req, res) => {
    const employee = await EmployeeModel.create(req.body);
    res.json(employee);
});

app.listen(3001, () => {
    console.log("Server is running!!!")
});

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
});
