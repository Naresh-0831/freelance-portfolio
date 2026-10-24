
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "../styles/navbar.css";

function Navbar() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicKey
      );

      setStatus("success");
      setFormData({
        from_name: "",
        from_email: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeInquiry = () => {
    if (isSubmitting) return;

    setIsInquiryOpen(false);
    setStatus("idle");
  };

  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">
          <a href="#home" className="navbar-logo">
            M Naresh<span></span>
          </a>

          <nav className="navbar-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className="navbar-cta"
            onClick={() => setIsInquiryOpen(true)}
          >
            Let's Talk
          </button>
        </div>
      </header>

      {isInquiryOpen && (
        <div
          className="inquiry-overlay"
          onClick={closeInquiry}
        >
          <div
            className="inquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="inquiry-close"
              aria-label="Close inquiry form"
              onClick={closeInquiry}
              disabled={isSubmitting}
            >
              &times;
            </button>

            <p className="inquiry-eyebrow">PROJECT INQUIRY</p>

            <h2 id="inquiry-title">
              Let's build something great.
            </h2>

            <p className="inquiry-description">
              Tell me about your project, and let's discuss how I can help.
            </p>

            {status === "success" ? (
              <div className="inquiry-feedback inquiry-success" role="status">
                <h3>Thank you for your inquiry!</h3>
                <p>
                  Your message has been sent successfully. I'll review your
                  project details and get back to you.
                </p>
                <button
                  type="button"
                  className="inquiry-submit"
                  onClick={closeInquiry}
                >
                  Close
                </button>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="inquiry-field">
                  <label htmlFor="from_name">Full name *</label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    placeholder="Your name"
                    value={formData.from_name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="inquiry-field">
                  <label htmlFor="from_email">Email address *</label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.from_email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="inquiry-field">
                  <label htmlFor="service">Service required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="Full Stack Development">
                      Full Stack Development
                    </option>
                    <option value="AI Solutions">
                      AI Solutions
                    </option>
                    <option value="Workflow Automation">
                      Workflow Automation
                    </option>
                    <option value="Website Redesign">
                      Website Redesign
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="inquiry-field">
                  <label htmlFor="budget">Estimated budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select your budget</option>
                    <option value="Under ₹5,000">Under ₹5,000</option>
                    <option value="₹5,000–₹15,000">₹5,000–₹15,000</option>
                    <option value="₹15,000–₹30,000">₹15,000–₹30,000</option>
                    <option value="₹30,000+">₹30,000+</option>
                    <option value="Not decided yet">Not decided yet</option>
                  </select>
                </div>

                <div className="inquiry-field">
                  <label htmlFor="timeline">Expected timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select a timeline</option>
                    <option value="As soon as possible">
                      As soon as possible
                    </option>
                    <option value="Within 1–2 weeks">
                      Within 1–2 weeks
                    </option>
                    <option value="Within a month">
                      Within a month
                    </option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="inquiry-field">
                  <label htmlFor="message">Tell me about your project *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="What would you like to build?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="inquiry-feedback inquiry-error" role="alert">
                    Your message couldn't be sent. Please try again in a
                    moment.
                  </p>
                )}

                <button
                  type="submit"
                  className="inquiry-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending inquiry..." : "Send Inquiry"}
                </button>

                <p className="inquiry-privacy">
                  Your details will only be used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;