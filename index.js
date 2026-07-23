require("dotenv").config();

const express = require("express");

const studentRoutes = require("./routes/student.routes");

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {

console.log(`${process.env.APP_NAME} Running on Port ${PORT}`);

});
