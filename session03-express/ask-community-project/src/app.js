const express = require('express');
const bodyParser = require('body-parser');
var router = require('../router/questions.js');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('This is homepage!')
});
app.get('/ask', (req, res) => {
    res.send('This is a asking page!')
});
app.get('/question-detail/:id', (req, res) => {
    res.send('This is a question detail page!')
});
app.use('/api/v1/questions', router);
app.get('/*', (req, res) => {
    res.send('PAGE NOT FOUND')
});
app.listen(port, () => {
  console.log(`Server đang gọi trên port: http://localhost:${port}`);
})