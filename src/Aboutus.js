import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {FaCheck,FaArrowRight} from "react-icons/fa6";
function Aboutus() {
    return (
        <>
             <div className="about-area">
    <Container>
      <Row>
        <Col className="left ms-5 mb-5">
          <div className="about-left ">
            <div className="about-img">
            <img src={require('./img/i5.jpg')} className="img1"></img>
            <img src={require('./img/i6.jpg')} className="img2"></img>
            </div>
          </div>
        </Col>
        <Col >
          <div className="about-right ms-5">
              <div className="heading">
              <span class="site-title">About Us</span>
              <h3 class="main-title">The World's Lead Museum of Histrory</h3>
              </div>
              <p className="about-text" style={{fontSize:"16px"}}>
                  There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or randomised words which don't
                  look even slightly believable.</p>
              <div className="about-topic">
                <ul className="about-list">
                  <li style={{fontSize:"16px"}}><FaCheck className="me-2 listing"></FaCheck>At vero eos et accusamus et iusto odio</li>
                  <li style={{fontSize:"16px"}}><FaCheck className="me-2 listing"></FaCheck>Established fact that a reader will be distracted</li>
                  <li style={{fontSize:"16px"}}><FaCheck className="me-2 listing"></FaCheck>Sed ut perspiciatis unde omnis iste natus sit</li>
                </ul>
              </div>
           
          </div>
        </Col>
      </Row>
    </Container>
  </div>
        </>
    )
}

export default Aboutus