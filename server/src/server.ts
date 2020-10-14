import express from 'express'
import './database/connection'
import path from 'path'
import routes from './routes'

import 'express-async-errors'
import errorHandler from './error/handler'

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333, () => {
    console.log("Listening")
})