const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { limit } = req.query;

  for (let index = 0; index < (limit || 10); index++) {
    users.push({
      name: faker.name.fullName(),
      user: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      email: faker.internet.email(),
      birthdate: faker.date.birthdate(),
      country: faker.address.country(),
      city: faker.address.city(),
    });
  }

  res.json(users);
});

module.exports = router;
