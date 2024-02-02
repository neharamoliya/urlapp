import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Aboutus from './Aboutus'
import Fotter from './fotter';
import Collections from './collections';


const Option={
    responsive:{
      0:{
        items:3,
        dots:false,
        nav:false,
        autoplay:true,
        autoplayTimeout:1000,
      },
      600:{
        items:2,
        dote:false,
        autoplay:true,
        autoplayTimeout:1000,
      },
      1000:{
        items:6,
        dots:false,
        nav:false,
        autoplay:true,
        autoplayTimeout:1000,
      }
      }
    }
function About() {
    return (
    <>
    <Header></Header>
{/* ===================slider===================== */}
<div class="site-breadcrumb">
            <div className="img-item justify-content-center text-center">
            About Us
            <div className="sub-name">Home // About Us</div>
            </div>
        </div>
{/* ==============about-area============== */}
        <Aboutus></Aboutus>
{/* ================Count Area=============== */}
<div className="count" style={{top:"150px"}}>
    <Container>
      <Row>
        <Col sm={12} md={6} lg={3}>
          <div className="content-box m-3">
              <div className="icon">
              <img src={require('./img/i20.SVG')} className="img"></img>
              </div>
              <div className="count">1200</div>
              <h6 class="title">+ Exhibition Held </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
        <div className="content-box m-3">
              <div className="icon">
              <img src={require('./img/i21.SVG')} className="img"></img>
              </div>
              <div className="count">1200</div>
              <h6 class="title">+ Daily visitors</h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={3} >
        <div className="content-box m-3">
              <div className="icon">
              <img src={require('./img/i22.SVG')} className="img"></img>
              </div>
              <div className="count">1200</div>
              <h6 class="title">+ Exhibition Held </h6>
          </div>
        </Col>
        <Col sm={12} md={6} lg={3}>
        <div className="content-box m-3 ">
              <div className="icon">
              <img src={require('./img/i23.SVG')} className="img"></img>
              </div>
              <div className="count">1200</div>
              <h6 class="title">+ Exhibition Held </h6>
          </div>
        </Col> 
      </Row>
    </Container>
  </div>
{/* =======================AUTHORITY=================== */}
<div className="AUTHORITY">
      <Container>
      <Row>
        <Col lg={8}  className="lg-6 mx-auto">
          <div className="site-heading text-center">
          <span class="title-tagline">AUTHORITY</span>
          <h2 class="text-title">Meet Our Authority</h2>
          <p style={{fontSize:"16px"}}>It is a long established fact that a reader will be distracted</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="main-authority flex">
            <div className="sub-authority flex">
            <div className="content_box2">
                <div className="image-authority">
                <img src={require('./img/a1.jpg')}></img>
                <div class="team-content">
                    <div class="team-bio">
                        <h5>Chad Smith</h5>
                        <span>Administrator</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Col>
        <Col>
        <div className="main-authority flex">
            <div className="sub-authority flex">
            <div className="content_box2">
                <div className="image-authority">
                <img src={require('./img/a2.jpg')}></img>
                <div class="team-content">
                    <div class="team-bio">
                        <h5>Chad Smith</h5>
                        <span>Administrator</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Col>
        <Col>
        <div className="main-authority flex">
            <div className="sub-authority flex">
            <div className="content_box2">
                <div className="image-authority">
                <img src={require('./img/a3.jpg')}></img>
                <div class="team-content">
                    <div class="team-bio">
                        <h5>Chad Smith</h5>
                        <span>Administrator</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Col>
        <Col>
        <div className="main-authority flex">
            <div className="sub-authority flex">
            <div className="content_box2">
                <div className="image-authority">
                <img src={require('./img/a4.jpg')}></img>
                <div class="team-content">
                    <div class="team-bio">
                        <h5>Chad Smith</h5>
                        <span>Administrator</span>
                    </div>
                </div>
               </div>
            </div>
        </div>
        </div>
        </Col>
      </Row>
    </Container>
</div>
{/* ====================slider=============== */}
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
{/*======================fotter================= */}
        <Fotter></Fotter>
    </>
        
    )
}

export default About