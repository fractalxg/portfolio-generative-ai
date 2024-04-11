import "./Header.css";
import { FaGear } from "react-icons/fa6";
import { Rotate } from "./utils/Animation";
import { useState } from "react";

const Header = ({ configVisibility }) => {
  const [promptConfigurationVisibility, setPromptConfigurationVisibility] =
    useState(false);

  const [prePromptTextOne, setPrePromptTextOne] = useState(
    "According to the following text:"
  );
  const [prePromptTextTwo, setPrePromptTextTwo] = useState(
    "Answer the following question:"
  );

  const handlePrePromptTextOne = (event) => {
    setPrePromptTextOne(event.target.value);
  };

  const handlePrePromptTextTwo = (event) => {
    setPrePromptTextTwo(event.target.value);
  };

  const handlePromptConfigurationVisibility = () => {
    setPromptConfigurationVisibility(!promptConfigurationVisibility);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        {configVisibility ? (
          <Rotate>
            <FaGear
              className="header-icon"
              onClick={() => handlePromptConfigurationVisibility()}
            />{" "}
          </Rotate>
        ) : null}
        {promptConfigurationVisibility ? (
          <div className="header-content-prompt-configuration">
            <div className="header-content-prompt-configuration-content">
              <div className="pre-prompt-configuration-text-container">
                <div className="pre-prompt-received-text-container">
                  <b>
                    <p>Pre Prompt 1</p>
                  </b>
                  <textarea
                    className="pre-prompt-text-area"
                    value={prePromptTextOne}
                    onChange={handlePrePromptTextOne}
                  ></textarea>
                  <div className="pre-prompt-radio-button">
                    <input
                      type="radio"
                      id="pre-prompt-received-text"
                      defaultChecked
                    />
                    <label htmlFor="pre-prompt-received-text">
                      Received Text
                    </label>
                  </div>
                </div>
                <div className="pre-prompt-type-your-prompt-container">
                  <b>
                    <p>Pre Prompt 2</p>
                  </b>
                  <textarea
                    className="pre-prompt-text-area"
                    value={prePromptTextTwo}
                    onChange={handlePrePromptTextTwo}
                  ></textarea>
                  <div className="pre-prompt-radio-button">
                    <input
                      type="radio"
                      id="pre-prompt-received-text"
                      defaultChecked
                    />
                    <label htmlFor="pre-prompt-received-text">
                      Type your prompt
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
