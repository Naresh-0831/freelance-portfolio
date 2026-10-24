
import "../styles/legal.css";

function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back-link">
          ← Back to portfolio
        </a>

        <header className="legal-header">
          <p className="legal-eyebrow">LEGAL</p>
          <h1>Privacy Policy</h1>
          <p>
            How information may be handled when you visit this
            portfolio or contact me about a project.
          </p>
          <span className="legal-updated">
            Last updated: October 24, 2026
          </span>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy applies to the personal portfolio
              operated by M Naresh. It describes how personal
              information may be collected, used, stored, and
              shared when you visit this website or make an enquiry.
            </p>
            <p>
              The information actually processed depends on the
              features you use, the configuration of the website,
              and the services involved in delivering it.
            </p>
          </section>

          <section>
            <h2>2. Information You May Provide</h2>
            <p>
              If you contact me through a website form, email, or
              WhatsApp, you may choose to provide information such
              as your name, email address, phone number, business
              details, project requirements, and the contents of
              your message.
            </p>
            <p>
              Please avoid sending passwords, financial account
              details, sensitive personal information, or other
              confidential data that is not needed for your enquiry.
            </p>
          </section>

          <section>
            <h2>3. How Information May Be Used</h2>
            <p>
              Information you provide may be used, as appropriate,
              to:
            </p>
            <ul>
              <li>Respond to enquiries and messages.</li>
              <li>Understand project requirements and prepare quotations.</li>
              <li>Communicate about potential or ongoing work.</li>
              <li>Maintain website security and troubleshoot issues.</li>
              <li>Meet applicable legal obligations.</li>
            </ul>
            <p>
              Information will not be used for an unrelated purpose
              where applicable law requires additional permission
              or another legal basis.
            </p>
          </section>

          <section>
            <h2>4. Contact Forms, Email, and WhatsApp</h2>
            <p>
              Messages submitted through the contact form may be
              processed by the website's configured form handler,
              server, or email service. The exact providers depend
              on the implementation in use.
            </p>
            <p>
              If you choose to contact me by email or WhatsApp,
              your communication will also be handled by the
              relevant service provider under its own policies.
              Please review those policies before sharing
              personal information.
            </p>
          </section>

          <section>
            <h2>5. Cookies, Analytics, and Technical Logs</h2>
            <p>
              The use of analytics tools, advertising trackers,
              and non-essential cookies on this website has not
              yet been confirmed. The deployed website should
              be checked before this policy is finalised.
            </p>
            <p>
              Hosting or infrastructure providers may process
              technical information, such as IP addresses,
              browser details, request timestamps, and server
              logs, depending on their configuration and
              retention practices.
            </p>
            <p>
              If analytics, cookies, or other tracking tools are
              enabled, this policy should be updated to identify
              the relevant tools, their purposes, and applicable
              visitor choices or consent mechanisms.
            </p>
          </section>

          <section>
            <h2>6. Sharing and Service Providers</h2>
            <p>
              Personal information may be processed by service
              providers where reasonably necessary to operate
              the website, deliver messages, host the site,
              protect its security, or support an agreed project.
            </p>
            <p>
              Information may also be disclosed where required
              by law or where necessary to establish, exercise,
              or defend legal claims, subject to applicable law.
              This does not mean personal information is
              automatically shared with every provider.
            </p>
          </section>

          <section>
            <h2>7. Retention and Security</h2>
            <p>
              Information should be retained only for as long
              as reasonably necessary for the purpose for which
              it was collected, including legitimate business,
              security, and legal requirements.
            </p>
            <p>
              Reasonable measures should be used to protect
              personal information. However, no method of
              transmission or electronic storage can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2>8. Your Choices and Rights</h2>
            <p>
              Depending on applicable law, you may be entitled
              to request access to, correction of, or deletion
              of personal information, or to exercise other
              privacy rights.
            </p>
            <p>
              You can contact me using the details below to
              make a privacy-related request. I may need to
              verify your identity before acting on it, and
              some information may need to be retained where
              the law permits or requires it.
            </p>
          </section>

          <section>
            <h2>9. Children's Privacy</h2>
            <p>
              This portfolio is intended for people seeking
              professional information or digital services.
              It is not designed to knowingly collect personal
              information from children. If you believe a
              child has provided personal information through
              this website, please contact me so the matter
              can be reviewed.
            </p>
          </section>

          <section>
            <h2>10. External Websites</h2>
            <p>
              This website may contain links to third-party
              platforms, including LinkedIn, GitHub, and
              WhatsApp. Their privacy practices are governed
              by their own policies, not this page.
            </p>
          </section>

          <section>
            <h2>11. Policy Updates</h2>
            <p>
              This policy may be revised as website features,
              service providers, or applicable requirements
              change. The updated version and date will be
              published on this page.
            </p>
          </section>

          <section>
            <h2>12. Contact About Privacy</h2>
            <p>
              For privacy questions or requests, contact:
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
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          <a href="/">Return to Home</a>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
