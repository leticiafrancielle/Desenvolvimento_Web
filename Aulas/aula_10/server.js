const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5700
const connectionString = "mongodb+srv://leticiafrancielle:teste123@appdatabase.sjsbjbi.mongodb.net/"
const Animal = require('./models/animal')

app.use(express.json())

app.get("/listar-animais", async (req, res) => {
    try {
        let animais = await Animal.find()
        return res.status(200).json({ animais: animais })
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/adicionar-animal', async (req, res) => {
    try {
        const { nome, raca, peso } = req.body

        let animal = {
            nome,
            raca,
            peso
        }

        await Animal.create(animal)
        return res.status(201).json({ message: "Animal cadastrado com sucesso!" })
    } catch (error) {
        return res.status(500).json({ error: "Erro ao cadastrar animal." })
    }
})

mongoose.connect(connectionString, {
    dbName: "PETSHOP"
}).then(() => {
    console.log("MongoDb UP!")
    console.log(`Servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})