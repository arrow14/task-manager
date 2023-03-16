const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url).then(()=>console.log(`dataBase has been connected successfully`))

}

module.exports = connectDB 