import React from "react";

function Button1({ value }) {
  return (
    <button
      className="button"
      onClick={() => {
        document.getElementById("output").value += value;
      }}
    >
      {value}
    </button>
  );
}

export default Button1;
