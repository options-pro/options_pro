import React from "react";
import Rating from "@mui/material/Rating";

import Popup from "reactjs-popup";
import TextField from "@mui/material/TextField";
// import { ImageUpload } from "./ImageUploading";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState } from "react";

function PopUp(props) {
  const [value, chageValue] = useState(5);
  const [issue, changeIssue] = useState("");
  return (
    <div className="popup">
      <Popup
        open={props.popUp}
        closeOnDocumentClick
        onClose={props.closeModal}
        position="left bottom"
      >
        <div className="popupmodel">
          <p className="closePop" onClick={props.closeModal}>
            ❌
          </p>
          <h1 className="PopUpHeading">Your Feedback matters!!</h1>
          <div className="modal">
            <TextField
              id="PopUp_Issue"
              label="Any Issue ❓"
              placeholder="Start typing here"
              onChange={(e) => changeIssue(e.target.value)}
              multiline
            />
          </div>

          <div></div>

          <Rating
            name="size-medium"
            defaultValue={value}
            className="PopUpRating"
            onChange={(e) => chageValue(e.target.value)}
          />

          <div>
            <a
              id="submitMail"
              href="mailto:vsnsainivasand2003@gmail.com?subject=Feedback&body=RatingIs"
            >
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                className="sendButton"
                onClick={() => {
                  document.getElementById("submitMail").href = document
                    .getElementById("submitMail")
                    .href.replace(
                      "RatingIs",
                      "Rating : " +
                        value +
                        "/5%0D%0A%0D%0A" +
                        "Issue  : " +
                        issue +
                        "%0D%0A%0D%0A"
                    );
                }}
              >
                {" "}
                Send
              </Button>
            </a>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default PopUp;
