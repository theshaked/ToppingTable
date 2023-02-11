import "./TextEntry.css";
import React, { useState } from "react";

const TextEntry = ({ charlimit }) => {
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div className="text-entry">
      <fieldset style={{ width: `${charlimit}ch` }}>
        <legend>legend</legend>
        <input
          style={{ width: `${charlimit}ch` }}
          placeholder="hint"
          onChange={() => setCount(count + 1)}
        />
      </fieldset>
    </div>
  );
};

export default TextEntry;
