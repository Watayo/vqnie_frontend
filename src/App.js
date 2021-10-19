import React from "react";
import "./css/App.css";
import VqeSetting from "./VqeSetting";
import { useVqe } from "./VqeProvider";

// import Qni from 'qni';

function App() {
  const { vqe } = useVqe();
  return (
    <>
      <VqeSetting
        onNewVqeSetting={() => {
          // TODO この時点ではvqeの中身は変化されていない。理解する。
          console.log(vqe);
        }}
      ></VqeSetting>
      <div>{vqe.Hamiltonian}</div>
      <div>{vqe.qubitNum}</div>
    </>
  );
}

export default App;
