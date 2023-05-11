require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path')
const {logger, logEvents} = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require("cookie-parser")
const cors = require("cors")
const mongoose = require('mongoose')
const PORT = 8000

console.log(process.env.NODE_ENV)

require("./config/mongoose.config")

app.use(logger)

app.use(
    cors({credentials: true, origin: "http://localhost:3000"})
);

app.use(cookieParser())

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, 'public')))

// ROUTES
app.use('/', require('./routes/routes.root'))
const authRoutes = require("./routes/routes.auth")
authRoutes(app)
const taskRoutes = require("./routes/routes.task")
taskRoutes(app)
const userRoutes = require("./routes/routes.user")
userRoutes(app)
const projectRoutes = require("./routes/routes.project")
projectRoutes(app)

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } 
    else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } 
    else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
