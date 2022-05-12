const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'public/views');

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

const noteLists =[];

app.use((req, res, next) => {
  req.noteLists = noteLists;
  next();
})

app.use(routes)


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'views', '404error.html'))
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server is running at ${PORT}.`))
