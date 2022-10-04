import TGenericList from "../types/TGenericList";

const coffeeTypes: readonly TGenericList[] = Object.freeze([
  {
    id: 1,
    name: "Mocha",
    price: 2,
  },
  {
    id: 2,
    name: "Te Chai",
    price: 2.5,
  },
  {
    id: 3,
    name: "Americano",
    price: 1.5,
  },
  {
    id: 4,
    name: "Frappe",
    price: 3,
  },
]);

export default coffeeTypes;
