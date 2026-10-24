
import "../styles/legal.css";

function TermsAndConditions() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back-link">
          ← Back to portfolio
        </a>

        <header className="legal-header">
          <p className="legal-eyebrow">LEGAL</p>
          <h1>Terms &amp; Conditions</h1>
          <p>
            Please read these terms before using this website or
            enquiring about freelance services.
          </p>
          <span className="legal-updated">
            Last updated: October 24, 2026
          </span>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              This website is operated by M Naresh as a personal
              portfolio to present professional skills, projects,
              and digital services. In these terms, "I", "me", and
              "my" refer to M Naresh.
            </p>
            <p>
              By accessing or using this website, you agree to these
              Terms &amp; Conditions. If you do not agree, please
              discontinue using the website.
            </p>
          </section>

          <section>
            <h2>2. Website and Services</h2>
            <p>
              This portfolio may describe website development, web
              applications, website maintenance, AI-related
              solutions, and workflow automation services.
            </p>
            <p>
              The availability, scope, cost, timeline, and
              deliverables of any service are subject to separate
              discussion and written agreement. An enquiry does not
              create a client relationship or guarantee that a
              project will be accepted.
            </p>
            <p>
              Where I collaborate with other professionals or a
              project team, responsibilities and deliverables will
              be clarified for the relevant engagement.
            </p>
          </section>

          <section>
            <h2>3. Project Agreements and Payments</h2>
            <p>
              Before work begins, the client and I should agree on
              the relevant project requirements, deliverables,
              fees, payment schedule, milestones, revisions,
              maintenance arrangements, and other applicable
              conditions.
            </p>
            <p>
              Any payment, cancellation, refund, or change-of-scope
              terms will be determined by the agreement for that
              project. These website terms do not establish a
              universal price or payment policy.
            </p>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, the original text, branding,
              design, and materials on this portfolio belong to
              their respective owners and must not be copied,
              republished, or commercially reused without
              appropriate permission.
            </p>
            <p>
              Ownership and permitted use of code, designs, and
              other deliverables created for a client will be
              determined by the applicable project agreement.
              Third-party libraries, assets, and tools remain
              subject to their own licences and terms.
            </p>
          </section>

          <section>
            <h2>5. Acceptable Use</h2>
            <p>
              You must not misuse this website, attempt to gain
              unauthorised access to its systems, interfere with
              its operation, introduce malicious code, or use
              website content for unlawful purposes.
            </p>
          </section>

          <section>
            <h2>6. Portfolio Projects and Information</h2>
            <p>
              Project descriptions and demonstrations are provided
              to explain my work and capabilities. Some projects
              may involve collaboration, prototypes, demonstrations,
              or planned features. Their descriptions should not
              be interpreted as a guarantee that every feature is
              currently available or production-ready.
            </p>
            <p>
              Although I aim to keep information accurate, I do not
              guarantee that every description is complete,
              current, or free from errors.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Services and Links</h2>
            <p>
              This website may link to services such as GitHub,
              LinkedIn, WhatsApp, hosting providers, or other
              external websites. These services operate under
              their own terms and privacy practices. I do not
              control external websites and am not responsible
              for their independent content or policies.
            </p>
          </section>

          <section>
            <h2>8. Disclaimer and Liability</h2>
            <p>
              This portfolio is provided on an "as available"
              basis. To the extent permitted by applicable law,
              I do not guarantee uninterrupted website
              availability or that the website will always be
              free from errors.
            </p>
            <p>
              Nothing in these terms excludes or limits any
              liability or right that cannot lawfully be excluded
              or limited. Any responsibility relating to a paid
              project will also be subject to its specific
              agreement and applicable law.
            </p>
          </section>

          <section>
            <h2>9. Privacy</h2>
            <p>
              Your use of this website is also subject to the
              <a href="/privacy-policy"> Privacy Policy</a>,
              which explains how personal information may be
              handled.
            </p>
          </section>

          <section>
            <h2>10. Changes to These Terms</h2>
            <p>
              These terms may be updated when the website,
              services, or applicable requirements change.
              The revised version will be published on this
              page with an updated date.
            </p>
            <p>
              Any separate project agreement will continue to
              govern that engagement according to its own terms.
            </p>
          </section>

          <section>
            <h2>11. Applicable Law</h2>
            <p>
              These terms are subject to applicable laws.
              Any legal interpretation or dispute will be
              handled in accordance with the laws and procedures
              that apply to the circumstances.
            </p>
          </section>

          <section>
            <h2>12. Contact</h2>
            <p>
              For questions about these terms, contact:
            </p>
            <p>
              <strong>M Naresh</strong>
              <br />
              <a href="mailto:murugannaresh31@gmail.com">
                murugannaresh31@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="legal-footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/">Return to Home</a>
        </div>
      </div>
    </main>
  );
}

export default TermsAndConditions;
