import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '/cargologo.png'; 
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3}>
          <img src={logo} alt="Crossover-cargo Logo" className="logo-img" />
            <p className="footer-description">
              We are a representative logistics operator providing a full range of services in the sphere of customs cargo and transportation worldwide.
            </p>
          </Col>

          <Col md={2}>
            <h5 className="footer-sub" style={{color:'#dc3545', fontWeight:800}}>PRODUCTS</h5>
            <ul className="footer-list">
              <li>Track Shipment</li>
              <li>Inventory Control</li>
              <li>Pick with your mobile device</li>
              <li>Analytics and forecasting</li>
              <li>Marketplace</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="footer-sub" style={{color:'#dc3545', fontWeight:800}}>INTEGRATION</h5>
            <ul className="footer-list">
              <li>Shipping integrations</li>
              <li>Ecommerce integrations</li>
              <li>Marketplace integrations</li>
              <li>All integrations</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="footer-sub" style={{color:'#dc3545', fontWeight:800}}>COMPANY</h5>
            <ul className="footer-list">
              <li>About</li>
              <li>Contact Us</li>
              {/* <li>API & developer</li> */}
              <li>Careers</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="footer-sub" style={{color:'#dc3545', fontWeight:800}}>CONTACT</h5>
            <ul className="footer-list">
              <li>+1 5473 398 475</li>
              <li>Support@crossovercargo.com</li>
              <li>www.crossovercargo.com</li>
              {/* <li>Webinars</li> */}
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col md={12}>
          <p>Support@crossovercargo.com</p>

            <p className="footer-copyright">
              © Crossovercargo Courier. All rights reserved.
            </p>
            
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
