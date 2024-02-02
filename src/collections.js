import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
function Collections() {
    return (
        <>
            <div className="collection">
    <Container>
      <Row>
      <Col lg={8} className="lg-6 mx-auto">
          <div className="site-heading text-center">
          <span class="title-tagline">Collection</span>
          <h2 class="text-title text-black">Our Upcoming Events</h2>
          <p className="text-black" style={{fontSize:"16px"}}>It is a long established fact that a reader will be distracted</p>
          </div>
        </Col> 
      </Row>
      <Row>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i14.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i15.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i16.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
    
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i17.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i18.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
        <Col className="md-4" sm={12} md={6} lg={4}>
            <div className="c-item flex">
              <div className="c-img flex">
              <img src={require('./img/i19.jpg')} className="img"></img>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  </div>
        </>
    )
}

export default Collections