import { React } from "react";
import { useVqe } from "../../containers/VqeProvider";
import { useInput } from "../../hooks";
import "../css/VqeSetting.css";

function HamiltonianSetting({ onNewHamiltonianSetting = (f) => f }) {
  const [hamiltonianProps, resetHamiltonian] = useInput("");
  const { setHamiltonianData } = useVqe();

  const submit = (event) => {
    event.preventDefault();
    setHamiltonianData(hamiltonianProps.value);
    resetHamiltonian();
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
        <button>set</button>
        <div className="input-value">{hamiltonianProps.value}</div>
      </form>
    </>
  );
}

export default HamiltonianSetting;
