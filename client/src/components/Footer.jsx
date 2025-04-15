import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span>MEMO</span>TAG
            </div>
            <p className="footer-description">Revolutionizing dementia care with AI-powered wearable technology.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                f
              </a>
              <a href="#" className="social-link">
                t
              </a>
              <a href="#" className="social-link">
                in
              </a>
              <a href="#" className="social-link">
                ig
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Product</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="#">Features</Link>
              </li>
              <li className="footer-link">
                <Link to="#">Pricing</Link>
              </li>
              <li className="footer-link">
                <Link to="#">Case Studies</Link>
              </li>
              <li className="footer-link">
                <Link to="#">Testimonials</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="#">About Us</Link>
              </li>
              <li className="footer-link">
                <Link to="#">Careers</Link>
              </li>
              <li className="footer-link">
                <Link to="#">Press</Link>
              </li>
              <li className="footer-link">
                <Link to="#">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="mailto:info@memotag.io">info@memotag.io</a>
              </li>
              <li className="footer-link">
                <Link to="#">Support</Link>
              </li>
              <li className="footer-link">
                <Link to="#">Sales</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} MemoTag. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
