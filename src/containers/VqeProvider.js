import React, { createContext, useState, useContext } from "react";
import vqe_data from "../data/vqe_data.json";

const VqeContext = createContext();
export const useVqe = () => useContext(VqeContext);

function VqeProvider({ children }) {
  const [vqe, setVqe] = useState(vqe_data);

  const setHamiltonianData = (Geometry) =>
    setVqe({
      ...vqe,
      Geometry: Geometry,
    });

  const setAnsatzData = (Ansatz) =>
    setVqe({
      ...vqe,
      Ansatz: Ansatz,
    });

  return (
    <VqeContext.Provider
      value={{
        vqe,
        setHamiltonianData,
        setAnsatzData,
      }}
    >
      {children}
    </VqeContext.Provider>
  );
}

export default VqeProvider;
