const express = require('express')
const app = express()
const port = 3001;
const user_model = require("./user_model");

app.get('/', (req, res) => {
  res.status(200).send('Server connected with port in 3001');
})

app.listen(port, () => {
  console.log(`App running on port ${port}. Visit: http://localhost:${port}`)
})

app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.post('/getuser', (req, res) => {

  user_model.getUser(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });

})

app.post('/register', (req, res) => {

  user_model.createUser(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });

})
