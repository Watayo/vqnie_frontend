import React, { createContext, useState, useContext } from "react";
import vqe_data from "./data/vqe_data.json";

export const VqeContext = createContext();
export const useVqe = () => useContext(VqeContext);

function VqeProvider({ children }) {
  const [vqe, setVqe] = useState(vqe_data);

  const setVqeData = (Hamiltonian, qubitNum) =>
    setVqe({ ...vqe, Hamiltonian, qubitNum });

  return (
    <VqeContext.Provider value={{ vqe, setVqeData }}>
      {children}
    </VqeContext.Provider>
  );
}

export default VqeProvider;
