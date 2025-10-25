import express from 'express'

const app = express()
const PORT = process.env.PORT || 3333

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Backend API ready' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`)
})

