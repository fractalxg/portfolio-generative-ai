import "./Body.css";
import DragAndDrop from "./DragAndDrop";
import { useState } from "react";

const Body = () => {
  const [dragAndDropText, setDragAndDropText] = useState("");
  return (
    <div className="body-container">
      <DragAndDrop setDragAndDropText={setDragAndDropText} />
    </div>
  );
};

export default Body;
