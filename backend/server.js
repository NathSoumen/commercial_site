import express from 'express'
import mongoose from 'mongoose'
import { data } from './data.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/products', (req, res) => {
    res.send(data.product)
})
app.get('/', (req, res) => {
    res.send('hello world')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is ruuning at http://localhost:${PORT}`);
})