import "./css/App.css";
import HamiltonianDefinition from "./HamiltonianDefinition";
// import Qni from 'qni';

function App() {
  return (
    <>
      <HamiltonianDefinition
        onNewHamiltonian={(hamiltonian) => {
          console.log(hamiltonian);
          // TODO: ハミルトニアン描画する。
          // TODO: blueqatのコード生成する。
        }}
      ></HamiltonianDefinition>
    </>
  );
}

export default App;
