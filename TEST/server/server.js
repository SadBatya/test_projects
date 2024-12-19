import express from "express"
import cors from 'cors'
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())

app.get('/question',  (req, res) => {
 res.json({
    message: 'Hello from test!'
  })
})


app.listen(PORT, () => {
  console.log('Server is starting')
})