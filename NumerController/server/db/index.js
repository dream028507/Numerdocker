const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://root:131313za@cluster0-q1xn2.azure.mongodb.net/Numer_DB', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db