import { Container,Row,Col,Navbar,NavDropdown,Nav,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter,FaLinkedinIn,FaYoutube,FaPlay,FaFacebookF } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import {FaHeadset,FaArrowRight} from "react-icons/fa6";
import { Link } from "react-router-dom";
import './App.css';
function Header() {
    return (
        <>
        <div className="bgblue" style={{fontSize:"16px"}}>
      <Container>
        <div className="top-info d-none d-sm-none d-md-none d-lg-block">
          <Row>
            <Col lg={8}>
            <span className="me-3">Welcome To Our Museum!</span>
            <span className="me-3"><FaEnvelopeOpen className="me-2 icon"></FaEnvelopeOpen>info@example.com</span>
            <span className="me-3"><FaHeadset className="me-2 icon"></FaHeadset>+2 123 654 7898</span>
            </Col>
            <Col>
              <div className="text-end">
              <FaFacebookF className="icon me-3"></FaFacebookF>
              <FaTwitter className="icon me-3"></FaTwitter>
              <FaLinkedinIn className="icon me-3"></FaLinkedinIn>
              <FaYoutube className="icon me-3"></FaYoutube>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
  </div>
  {/* =====================Header=================== */}
  <header>
    <Navbar expand="lg" style={{fontSize:"17px"}}>
      <Container>
          <Navbar.Brand><div className="logo"><img src={require('./img/logo.png')}></img></div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
            <Nav className="ms-auto pe-6 nav nav-item">
            <Nav.Link href="#link"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/about">About</Link></Nav.Link>
              <Nav.Link href="#home">Exhibitions</Nav.Link>
              <Nav.Link href="#home"><Link to="/collection">Collection</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/Blog">Blog</Link></Nav.Link>
              <Nav.Link href="#home"> <Link to="/contact">Contact</Link></Nav.Link>
              <Nav.Link href="#home"><Button className="btn d-md-none d-xl-block" style={{backgroundColor:"#d1af78",color:"white",border:"none",borderRadius:"0",padding:"5px",fontSize:"16px"}}>Buy Ticket<FaArrowRight></FaArrowRight></Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>

    </>
    );
  }
  
  export default Header;