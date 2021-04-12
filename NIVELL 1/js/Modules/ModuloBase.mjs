import Product from './ModuloPadre.mjs';
let year = new Date();
productYear.value = year.getFullYear();

let arrayProduct = [];
let index1 = -1;
let index2 = -1;

let textMsn = {
	errorProduct: "Please fill all field of the product",
	duplicatedProduct: "The product is already created"
}

// Nivell 1

let buttonSave = document.getElementById("buttonSave");

buttonSave.addEventListener(`click`, saveProduct);

function saveProduct(){
    let newProduct = productName.value;
    let newPrice = productPrice.value;
    let newYear = productYear.value;
    const product = new Product(newProduct, newPrice, newYear);
    product.getAllData();
}

