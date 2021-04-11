import Product from './ModuloPadre.mjs';

let arrayProduct = [];
let product1;
let product2;

// let buttonSave = document.getElementById("buttonSave");

// buttonSave.addEventListener(`click`, saveProduct);

buttonSave.addEventListener("click", function() {
    if(confirmation1.textContent == ""){
        product1 = creatProduct();
        confirmation1.textContent = product1.printAllData();
        confirmationBox1.classList.remove('d-none');
        confirmationBox1.classList.add('d-flex');
    }else if (confirmation2.textContent == ""){
        product2 = creatProduct();
        confirmation2.textContent = product2.printAllData();
        confirmationBox2.classList.remove('d-none');
        confirmationBox2.classList.add('d-flex');
    }else {
        confirmationBox2.classList.remove('d-flex');
        confirmationBox2.classList.add('d-none');
        confirmation2.textContent = "";
        product1 = creatProduct();
        confirmation1.textContent = product1.printAllData();
        confirmationBox1.classList.add('d-flex');
    }
      
  });

  if(document.getElementById('deleteButton1').clicked == true){
    product1.deleteProduct();
    alert(`deleted`);
  }

  if(document.getElementById('deleteButton2').clicked == true){
    product2.deleteProduct();
    alert(`deleted`);
    // alert(`The product ${product2.name} is deleted`);
  }

  // deleteButton.addEventListener("click", function() {
  //   confirmationBox.classList.remove('d-flex');
  //   confirmationBox.classList.add('d-none');
  //   confirmation.textContent = "";
  // });

  function creatProduct(){
    let newProduct = productName.value;
    let newPrice = productPrice.value;
    let newYear = productYear.value;
    if (newProduct != "" && newPrice != "") {
        if ((arrayProduct.some(e => e.name === newProduct))) {
            alert("The product already exists");
        } else {
            const product = new Product(newProduct, newPrice, newYear);
            arrayProduct.push(product);
            return product;
        }
        
    } else {
        alert("Please fill all fields");
    }
    
  }



// function saveProduct(){
//     let newProduct = productName.value;
//     let newPrice = productPrice.value;
//     let newYear = productYear.value;
//     const product = new Product(newProduct, newPrice, newYear);
//     product.getAllData();
// }
