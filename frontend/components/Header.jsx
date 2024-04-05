import "./Header.css";
import { FaGear } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <FaGear className="header-icon" />
      </div>
    </div>
  );
};

export default Header;
