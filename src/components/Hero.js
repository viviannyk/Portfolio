import React from 'react';
import imagemFundo from '../Imagem/Imagemdefundo.jpeg';
import minhaFoto from '../Imagem/MinhaFoto1.jpeg';

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${imagemFundo})` }}
    >
      <div className="container">
        <div className="profile-container">
          <img src={minhaFoto} alt="Profile" className="profile-img" />
        </div>
        <h1>Vivianny Khatly</h1>
        <p>Data Science and AI & Software Developer</p>
      </div>
    </section>
  );
}

export default Hero;
