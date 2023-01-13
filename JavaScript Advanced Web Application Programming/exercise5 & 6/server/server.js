
import { sport, basketballLeagues, footballLeagues, nba, euroleague, hnl, premierLeague } from './data.js'

import express from 'express'
import bp from 'body-parser'
import cors from 'cors'

const { urlencoded, json } = bp

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors())
app.use(express.json()
)
app.get('/', (req, res) => {
  res.send('Hello from the server!')
})

const PORT = 3000

app.get('/sport', (req, res) => {
  return res.json(sport)
})

app.get('/sport/football', (req, res) => {
  return res.json(footballLeagues)
})

app.get('/sport/basketball', (req, res) => {
  return res.json(basketballLeagues)
})

app.get('/sport/basketball/nba', (req, res) => {
  return res.json(nba)
})

app.get('/sport/basketball/euroleague', (req, res) => {
  return res.json(euroleague)
})

app.get('/sport/football/hnl', (req, res) => {
  return res.json(hnl)
})

app.get('/sport/football/premierleague', (req, res) => {
  return res.json(premierLeague)
})

app.listen(PORT, () => {
  console.log('Server listening on port 3000')
})
