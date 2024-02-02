
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';

function Exibition() {
    return (
    <div className="e-area">
    <Container>
      <Row>
        <Col lg={8}  className="lg-6 mx-auto">
          <div className="site-heading text-center">
          <span class="title-tagline">Exhibitions</span>
          <h2 class="text-title text-white">Ongoing Exhibitions</h2>
          <p className="text-white" style={{fontSize:"16px"}}>It is a long established fact that a reader will be distracted</p>
          </div>
        </Col>
      </Row>
      <Row className="flex exibition">
        <Col className="md-6 lg-4 first-img" sm={12} md={6} lg={4}>
          <div className="e-item ">
            <div className="e-img">
            <img src={require('./img/i7.jpg')} className="img2"></img>
            <div className="e-content">
              <div className="e-meta" style={{fontSize:"16px"}}>Exibition</div>
              <div className="e-title">The Exhibits Cover All Time Of The Egyptian Civilization</div>
              <div className="e-data" style={{fontSize:"16px"}}>10 March 2023 - 15 March 2023</div>
            </div>
          </div>
          </div>
        </Col>
        <Col className="md-6 lg-4" sm={12} md={6} lg={4}>
        <div className="e-item mt-lg-5 justify-content-center">
            <div className="e-img">
            <img src={require('./img/i8.jpg')} className="img2"></img>
            <div className="e-content">
              <div className="e-meta" style={{fontSize:"16px"}}>Exibition</div>
              <div className="e-title">The Exhibits Cover All Time Of The Egyptian Civilization</div>
              <div className="e-data" style={{fontSize:"16px"}}>10 March 2023 - 15 March 2023</div>
            </div>
          </div>
          </div>
        </Col>
        <Col className="md-6 lg-4" sm={12} md={6} lg={4}>
        <div className="e-item justify-content-center">
            <div className="e-img">
            <img src={require('./img/i9.jpg')} className="img2"></img>
            <div className="e-content">
              <div className="e-meta" style={{fontSize:"16px"}}>Exibition</div>
              <div className="e-title">The Exhibits Cover All Time Of The Egyptian Civilization</div>
              <div className="e-data" style={{fontSize:"16px"}}>10 March 2023 - 15 March 2023</div>
            </div>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    )
}

export default Exibition