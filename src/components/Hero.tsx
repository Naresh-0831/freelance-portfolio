
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <span className="hero-dot"></span>
            AVAILABLE FOR FREELANCE
          </div>

          <h1>
            I build digital products
            <span> that move businesses forward.</span>
          </h1>

          <p className="hero-description">
            I create modern websites, web applications, AI-powered solutions,
            and automation systems that help businesses grow and work smarter.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary-btn">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Let's Work Together
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>DIGITAL SOLUTIONS</span>
              
            </div>

            <div className="hero-card-title">
              From idea
              <br />
              to <span>impact.</span>
            </div>

            <p className="hero-card-description">
              Digital experiences designed to move your business forward.
            </p>

            <div className="hero-card-line"></div>

            <div className="hero-card-services">
              <a href="#services" className="hero-card-service">
                <span className="hero-service-icon">↗</span>
                <span className="hero-service-text">
                  <strong>Web Development</strong>
                  <small>Websites & applications</small>
                </span>
                <span className="hero-service-arrow">↗</span>
              </a>

              <a href="#services" className="hero-card-service">
                <span className="hero-service-icon">✳</span>
                <span className="hero-service-text">
                  <strong>AI Solutions</strong>
                  <small>Intelligent digital experiences</small>
                </span>
                <span className="hero-service-arrow">↗</span>
              </a>

              <a href="#services" className="hero-card-service">
                <span className="hero-service-icon">⌘</span>
                <span className="hero-service-text">
                  <strong>Automation</strong>
                  <small>Smarter connected workflows</small>
                </span>
                <span className="hero-service-arrow">↗</span>
              </a>
            </div>

            <div className="hero-card-line"></div>

            <div className="hero-card-bottom">
              <span>DESIGN × CODE × AI</span>
              <span className="hero-card-status">
                <span></span>
                BUILT WITH PURPOSE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
