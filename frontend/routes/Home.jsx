import Body from "../components/Body"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./Home.css"
import { useState } from "react";

const Home = () => {
  const [configVisibility, setConfigVisibility] = useState(false)

  return (
    <div className="home-container">
        <Header configVisibility={configVisibility}/>
        <Body setConfigVisibility={setConfigVisibility}/>
        <Footer />
    </div>
  )
}

export default Home