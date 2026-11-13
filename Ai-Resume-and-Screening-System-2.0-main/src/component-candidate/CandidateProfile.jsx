import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./CandidateProfile.css";

// Profile page icons
import homeIcon from "../assets/Candidate-profile/home.png";
import personalIcon from "../assets/Candidate-profile/personal-info.png";
import workIcon from "../assets/Candidate-profile/work-experience.png";
import educationIcon from "../assets/Candidate-profile/education.png";
import skillsIcon from "../assets/Candidate-profile/skills.png";
import certificationIcon from "../assets/Candidate-profile/certifications.png";
import resumeIcon from "../assets/Candidate-profile/resume.png";
import portfolioIcon from "../assets/Candidate-profile/portfolio.png";
import jobIcon from "../assets/Candidate-profile/job-preferences.png";

// Action icons
import editIcon from "../assets/Candidate-profile/edit.png";
import arrowIcon from "../assets/Candidate-profile/arrow-right.png";

const CandidateProfile = () => {
  const profileSections = [
    {
      id: 1,
      title: "Personal Information",
      description: "Add your basic details, contact information and summary.",
      percentage: 100,
      icon: personalIcon,
      action: "Edit",
      completed: true,
    },
    {
      id: 2,
      title: "Work Experience",
      description: "Add your professional experience, roles and achievements.",
      percentage: 75,
      icon: workIcon,
      action: "Edit",
      completed: true,
    },
    {
      id: 3,
      title: "Education",
      description: "Add your academic background and qualifications.",
      percentage: 100,
      icon: educationIcon,
      action: "Edit",
      completed: true,
    },
    {
      id: 4,
      title: "Skills",
      description: "Add your basic details, contact information and summary.",
      percentage: 75,
      icon: skillsIcon,
      action: "Edit",
      completed: true,
    },
    {
      id: 5,
      title: "Certifications",
      description: "Add your academic background and qualifications.",
      percentage: 50,
      icon: certificationIcon,
      action: "Continue",
      completed: false,
    },
    {
      id: 6,
      title: "Resume",
      description: "Upload your resume or build it using our resume builder.",
      percentage: 100,
      icon: resumeIcon,
      action: "Edit",
      completed: true,
    },
    {
      id: 7,
      title: "Portfolio",
      description: "Showcase your work, projects and achievements.",
      percentage: 25,
      icon: portfolioIcon,
      action: "Continue",
      completed: false,
    },
    {
      id: 8,
      title: "Job Preferences",
      description:
        "Set your preferred job roles, locations and work preferences.",
      percentage: 50,
      icon: jobIcon,
      action: "Continue",
      completed: false,
    },
  ];

  const completedSections = 5;
  const totalSections = 8;

  const handleSectionClick = (sectionTitle) => {
    console.log(`${sectionTitle} section clicked`);
    // Add navigation to the respective section here.
  };

  return (
    <div className="Air-profile-page">
      <Header />

      <div className="Air-profile-main-layout">
        <aside className="Air-profile-sidebar">
          <Sidebar />
        </aside>

        <main className="Air-profile-content">
          {/* Breadcrumb */}
          <div className="Air-profile-breadcrumb">
            <img src={homeIcon} alt="Home" />
            <span>Dashboard</span>
            <span className="Air-profile-breadcrumb-separator">&gt;</span>
            <span className="Air-profile-current-page">Profile</span>
          </div>

          {/* Page heading and completion summary */}
          <section className="Air-profile-overview">
            <div className="Air-profile-heading">
              <h1>My Profile</h1>
              <p>
                Complete your profile to increase your chances of getting
                noticed by recruiters and matching with the right opportunities.
              </p>
            </div>

            <div className="Air-profile-completion-card">
              <div
                className="Air-profile-progress-circle Air-profile-overall-progress"
                style={{
                  "--Air-progress": `${
                    (completedSections / totalSections) * 100
                  }%`,
                }}
              >
                <div className="Air-profile-progress-inner">
                  <strong>
                    {completedSections}/{totalSections}
                  </strong>
                  <span>sections</span>
                  <span>completed</span>
                </div>
              </div>

              <div className="Air-profile-completion-info">
                <h2>Profile Completion</h2>
                <p>
                  You've completed {completedSections} out of {totalSections}{" "}
                  section.
                  <br />
                  Complete the remaining sections to get
                  <br className="Air-profile-desktop-break" /> a fully optimized
                  profile.
                </p>
              </div>
            </div>
          </section>

          {/* Profile section cards */}
          <section className="Air-profile-sections">
            <h2 className="Air-profile-sections-heading">Profile Sections</h2>

            <div className="Air-profile-cards-grid">
              {profileSections.map((section) => (
                <article className="Air-profile-section-card" key={section.id}>
                  <div className="Air-profile-section-icon">
                    <img src={section.icon} alt="" />
                  </div>

                  <div className="Air-profile-section-details">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>

                  <div className="Air-profile-card-actions">
                    <div
                      className="Air-profile-progress-circle"
                      style={{
                        "--Air-progress": `${section.percentage}%`,
                      }}
                    >
                      <div className="Air-profile-progress-inner">
                        <strong>{section.percentage}%</strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="Air-profile-action-button"
                      onClick={() => handleSectionClick(section.title)}
                    >
                      <img
                        src={section.action === "Edit" ? editIcon : arrowIcon}
                        alt=""
                      />
                      <span>{section.action}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CandidateProfile;