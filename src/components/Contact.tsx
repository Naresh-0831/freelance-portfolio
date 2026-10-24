import "../styles/contact.css";

function Contact() {
const email = "[naresh.digitalservices@gmail.com](mailto:naresh.digitalservices@gmail.com)";
const whatsapp = "918610681031";

const emailSubject = encodeURIComponent("Project Inquiry");

return <section className="contact" id="contact"> <div className="container"> <div className="contact-panel"> <div className="contact-label"> <span className="contact-label-dot"></span>
HAVE A PROJECT IN MIND? </div>

      <h2 className="contact-title">
        Let's build something
        <span> meaningful together.</span>
      </h2>

      <p className="contact-description">
        Have an idea, a business challenge, or a project you want to bring
        to life? 
        Tell me about it. Let's explore how we can make it happen.
      </p>

      <div className="contact-actions">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            email
          )}&su=${emailSubject}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-primary-btn"
        >
           Gmail <span>↗</span>
        </a>

<a
  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
    "Hello Naresh, I came across your portfolio and I'm interested in discussing a project with you. I have an idea I'd like to share and would love to know how we can work together. Please let me know when you're available to discuss the details. Thank you!"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="contact-secondary-btn"
>
  WhatsApp <span>↗</span>
</a>

      </div>

        
      </div>

      
    </div>

</section>
}

export default Contact;
