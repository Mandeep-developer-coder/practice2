import { assets } from "../assets/assets";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-light text-secondary pt-5 px-3 px-md-5">
      <Container>
        <Row className="gy-4 justify-content-between">
        
          {/* Col 1: Logo + Description + Social */}
          <Col xs={12} md={6} lg={3}>
            <img src={assets.logo} alt="Logo" height="40" className="mb-3" />
            <p className="small">
              Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#"><FaInstagram size={20} className="text-dark" /></a>
              <a href="#"><FaFacebookF size={20} className="text-dark" /></a>
              <a href="#"><FaTwitter size={20} className="text-dark" /></a>
              <a href="#"><FaLinkedinIn size={20} className="text-dark" /></a>
            </div>
          </Col>

          {/* Col 2: Quick Links */}
          <Col xs={6} md={3}>
            <h5 className="text-dark mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-secondary text-decoration-none">Home</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Browse Cars</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">List Your Car</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">About Us</a></li>
            </ul>
          </Col>

          {/* Col 3: Resources */}
          <Col xs={6} md={3}>
            <h5 className="text-dark mb-3">Resources</h5>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-secondary text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Terms of Service</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Insurance</a></li>
            </ul>
          </Col>

          {/* Col 4: Contact */}
          <Col xs={12} md={6} lg={3}>
            <h5 className="text-dark mb-3">Contact</h5>
            <p className="small mb-1">1234 Luxury Drive</p>
            <p className="small mb-1">San Francisco, CA 94107</p>
            <p className="small mb-1">+1 234 567890</p>
            <p className="small mb-0">info@example.com</p>
          </Col>
        </Row>

        <hr className="my-4" />

        {/* Bottom Line */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted small pb-3">
          <p className="mb-2 mb-md-0">© {new Date().getFullYear()} CarRental. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-secondary text-decoration-none">Privacy</a>
            <a href="#" className="text-secondary text-decoration-none">Terms</a>
            <a href="#" className="text-secondary text-decoration-none">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
