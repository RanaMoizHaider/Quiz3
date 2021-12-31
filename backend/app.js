const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const authenticate = require('./middleware/authenticate');

const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');
const port = process.env.PORT;

const Users = require('./models/userSchema');
const AllUrls = require('./models/urlSchema');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.post('/register', async (req, res) => {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password
        });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Users.findOne({ email: email })
        if (user) {
            const isMatch = await bcryptjs.compare(password, user.password);

            if (isMatch) {
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 86400000),
                    httpOnly: true
                })
                res.status(200).send("LoggedIn");
            } else {
                res.status(400).send("Invalid Credentials");
            }
        } else {
            res.status(400).send("Email Not Exist");
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

// app.get('/auth', authenticate, (req, res) => {
//     // authenticate();
// })

app.get('/logout', (req, res) => {
    res.clearCookie("jwt", { path: '/' });
    res.status(200).send("User Logged Out");
})

app.get('/', async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            res.status(401).send("No Token");
        } else {
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            res = await Users.findOne({ _id: verifyToken._id, "tokens.token": token });

            if (!rootUser) {
                res.status(401).send("User Not Found");
            } else {
                res.status(200).send("Authorized User");
            }
        }
        next();

    } catch (error) {
        res.status(401).send("Error");
        console.log(error);
    }
});

app.post('/newurl', async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const name = req.body.name;
        const url = req.body.url;

        const createNewUrl = new AllUrls({
            user_id: user_id,
            name: name,
            url: url
        });

        const added = await createNewUrl.save();
        console.log(added);
        res.status(200).send("New Url Added");

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log("Server is Listenening");
})