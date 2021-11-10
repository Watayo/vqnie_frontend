import React, { createContext, useState, useContext } from "react";
import vqe_data from "../data/vqe_data.json";

const VqeContext = createContext();
export const useVqe = () => useContext(VqeContext);

function VqeProvider({ children }) {
  const [vqe, setVqe] = useState(vqe_data);

  const setVqeData = (Hamiltonian, qubit) =>
    setVqe({ ...vqe, Hamiltonian, qubit });

  return (
    <VqeContext.Provider value={{ vqe, setVqeData }}>
      {children}
    </VqeContext.Provider>
  );
}

export default VqeProvider;
