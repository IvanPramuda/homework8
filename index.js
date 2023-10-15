const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'Contoh Simple CRUD API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

const films = require('./routes/films.js');
const categories = require('./routes/categories.js');

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

app.use('/films', films);
app.use('/categories', categories);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
