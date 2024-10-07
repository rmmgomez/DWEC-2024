import {ProductsService} from './products-service.js';

const productsService = new ProductsService();

const productsTable = document.getElementById("products");
const formProducto = document.getElementById("formProducto");
const imgPreview = document.getElementById("imgPreview");

async function getProducts() {
  const products = await productsService.getProductos();
  products.forEach((p) => showProduct(p));
}

function showProduct(product) {
  const tr = document.createElement("tr");
  const tdImage = document.createElement("td");
  const tdDesc = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdAvail = document.createElement("td");
  const tdDelete = document.createElement("td");

  const img = document.createElement("img");
  img.src = product.imageUrl;

  tdImage.append(img);
  tdDesc.textContent = product.description;
  tdPrice.textContent = new Intl.NumberFormat("es", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);
  tdAvail.textContent = new Intl.DateTimeFormat("es").format(
    new Date(product.available)
  );

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  btnDelete.addEventListener("click", async (e) => {
    await productsService.delete(product.id);
    tr.remove();
  });
  tdDelete.append(btnDelete);

  tr.append(tdImage, tdDesc, tdPrice, tdAvail, tdDelete);
  productsTable.querySelector("tbody").append(tr);
}


getProducts();

formProducto.image.addEventListener("change", (e) => {
  const file = formProducto.image.files[0];
  const reader = new FileReader();

  if (file) {
    // Si se ha seleccionado un archivo válido (convertir a Base64)
    reader.readAsDataURL(file);
  }

  reader.addEventListener("load", () => {
    // Evento de conversión a Base64 completa (asíncrono)
    imgPreview.src = reader.result; // Mostramos la imagen cargada en un elemento <img> (previsualización)
  });
});

formProducto.addEventListener("submit", async (e) => {
  e.preventDefault();

  const product = {
    description: formProducto.description.value,
    price: +formProducto.price.value,
    imageUrl: imgPreview.src,
    available: new Date().toISOString().split("T")[0],
    rating: 1,
  };

  showProduct(await productsService.add(product));
  formProducto.reset();
  imgPreview.src = "";
});
