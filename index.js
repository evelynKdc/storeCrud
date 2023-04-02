const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor');
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

app.get('/products', (req, res) => {
  const products = [];
  const { limit } = req.query;

  for (let index = 0; index < (limit || 10); index++) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      color: faker.color.human(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

app.get('/product/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl(),
  });
});

app.get('/categoria/:categoriaId/producto/:productoId', (req, res) => {
  const { categoriaId, productoId } = req.params;

  res.json({
    productoId,
    categoriaId,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl(),
  });
});

app.listen(port, () => {
  console.log('Escuchando en el puerto: ', port);
});
