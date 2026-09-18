import React from 'react';
import { Layout, Terminal, Wrench, Sparkles, Cpu } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={22} className="cat-icon" />;
      case 'Terminal': return <Terminal size={22} className="cat-icon" />;
      case 'Wrench': return <Wrench size={22} className="cat-icon" />;
      case 'Sparkles': return <Sparkles size={22} className="cat-icon" />;
      default: return <Cpu size={22} className="cat-icon" />;
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={14} />
            <span>Tech Stack & Toolkit</span>
          </span>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, developer tools, and technologies I leverage to build robust software systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-categories-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="category-title">{category.category}</h3>
                  <p className="category-desc">{category.description}</p>
                </div>
              </div>

              <div className="skills-pill-list">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`skill-pill ${skill.highlight ? 'highlighted' : ''}`}
                  >
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
