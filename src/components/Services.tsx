import "../styles/services.css";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built around your business goals.",
    tags: ["Websites", "Web Apps", "Responsive UI"],
  },
  {
    number: "02",
    title: "AI Solutions",
    description:
      "Practical AI-powered features and intelligent systems designed to solve real business problems.",
    tags: ["AI Integration", "Intelligent Systems", "APIs"],
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Automate repetitive workflows, connect your tools, and reduce unnecessary manual work.",
    tags: ["Workflows", "API Integration", "Process Automation"],
  },
  {
    number: "04",
    title: "Custom Software",
    description:
      "Purpose-built digital solutions designed around your specific requirements and workflow.",
    tags: ["Custom Systems", "Dashboards", "Business Tools"],
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        <div className="section-heading">
          <div className="section-label">
            <span></span>
            WHAT I DO
          </div>

          <h2>
            Digital solutions
            <span> built around your goals.</span>
          </h2>

          <p>
            From websites to AI-powered systems, I help turn ideas and
            business requirements into useful digital products.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">↗</span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;