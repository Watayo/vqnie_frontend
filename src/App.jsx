import React from "react";
import HamiltonianSetting from "./components/organisms/HamiltonianSetting";
import QubitCountSetting from "./components/organisms/QubitCountSetting";
import CreateAnsatz from "./components/organisms/CreateAnsatz";
import BlueqatAPI from "./containers/BlueqatAPI";
import "./css/App.css";

const App = () => {
  return (
    <>
      <h1>Hamiltonian</h1>
      <HamiltonianSetting></HamiltonianSetting>
      <h1>QubitCount</h1>
      <QubitCountSetting></QubitCountSetting>
      <h1>Ansatz</h1>
      <CreateAnsatz></CreateAnsatz>
      <BlueqatAPI></BlueqatAPI>
    </>
  );
};

export default App;
