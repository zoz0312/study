const name: string = "AJu";
const age: number = 23;
const gender: string = "male";

const sayHi = (
  name,
  age,
  gender,
) => {
  console.log(`
    Name => ${name}
    Age => ${age}
    Gender => ${gender}
  `)
}

sayHi(name, age, gender);

export {};
