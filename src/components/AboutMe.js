import React from 'react';
import aboutImg from '../Imagem/About-img.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="container">
        <div className="about-content">
          <img src={aboutImg} alt="Vivianny Khatly" className="about-img" />
          <div className="about-text">
            <h2>Discover</h2>
            <h3>About Me</h3>
            <p>
              I am an undergraduate student in <strong>Data Science and Artificial Intelligence at UFPB</strong>. 
              My career is driven by solving complex problems through <strong>Generative AI, multi-agent architectures, and Full-stack development</strong>.
            </p>
            <p>
              Currently, I serve as an R&D Researcher at <strong>ITEMM</strong>, focusing on energy system modernization. 
              I also lead the NLP department at <strong>TAIL (Technology and AI League)</strong>, where I coordinate the development of 
              fact-checking frameworks and innovative AI pipelines. I have hands-on experience building autonomous 
              data flows and intelligent automation for major industry players.
            </p>
            
            <div className="info-box">
              <ul className="info-list">
                <li><strong>Name:</strong> Vivianny Khatly</li>
                <li><strong>Focus:</strong> AI & Full-stack</li>
                <li><strong>Location:</strong> João Pessoa, Brazil</li>
                <li><strong>Languages:</strong> English, Portuguese, Spanish</li>
              </ul>
            </div>
            
            <a href="/Curriculo_Khatly.pdf" target="_blank" className="btn-download">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;