import React, { useState } from 'react';
import './Experience.css';

const workExperience = [
  {
    role: 'R&D Researcher',
    company: 'ITEMM',
    period: 'Jan 2026 — Present',
    current: true,
    description:
      'Working in an AI lab focused on energy storage systems. Develop Python scripts and SQL queries to modernize operational workflows, replacing manual processes with automated data pipelines. Responsible for technical performance reports for major automotive and energy companies, and researching AI models for battery lifecycle prediction.',
    tags: ['Python', 'SQL', 'AI/ML', 'Data Engineering'],
  },
  {
    role: 'Data Scientist',
    company: 'Zoox Smart Data',
    period: 'Jul 2025 — Dec 2025',
    current: false,
    description:
      'Focused on building intelligent agents and multi-agent architectures using Crew AI and LangChain. Worked across the full data pipeline — from preprocessing to deploying Generative AI solutions that automate complex corporate workflows and structure autonomous data flows.',
    tags: ['Crew AI', 'LangChain', 'GenAI', 'Python'],
  },
  {
    role: 'Software Developer',
    company: 'FAPESQ',
    period: 'Oct 2024 — Jul 2025',
    current: false,
    description:
      'Part of the BioInova Project, developing full-stack solutions with React.js and FastAPI. Responsible for PostgreSQL database modeling, backend optimization, and Docker-based environment standardization to ensure scalability of strategic environmental monitoring systems.',
    tags: ['React.js', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'AI Engineer',
    company: 'Enetrix',
    period: 'Mar 2024 — Aug 2024',
    current: false,
    description:
      'Built a document processing system for the ENETRIX platform using Computer Vision and NLP techniques to automate PDF data extraction, drastically reducing manual processing time and improving platform operational accuracy.',
    tags: ['Computer Vision', 'NLP', 'Python', 'PDF Automation'],
  },
];

const extracurricular = [
  {
    role: 'NLP Director',
    company: 'TAIL — Technology and AI League',
    period: 'Mar 2024 — Present',
    current: true,
    description:
      'Leading the full development cycle of a fact-checking and benchmarking framework for data extraction and normalization. Responsible for architecture planning, timeline management, and team leadership. Previously as Project Lead, managed an automated audio-description solution for audiovisual accessibility.',
    tags: ['NLP', 'Leadership', 'Fact-Checking', 'Benchmarking'],
  },
  {
    role: 'Project Manager',
    company: 'ARIA',
    period: 'Mar 2024 — Present',
    current: true,
    description:
      'Leading development of a machine learning web platform for Goalball Paralympic performance analysis. Translating technical requirements into practical solutions with image processing techniques. Built in partnership with the Brazilian national Goalball team and the Brazilian Confederation of Sports for the Visually Impaired.',
    tags: ['ML', 'Image Processing', 'Project Management', 'React'],
  },
  {
    role: 'Hackathon Finalist',
    company: 'Hack The Music — Moises',
    period: '2024',
    current: false,
    description:
      'Developed a multilingual communication solution with accessibility features: a WhatsApp bot that clones the user\'s voice and uses it to translate audio into another language — preserving the speaker\'s own voice across languages.',
    tags: ['Voice Cloning', 'NLP', 'WhatsApp Bot', 'Accessibility'],
  },
  {
    role: 'Competitor — Top 10 in Paraíba',
    company: 'ICPC — International Collegiate Programming Contest',
    period: '2023',
    current: false,
    description:
      'Competed in the International Collegiate Programming Contest. Our team ranked among the top 10 teams in Paraíba, solving complex algorithmic problems under pressure in a competitive international environment.',
    tags: ['Algorithms', 'Competitive Programming', 'Problem Solving'],
  },
];

function ExperienceCard({ item, index }) {
  return (
    <div className={`exp-card ${item.current ? 'exp-card--current' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="exp-card__header">
        <div>
          <h3 className="exp-card__role">{item.role}</h3>
          <span className="exp-card__company">{item.company}</span>
        </div>
        <span className={`exp-card__period ${item.current ? 'exp-card__period--current' : ''}`}>
          {item.current && <span className="exp-card__dot" />}
          {item.period}
        </span>
      </div>
      <p className="exp-card__desc">{item.description}</p>
      <div className="exp-card__tags">
        {item.tags.map(tag => (
          <span key={tag} className="exp-card__tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  const data = activeTab === 'work' ? workExperience : extracurricular;

  return (
    <section id="experience" className="exp-section">
      <div className="exp-container">
        <div className="exp-header">
          <p className="exp-label">Career</p>
          <h2 className="exp-title">Experience</h2>
        </div>

        <div className="exp-tabs">
          <button
            className={`exp-tab ${activeTab === 'work' ? 'exp-tab--active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
          </button>
          <button
            className={`exp-tab ${activeTab === 'extra' ? 'exp-tab--active' : ''}`}
            onClick={() => setActiveTab('extra')}
          >
            Extracurricular
          </button>
        </div>

        <div className="exp-timeline">
          <div className="exp-timeline__line" />
          {data.map((item, i) => (
            <div className="exp-timeline__item" key={i}>
              <div className="exp-timeline__node">
                <div className={`exp-timeline__circle ${item.current ? 'exp-timeline__circle--active' : ''}`} />
              </div>
              <ExperienceCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
