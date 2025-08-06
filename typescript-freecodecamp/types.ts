type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1 = {
  name: "john",
  age: 26,
  isStudent: true,
};

let person2 = {
  name: "joe",
  age: 32,
  isStudent: true,
  address: {
    street: "Yeet street",
    city: "Alabamaohio",
    state: "Colombia",
  },
};

let people: Person[] = [];
let otherPeople = [person1, person2];
