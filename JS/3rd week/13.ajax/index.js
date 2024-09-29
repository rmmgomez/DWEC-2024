import { ProductService } from "./product-service.class.js";

const tbody = document.querySelector("#table tbody");
const form = document.getElementById("form");
const imgPreview = document.getElementById("imgPreview");

const productService = new ProductService();

function appendProduct(product) {
  const tr = document.createElement("tr");
  const tdImg  = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdDesc = document.createElement("td");
  const tdDelete = document.createElement("td");

  const img = document.createElement("img");
  img.src = product.imageUrl;
  tdImg.append(img);

  tdPrice.append(product.price);
  tdDesc.append(product.description);
  
  let btnDel = document.createElement("button");
  btnDel.append("Delete");
  tdDelete.append(btnDel);

  btnDel.addEventListener("click", e => {
    productService.delete(product.id)
    .then(() => tr.remove());
  });

  tr.append(tdImg, tdPrice, tdDesc, tdDelete);

  tbody.append(tr);
}

productService.getProducts()
.then(products => products.forEach(p => appendProduct(p)))
.catch(error => console.error("Error loading products: ", error));

form.image.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  if (file) reader.readAsDataURL(file);
  reader.addEventListener("load", (e) => {
    imgPreview.src = reader.result;
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const product = {
    price: +form.price.value,
    description: form.description.value,
    imageUrl: imgPreview.src
  };

  productService.add(product)
  .then(product => {
    appendProduct(product);
    form.reset();
    imgPreview.src = "";
  })
  .catch(error => console.error("Error creating the product: ", error));
});


