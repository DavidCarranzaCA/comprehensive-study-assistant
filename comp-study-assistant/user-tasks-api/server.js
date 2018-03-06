const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const router = require('./app/routes/index')
const mongo = require('./app/mongodb')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});

dotenv.config()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(router)

mongo.connect(process.env.MONGODB_URL)
    .then(() => app.listen(process.env.PORT))
    .then(() => console.log(`Server listening on port ${process.env.PORT}`))
    .catch(err => {
        console.error(err)
        process.exit(1)
    })