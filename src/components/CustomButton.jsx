import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const CustomButton = ({ type, customStyle, title, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
      onClick={handleClick}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

export default CustomButton;
