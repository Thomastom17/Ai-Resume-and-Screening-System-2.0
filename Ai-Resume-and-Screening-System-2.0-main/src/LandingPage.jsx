import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Landingpage.css";

import aiLogo from "./assets/Landingpage/Background 3.png";
import lightningIcon from "./assets/Landingpage/Background.png";
import searchIcon from "./assets/Landingpage/Background 1.png";
import shieldIcon from "./assets/Landingpage/Background 2.png";
import heroIllustration from "./assets/Landingpage/Frame 1538232815.png";
import createArrow from "./assets/Landingpage/explore-arrow.png";

// Features Card Images
import resumeBuilder from "./assets/Landingpage/Resume-builder.png";
import screening from "./assets/Landingpage/Screening.png";
import smartMatching from "./assets/Landingpage/Smart-matching.png";
import analyticsDashboard from "./assets/Landingpage/Analytics-dashboard.png";
import atsOptimization from "./assets/Landingpage/Ats-optimization.png";
import secureConfidential from "./assets/Landingpage/Secure&Confidential.png";

/* Resume template images */
import resumeBlue from "./assets/Landingpage/resume-blue.png";
import resumeYellow from "./assets/Landingpage/resume-yellow.png";
import resumeGreen from "./assets/Landingpage/resume-green.png";

/* Statistics icons */
import iconUsers from "./assets/Landingpage/icon-users.png";
import iconResumes from "./assets/Landingpage/icon-resumes.png";
import iconCompanies from "./assets/Landingpage/icon-companies.png";
import iconRating from "./assets/Landingpage/icon-rating.png";

/* Testimonial profile images and rating */
import userPriya from "./assets/Landingpage/user-priya.png";
import userRohit from "./assets/Landingpage/user-rohit.png";
import userAnanya from "./assets/Landingpage/user-ananya.png";
import iconStars from "./assets/Landingpage/icon-stars.png";

/* CTA and footer icons */
import iconRocket from "./assets/Landingpage/icon-rocket.png";
import iconDocument from "./assets/Landingpage/icon-document.png";
import iconFacebook from "./assets/Landingpage/icon-facebook.png";
import iconLinkedin from "./assets/Landingpage/icon-linkedin.png";
import iconYoutube from "./assets/Landingpage/icon-twitter.png";
import iconInstagram from "./assets/Landingpage/icon-instagram.png";

/* Navigation arrows */
import iconArrowLeft from "./assets/Landingpage/icon-arrow-left.png";
import iconArrowRight from "./assets/Landingpage/icon-arrow-right.png";
import iconArrowNext from "./assets/Landingpage/icon-arrow-next.png";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Resume Templates", href: "#templates" },
  { label: "For Recruiters", href: "#recruiters" },
  { label: "Pricing", href: "#pricing" },
  { label: "Helping Center", href: "#help" },
  { label: "Contact Us", href: "#contact" },
];

const features = [
  {
    icon: lightningIcon,
    title: "AI Powered",
    description: "Smart suggestions that stand out",
  },
  {
    icon: searchIcon,
    title: "AI Powered",
    description: "Smart suggestions that stand out",
  },
  {
    icon: shieldIcon,
    title: "AI Powered",
    description: "Smart suggestions that stand out",
  },
];

const detailedFeatures = [
  {
    image: resumeBuilder,
    title: "AI Resume Builder",
    description: "Create Professional, tailored resumes with AI assistance.",
  },
  {
    image: screening,
    title: "AI Screening",
    description: "Automatically screen and evaluate candidates with AI.",
  },
  {
    image: smartMatching,
    title: "Smart Matching",
    description:
      "Match candidates with the right jobs using intelligent algorithms.",
  },
  {
    image: analyticsDashboard,
    title: "Analytics Dashboard",
    description: "Track performance and get valuable insights.",
  },
  {
    image: atsOptimization,
    title: "ATS Optimization",
    description: "Ensure your resume passes ATS checks with ease.",
  },
  {
    image: secureConfidential,
    title: "Secure & Confidential",
    description: "Your data and privacy are our top priority.",
  },
];

const statistics = [
  {
    id: 1,
    icon: iconUsers,
    value: "25K+",
    label: "Happy Users",
  },
  {
    id: 2,
    icon: iconResumes,
    value: "120K+",
    label: "Resumes Created",
  },
  {
    id: 3,
    icon: iconCompanies,
    value: "2K+",
    label: "Companies",
  },
  {
    id: 4,
    icon: iconRating,
    value: "98%",
    label: "Satisfaction Rate",
  },
];

const testimonials = [
  {
    id: 1,
    image: userPriya,
    name: "Priya S.",
    role: "Job Seeker",
    quote:
      "This platform helped me create a professional resume in minutes. It looks great and is easy to use!",
  },
  {
    id: 2,
    image: userRohit,
    name: "Rohit K.",
    role: "Recruiter",
    quote:
      "The AI screening features save us hours of manual work. We find better candidates faster.",
  },
  {
    id: 3,
    image: userAnanya,
    name: "Ananya M.",
    role: "Software Engineer",
    quote:
      "The templates are modern and easy to customize. I highly recommend this platform!",
  },
];

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Resume Builder", href: "#resume-templates" },
      { label: "AI Resume Templates", href: "#resume-templates" },
      { label: "Candidate Screening", href: "#features" },
      { label: "Skill Analysis", href: "#features" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "FAQ", href: "#faq" },
      { label: "Raise Issue", href: "#support" },
      { label: "Contact Support", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialStart, setTestimonialStart] = useState(0);

  const visibleTestimonials = Array.from(
    { length: testimonials.length },
    (_, index) =>
      testimonials[(testimonialStart + index) % testimonials.length],
  );

  const handlePrevious = () => {
    setTestimonialStart(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setTestimonialStart((current) => (current + 1) % testimonials.length);
  };

  const handleExploreTemplates = () => {
    document
      .getElementById("resume-templates")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleGetStarted = () => {
    document
      .getElementById("resume-templates")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="air-landing" id="home">
      {/* Navigation */}
      <header className="air-navbar">
        {/* Brand */}
        <a className="air-brand" href="#home" aria-label="AI RB&SS Home">
          <img src={aiLogo} alt="" className="air-brand-logo" />
          <span>AI RB&amp;SS</span>
        </a>

        {/* Navigation Links */}
        <nav
          className={`air-navigation ${menuOpen ? "air-navigation-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Login and Register */}
        <div className="air-auth-buttons">
          <Link to="/Login" className="air-login-button">
            Login
          </Link>

          <Link to="/Registration" className="air-register-button">
            Register
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="air-mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="air-mobile-navigation"
        >
          <span
            className={`air-menu-line air-line-one ${menuOpen ? "active" : ""}`}
          />
          <span
            className={`air-menu-line air-line-two ${menuOpen ? "active" : ""}`}
          />
          <span
            className={`air-menu-line air-line-three ${
              menuOpen ? "active" : ""
            }`}
          />
        </button>
      </header>

      {/* Hero */}
      <section className="air-hero">
        <div className="air-hero-content">
          <h1>
            AI Resume Builder &amp;
            <br />
            <span>Screening System</span>
          </h1>

          <p className="air-hero-description">
            Create job-winning resumes in minutes and help recruiters
            <br className="air-desktop-break" />
            find the perfect talent with AI-Powered Screening.
          </p>

          {/* Hero Buttons */}
          <div className="air-hero-actions">
            <Link to="/Login" className="air-primary-button">
              <span>Create My Resume</span>
              <img
                src={createArrow}
                alt=""
                className="air-button-arrow"
                aria-hidden="true"
              />
            </Link>

            <Link to="/Registration" className="air-secondary-button">
              I'm a Recruiter
            </Link>
          </div>

          {/* AI Features */}
          <div className="air-features">
            {features.map((feature, index) => (
              <div className="air-feature" key={`${feature.title}-${index}`}>
                <div className="air-feature-icon">
                  <img src={feature.icon} alt="" />
                </div>

                <div className="air-feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="air-hero-visual">
          <img
            className="air-hero-illustration"
            src={heroIllustration}
            alt="AI resume checklist, ATS optimization, and resume score"
          />
        </div>
      </section>

      {/* Features Section */}
      <div className="air-Landing-Page">
        <section className="air-Features-Section" id="features">
          <div className="air-Features-Header">
            <p className="air-Features-Label">OUR FEATURES</p>

            <h1 className="air-Features-Title">
              Everything You Need for a Smarter Hiring Process
            </h1>

            <p className="air-Features-Subtitle">
              Powerful tools for job seekers and recruiters, all in one
              platform.
            </p>
          </div>

          <div className="air-Features-Grid">
            {detailedFeatures.map((feature) => (
              <article className="air-Feature-Card" key={feature.title}>
                <div className="air-Feature-Icon-Box">
                  <img
                    className="air-Feature-Icon"
                    src={feature.image}
                    alt=""
                  />
                </div>

                <h2 className="air-Feature-Card-Title">{feature.title}</h2>

                <p className="air-Feature-Card-Description">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* RL PAGE SECTION (Templates, Statistics, Testimonials, CTA, Footer) */}
      <div className="air-rl-page">
        {/* HERO / RESUME TEMPLATES */}
        <section className="air-rl-hero" id="about">
          <div className="air-rl-hero-copy">
            <p className="air-rl-eyebrow">PROFESSIONAL RESUME TEMPLATES</p>

            <h1>
              Choose from Modern
              <br />
              &amp; Professional Templates
            </h1>

            <p className="air-rl-hero-description">
              Stand out with beautifully designed resume templates
              <br className="air-rl-desktop-break" />
              that match your style and industry.
            </p>

            <button
              type="button"
              className="air-rl-explore-btn"
              onClick={handleExploreTemplates}
            >
              <span>Explore Templates</span>
              <img src={iconArrowNext} alt="" />
            </button>
          </div>

          <div className="air-rl-template-gallery" id="resume-templates">
            <button
              type="button"
              className="air-rl-template-card air-rl-template-blue"
              aria-label="Choose blue resume template"
              onClick={handleGetStarted}
            >
              <img src={resumeBlue} alt="Blue professional resume template" />
            </button>

            <button
              type="button"
              className="air-rl-template-card air-rl-template-yellow"
              aria-label="Choose yellow resume template"
              onClick={handleGetStarted}
            >
              <img
                src={resumeYellow}
                alt="Yellow professional resume template"
              />
            </button>

            <button
              type="button"
              className="air-rl-template-card air-rl-template-green"
              aria-label="Choose green resume template"
              onClick={handleGetStarted}
            >
              <img src={resumeGreen} alt="Green professional resume template" />
            </button>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="air-rl-statistics" aria-label="Platform statistics">
          {statistics.map((stat) => (
            <div className="air-rl-stat-item" key={stat.id}>
              <span className="air-rl-stat-icon">
                <img src={stat.icon} alt="" />
              </span>

              <div className="air-rl-stat-copy">
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </section>

        {/* TESTIMONIALS */}
        <section className="air-rl-testimonials-section" id="testimonials">
          <div className="air-rl-section-heading">
            <h2>What Our Users Say</h2>
            <p>
              Real stories from job seekers and recruiters who found success
              with our platform.
            </p>
          </div>

          <button
            type="button"
            className="air-rl-arrow-btn air-rl-arrow-left"
            aria-label="Previous testimonials"
            onClick={handlePrevious}
          >
            <img src={iconArrowLeft} alt="" />
          </button>

          <div className="air-rl-testimonials-grid">
            {visibleTestimonials.map((testimonial) => (
              <article className="air-rl-testimonial-card" key={testimonial.id}>
                <img
                  className="air-rl-testimonial-avatar"
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                />

                <div className="air-rl-testimonial-content">
                  <p className="air-rl-testimonial-quote">
                    “{testimonial.quote}”
                  </p>

                  <h3>{testimonial.name}</h3>
                  <p className="air-rl-testimonial-role">{testimonial.role}</p>

                  <div
                    className="air-rl-testimonial-stars"
                    role="img"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <img key={index} src={iconStars} alt="" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="air-rl-arrow-btn air-rl-arrow-right"
            aria-label="Next testimonials"
            onClick={handleNext}
          >
            <img src={iconArrowRight} alt="" />
          </button>
        </section>

        {/* CALL TO ACTION */}
        <section className="air-rl-cta-section">
          <img className="air-rl-cta-icon" src={iconRocket} alt="" />

          <div className="air-rl-cta-copy">
            <h2>Ready to build your future?</h2>
            <p>
              Join thousands of professionals and recruiters using AI to
              transform hiring
              <br className="air-rl-desktop-break" />
              and career growth.
            </p>
          </div>

          <button
            type="button"
            className="air-rl-get-started-btn"
            onClick={handleGetStarted}
          >
            <span>Get Started</span>
            <img src={iconArrowNext} alt="" />
          </button>
        </section>

        {/* FOOTER */}
        <footer className="air-rl-footer">
          <div className="air-rl-footer-main">
            <div className="air-rl-footer-brand">
              <img
                className="air-rl-footer-document-icon"
                src={iconDocument}
                alt=""
              />

              <div>
                <h2>AI R B &amp; SS</h2>
                <p>
                  AI Resume Builders &amp;
                  <br />
                  Screening Platform
                </p>
              </div>
            </div>

            {footerColumns.map((column) => (
              <div className="air-rl-footer-column" key={column.title}>
                <h3>{column.title}</h3>

                {column.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="air-rl-footer-bottom">
            <p>
              2026 AI Resume Builder &amp; Screening Platform
              <span className="air-rl-footer-divider">|</span>
              Version 1.0.0
            </p>

            <div className="air-rl-social-links">
              <a href="#facebook" aria-label="Facebook">
                <img src={iconFacebook} alt="" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <img src={iconLinkedin} alt="" />
              </a>
              <a href="#youtube" aria-label="YouTube">
                <img src={iconYoutube} alt="" />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <img src={iconInstagram} alt="" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}