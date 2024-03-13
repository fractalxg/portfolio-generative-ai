import "./Body.css";
import DragAndDrop from "./DragAndDrop";
import { useState } from "react";

const Body = () => {
  const [dragAndDropText, setDragAndDropText] = useState("");
  return (
    <div className="body-container">
      <DragAndDrop setDragAndDropText={setDragAndDropText} />
      <div className="body-text-drag-and-drop-container">
        <p>{dragAndDropText}</p>
      </div>
    </div>
  );
};

export default Body;
