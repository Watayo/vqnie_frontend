import React from "react";
import "qni";
import "../css/QuantumCircuit.css";
const QuantumCircuit = () => {
  return (
    <quantum-circuit className="quantum-circuit">
      <circuit-step></circuit-step>
    </quantum-circuit>
  );
};

export default QuantumCircuit;
