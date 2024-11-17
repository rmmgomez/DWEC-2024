import { ProductService } from "./product-service.class.js";
import templates from './compiled.js';

const tbody = document.querySelector("#table tbody");
const form = document.getElementById("form");
const imgPreview = document.getElementById("imgPreview");

const productService = new ProductService();

function appendProduct(product) {

  const priceFormat = new Intl.NumberFormat("es", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  const availFormat = new Intl.DateTimeFormat("es").format(
    new Date(product.available)
  );

  // Le pasamos a la plantilla los datos. Algunos los hemos formateado.
  const prodHTML = templates['product.hbs']({ ...product, price: priceFormat, available: availFormat });
  const template = document.createElement("template");
  template.innerHTML = prodHTML;

  const tr = template.content.firstElementChild;
  const btnDel = template.content.querySelector("button");

  btnDel.addEventListener("click", async e => {
    await productService.delete(product.id);
    tr.remove();
  });

  tbody.append(tr);

}

async function getProducts() {
  try {
    const products = await productService.getProducts();
    products.forEach(p => appendProduct(p));
  } catch (error) {
    console.error("Error loading products: ", error);
  }
}

getProducts();

form.image.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  // Si se ha seleccionado un archivo válido (convertir a Base64)
  if (file) reader.readAsDataURL(file);
  reader.addEventListener("load", () => {
    // Evento de conversión a Base64 completa (asíncrono)
    imgPreview.src = reader.result; // Mostramos la imagen cargada en un elemento <img> (previsualización)
  });
});

form.addEventListener("submit", async e => {
  e.preventDefault();
  const product = {
    price: +form.price.value,
    description: form.description.value,
    imageUrl: imgPreview.src
  };

  try {
    const productResp = await productService.add(product);
    appendProduct(productResp);
    form.reset();
    imgPreview.src = "";
  } catch (error) {
    console.error("Error creating the product: ", error);
  }
});


