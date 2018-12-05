const express = require('express')
const path = require('path')
const app = express()
const isProd = () => process.env.NODE_ENV === 'production';;
const port = isProd ? process.env.PORT : 3000
console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, function(){
  console.log(`running on ${port}`)
})
