import React from "react";
import VqeSetting from "./components/organisms/VqeSetting";
import { useVqe } from "./containers/VqeProvider";
import Circuit from "./components/organisms/Circuit";
import "./css/App.css";

const App = () => {
  const { vqe } = useVqe();
  return (
    <>
      <VqeSetting
        onNewVqeSetting={() => {
          // TODO: この時点ではvqeの中身は変化されていない。理解する。
          // TODO: jsonでblueqqatに投げる。
          console.log(vqe);
        }}
      ></VqeSetting>
      <Circuit></Circuit>
    </>
  );
};

export default App;
