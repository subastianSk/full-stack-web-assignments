function getObjectValue(obj, p) {
    const path = p.split(".");
    let result = obj;
    for (let i = 0; i < path.length; i++) {
      if (result === null) {
        break;
      }
      const activeVal = path[i];
      const activeObj = result[activeVal];
      if (activeObj !== undefined) {
        result = activeObj;
      }else{
        result = null;
      }
    }
    return result;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)