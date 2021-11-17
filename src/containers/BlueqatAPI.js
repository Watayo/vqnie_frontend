import React from "react";
import axios from "axios";
import { useVqe } from "./VqeProvider";

const url = "http://127.0.0.1:5000/";
const BlueqatAPI = () => {
  const { vqe } = useVqe();
  const postData = () => {
    axios
      .post(url + "api", JSON.stringify(vqe))
      .then((response) => alert(JSON.stringify(response.data)));
  };
  return (
    <>
      <h2>JSON</h2>
      <p>{JSON.stringify(vqe)}</p>
      <div>
        <button onClick={postData}>API始動！！！</button>
      </div>
    </>
  );
};

export default BlueqatAPI;
