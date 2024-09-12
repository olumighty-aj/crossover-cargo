import { Container, Row, Col } from 'react-bootstrap';
import amazon from '/amazon.png';
import expe from '/expe.png';
import booking from '/bookings.png';
import xia from '/xia.png';
import intel from '/intel.png';

import './partner.css';

export const Partners = () => {
  return (
    <Container fluid className="mt-4 cont">
     <h5>Our Official Partners</h5>
      <Row className="justify-content-center">
     
        <Col md={2} sm={4} className="text-center mb-3">
          <img src={booking} alt="Booking.com" className="img-fluid" />
        </Col>
        <Col md={2} sm={4} className="text-center mb-3">
          <img src={expe} alt="Expedia" className="img-fluid" />
        </Col>
        <Col md={2} sm={4} className="text-center mb-3">
          <img src={amazon} alt="Amazon" className="img-fluid" />
        </Col>
        <Col md={2} sm={4} className="text-center mb-3">
          <img src={xia} alt="Xiaomi" className="img-fluid" />
        </Col>
        <Col md={2} sm={4} className="text-center mb-3">
          <img src={intel} alt="Intel" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  )
}
