class Phone {
    constructor(brand, storage, ram){
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }
    getBrandName(){
        return this.brand
    }
    setBrandName(b){
        this.brand = b
    }
    printSpecification(){
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
    }
    setSpecification(s, r){
        this.storage = s
        this.ram = r
    }
}