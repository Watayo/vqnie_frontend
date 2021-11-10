import { React } from "react";
import "./InputHamiltonian.css";

const InputHamiltonian = () => {
  return (
    <input
      type="text"
      placeholder="1.23 * I - 4.56 * X(0) + 2.45 * Y(0) + 2.34 * Z(0)"
      required
    />
  );
};

export default InputHamiltonian;
