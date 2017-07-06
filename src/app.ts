import * as express from 'express'
import * as bodyParser from 'body-parser'

let app: express.Application = express()
const port: number = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.info('Server running at Port:', port)
})