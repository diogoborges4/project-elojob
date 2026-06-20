import React, { useState } from "react";
import Modal from "react-modal";
import "./CyberNinja.css";
import Img1 from "../imgs/8.png";
import Img2 from "../imgs/Challenger_Emblem_2022.png";
import Img3 from "../imgs/Season_2022_-_Diamond.webp";
import Img4 from "../imgs/Grandmaster_Emblem_2022.png";
import ImgPerson from "../imgs/truth_dragon_yasuo_render_by_sineerie_dev9okp-fullview.png";
import WhatsImg from "../imgs/31574d5cbd9f117.png";
import InstaImg from "../logos/transferir (1).png";
import ImgDisc from "../logos/Discord-Logo.png";

Modal.setAppElement("#root");

export function CyberNinja({ scrollToElement }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511999151515&text=Ol%C3%A1,%20tenho%20interesse%20nos%20servi%C3%A7os%20de%20elo%20job!";

  return (
    <>
      <section className="hero-container">
        <nav className="hero-nav">
          <div className="hero-logo">ELOPROJECT</div>
          <div className="hero-menu">
            <button className="nav-link">HOME</button>
            <button className="nav-link" onClick={scrollToElement}>SOBRE</button>
            <button className="nav-link" onClick={openModal}>ELOJOBS</button>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="nav-social">
              <img src={InstaImg} alt="Instagram" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Conquiste o elo que você merece</h1>
            <p className="hero-desc">
              Alcance o topo das ranqueadas com nossa equipe de jogadores profissionais. 
              Serviços rápidos, seguros e com a melhor taxa de vitórias do mercado.
            </p>
            <a
              href="https://discord.com/channels/1122575432236159066/1122575432236159069"
              target="_blank"
              rel="noreferrer"
            >
              <button className="hero-btn">
                Acesse nosso discord
                <img src={ImgDisc} alt="Discord" style={{ filter: 'brightness(0) invert(1)' }} />
              </button>
            </a>
          </div>
          <div className="hero-image">
            <img src={ImgPerson} alt="Yasuo Render" />
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Escolha o Serviço"
          className="modal-content glass-panel"
        >
          <h1>Selecione seu estilo</h1>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <div className="modal-btn-grid">
              <button className="modal-option-btn">Elojob</button>
              <button className="modal-option-btn">MD5</button>
              <button className="modal-option-btn">Duo Boost</button>
              <button className="modal-option-btn">Coaching</button>
            </div>
          </a>
        </Modal>
      </section>

      <section className="services-grid">
        <div className="service-card glass-panel">
          <div className="service-icon-wrapper">
            <img className="service-icon" src={Img1} alt="Elojob" />
          </div>
          <h3 className="service-title">ELOJOB</h3>
          <p className="service-desc">
            Um jogador de alto nível irá jogar em sua conta e garantir o elo desejado de forma rápida e segura.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
            <button className="service-btn">Contratar</button>
          </a>
        </div>

        <div className="service-card glass-panel">
          <div className="service-icon-wrapper">
            <img className="service-icon" src={Img2} alt="Duo Boost" />
          </div>
          <h3 className="service-title">DUO BOOST</h3>
          <p className="service-desc">
            Você irá jogar duo com um jogador profissional até o elo desejado. Aprenda enquanto sobe.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
            <button className="service-btn">Contratar</button>
          </a>
        </div>

        <div className="service-card glass-panel">
          <div className="service-icon-wrapper">
            <img className="service-icon" src={Img3} alt="MD5" />
          </div>
          <h3 className="service-title">MD5</h3>
          <p className="service-desc">
            Iremos garantir o melhor desempenho possível na sua classificatória inicial, com alta taxa de vitória.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
            <button className="service-btn">Contratar</button>
          </a>
        </div>

        <div className="service-card glass-panel">
          <div className="service-icon-wrapper">
            <img className="service-icon" src={Img4} alt="Coaching" />
          </div>
          <h3 className="service-title">COACHING</h3>
          <p className="service-desc">
            Melhore sua gameplay através de aulas práticas e análise de VOD com profissionais da área.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
            <button className="service-btn">Contratar</button>
          </a>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <img src={WhatsImg} alt="WhatsApp" />
      </a>
    </>
  );
}
