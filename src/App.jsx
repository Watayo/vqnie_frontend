import React from "react";
import HamiltonianSetting from "./components/organisms/HamiltonianSetting";
import { useVqe } from "./containers/VqeProvider";
import Circuit from "./components/organisms/Circuit";
import "./css/App.css";

const App = () => {
  const { vqe } = useVqe();
  return (
    <>
      <HamiltonianSetting
        onNewHamiltonianSetting={() => {
          // TODO: この時点ではvqeの中身は変化されていない。理解する。
          // TODO: jsonでblueqqatに投げる。
          console.log(vqe);
        }}
      ></HamiltonianSetting>
      <Circuit></Circuit>
    </>
  );
};

export default App;
