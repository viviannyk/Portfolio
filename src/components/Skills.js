import React from 'react';
import './Skills.css';

const skills = [
  {
    icon: '🤖',
    title: 'Generative AI',
    description: 'LLMs, autonomous agents, prompt engineering & AI-powered pipelines',
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    description: 'Python, SQL, Docker, ETL pipelines & data normalization frameworks',
  },
  {
    icon: '🔬',
    title: 'NLP & Research',
    description: 'Fact-checking systems, text analysis, end-to-end NLP pipelines',
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-desc">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
