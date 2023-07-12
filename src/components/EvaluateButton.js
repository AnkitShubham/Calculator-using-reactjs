import React from "react";

function EvaluateButton() {
  return (
    <button
      className="button evaluate"
      onClick={() => {
        var que = document.getElementById("output").value;
        var ans = eval(que);
        document.getElementById("output").value = ans;
      }}
    >
      =
    </button>
  );
}

export default EvaluateButton;
