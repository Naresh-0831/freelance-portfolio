import "../styles/about.css";

const reasons = [
  {
    number: "01",
    title: "Business-focused",
    description:
      "I focus on the problem your business needs to solve, not just the technology behind it.",
  },
  {
    number: "02",
    title: "Modern development",
    description:
      "I build clean, responsive and maintainable digital products designed for real users.",
  },
  {
    number: "03",
    title: "AI & automation",
    description:
      "I look for practical ways to use AI and automation to make products and workflows smarter.",
  },
  {
    number: "04",
    title: "Direct communication",
    description:
      "Clear communication throughout the project, from the initial idea to final delivery.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="about-grid">

          <div className="about-content">

            <div className="section-label">
              <span></span>
              ABOUT ME
            </div>

            <h2>
              I don't just build websites.
              <span> I build solutions around real business needs.</span>
            </h2>

            <p>
              I'm a developer focused on creating modern digital products that
              are useful, reliable, and built with purpose. I combine
              development, AI, and automation to turn ideas and business
              requirements into practical solutions.
            </p>

            <p>
              Whether you need a website, web application, AI-powered feature,
              or a custom workflow, my approach is simple — understand the
              problem first, then build the right solution.
            </p>

          </div>

          <div className="about-reasons">

            <div className="about-reasons-heading">
              <span>WHY WORK WITH ME</span>
            </div>

            <div className="reasons-list">
              {reasons.map((reason) => (
                <div className="reason-item" key={reason.number}>

                  <span className="reason-number">
                    {reason.number}
                  </span>

                  <div className="reason-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>

                  <span className="reason-arrow">↗</span>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About; 