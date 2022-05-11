const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)
app.use('/note', routes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'views', '404error.html'))
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server is running at ${PORT}.`))
