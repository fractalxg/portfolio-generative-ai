import "./Body.css";
import DragAndDrop from "./DragAndDrop";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

const Body = () => {
  const [dragAndDropText, setDragAndDropText] = useState("");
  const [promptResponse, setPromptResponse] = useState("");
  const [promptValue, setPromptValue] = useState("");

  const handlePrompt = async () => {
    const getPromptResponse = await axios.post(
      import.meta.env.VITE_PROMPT_API,
      {
        promptData: dragAndDropText,
        promptValue,
      }
    );
    setPromptResponse(getPromptResponse);
  };

  const handleTextAreaInput = (value) => {
    setPromptValue(value)
  }

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
            <textarea
              onChange={(e) => handleTextAreaInput(e.target.value)}
            ></textarea>
            <button
              className="send-prompt"
              onClick={() => handlePrompt()}
            >
              <IoMdSend />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Body;
