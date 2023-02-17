import "./TextEntry.css";
import React, { useState, useEffect, useMemo } from "react";

const inputTypingRegex = (regex) => {
  let regexString = regex.toString();
  regexString = regexString.replace("^", "");
  regexString = regexString.replace("$", "");

  let result = "";
  let openParentheses = 0;
  for (let i = 1; i < regexString.length - 1; i++) {
    const char = regexString[i];
    // TODO: Fix the issue with the + and * operators causing the function to not work due to unnecessary parentheses.
    if (char === "+" || char === "*") {
      result += `${char}(`;
      openParentheses++;
    } else if (char === "[") {
      result += `(${char}`;
      openParentheses++;
    } else if (char === "{") {
      result += `{0`;
      i++;
    } else {
      result += char;
    }
  }
  for (let i = 0; i < openParentheses; i++) {
    result += ")?";
  }
  result = "^" + result + "$";
  return new RegExp(result);
};

const patternTypes = {
  email: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
  number: /^[0-9]+$/,
  password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  // add more pattern types here
};

const TextEntry = ({ charlimit, onTextChange, patternType }) => {
  const typingPattern = useMemo(
    () => inputTypingRegex(patternTypes[patternType] || /.*/),
    [patternType]
  );

  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    validateInput(event.target.value) && setText(event.target.value);
  };

  const validateInput = (value) => {
    return typingPattern.test(value);
  };

  useEffect(() => {
    onTextChange(text);
  }, [text]);

  return (
    <div className="text-entry">
      <fieldset style={{ width: `${charlimit}ch` }}>
        <legend>legend</legend>
        <input
          value={text}
          style={{ width: `${charlimit}ch` }}
          placeholder="hint"
          onChange={handleTextChange}
        />
      </fieldset>
    </div>
  );
};

export default TextEntry;
