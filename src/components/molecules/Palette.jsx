import React from "react";
import "qni";
import "../css/Palette.css";
const Palette = () => {
  return (
    <div className="palette">
      <palette-dropzone>
        <h-gate></h-gate>
      </palette-dropzone>
      <palette-dropzone>
        <x-gate></x-gate>
      </palette-dropzone>
      <palette-dropzone>
        <y-gate></y-gate>
      </palette-dropzone>
      <palette-dropzone>
        <z-gate></z-gate>
      </palette-dropzone>
      <palette-dropzone>
        <rx-gate></rx-gate>
      </palette-dropzone>
      <palette-dropzone>
        <ry-gate></ry-gate>
      </palette-dropzone>
      <palette-dropzone>
        <rz-gate></rz-gate>
      </palette-dropzone>
      <palette-dropzone>
        <control-gate></control-gate>
      </palette-dropzone>
      <palette-dropzone>
        <write-gate data-value="0"></write-gate>
      </palette-dropzone>
    </div>
  );
};

export default Palette;
