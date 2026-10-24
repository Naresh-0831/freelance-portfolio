import "../styles/process.css";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We discuss your idea, goals, requirements, and the problem you want to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I define the right approach, features, technology, and project direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop the solution with a focus on quality, usability, performance, and responsiveness.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We review the final product, make refinements, and prepare everything for launch.",
  },
];

function Process() {
  return (
    <section className="process">
      <div className="container">

        <div className="section-heading process-heading">

          <div className="section-label">
            <span></span>
            HOW IT WORKS
          </div>

          <h2>
            From idea
            <span> to finished product.</span>
          </h2>

          <p>
            A simple and transparent process designed to keep your project
            moving from the first conversation to final delivery.
          </p>

        </div>

        <div className="process-grid">

          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>

              <div className="process-top">
                <span className="process-number">
                  {step.number}
                </span>

                <span className="process-line"></span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;