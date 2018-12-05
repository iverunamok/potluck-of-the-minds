const express = require('express')
const path = require('path')
const app = express()
const isProd = () => process.env.NODE_ENV === 'production';
const port = process.env.PORT || 1234
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(port, function(){
  console.log(`running on ${port}`)
})
