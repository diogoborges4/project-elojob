import React, { useRef } from "react";
import "./Sobre.css";

const Sobre = ({ setElementoAlvoRef }) => {
  const elementoAlvo = useRef(null);
  
  if (setElementoAlvoRef) {
    setElementoAlvoRef(elementoAlvo);
  }

  return (
    <section className="about-container" ref={elementoAlvo}>
      <div className="about-content">
        <div className="about-image-wrapper glass-panel">
          <div className="about-image-inner"></div>
        </div>
        <div className="about-text">
          <h2 className="about-title">Sobre Nós</h2>
          <div className="about-description">
            <p>
              Somos a <strong>ELOPROJECT</strong>, uma equipe dedicada a levar a sua experiência de jogo para o próximo nível. 
              Com anos de experiência no cenário competitivo, reunimos os melhores jogadores para ajudar você a alcançar 
              o elo dos seus sonhos de forma rápida, segura e eficiente.
            </p>
            <p>
              Nossa missão é fornecer um serviço de excelência, seja através de Duo Boost para aprendizado em tempo real, 
              Elojob para subir rapidamente, ou sessões de Coaching personalizadas para aprimorar suas habilidades. 
              Garantimos a privacidade e a segurança da sua conta em todas as etapas do processo.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5k+</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Jogos Vencidos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Segurança</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
