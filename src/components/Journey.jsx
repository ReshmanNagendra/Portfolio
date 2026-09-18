import React from 'react';
import { Compass, GraduationCap, Code, Rocket } from 'lucide-react';
import { journeyData } from '../data/portfolioData';
import './Journey.css';

export default function Journey() {
  const getTimelineIcon = (type) => {
    switch (type) {
      case 'education': return <GraduationCap size={20} className="timeline-node-icon" />;
      case 'project': return <Rocket size={20} className="timeline-node-icon" />;
      default: return <Code size={20} className="timeline-node-icon" />;
    }
  };

  return (
    <section className="journey-section" id="journey">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} />
            <span>Timeline & Growth</span>
          </span>
          <h2 className="section-title">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-subtitle">
            Key milestones, education at Kalvium, and pivotal projects shaping my engineering path.
          </p>
        </div>

        {/* Timeline List */}
        <div className="timeline-wrapper">
          <div className="timeline-spine" />

          {journeyData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              {/* Center Node */}
              <div className="timeline-node">
                {getTimelineIcon(item.type)}
              </div>

              {/* Content Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-institution">{item.institution}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
