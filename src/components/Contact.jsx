import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger emerald confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#10B981', '#2F866A', '#34D399', '#FFFFFF']
        });
      } catch (err) {
        // Confetti fallback
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a project idea, want to collaborate on innovative software, or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info-col">
            <div className="contact-card quick-connect-card">
              <h3 className="contact-card-title">Quick Connect</h3>
              <p className="contact-card-subtitle">
                My inbox is always open. I'll get back to you as soon as possible!
              </p>

              {/* Copy Email Box */}
              <div className="email-copy-box">
                <div className="email-copy-details">
                  <span className="email-copy-label">Email Address</span>
                  <span className="email-copy-text">{personalInfo.email}</span>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={18} className="text-success" /> : <Copy size={18} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Badge */}
              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="detail-label">Location</span>
                  <p className="detail-value">{personalInfo.location}</p>
                </div>
              </div>

              {/* Direct Socials Grid */}
              <div className="social-links-grid">
                <a
                  href="https://github.com/ReshmanNagendra"
                  target="_blank"
                  rel="noreferrer"
                  className="social-tile"
                >
                  <GithubIcon size={20} className="social-tile-icon" />
                  <div className="social-tile-text">
                    <span className="tile-title">GitHub</span>
                    <span className="tile-sub">@ReshmanNagendra</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/reshman-nagendra"
                  target="_blank"
                  rel="noreferrer"
                  className="social-tile"
                >
                  <LinkedinIcon size={20} className="social-tile-icon" />
                  <div className="social-tile-text">
                    <span className="tile-title">LinkedIn</span>
                    <span className="tile-sub">Reshman Nagendra</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-col">
            <div className="contact-card form-card">
              <h3 className="contact-card-title">Send a Direct Message</h3>

              {submitted && (
                <div className="form-success-banner">
                  <Sparkles size={20} className="success-icon" />
                  <div>
                    <h4>Message Received!</h4>
                    <p>Thank you for reaching out. I will reply shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Hi Reshman, let's talk about..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn w-full"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
