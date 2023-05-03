const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { limit } = req.query;

  for (let index = 0; index < (limit || 10); index++) {
    categories.push({
      name: faker.commerce.department(),
    });
  }

  res.json(categories);
});

router.get('/:categoriaId/products/:productoId', (req, res) => {
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

module.exports = router;
