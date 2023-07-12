import React from "react";

function ClearScreenButton() {
  return (
    <button
      className="button clear"
      onClick={() => {
        document.getElementById("output").value = "";
      }}
    >
      AC
    </button>
  );
}

export default ClearScreenButton;
