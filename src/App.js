import "./App.css";
import { CyberNinja } from "./CyberNinja/CyberNinja";
import Sobre from "./Sobre/Sobre";
import Contatos from "./Contatos/Contatos";
import Footer from "./Footer/Footer";
import { useState } from "react";

function App() {
  const [elementoAlvoRef, setElementoAlvoRef] = useState(null);

  const scrollToElement = () => {
    if (elementoAlvoRef.current) {
      elementoAlvoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <CyberNinja scrollToElement={scrollToElement} />
      <Sobre setElementoAlvoRef={setElementoAlvoRef} />
      <Contatos />
      <Footer />
    </div>
  );
}

export default App;
