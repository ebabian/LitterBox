const mongoose = require('mongoose')

const litterSchema = new mongoose.Schema(
    {
        username: String,
        entry: String,
        date: String,
        likes: Number,

    }
)

const Litterbox = mongoose.model('Litterbox', litterSchema)
module.exports = Litterbox
