import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [configVisibility, setConfigVisibility] = useState(false);
  const [prePromptOne, setPrePromptOne] = useState("");
  const [prePromptTwo, setPrePromptTwo] = useState("");

  return (
    <div className="home-container">
      <Header
        configVisibility={configVisibility}
        setPrePromptOne={setPrePromptOne}
        setPrePromptTwo={setPrePromptTwo}
      />
      <Body
        setConfigVisibility={setConfigVisibility}
        prePromptOne={prePromptOne}
        prePromptTwo={prePromptTwo}
      />
      <Footer />
    </div>
  );
};

export default Home;
