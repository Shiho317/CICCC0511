const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server is running at ${PORT}.`))
