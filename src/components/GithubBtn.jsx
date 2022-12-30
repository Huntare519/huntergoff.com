import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// GitHub Color: https://www.designpieces.com/palette/github-color-palette-hex-and-rgb
export default function GithubBtn() {
  const [Hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <a
      href="https://github.com/Huntare519"
      target="_blank"
      rel="noopener noreferrer"
    >
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
          icon={faGithub}
          size="xl"
          style={{ color: Hover ? "#333" : "#6e5494" }}
        />
      </button>
    </a>
  );
}
