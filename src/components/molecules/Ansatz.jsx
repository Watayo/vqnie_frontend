import { React, useRef } from "react";
import { useVqe } from "../../containers/VqeProvider";
import { Button, Box, Paper } from "@mui/material";
import "qni";
import "../css/QuantumCircuit.css";
const Ansatz = () => {
  const quantumCircuit = useRef();
  const { vqe, setAnsatzData } = useVqe();

  const setQuantumCircuit = () => {
    const divDOM = quantumCircuit.current;
    const quantumCircuitDOM = divDOM.children;
    const ansatzJSON = JSON.stringify(quantumCircuitDOM[0].serializedSteps);

    console.log(ansatzJSON);
    setAnsatzData(ansatzJSON);
  };

  return (
    <>
      <Box px={2}>
        <p>Drag & Drop Here</p>
        <Paper variant="outlined" square>
          <div className="quantum-circuit-div" ref={quantumCircuit}>
            <quantum-circuit className="quantum-circuit"></quantum-circuit>
          </div>
        </Paper>
      </Box>
      <Box p={2}>
        <Button
          onClick={setQuantumCircuit}
          style={{ height: 40, width: 590 }}
          variant="contained"
        >
          {vqe["Ansatz"] === "" ? <span>SET</span> : <span>DONE/SET</span>}
        </Button>
      </Box>
    </>
  );
};

export default Ansatz;
