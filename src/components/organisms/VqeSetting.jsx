import { React } from "react";
import { useVqe } from "../../containers/VqeProvider";
import { useInput } from "../../hooks";
import "../css/VqeSetting.css";

function VqeSetting({ onNewVqeSetting = (f) => f }) {
  const [hamiltonianProps, resetHamiltonian] = useInput("");
  const [qubitProps, resetQubit] = useInput("");
  const { setVqeData } = useVqe();

  const submit = (event) => {
    event.preventDefault();
    setVqeData(hamiltonianProps.value, Number(qubitProps.value));
    resetHamiltonian();
    resetQubit();
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
        <input {...qubitProps} type="text" placeholder="3" required />
        <button>set</button>
        <div className="input-value">{hamiltonianProps.value}</div>
        <div className="input-value">{qubitProps.value}</div>
      </form>
    </>
  );
}

export default VqeSetting;
