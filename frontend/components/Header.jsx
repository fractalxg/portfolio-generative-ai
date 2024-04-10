import "./Header.css";
import { FaGear } from "react-icons/fa6";
import {Rotate} from "./utils/Animation"

const Header = ({ configVisibility }) => {
  return (
    <div className="header-container">
      <div className="header-content">
        {configVisibility ? <Rotate><FaGear className="header-icon" /> </Rotate>: null}
      </div>
    </div>
  );
};

export default Header;
