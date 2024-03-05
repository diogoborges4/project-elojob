import * as React from "react";
import { useState } from "react";
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
  return (
    <div className="div">
      <div className="img-person">
        <img src={ImgPerson} alt="" />
      </div>
      <div className="div-2">
        <div className="div-3">
          <div className="div-4">ELOPROJECT</div>
          <div className="div-5">
            <div className="div-6">HOME</div>
            <div className="div-7">
              <button onClick={scrollToElement}>SOBRE</button>
            </div>
            <button className="div-8" onMouseMove={openModal}>
              ELOJOBS
            </button>
            <Modal
              isOpen={isOpen}
              onRequestClose={closeModal}
              contentLabel="Example modal"
              overlayClassName="modal-overlay"
              className="modal-content"
            >
              <button className="modal-btn" onMouseLeave={closeModal}>
                <h1>Selecione seu estilo</h1>
                <a
                  href="https://api.whatsapp.com/send?phone=5511999151515&text=Ol%C3%A1,%20tenho%20interesse%20nos%20servi%C3%A7os%20de%20elo%20job!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Elojob</button>
                  <button>MD5</button>
                  <button>Duo Boost</button>
                  <button>EloJob</button>
                </a>
              </button>
            </Modal>
            <button className="btn-login">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={InstaImg} alt="" />
              </a>
            </button>
          </div>
        </div>
        <div className="div-9">CONQUISTE O ELO QUE VOCÊ MERECE</div>
        <div className="div-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
        <div className="btn-home">
          <a
            href="https://discord.com/channels/1122575432236159066/1122575432236159069"
            target="_blank"
            rel="noreferrer"
          >
            <button className="div-11-1">
              Acesse nosso discord
              <img src={ImgDisc} alt="" />
            </button>
          </a>
        </div>
      </div>
      <div className="div-12">
        <div className="div-13">
          <div className="div-24">
            <div className="div-25">
              <img className="img-4" src={Img1} alt="elopng" />
              <div className="div-26">ELOJOB</div>
            </div>
            <div className="div-27">
              <div className="div-28">
                Um jogador de alto nível irá jogar em sua conta e garantir o elo
                desejado de forma rápida.
              </div>
              <div className="div-29">
                <a
                  href="https://api.whatsapp.com/send?phone=5511999151515&text=Ol%C3%A1,%20tenho%20interesse%20nos%20servi%C3%A7os%20de%20elo%20job!"
                  target="_blank"
                  rel="noreferrer"
                >
                  CONTRATAR
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="div-13">
          <div className="div-24">
            <div className="div-25">
              <img loading="lazy" src={Img2} className="img-4" alt="img" />
              <div className="div-26">DUO BOOST</div>
            </div>
            <div className="div-27">
              <div className="div-28">
                Você irá jogar duo com um jogador profissional até o elo
                desejado.
              </div>
              <div className="div-29">
                <a
                  href="https://api.whatsapp.com/send?phone=5511999151515&text=Ol%C3%A1,%20tenho%20interesse%20nos%20servi%C3%A7os%20de%20elo%20job!"
                  target="_blank"
                  rel="noreferrer"
                >
                  CONTRATAR
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="div-13">
          <div className="div-24">
            <div className="div-25">
              <img loading="lazy" src={Img3} className="img-4" alt="img" />
              <div className="div-26">MD5</div>
            </div>
            <div className="div-27">
              <div className="div-28">
                Iremos garantir o melhor desempenho possível na sua
                classificatória.
              </div>
              <div className="div-29">
                <a
                  href="https://api.whatsapp.com/send?phone=5511999151515&text=Ol%C3%A1,%20tenho%20interesse%20nos%20servi%C3%A7os%20de%20elo%20job!"
                  target="_blank"
                  rel="noreferrer"
                >
                  CONTRATAR
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="div-13">
          <div className="div-24">
            <div className="div-25">
              <img loading="lazy" src={Img4} className="img-4" alt="img" />
              <div className="div-26">COACHING</div>
            </div>
            <div className="div-27">
              <div className="div-28">
                Melhore sua gameplay através de aulas práticas com profissionais
                da área.
              </div>
              <div className="div-29">
                <a
                  href="https://api.whatsapp.com/send?phone=5511999151515&text=Ol%C3%A1,%20tenho%20interesse%20nos%20servi%C3%A7os%20de%20elo%20job!"
                  target="_blank"
                  rel="noreferrer"
                >
                  CONTRATAR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="linkWhats"
        href="https://api.whatsapp.com/send?phone=5511999151515&text=Ol%C3%A1,%20tenho%20interesse%20nos%20servi%C3%A7os%20de%20elo%20job!"
        target="_blank"
        rel="noreferrer"
      >
        <img src={WhatsImg} alt="" />
      </a>
    </div>
  );
}
