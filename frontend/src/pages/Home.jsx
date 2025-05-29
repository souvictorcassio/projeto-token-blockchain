import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Invista em Imóveis Fracionados com Segurança</h1>
          <p>
            Com a plataforma BB, você investe de forma acessível e transparente.
          </p>
          <button>Ver Imóveis Disponíveis</button>
        </div>
        <img
          src="/images/banner-imovel.png"
          alt="Banner Imóvel"
          className="hero-image"
        />
      </section>

      <section className="carousel">
        <h2>Imóveis em Destaque</h2>
        <div className="carousel-container">
          <img src="/images/imovel1.png" alt="Imóvel 1" />
          <img src="/images/imovel2.png" alt="Imóvel 2" />
          <img src="/images/imovel3.png" alt="Imóvel 3" />
        </div>
      </section>

      <section className="benefits-section">
        <h2>Por que investir conosco?</h2>
        <div className="benefits">
          <div className="benefit-card">
            <img src="/icons/secure.svg" alt="Segurança" />
            <h3>Segurança</h3>
            <p>Blockchain e contratos inteligentes garantem confiança.</p>
          </div>
          <div className="benefit-card">
            <img src="/icons/liquidity.svg" alt="Liquidez" />
            <h3>Liquidez</h3>
            <p>Venda suas frações com facilidade no nosso marketplace.</p>
          </div>
          <div className="benefit-card">
            <img src="/icons/access.svg" alt="Acessível" />
            <h3>Acessível</h3>
            <p>Invista a partir de valores simbólicos.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>Como Funciona</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Escolha um imóvel</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Compre frações</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Receba lucros</p>
          </div>
        </div>
      </section>
    </div>
  );
}
