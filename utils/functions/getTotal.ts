import { FieldValues } from "react-hook-form";
import coffeeSizes from "../mocks/coffeeSize.mock";
import coffeeTypes from "../mocks/coffeeType.mock";
import paymentMethods from "../mocks/paymentMethod.mock";

const getTotal = (data: FieldValues) => {
  const { quantity, coffeeType, coffeeSize, paymentMethod } = data;
  const coffeeTypePrice = coffeeTypes.find((item) => item.id === coffeeType)
    ?.price as number;
  const coffeeSizePrice = coffeeSizes.find((item) => item.id === coffeeSize)
    ?.price as number;
  const paymentMethodDiscount = paymentMethods.find(
    (item) => item.id === paymentMethod
  )?.discount as number;
  let total = quantity * coffeeTypePrice * coffeeSizePrice;
  total -= paymentMethodDiscount * total;
  return total;
};

export default getTotal;
