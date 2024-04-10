import "./Header.css";
import { FaGear } from "react-icons/fa6";
import { Rotate } from "./utils/Animation";
import { useState } from "react";

const Header = ({ configVisibility }) => {
  const [promptConfigurationVisibility, setPromptConfigurationVisibility] =
    useState(false);

  const handlePromptConfigurationVisibility = () => {
    setPromptConfigurationVisibility(!promptConfigurationVisibility);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        {configVisibility ? (
          <Rotate>
            <FaGear className="header-icon" onClick={() => handlePromptConfigurationVisibility()}/>{" "}
          </Rotate>
        ) : null}
        {promptConfigurationVisibility ? (
          <div className="header-content-prompt-configuration">
            <div className="header-content-prompt-configuration-content">
              
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
