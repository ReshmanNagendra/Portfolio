import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon-box">
                <Terminal size={18} className="logo-icon" />
              </div>
              <span className="logo-name">Reshman<span className="logo-accent">.dev</span></span>
            </div>
            <p className="footer-bio">
              Building intelligent digital experiences, 3D simulations, and high-impact web products.
            </p>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-nav-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#journey">Journey</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4>Featured Apps</h4>
              <ul>
                <li><a href="/chronix/index.html">Chronix Attendance</a></li>
                <li><a href="https://typing-game.reshman.in/" target="_blank" rel="noreferrer">Typing Speed Game</a></li>
                <li><a href="https://github.com/ReshmanNagendra" target="_blank" rel="noreferrer">Galactic Guardian 3D</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Reshman Nagendra. Crafted with passion & React.
          </p>

          <button
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to Top"
            title="Scroll to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
