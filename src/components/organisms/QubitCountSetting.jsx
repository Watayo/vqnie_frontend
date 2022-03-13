import { React } from "react";
import CreateAnsatz from "CreateAnsatz";
import { useVqe } from "../../containers/VqeProvider";
import { useInput } from "../../hooks";
import "../css/VqeSetting.css";

const QubitCountSetting = () => {
  const [qubitCountProps, resetQubitCount] = useInput("");
  const { setQubitCountData } = useVqe();

  const submit = (event) => {
    event.preventDefault();
    setQubitCountData(qubitCountProps.value);
    resetQubitCount();
  };

  return (
    <>
      <form onSubmit={submit}>
        <input {...qubitCountProps} type="number" min="1" max="5" required />
        <CreateAnsatz></CreateAnsatz>
        <button>set</button>
      </form>
    </>
  );
};

export default QubitCountSetting;
