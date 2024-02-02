import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import './App.css';
import Header from './Header';
import Aboutus from './Aboutus';
import Exibition from './Exibition';
import Collections from './collections';
import myimg1 from './img/m1.SVG';
import Blogus from './Blogus';
import Fotter from './fotter';

const Option = {
  responsive: {
    0: {
      items: 3,
      dots: false,
      nav: false,
      autoplay: true,
      autoplayTimeout: 1000,
    },
    600: {
      items: 2,
      dote: false,
      autoplay: true,
      autoplayTimeout: 1000,
    },
    1000: {
      items: 6,
      dots: false,
      nav: false,
      autoplay: true,
      autoplayTimeout: 1000,
    }
  }
}

function Home() {
  return (
    <>
      <Header></Header>
      {/* ===================================slider============================= */}
      <Carousel>
        <Carousel.Item >
          <img src={require('./img/slider-1.jpg')}></img>
          <Carousel.Caption className="txt">
            <h3 className="main-head">Welcome to muzex!</h3>
            <h1>Muzex Are The World's Leading Musem Of Art</h1>
            <p style={{ fontSize: "16px" }}>
              There are many variations of passages orem psum available but the majority have
              suffered alteration in some form by injected humour or randomised words which
              don't look even making it look like readable slightly believable.
            </p>
            <Button className="btn p-2 me-3">About More<FaArrowRight></FaArrowRight></Button>
            <Button className="btn1 p-2">Lern More<FaArrowRight></FaArrowRight></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./img/slider-2.jpg')}></img>
          <Carousel.Caption className="txt" >
            <h3 className="main-head">Welcome to muzex!</h3>
            <h1>Muzex Are The World's Leading Musem Of Art</h1>
            <p style={{ fontSize: "16px" }}>
              There are many variations of passages orem psum available but the majority have
              suffered alteration in some form by injected humour or randomised words which
              don't look even making it look like readable slightly believable.
            </p>
            <Button className="btn p-2 me-3">About More<FaArrowRight></FaArrowRight></Button>
            <Button className="btn1 p-2">Lern More<FaArrowRight></FaArrowRight></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./img/slider-3.jpg')}></img>
          <Carousel.Caption className="txt">
            <h3 className="main-head ">Welcome to muzex!</h3>
            <h1>Muzex Are The World's Leading Musem Of Art</h1>
            <p style={{ fontSize: "16px" }}>
              There are many variations of passages orem psum available but the majority have
              suffered alteration in some form by injected humour or randomised words which
              don't look even making it look like readable slightly believable.
            </p>
            <Button className="btn p-2 me-3">About More<FaArrowRight></FaArrowRight></Button>
            <Button className="btn1 p-2">Lern More<FaArrowRight></FaArrowRight></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* ============================About us================ */}
      <Aboutus></Aboutus>
      {/* =============================Exibition=============== */}
      <Exibition></Exibition>
      {/* =================================Collection============== */}
      <Collections></Collections>
      {/*==================== Counting==================== */}
      <div className="count">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <div className="content-box m-3">
                <div className="icon p-2">
                  <img src={require('./img/i20.SVG')} className="img"></img>
                </div>
                <div className="count">1200</div>
                <h6 class="title">+ Exhibition Held </h6>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className="content-box m-3">
                <div className="icon p-2">
                  <img src={require('./img/i21.SVG')} className="img"></img>
                </div>
                <div className="count">1200</div>
                <h6 class="title">+ Daily visitors</h6>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3} >
              <div className="content-box m-3">
                <div className="icon p-2">
                  <img src={require('./img/i22.SVG')} className="img"></img>
                </div>
                <div className="count">1200</div>
                <h6 class="title">+ Exhibition Held </h6>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className="content-box m-3 ">
                <div className="icon p-2">
                  <img src={require('./img/i23.SVG')} className="img"></img>
                </div>
                <div className="count">1200</div>
                <h6 class="title">+ Exhibition Held </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ======================= Mrmbership=============== */}
      <div className="membership">
        <Container>
          <Row>
            <Col lg={8} className="lg-6 mx-auto">
              <div className="site-heading text-center">
                <span class="title-tagline">Membership</span>
                <h2 class="text-title">Our Membership Plan</h2>
                <p style={{ fontSize: "16px" }}>It is a long established fact that a reader will be distracted</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="membership-item">
                <div className="membership-header">
                  <div className="membership-icon">
                    <img src={require('./img/m1.SVG')}></img>
                  </div>
                  <div className="membership-content">
                    <h4 style={{ fontSize: "20px" }}>Individual</h4>
                    <h1 class="membership-amount" style={{ fontSize: "40px" }}>$59.66</h1>
                  </div>
                </div>
                <div class="membership-feature">
                  <ul>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>1 Adult Person Allow</li>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>4 Children Allow</li>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>2 Guests Each Visit</li>
                  </ul>
                  <a href="#" class="btn" style={{ color: "white" }}>Join Now <i class="far fa-arrow-right"></i></a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="membership-item">
                <div className="membership-header">
                  <div className="membership-icon">
                    <img src={require('./img/m1.SVG')}></img>
                  </div>
                  <div className="membership-content">
                    <h4 style={{ fontSize: "20px" }}>Students</h4>
                    <h1 class="membership-amount" style={{ fontSize: "40px" }}>$99.25</h1>
                  </div>
                </div>
                <div class="membership-feature">
                  <ul>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>1 Adult Person Allow</li>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>4 Children Allow</li>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>2 Guests Each Visit</li>
                  </ul>
                  <a href="#" class="btn" style={{ color: "white" }}>Join Now <i class="far fa-arrow-right"></i></a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="membership-item">
                <div className="membership-header">
                  <div className="membership-icon">
                    <img src={require('./img/m1.SVG')}></img>
                  </div>
                  <div className="membership-content">
                    <h4 style={{ fontSize: "20px" }}>Household</h4>
                    <h1 class="membership-amount" style={{ fontSize: "40px" }}>$120.78</h1>
                  </div>
                </div>
                <div class="membership-feature">
                  <ul>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>1 Adult Person Allow</li>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>4 Children Allow</li>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>2 Guests Each Visit</li>
                  </ul>
                  <a href="#" class="btn" style={{ color: "white" }}>Join Now <i class="far fa-arrow-right"></i></a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="membership-item">
                <div className="membership-header">
                  <div className="membership-icon">
                    <img src={require('./img/m1.SVG')}></img>
                  </div>
                  <div className="membership-content">
                    <h4 style={{ fontSize: "20px" }}>VIP Pass</h4>
                    <h1 class="membership-amount" style={{ fontSize: "40px" }}>$150.96</h1>
                  </div>
                </div>
                <div class="membership-feature">
                  <ul>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>1 Adult Person Allow</li>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>4 Children Allow</li>
                    <li style={{ fontSize: "16px" }}><FaCheck className="me-2"></FaCheck>2 Guests Each Visit</li>
                  </ul>
                  <a href="#" class="btn" style={{ color: "white" }}>Join Now <i class="far fa-arrow-right"></i></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ===========================video===================== */}
      <section>
        <div className="video">
          <div className="video-icon">
            <div className="video-area">
              <a className="video-btn">
                <FaPlay></FaPlay>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ==========================Blog================= */}
      <Blogus></Blogus>
      {/* ========================Slider==================== */}
      <div className="slider">
        <Container>
          <OwlCarousel className='owl-theme'   {...Option} loop margin={10} nav>
            <div class='item'>
              <img src={require('./img/i28.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./img/i29.jpg')}></img>
            </div>
            <div class='item'>
              <img src={require('./img/i28.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./img/i29.jpg')}></img>
            </div>
            <div class='item'>
              <img src={require('./img/i28.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./img/i29.jpg')}></img>
            </div>
            <div class='item'>
              <img src={require('./img/i28.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./img/i29.jpg')}></img>
            </div>
            <div class='item'>
              <img src={require('./img/i28.png')}></img>
            </div>
            <div class='item'>
              <img src={require('./img/i29.jpg')}></img>
            </div>
          </OwlCarousel>
        </Container>
      </div>

      {/* ========================Fotter============== */}
      <Fotter></Fotter>
    </>
  );
}

export default Home;