import { Http } from './http.class.js';
import { SERVER } from './constants.js';

export class ProductService {
  #http;
  constructor() {
    this.#http = new Http();
  }

  getProducts() {
    return this.#http.get(`${SERVER}/products`)
      .then((response) => response.products);
  }

  add(product) {
    return this.#http.post(`${SERVER}/products`, product)
      .then((response) => response.product);
  }

  update(product) {
    return this.#http
      .put(`${SERVER}/products/${product.id}`, product)
      .then((response) => response.product);
  }

  delete(id) {
    return this.#http.delete(`${SERVER}/products/${id}`);
  }
}
