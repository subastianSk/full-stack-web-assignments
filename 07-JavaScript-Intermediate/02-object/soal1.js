const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(nama) {
      return `Hello, ${nama}`;
    }
  }
  
  /// EDIT HERE
    person.name = "Dwi Yanto Subastian";
    person.favDrinks[1] = "tap water";
     
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));
  