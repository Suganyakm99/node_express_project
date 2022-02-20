const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamp');
const logger = require('./middleware/logger');
const { connectDB }= require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB();
const app = express();

app.use(logger);
app.use("/api/v1/bootcamps", bootcamps);



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running in environment ${process.env.NODE_ENV} in port ${process.env.PORT}`)
})