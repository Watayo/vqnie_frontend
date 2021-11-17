import { React, useRef } from "react";
import { useVqe } from "../../containers/VqeProvider";
import "qni";
import "../css/QuantumCircuit.css";
const Ansatz = () => {
  const quantumCircuit = useRef();
  const { setAnsatzData } = useVqe();

  const setQuantumCircuit = () => {
    const divDOM = quantumCircuit.current;
    const quantumCircuitDOM = divDOM.children;
    const ansatzJSON = JSON.stringify(quantumCircuitDOM[0].serializedSteps);

    console.log(ansatzJSON);
    setAnsatzData(ansatzJSON);
  };

  return (
    <>
      <div ref={quantumCircuit}>
        <quantum-circuit className="quantum-circuit"></quantum-circuit>
      </div>
      <button onClick={setQuantumCircuit}>set!</button>
    </>
  );
};

export default Ansatz;
