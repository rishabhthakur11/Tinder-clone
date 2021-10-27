import React from "react";
import "./SwipeButton.css";
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButton() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplyIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon  fontsize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
