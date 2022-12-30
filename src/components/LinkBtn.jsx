import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function LinkBtn() {
  return (
    <FontAwesomeIcon
      icon={faArrowUpRightFromSquare}
      size="xs"
      style={{
        paddingLeft: 3,
      }}
    />
  );
}
