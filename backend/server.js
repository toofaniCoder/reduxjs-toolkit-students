const express = require("express");
const app = express();
const connectDB = require("./database/db");

connectDB();

// middleware
app.use(express.json());

app.use("/students", require("./routes/userRoute"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is started at: ${PORT}`));
