import React, { createContext, useState, useContext } from "react";
import vqe_data from "../data/vqe_data.json";

const VqeContext = createContext();
export const useVqe = () => useContext(VqeContext);

function VqeProvider({ children }) {
  const [vqe, setVqe] = useState(vqe_data);

  const setHamiltonianData = (Hamiltonian) =>
    setVqe(...vqe, { Hamiltonian: Hamiltonian });

  const setQuantumCircuitData = (QuantumCircuit) =>
    setVqe(...vqe, { QuantumCircuit: QuantumCircuit });

  return (
    <VqeContext.Provider
      value={{ vqe, setHamiltonianData, setQuantumCircuitData }}
    >
      {children}
    </VqeContext.Provider>
  );
}

export default VqeProvider;
