import React, { useState } from 'react';
import { ExternalLink, Download, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'games', label: '3D & Games' },
    { key: 'mobile', label: 'Mobile & Tools' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} />
            <span>Portfolio Showcase</span>
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Creations</span>
          </h2>
          <p className="section-subtitle">
            A curated collection of web platforms, 3D interactive graphics, and software applications I've built.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filter-bar">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Card Image Thumbnail */}
              <div className="project-thumbnail-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail"
                />
                <div className="project-badge">
                  <span>{project.badge}</span>
                </div>
                <div className="thumbnail-overlay" />
              </div>

              {/* Card Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="project-links">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target={project.demoUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="btn btn-primary btn-sm project-action-btn"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      download
                      className="btn btn-secondary btn-sm project-action-btn"
                    >
                      <span>Get APK</span>
                      <Download size={14} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm icon-only-btn"
                      aria-label="View Source on GitHub"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
