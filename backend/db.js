const mongoose = require('mongoose')

const url = 
    "mongodb://Bhavna:aoMeXc86JoUivmsR@ac-rfqkyjb-shard-00-00.ju3my1a.mongodb.net:27017,ac-rfqkyjb-shard-00-01.ju3my1a.mongodb.net:27017,ac-rfqkyjb-shard-00-02.ju3my1a.mongodb.net:27017/aback?ssl=true&replicaSet=atlas-yi7aex-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB connected successfully')
    }).catch((error) => console.log("Error: ", error))
}
    