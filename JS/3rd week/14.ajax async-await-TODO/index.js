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

  btnDel.addEventListener("click", async e => {
    await productService.delete(product.id);
    tr.remove();
  });

  tr.append(tdImg, tdPrice, tdDesc, tdDelete);

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
  if (file) reader.readAsDataURL(file);
  reader.addEventListener("load", (e) => {
    imgPreview.src = reader.result;
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


