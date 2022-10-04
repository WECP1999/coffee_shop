import { FieldValues } from "react-hook-form";

const hasErrors = (data: FieldValues, name: string) => {
  const item = data[name];
  return item ? "danger" : "basic";
};
export default hasErrors;
