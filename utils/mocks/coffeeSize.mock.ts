import TGenericList from "../types/TGenericList";

const coffeeSizes: readonly TGenericList[] = Object.freeze([
  {
    id: 1,
    name: "Short 8 onz",
    price: 1.0,
  },
  {
    id: 2,
    name: "Tall 12 onz",
    price: 1.5,
  },
  {
    id: 3,
    name: "Grande 16 onz",
    price: 2,
  },
]);

export default coffeeSizes;
