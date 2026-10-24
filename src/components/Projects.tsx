
import "../styles/projects.css";

import smartBudgetImage from "../assets/01.jpeg";
import projectTwoImage from "../assets/02.jpeg";
import projectThreeImage from "../assets/03.jpeg";

import civicIssueImage1 from "../assets/p21.jpeg";
import civicIssueImage2 from "../assets/p22.jpeg";
import civicIssueImage3 from "../assets/p23.jpeg";

import aiAssistantImage1 from "../assets/p31.jpeg";
import aiAssistantImage2 from "../assets/p32.jpeg";

const projects = [
  {
    number: "01",
    category: "WEB APPLICATION",
    title: "Smart Budget Tracker",
    description:
      "A personal finance application for tracking expenses, managing budgets, monitoring savings, and viewing financial insights.",
    tags: ["React", "Express.js", "MongoDB"],
    images: [smartBudgetImage, projectTwoImage, projectThreeImage],
  },
  {
    number: "02",
    category: "AI SOLUTION",
    title: "AI-Powered Civic Issue Reporting System",
    description:
      "An AI-enabled platform for reporting civic issues, classifying submitted images, and supporting issue tracking and management.",
    tags: ["Python", "FastAPI", "CNN", "MongoDB"],
    images: [
      civicIssueImage1,
      civicIssueImage2,
      civicIssueImage3,
    ],
  },
  {
    number: "03",
    category: "AI AUTOMATION",
    title: "Personal AI Assistant Agent",
    description:
      "A personal AI assistant concept bringing conversational assistance, useful tools, and workflow automation together in one interface.",
    tags: ["n8n", "LLM", "APIs", "Automation"],
    images: [aiAssistantImage1, aiAssistantImage2],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-heading projects-heading">
          <div className="section-label">
            <span></span>
            SELECTED WORK
          </div>

          <h2>
            Work that turns
            <span> ideas into products.</span>
          </h2>

          <p>
            A selection of digital products and systems built with a focus on
            usability, performance, and real-world requirements.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image">
                {project.images.length > 1 ? (
                  <div
                    className="project-image-slider"
                    aria-label={`${project.title} screenshots. Swipe horizontally to view more.`}
                  >
                    {project.images.map((image, index) => (
                      <div className="project-slide" key={image}>
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="project-screenshot"
                        />
                      </div>
                    ))}
                  </div>
                ) : project.images.length === 1 ? (
                  <img
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    className="project-screenshot"
                  />
                ) : null}
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-bottom">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
