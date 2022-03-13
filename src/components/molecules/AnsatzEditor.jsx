import React from "react";
import Palette from "./Palette";
import Ansatz from "./Ansatz";
import "qni";
import "../css/CircuitEditor.css";

const AnsatzEditor = () => {
  return (
    <circuit-editor>
      <Palette></Palette>
      <Ansatz></Ansatz>
    </circuit-editor>
  );
};

export default AnsatzEditor;
