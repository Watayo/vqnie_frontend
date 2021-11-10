import React from "react";
import Palette from "./Palette";
import QuantumCircuit from "./QuantumCircuit";
import "qni";
import "../css/CircuitEditor.css";

const CircuitEditor = () => {
  return (
    <circuit-editor>
      <Palette></Palette>
      <QuantumCircuit></QuantumCircuit>
    </circuit-editor>
  );
};

export default CircuitEditor;
