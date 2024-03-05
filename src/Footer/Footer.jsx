import React from "react";
import "./Footer.css";
import ImgExample from "../imgs/Captura de tela 2024-02-27 173618.png";
import SetaImg from "../logos/pngtree-arrow-shape-red-simple-curved-arrow-png-image_5215891 (1).png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="func-footer">
        <h1>Como funciona?</h1>
      </div>
      <div className="func2-footer">
        <h3>
          Escolha o estilo de jogo que você está interessado, nós vamos
          redirecioná-lo para o whatsApp de um profissional para que seja
          acertado os detalhes do seu pedido. E pronto, simple e rápido.
        </h3>
        <img className="setaImg" src={SetaImg} alt="" />
        <img className="img-example" src={ImgExample} alt="" />
      </div>
      <div className="footer-copy">
        <h4>
          League of Legends é uma marca registrada da Riot Games, Inc. Nós não
          somos de nenhuma forma afiliados, associados ou endossado pela Riot
          Games, Inc. Todos os direitos autoriais, marcas imagens e marcas de
          serviço pertecem a seus respectivos proprietários.
        </h4>
        <h2>&copy; COPYRIGHT 2024 ELOPROJECT </h2>
      </div>
    </div>
  );
};

export default Footer;
