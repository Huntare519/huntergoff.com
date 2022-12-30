import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// LinkedIn Color: https://brand.linkedin.com/content/brand/global/en_us/index/visual-identity/color-palettes
export default function LinkedinBtn() {
  const [Hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <a
      href="www.linkedin.com/in/huntergoff"
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
          icon={faLinkedin}
          size="xl"
          style={{ color: Hover ? "#333" : "#0075B5" }}
        />
      </button>
    </a>
  );
}
