import "./Header.css";
import { FaGear } from "react-icons/fa6";

const Header = ({ configVisibility }) => {
  return (
    <div className="header-container">
      <div className="header-content">
        {configVisibility ? <FaGear className="header-icon" /> : null}
      </div>
    </div>
  );
};

export default Header;
