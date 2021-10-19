import { React, useState } from "react";
import { useInput } from "./hooks";

function CreateAnsatz({ onNewAnsatz = (f) => f }) {
  return (
    <>
      <quantum-circuit>
        <circuit-step>
          <circuit-dropzone></circuit-dropzone>
          <circuit-dropzone></circuit-dropzone>
          <circuit-dropzone></circuit-dropzone>
          <circuit-dropzone></circuit-dropzone>
        </circuit-step>

        <circuit-step>
          <circuit-dropzone></circuit-dropzone>
          <circuit-dropzone></circuit-dropzone>
          <circuit-dropzone></circuit-dropzone>
          <circuit-dropzone></circuit-dropzone>
        </circuit-step>
      </quantum-circuit>
    </>
  );
}

export default CreateAnsatz;
