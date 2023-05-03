const express = require('express');
const boom = require('@hapi/boom');
const productsService = require('../services/ProductsService');

const service = new productsService();
const router = express.Router();

router.get('/', (req, res) => {
  const products = service.find();

  res.json(products);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await service.findOne(id);
    if (!data) {
      throw boom.notFound('Element not found');
    }
    if (data.isBlocked) {
      throw boom.conflict('Element is blocked');
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newData = await service.create(body);
    res.status(201).json(newData);
  } catch (error) {
    next(error); //se agrega el next para atrapar de forma explicita el error con el middleware
  }
});
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedData = service.delete(id);
  res.json(deletedData);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const newData = service.update(id, body);
  res.json(newData);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const newData = service.update(id, body);
  res.json(newData);
});

module.exports = router;
