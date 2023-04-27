import express from 'express'
import path from 'path'
import { join } from 'node:path'
import weather from './routes/weather'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use(express.static(join(__dirname, 'public')))
server.use(express.json())

// server.get('*', (req, res) => {
//   res.sendFile(join(__dirname, './public/index.html'))
// })

server.use('/weather', weather)

export default server
