import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content glass-panel">
        <div className="footer-how-it-works">
          <h2>Como funciona?</h2>
          <div className="steps-container">
            <div className="step-box">
              <div className="step-number">1</div>
              <p>Escolha o serviço desejado (Elojob, Duo Boost, MD5, etc).</p>
            </div>
            <div className="step-box">
              <div className="step-number">2</div>
              <p>Você será redirecionado para o nosso WhatsApp oficial.</p>
            </div>
            <div className="step-box">
              <div className="step-number">3</div>
              <p>Acertamos os detalhes, pagamento, e iniciamos o serviço!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-copy">
          <p className="disclaimer">
            League of Legends é uma marca registrada da Riot Games, Inc. Nós não somos de nenhuma forma afiliados, 
            associados ou endossados pela Riot Games, Inc. Todos os direitos autorais, imagens e marcas de serviço 
            pertencem a seus respectivos proprietários.
          </p>
          <p className="copyright">&copy; {new Date().getFullYear()} ELOPROJECT. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
