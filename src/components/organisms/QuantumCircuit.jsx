import { React, useRef, useEffect } from "react";
import { useVqe } from "../../containers/VqeProvider";
import "qni";
import "../css/QuantumCircuit.css";
const QuantumCircuit = () => {
  const quantumCircuit = useRef();
  const { setQuantumCircuitData } = useVqe();

  useEffect(() => {
    const divDOM = quantumCircuit.current;
    const quantumCircuitDOM = divDOM.children;
    console.log(quantumCircuitDOM[0].children);
    const circuitSteps = Array.from(quantumCircuitDOM[0].children);
    console.log(circuitSteps[0]);
    const circuit = (qubitIndex) =>
      circuitSteps.map((step) => step.children[0].children[qubitIndex]);
    console.log(circuit(0));
  }, []);

  return (
    <div ref={quantumCircuit}>
      <quantum-circuit className="quantum-circuit"></quantum-circuit>
    </div>
  );
};

export default QuantumCircuit;
