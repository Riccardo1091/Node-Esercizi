import express from 'express'
import "express-async-errors"

export const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/percorso', (req, res) => {
  res.json([
    {"Test": "test completo"}
  ])
})

