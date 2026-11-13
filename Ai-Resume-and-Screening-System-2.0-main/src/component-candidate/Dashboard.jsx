import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

import dropdownArrow from "../assets/Candidate-dashboard/dropdown.png";

// Metric card icons
import appIcon from "../assets/Candidate-dashboard/applications.png";
import interviewIcon from "../assets/Candidate-dashboard/interviews.png";
import offerIcon from "../assets/Candidate-dashboard/offer-received.png";
import savedIcon from "../assets/Candidate-dashboard/saved-jobs.png";
import upArrow from "../assets/Candidate-dashboard/green-arrow.png";
import locationIcon from "../assets/Candidate-dashboard/location.png";
import waveHand from "../assets/Candidate-dashboard/waving-hand.png";

// First row icons
import jobMatchIcon from "../assets/Candidate-dashboard/job-match.png";
import recentApplicationIcon from "../assets/Candidate-dashboard/recent-application.png";
import applicationDesignerIcon from "../assets/Candidate-dashboard/application-designer.png";
import applicationProductIcon from "../assets/Candidate-dashboard/application-product.png";
import applicationUxIcon from "../assets/Candidate-dashboard/application-ux.png";
import recommendedJobsIcon from "../assets/Candidate-dashboard/recommended-jobs.png";
import recommendedDesignerIcon from "../assets/Candidate-dashboard/recommended-designer.png";
import recommendedProductIcon from "../assets/Candidate-dashboard/recommended-product.png";
import recommendedResearcherIcon from "../assets/Candidate-dashboard/recommended-researcher.png";
import locationPinIcon from "../assets/Candidate-dashboard/recommended-location.png";

// Second row icons
import careerInsights from "../assets/Candidate-dashboard/career-insights.png";
import upArrowIcon from "../assets/Candidate-dashboard/up-arrow.png";
import skillAnalysis from "../assets/Candidate-dashboard/skill-analysis.png";
import uiDesign from "../assets/Candidate-dashboard/UI-design.png";
import uxResearch from "../assets/Candidate-dashboard/UX-Research.png";
import prototyping from "../assets/Candidate-dashboard/Prototyping.png";
import userTesting from "../assets/Candidate-dashboard/idea-icon.png";
import tickIcon from "../assets/Candidate-dashboard/application-product.png";
import ideaIcon from "../assets/Candidate-dashboard/idea-icon.png";
import interviews from "../assets/Candidate-dashboard/upcomming-interviews.png";

// AI Career Assistant icons
import BotIcon from "../assets/Candidate-dashboard/solid_robot.png";
import TargetIcon from "../assets/Candidate-dashboard/target-arrow.png";
import PencilIcon from "../assets/Candidate-dashboard/edit-line.png";
import AlertIcon from "../assets/Candidate-dashboard/triangle-alert.png";

// Metric cards
const statCards = [
  {
    icon: appIcon,
    label: "Applications",
    value: 24,
    trend: "+4 this month",
    trendClass: "Air-positive",
    trendIcon: upArrow,
  },
  {
    icon: interviewIcon,
    label: "Interview Scheduled",
    value: 5,
    trend: "2 upcoming",
    trendClass: "Air-upcoming",
    trendIcon: locationIcon,
  },
  {
    icon: offerIcon,
    label: "Offers Received",
    value: 2,
    trend: "+1 this month",
    trendClass: "Air-positive",
    trendIcon: upArrow,
  },
  {
    icon: savedIcon,
    label: "Saved Jobs",
    value: 18,
    trend: "+6 this month",
    trendClass: "Air-positive",
    trendIcon: upArrow,
  },
];

// Recent applications
const applications = [
  {
    icon: applicationDesignerIcon,
    title: "UI/UX Designer",
    company: "ABC technologies",
    date: "Sep 28, 2025",
    status: "Under review",
    statusClass: "Air-under-review",
  },
  {
    icon: applicationProductIcon,
    title: "Product Designer",
    company: "XYZ Solutions",
    date: "Sep 25, 2025",
    status: "Shortlisted",
    statusClass: "Air-shortlisted",
  },
  {
    icon: applicationUxIcon,
    title: "UX Designer",
    company: "Techcorp",
    date: "Sep 20, 2025",
    status: "Interview",
    statusClass: "Air-interview",
  },
];

// Recommended jobs
const recommendedJobs = [
  {
    icon: recommendedDesignerIcon,
    title: "UI/UX Designer",
    company: "ABC Technologies",
    location: "Remote",
    match: 92,
  },
  {
    icon: recommendedProductIcon,
    title: "Product Designer",
    company: "XYZ Solutions",
    location: "Bangalore, India",
    match: 87,
  },
  {
    icon: recommendedResearcherIcon,
    title: "UX Researcher",
    company: "TechCorp",
    location: "Hybrid",
    match: 81,
  },
];

// Skills
const airSkills = [
  { name: "UI Design", score: 90, color: "#5b86e5", icon: uiDesign },
  { name: "UX Research", score: 85, color: "#c850d8", icon: uxResearch },
  { name: "Prototyping", score: 80, color: "#16a05d", icon: prototyping },
  { name: "User Testing", score: 75, color: "#ffc968", icon: userTesting },
];

// Career insights
const airInsights = [
  {
    icon: upArrowIcon,
    text: "Your profile is competitive for Junior UI/UX roles.",
  },
  {
    icon: ideaIcon,
    text: "Adding Design System skills may improve your matches.",
  },
  {
    icon: tickIcon,
    text: "Your resume is performing well for ATS screening.",
  },
];

// Upcoming interviews
const airInterviewList = [
  {
    title: "UI/UX Designer Interview",
    company: "ABC Technologies",
    date: "Oct 8, 2026 - 11:00AM",
    button: "Join Interview",
    primary: true,
  },
  {
    title: "Product Designer Interview",
    company: "XYZ Solutions",
    date: "Oct 10, 2026 - 02:30PM",
    button: "View Details",
    primary: false,
  },
];

// AI assistant recommendations
const aiAssistantInsights = [
  {
    id: 1,
    title: "Job Match Highlight",
    description:
      "You have a 92% match with the UI/UX Designer role at ABC Technologies.",
    icon: TargetIcon,
    alt: "Job match target",
  },
  {
    id: 2,
    title: "Resume Improvement",
    description: "Add measurable result to your work experience section.",
    icon: PencilIcon,
    alt: "Resume improvement pencil",
  },
  {
    id: 3,
    title: "Skill Gap Alert",
    description: "Consider improving design systems and accessibility skills.",
    icon: AlertIcon,
    alt: "Skill gap alert",
  },
];

const CandidateDashboard = () => {
  return (
    <div className="Air-candidate-dashboard-page">
      <Header />

      <div className="Air-dashboard-body">
        <Sidebar />

        <main className="Air-dashboard-content-wrapper">
          {/* Welcome */}
          <section className="Air-welcome-banner-section">
            <div className="Air-welcome-text-block">
              <h1>
                Welcome back, Akash!
                <img src={waveHand} alt="" className="Air-wave-hand-icon" />
              </h1>
              <p>Let's continue your journey towards your career</p>
            </div>

            <button type="button" className="Air-create-resume-main-btn">
              Create Resume
              <img src={dropdownArrow} alt="" />
            </button>
          </section>

          {/* Metric cards */}
          <section className="Air-top-stats-grid">
            {statCards.map((card) => (
              <div className="Air-stat-metric-card" key={card.label}>
                <span className="Air-stat-icon">
                  <img src={card.icon} alt="" />
                </span>

                <div className="Air-stat-info">
                  <span className="Air-stat-label">{card.label}</span>
                  <h2>{card.value}</h2>

                  <p className={`Air-stat-trend ${card.trendClass}`}>
                    <img
                      src={card.trendIcon}
                      alt=""
                      className={
                        card.trendClass === "Air-positive"
                          ? "Air-stat-trend-icon Air-green-up-arrow"
                          : "Air-stat-trend-icon Air-metric-location-icon"
                      }
                    />
                    <span>{card.trend}</span>
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Row 1 */}
          <section className="Air-dashboard-three-cards">
            {/* Job match score */}
            <div className="Air-dashboard-card Air-job-match-card">
              <h3 className="Air-dashboard-card-title">
                <span className="Air-dashboard-title-icon">
                  <img src={jobMatchIcon} alt="" />
                </span>
                <span>Job match score</span>
              </h3>

              <div className="Air-job-match-content">
                <div
                  className="Air-match-donut"
                  role="img"
                  aria-label="86 percent match"
                >
                  <div className="Air-match-donut-inner">
                    <strong>86%</strong>
                    <span>Match</span>
                  </div>
                </div>

                <div className="Air-match-description">
                  <h4>Excellent match potential!</h4>
                  <p>
                    Your skills and experience align well with current job
                    opportunities.
                  </p>
                  <button type="button" className="Air-improve-match-button">
                    Improve Match
                  </button>
                </div>
              </div>
            </div>

            {/* Recent applications */}
            <div className="Air-dashboard-card Air-recent-applications-card">
              <h3 className="Air-dashboard-card-title">
                <span className="Air-dashboard-title-icon">
                  <img src={recentApplicationIcon} alt="" />
                </span>
                <span>Recent application</span>
              </h3>

              <div className="Air-applications-table">
                <div className="Air-applications-table-header">
                  <span>Job Title</span>
                  <span>Company</span>
                  <span>Applied</span>
                  <span>Status</span>
                </div>

                <div className="Air-applications-list">
                  {applications.map((application) => (
                    <div
                      className="Air-application-row"
                      key={`${application.title}-${application.date}`}
                    >
                      <div className="Air-application-job">
                        <span className="Air-application-icon">
                          <img src={application.icon} alt="" />
                        </span>
                        <strong>{application.title}</strong>
                      </div>

                      <span className="Air-application-company">
                        {application.company}
                      </span>

                      <span className="Air-application-date">
                        {application.date}
                      </span>

                      <span
                        className={`Air-application-status ${application.statusClass}`}
                      >
                        <span className="Air-status-dot" />
                        {application.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended jobs */}
            <div className="Air-dashboard-card Air-recommended-jobs-card">
              <h3 className="Air-dashboard-card-title Air-recommended-heading">
                <span className="Air-dashboard-title-icon">
                  <img src={recommendedJobsIcon} alt="" />
                </span>
                <span>Recommended Jobs</span>
              </h3>

              <div className="Air-recommended-jobs-list">
                {recommendedJobs.map((job) => (
                  <article className="Air-recommended-job" key={job.title}>
                    <span className="Air-recommended-job-icon">
                      <img src={job.icon} alt="" />
                    </span>

                    <div className="Air-recommended-job-details">
                      <strong>{job.title}</strong>
                      <span>{job.company}</span>

                      <span className="Air-recommended-location">
                        <img
                          src={locationPinIcon}
                          alt=""
                          className="Air-location-pin"
                        />
                        <span>{job.location}</span>
                      </span>
                    </div>

                    <span className="Air-job-match-badge">
                      {job.match}% Match
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Row 2 */}
          <section className="air-candidate-dashboard">
            {/* Career insights */}
            <div className="air-dashboard-card air-career-card">
              <div className="air-card-heading">
                <img src={careerInsights} alt="" className="air-heading-icon" />
                <h2>Career Insights</h2>
              </div>

              <p className="air-career-description">
                <strong>UI/UX Designer</strong> roles matching your profile
                <br className="air-desktop-break" /> have increased this month.
              </p>

              <div className="air-insights-list">
                {airInsights.map((item) => (
                  <div className="air-insight-item" key={item.text}>
                    <div className="air-small-icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill analysis */}
            <div className="air-dashboard-card air-skill-card">
              <div className="air-card-heading">
                <img src={skillAnalysis} alt="" className="air-heading-icon" />
                <h2>Skill Analysis</h2>
              </div>

              <div className="air-skill-content">
                <div className="air-skill-list">
                  {airSkills.map((skill) => (
                    <div className="air-skill-item" key={skill.name}>
                      <div className="air-small-icon air-skill-icon">
                        <img src={skill.icon} alt="" />
                      </div>

                      <div className="air-skill-details">
                        <div className="air-skill-label">
                          <span>{skill.name}</span>
                          <span>{skill.score}%</span>
                        </div>

                        <div
                          className="air-progress-track"
                          role="progressbar"
                          aria-label={skill.name}
                          aria-valuenow={skill.score}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="air-progress-fill"
                            style={{
                              width: `${skill.score}%`,
                              backgroundColor: skill.color,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="air-overall-skill">
                  <div
                    className="air-skill-chart"
                    role="img"
                    aria-label="Overall skill strength 78 percent"
                  >
                    <div className="air-chart-center">
                      <span>Overall</span>
                      <strong>78%</strong>
                    </div>
                  </div>

                  <h3>Skill Strength</h3>
                  <p>
                    Strong foundation with
                    <br /> room for growth
                  </p>
                </div>
              </div>
            </div>

            {/* Upcoming interviews */}
            <div className="air-dashboard-card air-interviews-card">
              <div className="air-card-heading">
                <img src={interviews} alt="" className="air-heading-icon" />
                <h2>Upcoming Interviews</h2>
              </div>

              <div className="air-interview-list">
                {airInterviewList.map((interview) => (
                  <div className="air-interview-item" key={interview.title}>
                    <div className="air-small-icon air-interview-icon">
                      <img src={interviews} alt="" />
                    </div>

                    <div className="air-interview-info">
                      <h3>{interview.title}</h3>
                      <p>{interview.company}</p>
                      <p className="air-interview-date">{interview.date}</p>
                    </div>

                    <button
                      type="button"
                      className={`air-interview-button ${
                        interview.primary
                          ? "air-primary-button"
                          : "air-secondary-button"
                      }`}
                    >
                      {interview.button}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Career Assistant */}
          <section className="Air-ai-career-assistant-wrapper">
            <div className="Air-ai-career-assistant">
              <div className="Air-ai-career-header">
                <div className="Air-ai-main-icon">
                  <img src={BotIcon} alt="AI Career Assistant" />
                </div>

                <div className="Air-ai-header-content">
                  <h2>AI Career Assistant</h2>
                  <p>Personalized insights to help you get hired faster.</p>
                </div>
              </div>

              <div className="Air-ai-insights-grid">
                {aiAssistantInsights.map((item) => (
                  <article className="Air-ai-insight-card" key={item.id}>
                    <div className="Air-ai-insight-icon">
                      <img src={item.icon} alt={item.alt} />
                    </div>

                    <div className="Air-ai-insight-content">
                      <h3>{item.title}</h3>
                      <p>“{item.description}”</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CandidateDashboard;