import "dotenv/config"
const port = process.env.PORT
import {app} from './13-app'

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})