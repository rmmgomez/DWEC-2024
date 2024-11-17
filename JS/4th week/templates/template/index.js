import { ProductService } from "./product-service.class.js";

const tbody = document.querySelector("#table tbody");
const form = document.getElementById("form");
const imgPreview = document.getElementById("imgPreview");
const productTemplate = document.getElementById("productTemplate");

const productService = new ProductService();

function appendProduct(product) {
  const priceFormat = new Intl.NumberFormat("es", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  const availFormat = new Intl.DateTimeFormat("es").format(
    new Date(product.available)
  );

  const userHTML = productTemplate.content.cloneNode(true);
  const tr = userHTML.firstElementChild;

  tr.querySelector("img").src = product.imageUrl;
  tr.children[1].textContent = priceFormat;
  tr.children[2].textContent = product.description;

  const btnDel = tr.querySelector("button");


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


