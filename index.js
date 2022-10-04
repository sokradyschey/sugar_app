const express = require('express')
const app = express()
const port = 3000

// used to serve images, css files, and js files from public directory
app.use(express.static('public'))
// used to serve files from views directory
app.use(express.static('views'))

// path to render /views html files
const path = require('path')
app.use( express.static(path.join(__dirname, 'public', 'views')));



// start app on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})