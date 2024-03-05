import React, { useRef } from "react";
import "./Sobre.css";

const Sobre = ({ setElementoAlvoRef }) => {
  const elementoAlvo = useRef(null);
  setElementoAlvoRef(elementoAlvo);

  return (
    <div className="container" ref={elementoAlvo}>
      <div className="img-about"></div>
      <div className="Title-about">
        <h1>Sobre</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          eos vel et voluptatem numquam voluptate quibusdam. Doloribus est
          repellat sit praesentium soluta inventore sint dignissimos, excepturi
          distinctio asperiores officia deleniti!
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eum
          fuga vitae praesentium, cumque repellendus recusandae placeat libero,
          quibusdam odit qui ipsa suscipit accusantium nisi repudiandae debitis
          nobis, nam sequi?
        </h3>
      </div>
    </div>
  );
};

export default Sobre;
