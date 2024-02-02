import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'react-bootstrap';

function Blogus() {
    return (
        <div className="blog">
  <Container>
    <Row>
      <Col>
      <div className="site-heading text-center">
          <span class="title-tagline">OUR BLOG</span>
          <h2 class="text-title text-black">Latest News & Blog</h2>
          <p className="text-black" style={{fontSize:"16px"}}>It is a long established fact that a reader will be distracted</p>
          </div>
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={6} lg={4}>
        <div className="sub-list flex">
          <div className="content_box">
            <div className="blog-img">
            <img src={require('./img/i25.jpg')} style={{width:"100%",height:"100%"}}></img>
            <div className="list-title pt-2">There Are Many Variations Of The Passages Available Suffered</div>
            <p className="p" style={{fontSize:"16px"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <Button className="btn  d-md-none d-xl-block">Buy Ticket</Button>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <div className="sub-list flex">
          <div className="content_box">
            <div className="blog-img">
            <img src={require('./img/i26.jpg')} style={{width:"100%"}}></img>
            <div className="list-title">There Are Many Variations Of The Passages Available Suffered</div>
            <p style={{fontSize:"16px"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <Button className="btn  d-md-none d-xl-block">Buy Ticket</Button>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <div className="sub-list flex">
          <div className="content_box">
            <div className="blog-img">
            <img src={require('./img/i27.jpg')} style={{width:"100%"}}></img>
            <div className="list-title">There Are Many Variations Of The Passages Available Suffered</div>
            <p style={{fontSize:"16px"}}>There are many variations of passages of Lcdorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <Button className="btn  d-md-none d-xl-block">Buy Ticket</Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>
    )
}

export default Blogus