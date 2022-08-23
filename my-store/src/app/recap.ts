const username: string = "jdbalantar";
const sum = (a : number, b: number) => {
  return a + b;
}

sum(5,5);

class Person {

  /*
   Puedo declarar e iniciarlizar las variables dentro del constructor, sin necesidad de hacerlo en la clase
   */
  constructor(public age: number, public lastName: string) {

  }
}

const person = new Person(5, "Balanta");
console.log(person);
