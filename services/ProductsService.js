const { faker } = require('@faker-js/faker');
class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }
  create(data) {
    const { name, description, color, price, image } = data;
    const newProduct = {
      id: faker.datatype.uuid(),
      name,
      description,
      color,
      price,
      image,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id == id);
  }

  update(id, changes) {
    const index = this.products.findIndex((item) => item.id == id);

    if (!index) {
      throw new Error('no se encontro el producto');
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes,
      };
      return this.products[index];
    }
  }
  delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new Error('No se encontro el producto');
    } else {
      this.products.splice(index, 1);
    }
    return this.products[index];
  }
}
module.exports = ProductsService;
