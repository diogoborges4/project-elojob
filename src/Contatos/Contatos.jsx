import React from "react";
import "./Contatos.css";
import InstaLogo from "../logos/transferir (1).png";
import DiscordLogo from "../logos/Discord-Logo.png";
import contatoGif from "../gifs/52771.gif";

const Contatos = () => {
  return (
    <section className="contact-section">
      <div className="contact-container glass-panel">
        <div className="contact-text">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-desc">
            Tem alguma dúvida ou quer um serviço personalizado? Nossa equipe de suporte está disponível 
            para te atender. Escolha um dos nossos canais e fale com a gente!
          </p>
          <div className="contact-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-btn insta-btn">
              <img src={InstaLogo} alt="Instagram" style={{ filter: 'brightness(0) invert(1)' }} />
              <span>Instagram</span>
            </a>
            <a
              href="https://discord.com/channels/1122575432236159066/1122575432236159069"
              target="_blank"
              rel="noreferrer"
              className="social-btn disc-btn"
            >
              <img src={DiscordLogo} alt="Discord" style={{ filter: 'brightness(0) invert(1)' }} />
              <span>Discord</span>
            </a>
          </div>
        </div>
        <div className="contact-visual">
          <img src={contatoGif} alt="Contato Animation" className="contact-gif" />
        </div>
      </div>
    </section>
  );
};

export default Contatos;
