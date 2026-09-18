import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Sparkles, Terminal, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for role titles
  useEffect(() => {
    const currentFullText = personalInfo.roleTitles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roleTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        {/* Left Hero Content */}
        <div className="hero-left">
          <div className="status-badge">
            <span className="status-pulse-dot" />
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-greeting">
            Hello, <span className="greeting-sub">I'm</span>
          </h1>
          <h2 className="hero-name">{personalInfo.name}</h2>

          <div className="role-container">
            <span className="role-prefix">&gt; </span>
            <span className="role-typing">{displayedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-tagline">{personalInfo.tagline}</p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
              <Mail size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="socials-list">
              <a
                href="https://github.com/ReshmanNagendra"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href="https://linkedin.com/in/reshman-nagendra"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href="mailto:reshmannagendra@gmail.com"
                className="social-icon-btn"
                aria-label="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Hero Avatar with Pentagon/Tech Glow */}
        <div className="hero-right">
          <div className="avatar-wrapper">
            {/* Luminous Glow Ring */}
            <div className="avatar-ambient-glow" />

            {/* Polygon / Pentagon Portrait Frame */}
            <div className="pentagon-frame">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="avatar-image"
              />
            </div>

            {/* Floating Tech Chips */}
            <div className="floating-badge badge-top-left">
              <Code2 size={16} className="badge-icon" />
              <span>React & JS</span>
            </div>

            <div className="floating-badge badge-bottom-right">
              <Terminal size={16} className="badge-icon" />
              <span>C++ & DS</span>
            </div>

            <div className="floating-badge badge-top-right">
              <Sparkles size={16} className="badge-icon" />
              <span>Three.js 3D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
