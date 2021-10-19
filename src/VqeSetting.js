import React from "react";
import { useInput } from "./hooks";
import { useVqe } from "./VqeProvider";
import "./css/VqeSetting.css";

function VqeSetting({ onNewVqeSetting = (f) => f }) {
  const [hamiltonianProps, resetHamiltonian] = useInput("");
  const [qubitNumProps, resetQubitNum] = useInput("");
  const { setVqeData } = useVqe();

  const submit = (event) => {
    event.preventDefault();
    setVqeData(hamiltonianProps.value, Number(qubitNumProps.value));
    resetHamiltonian();
    resetQubitNum();
    onNewVqeSetting();
  };

  return (
    <>
      <h1>Set VQE</h1>
      <form onSubmit={submit}>
        <input
          {...hamiltonianProps}
          type="text"
          placeholder="1.23 * I - 4.56 * X(0) + 2.45 * Y(0) + 2.34 * Z(0)"
          required
        />
        <input {...qubitNumProps} type="text" placeholder="3" required />
        <button>set</button>
      </form>
    </>
  );
}

export default VqeSetting;
