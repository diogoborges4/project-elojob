import React from "react";
import "./Contatos.css";
import InstaLogo from "../logos/transferir (1).png";
import DiscordLogo from "../logos/Discord-Logo.png";
import contatoGif from "../gifs/52771.gif";

const Contatos = () => {
  return (
    <div className="contato-container">
      <div className="text-contato">
        <h1>ENTRE EM CONTATO CONOSCO</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          deserunt eius consectetur excepnemo pariatur at.
        </h3>
        <div className="simbolo-contatos">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img className="instaImg" src={InstaLogo} alt="" />
          </a>
          <a
            href="https://discord.com/channels/1122575432236159066/1122575432236159069"
            target="_blank"
            rel="noreferrer"
          >
            <img className="discImg" src={DiscordLogo} alt="" />
          </a>
        </div>
      </div>
      <div className="contato-gif">
        <img src={contatoGif} alt="" />
      </div>
    </div>
  );
};

export default Contatos;
