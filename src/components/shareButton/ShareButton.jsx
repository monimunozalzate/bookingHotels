import React, { useState, useRef, useEffect } from "react";
import styles from "./ShareButton.module.css";
import ShareIcon from "@mui/icons-material/Share";
import ShareModal from "../shareModal/ShareModal";
import { IconButton } from "@mui/material";

const ShareButton = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    console.log("click");
    setIsShown(!isShown);
  };

  return (
    <div className={styles.shareButtonContainer}>
      <IconButton onClick={handleClick} style={{ padding: "2rem" }}>
        <ShareIcon fontSize="medium" style={{ color: "var(--darkGrey)" }} />
      </IconButton>

      {isShown ? <ShareModal setIsShown={setIsShown}/> : null}
    </div>
  );
};

export default ShareButton;
