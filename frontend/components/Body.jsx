import "./Body.css";
import DragAndDrop from "./DragAndDrop";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";

const Body = () => {
  const [dragAndDropText, setDragAndDropText] = useState("");


  return (
    <div className="body-container">
      <DragAndDrop setDragAndDropText={setDragAndDropText} />
      {dragAndDropText.length > 1 ? (
        <div className="body-container-elements">
          <h2>Received Text</h2>
          <div className="body-text-drag-and-drop-container">
            <p>{dragAndDropText}</p>
          </div>

          <h2>Type your prompt</h2>
          <div className="body-text-area-container">
            <textarea></textarea>
            <button className="send-prompt"><IoMdSend /></button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Body;
