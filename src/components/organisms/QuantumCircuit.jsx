import { React, useRef } from "react";
import { useVqe } from "../../containers/VqeProvider";
import "qni";
import "../css/QuantumCircuit.css";
const QuantumCircuit = () => {
  const quantumCircuit = useRef();
  const { setQuantumCircuitData } = useVqe();

  const setQuantumCircuit = () => {
    const divDOM = quantumCircuit.current;
    const quantumCircuitDOM = divDOM.children;
    const circuitJSON = quantumCircuitDOM[0].toJson();
    console.log(circuitJSON);
    setQuantumCircuitData(circuitJSON);
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

export default QuantumCircuit;
