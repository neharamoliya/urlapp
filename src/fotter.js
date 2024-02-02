import './App.css';
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { FaEnvelopeOpen } from "react-icons/fa";

function Fotter() {
    return (
        <footer className="fotter">
  <Container>
    <Row>
      <Col sm={12} md={6} lg={4} xl={3}>
        <div className="fotter-widget-box pt-5">
          <div className="fotter-logo">
          <img src={require('./img/i30.png')} style={{width:"100%"}}></img>
          </div>
          <p className="mb-3 content" style={{fontSize:"16px"}}>
            We are many variations of passages available but the majority have suffered alteration
            in some form by injected humour words believable.
          </p>
          <ul className="fotter-contact">
            <li><FaPhoneAlt className="f-icon pt-1" style={{fontSize:"16px"}}></FaPhoneAlt>+2 123 654 7898</li>
            <li><IoLocationOutline className="f-icon pt-1" style={{fontSize:"16px"}}></IoLocationOutline>25/B Milford Road</li>
            <li><FaEnvelopeOpen className="f-icon pt-1" style={{fontSize:"16px"}}></FaEnvelopeOpen>info@example.com</li>
          </ul>
        </div>
      </Col >
      <Col sm={12} md={6} lg={4} xl={3}>
        <div className="fotter-widget">
          <div className="fotter-widget-title">Quick Links</div>
        </div>
        <ul className="fotter-list">
          <li style={{fontSize:"16px"}}><IoMdArrowDropright className="ficon" ></IoMdArrowDropright>About Us</li>
          <li style={{fontSize:"16px"}}><IoMdArrowDropright className="ficon"></IoMdArrowDropright> FAQ's</li>
          <li style={{fontSize:"16px"}}><IoMdArrowDropright className="ficon"></IoMdArrowDropright> Terms Of Service</li>
          <li style={{fontSize:"16px"}}><IoMdArrowDropright className="ficon"></IoMdArrowDropright> Privacy policy</li>
          <li style={{fontSize:"16px"}}><IoMdArrowDropright className="ficon"></IoMdArrowDropright>Our Events</li>
          <li style={{fontSize:"16px"}}><IoMdArrowDropright className="ficon"></IoMdArrowDropright> Latest Blog</li>
          
        </ul>
      </Col>
      <Col sm={12} md={6} lg={4} xl={3}>
        <div className="fotter-widget">
          <div className="fotter-widget-title">Opening Time</div>
        </div>
        <ul className="opening-hour">
            <li style={{fontSize:"16px"}}><CiClock2 className="ficon"></CiClock2>Open day<span>Mon - Sat</span></li>
            <li style={{fontSize:"16px"}}><CiClock2 className="ficon"></CiClock2> Museum Open<span>10:00 AM</span></li>
            <li style={{fontSize:"16px"}}><CiClock2 className="ficon"></CiClock2> Exhibits Start<span>10:30 AM</span></li>
            <li style={{fontSize:"16px"}}><CiClock2 className="ficon"></CiClock2> Exhibits Close<span>04:30 PM</span></li>
            <li style={{fontSize:"16px"}}><CiClock2 className="ficon"></CiClock2> Museum Close<span>05:30 PM</span></li>
            <li style={{fontSize:"16px"}}><CiClock2 className="ficon"></CiClock2>off day<span>Sunday</span></li>
          </ul>
      </Col>
      <Col sm={12} md={6} lg={4} xl={3}>
        <div className="fotter-widget">
          <div className="fotter-widget-title">News Ltter</div>
        </div>
        <div class="footer-newsletter">
            <p style={{fontSize:"16px"}}>Subscribe Our Newsletter To Get Latest Update And News</p>
              <div class="subscribe-form">
                  <form action="#">
                      <input type="email" class="form-control" placeholder="Your Email"></input>
                      <button class="theme-btn" type="submit" style={{fontSize:"16px"}}>
                      Subscribe Now <i class="far fa-paper-plane"></i>
                      </button>
                  </form>
              </div>
          </div>
        </Col>
    </Row>
  </Container>
  <div className="copyright pt-2">
        <div className="container">
        <p class="copyright-text">
          © <span id="date">2023</span> Copyright 2023 Mozex All Rights.
        </p>
        </div>
      </div>
</footer>
    )
}

export default Fotter