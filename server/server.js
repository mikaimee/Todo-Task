require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8000
const cors = require("cors")
const cookieParser = require("cookie-parser")

require("./config/mongoose.config")

app.use(cookieParser())
app.use(
    cors({credentials: true, origin: "http://localhost:3000"})
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const taskRoutes = require("./routes/routes.task")
taskRoutes(app)
const authRoutes = require("./routes/routes.auth")
authRoutes(app)
const userRoutes = require("./routes/routes.user")
userRoutes(app)
const projectRoutes = require("./routes/routes.project")
projectRoutes(app)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));