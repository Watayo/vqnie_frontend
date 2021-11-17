import { React } from "react";
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
        <button>set</button>
      </form>
    </>
  );
};

export default QubitCountSetting;
