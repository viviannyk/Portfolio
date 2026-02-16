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
              I am a <strong>Data Science and Artificial Intelligence</strong> student at UFPB. 
              My expertise lies at the intersection of <strong>Data Engineering and Generative AI</strong>, 
              where I develop autonomous pipelines and intelligent systems to solve complex problems.
            </p>
            <p>
              Currently, I am an R&D Researcher at <strong>ITEMM</strong>, focusing on data-driven 
              solutions for energy systems. I also serve as the <strong>Director of NLP at TAIL</strong>, 
              leading the development of end-to-end data normalization pipelines and fact-checking frameworks. 
              My goal is to bridge the gap between raw data and actionable AI insights.
            </p>
            
            <div className="info-box">
              <ul className="info-list">
                <li><strong>Name:</strong> Vivianny Khatly</li>
                <li><strong>Main Focus:</strong> AI & Data Science</li>
                <li><strong>Tech Stack:</strong> Python, SQL, LLMs, Docker</li>
                <li><strong>Location:</strong> João Pessoa, Brazil</li>
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