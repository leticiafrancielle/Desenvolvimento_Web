const mongoose = require("mongoose")

const animalSchema = mongoose.Schema({
    nome: { type: String, require: true },
    raca: { type: String, require: true },
    peso: { type: Number, require: true }
})

const Animal = mongoose.model('animais', animalSchema)

module.exports = Animal