const express = require("express");
const app = express();
const port = process.env.PORT || 8080
const userRoutes = require("./routes/user.route");
const cors = require("cors")

app.use(cors());
app.use(express.json());

app.use('/api/auth', userRoutes)


app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
})