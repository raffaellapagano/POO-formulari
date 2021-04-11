const _private = new WeakMap();

class Product{
     // ====== Método constructor ======
    constructor(name, price, year){
        // ====== Propiedades ======
        const properties = {
        _name: name,
        _price: price,
        _year: year
    }
    _private.set(this, {properties});
    }

    // ====== Métodos / Getters-Setters ======
    get name(){
        return _private.get(this).properties['_name'];
    }

    set name(newName){
        return _private.get(this).properties['_name'] = newName;
    }

    get price(){
        return _private.get(this).properties['_price'];
    }

    set price(newPrice){
        return _private.get(this).properties['_price'] = newPrice;
    }

    get year(){
        return _private.get(this).properties['_year'];
    }

    set year(newYear){
        return _private.get(this).properties['_year'] = newYear;
    }
    // ====== Método Nivell 1 imprimir objeto por consola======
    getAllData(){
        console.log( `Product Name: ${this.name}, Product Price: ${this.price}, Product Year: ${this.year}`);
    }
    // ====== Métodos Nivell 2 imprimir en un div y eliminar objeto======
    printAllData(){
        return `Product Name: ${this.name}, Product Price: ${this.price}, Product Year: ${this.year}`;
    }
    deleteProduct(){
        return `The product ${this.name} is deleted`;
    }
    // ====== Método Nivell 3 crear objeto======
    createdProduct(){
        return `The product ${this.name} is created successfully`;
    }
}

// const PersonaSueca = "Suecia";

// export {Persona, PersonaSueca};
export default Product;