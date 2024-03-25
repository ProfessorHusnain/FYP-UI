"use client";
import { useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("");

  const handleChange = (event: any) => {
    setText(event.target.value);
    // Automatically adjust the height of the textarea
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    <textarea
      className="dynamic-textarea" // Apply custom styling for the textarea
      value={text}
      onChange={handleChange}
      placeholder="Enter text..."
    />
  );
};

export default TextArea;
