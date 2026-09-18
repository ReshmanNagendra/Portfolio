import React from 'react';
import { Code2, Cpu, Zap, Flame } from 'lucide-react';
import { statsData } from '../data/portfolioData';
import './StatsBar.css';

export default function StatsBar() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={22} className="stat-icon" />;
      case 'Cpu': return <Cpu size={22} className="stat-icon" />;
      case 'Zap': return <Zap size={22} className="stat-icon" />;
      case 'Flame': return <Flame size={22} className="stat-icon" />;
      default: return <Zap size={22} className="stat-icon" />;
    }
  };

  return (
    <section className="stats-bar-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon-wrapper">
                {getIcon(stat.icon)}
              </div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
