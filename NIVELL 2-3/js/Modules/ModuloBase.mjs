import Product from './ModuloPadre.mjs';
import {year} from './actualYear.js';
productYear.value = year.getFullYear();

let arrayProduct = [];
let index1 = -1;
let index2 = -1;

let textMsn = {
	errorProduct: "Please fill all field of the product",
	duplicatedProduct: "The product is already created"
}

//Nivell 1

// let buttonSave = document.getElementById("buttonSave");

// buttonSave.addEventListener(`click`, saveProduct);

// function saveProduct(){
//     let newProduct = productName.value;
//     let newPrice = productPrice.value;
//     let newYear = productYear.value;
//     const product = new Product(newProduct, newPrice, newYear);
//     product.getAllData();
// }

buttonSave.addEventListener("click", function() {
    if(confirmation1.textContent == ""){
      printConfirmation(confirmation1, confirmationBox1);
      index1 = arrayProduct.length - 1;
    }else if (confirmation2.textContent == ""){
      printConfirmation(confirmation2, confirmationBox2);
      index2 = arrayProduct.length - 1;
    }else {
        confirmationBox2.classList.remove('d-flex');
        confirmationBox2.classList.add('d-none');
        confirmation2.textContent = "";
        let product = creatProduct();
        confirmation1.textContent = product.printAllData();
        confirmationBox1.classList.add('d-flex');
        index1 = arrayProduct.length - 1;
    }
      
  });

  function printConfirmation(confirmation, confirmationBox){
        let product = creatProduct();
        confirmation.textContent = product.printAllData();
        confirmationBox.classList.remove('d-none');
        confirmationBox.classList.add('d-flex');
  }

  deleteButton1.addEventListener("click", function() {
    createAlert(confirmationBox1, index1, alertFormKo, arrayProduct);
  });

  deleteButton2.addEventListener("click", function() {
    createAlert(confirmationBox2, index2, alertFormKo, arrayProduct);
  });

  function creatProduct(){
    let newProduct = productName.value;
    let newPrice = productPrice.value;
    let newYear = productYear.value;
    if (newProduct != "" && newPrice != "") {
        if ((arrayProduct.some(e => e.name === newProduct))) {
          alertFormKo.textContent = textMsn.duplicatedProduct;
          alertFormKo.classList.remove('d-none');
          alarmHide(alertFormKo);
        } else {
            const product = new Product(newProduct, newPrice, newYear);
            arrayProduct.push(product);
            alertFormOk.textContent = product.createdProduct();
            alertFormOk.classList.remove('d-none');
            alarmHide(alertFormOk);
            return product;
        }
        
    } else {
        alertFormKo.textContent = textMsn.errorProduct;
        alertFormKo.classList.remove('d-none');
        alarmHide(alertFormKo);
    }
    
  }

  function createAlert(confirmationBox, index, alertFormKo, arrayProduct){
    alertFormKo.textContent = arrayProduct[index].deleteProduct();
    arrayProduct.splice(index, 1);
    confirmationBox.classList.remove('d-flex');
    confirmationBox.classList.add('d-none');
    alertFormKo.classList.remove('d-none');
    alarmHide(alertFormKo);
  }

  function alarmHide(alertFormOk) {
    setTimeout(function(){ alertFormOk.classList.add('d-none'); }, 3000);
  }
