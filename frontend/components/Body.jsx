import "./Body.css";
import DragAndDrop from "./DragAndDrop";
import { IoMdSend } from "react-icons/io";
import { SlReload } from "react-icons/sl";
import { useState, useEffect } from "react";
import axios from "axios";

const Body = ({ setConfigVisibility, prePromptOne, prePromptTwo }) => {
  const [dragAndDropText, setDragAndDropText] = useState("");
  const [promptResponse, setPromptResponse] = useState("");
  const [promptValue, setPromptValue] = useState("");
  const [dragAndDropVisibility, setDragAndDropVisibility] = useState(true);
  const [hideShowText, setHideShowText] = useState("Hide Text");
  const [generatedAnswearVisibility, setGeneratedAnswearVisibility] =
    useState(false);

  const handlePrompt = async () => {
    if (promptValue.length > 0) {
      const getPromptResponse = await axios.post(
        import.meta.env.VITE_PROMPT_API,
        {
          promptData: dragAndDropText,
          promptValue: promptValue,
        }
      );
      setPromptResponse(getPromptResponse);
      setGeneratedAnswearVisibility(true);
    }
  };

  const handleTextAreaInput = (value) => {
    setPromptValue(value);
  };

  const handleReloadFile = () => {
    setDragAndDropVisibility(true);
    setDragAndDropText("");
    setGeneratedAnswearVisibility(false);
  };

  const handleHideShowText = () => {
    hideShowText === "Hide Text"
      ? setHideShowText("Show Text")
      : setHideShowText("Hide Text");
  };

  useEffect(() => {
    dragAndDropText.length > 1
      ? (setDragAndDropVisibility(false), setConfigVisibility(true))
      : null;
  }, [dragAndDropText]);

  return (
    <div className="body-container">
      {dragAndDropVisibility ? (
        <DragAndDrop setDragAndDropText={setDragAndDropText} />
      ) : null}
      {dragAndDropText.length > 1 ? (
        <div className="body-container-elements">
          <h2>Received Text</h2>
          <div className="body-text-drag-and-drop-container">
            {hideShowText === "Hide Text" ? <p>{dragAndDropText}</p> : null}
            <button
              className="hide-show-text"
              onClick={() => handleHideShowText()}
            >
              <p>{hideShowText}</p>
            </button>

            <button className="change-file" onClick={() => handleReloadFile()}>
              <p>Change File</p>
              <SlReload />
            </button>
          </div>

          <h2>Type your prompt</h2>
          <div className="body-text-area-container">
            <textarea
              onChange={(e) => handleTextAreaInput(e.target.value)}
            ></textarea>
            <button className="send-prompt" onClick={() => handlePrompt()}>
              <IoMdSend />
            </button>
          </div>

          {generatedAnswearVisibility ? (
            <div className="body-generated-answear-container">
              <h2>Generated answear</h2>
              <div className="body-generated-answear-content">
                <p>{promptResponse}</p>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Body;
