import React from "react";
import { useInput } from "./hooks";
import "./css/HamiltonianDefinition.css";

function HamiltonianDefinition({ onNewHamiltonian = (f) => f }) {
  const [hamiltonianProps, resetHamiltonian] = useInput("");

  const submit = (event) => {
    event.preventDefault();
    onNewHamiltonian(hamiltonianProps.value);
    resetHamiltonian();
  };

  return (
    <>
      <h1>Hamiltonian definition</h1>
      <form onSubmit={submit}>
        <input
          {...hamiltonianProps}
          type="text"
          placeholder="1.23 * I - 4.56 * X(0) + 2.45 * Y(0) + 2.34 * Z(0)"
          required
        />
        <button>Definition</button>
      </form>
    </>
  );
}

export default HamiltonianDefinition;
