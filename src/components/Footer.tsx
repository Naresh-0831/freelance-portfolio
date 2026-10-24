
import "../styles/footer.css";
import logo from "../assets/mn-logo.png";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand on the left */}
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo-link"
              aria-label="Back to home"
            >
              <img
                src={logo}
                alt="MN logo"
                className="footer-logo"
              />
            </a>

            <p className="footer-tagline">
              <span className="footer-tagline-dot"></span>
              Digital Solutions
            </p>
          </div>

          {/* Social and legal links on the right */}
          <div className="footer-links">
           
<div className="footer-socials">
  
  <a
    href="https://linkedin.com/in/m-naresh"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.97V9.16h2.96v9.54ZM6.45 7.86a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.26 10.84h-2.96v-4.64c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.72H9.45V9.16h2.84v1.3h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.58 1.97 3.58 4.53v5.26Z" />
    </svg>
    <span>LinkedIn</span>
  </a>

  <a
    href="https://www.instagram.com/grow.withmn?dlrf=MTd6ZW11azExN3A3OQ=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
    <span>Instagram</span>
  </a>
  <a
    href="https://github.com/Naresh-0831"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.83 2.05 3.48 1.56.1-.73.4-1.23.71-1.52-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.67.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
    <span>GitHub</span>
  </a>

</div>


            <div className="footer-legal">
              <a href="/terms-and-conditions">
                Terms &amp; Conditions
              </a>

              <a href="/privacy-policy">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and back-to-top */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} M Naresh. All rights reserved.
          </p>

          <a href="#home" className="footer-back-top">
            Back to top 
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;