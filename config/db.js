const mongoose = require('mongoose');

exports.connectDB = async () => {

    const connect = await mongoose.connect(process.env.MONGO_URI , {
        useNewUrlParser : true ,
    })

    console.log(`mongoose connected in ${connect.connection.host}`)
}