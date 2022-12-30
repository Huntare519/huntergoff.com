import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

// Email Color: https://www.schemecolor.com/gmail-logo-colors.php
export default function ResumeBtn() {
  const [Hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <a href="#" target="_blank" rel="noopener noreferrer">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: "#FFFFFF",
          padding: 3,
          marginRight: 20,
          borderStyle: "none",
        }}
      >
        <FontAwesomeIcon
          icon={faFile}
          size="xl"
          style={{ color: Hover ? "#333" : "#61B136" }}
        />
      </button>
    </a>
  );
}
