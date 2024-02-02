import './App.css';
import React from 'react'
import Header from './Header';
import Fotter from './fotter';
function Contact() {
    return (
        <>
        <Header></Header>
        <div class="site-breadcrumb">
            <div className="img-item justify-content-center text-center">
            Contact Us
            <div className="sub-name">Home //Contact Us</div>
            </div>
        </div>

        {/* ================================================= */}
<main class="main">
    <div class="contact-area py-120">
        <div class="container">
            <div class="contact-wrapper">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="contact-content">
                        <div class="contact-info">
                            <div class="contact-info-icon">
                            <i class="fa fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-info-content">
                            <h5>Office Address</h5>
                            <p style={{fontSize:"16px"}}>25/B Milford, New York, USA</p>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="contact-info-icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div class="contact-info-content">
                            <h5>Call Us</h5>
                            <p style={{fontSize:"16px"}}>+2 123 4565 789</p>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="contact-info-icon">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <div class="contact-info-content">
                            <h5>Email Us</h5>
                            <p style={{fontSize:"16px"}}>info@example.com</p>
                        </div>
                    </div>
            <div class="contact-info">
            <div class="contact-info-icon">
            <i class="far fa-clock"></i>
            </div>
            <div class="contact-info-content">
            <h5>Open Time</h5>
            <p style={{fontSize:"16px"}}>Mon - Sat (10.00AM - 05.30PM)</p>
            </div>
            </div>
            </div>
            </div>
            <div class="col-lg-8 align-self-center">
            <div class="contact-form">
            <div class="contact-form-header">
            <h2>Get In Touch</h2>
            <p style={{fontSize:"16px"}}>It is a long established fact that a reader will be distracted by the readable
            content of a page randomised words which don't look even slightly when looking at its layout. </p>
            </div>
            <form method="post" action="/mozex/assets/php/contact.php" id="contact-form"></form>
            <div class="row">
            <div class="col-md-6">
            <div class="form-group">
            <input type="text" class="form-control" name="name" placeholder="Your Name" required="" style={{fontSize:"16px"}}></input>
            </div>
            </div>
            <div class="col-md-6">
            <div class="form-group">
            <input type="email" class="form-control" name="email" placeholder="Your Email" required="" style={{fontSize:"16px"}}></input>
            </div>
            </div>
            </div>
            <div class="form-group">
            <input type="text" class="form-control" name="subject" placeholder="Your Subject" required="" style={{fontSize:"16px"}}></input>
            </div>
            <div class="form-group">
            <textarea name="message" cols="30" rows="5" class="form-control" placeholder="Write Your Message" style={{fontSize:"16px"}}></textarea>
            </div>
            <button type="submit" class="theme-btn">Send
            Message <i class="far fa-paper-plane"></i></button>
            <div class="col-md-12 mt-3">
            <div class="form-messege text-success"></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            <div class="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div> 
            </main>

        <Fotter></Fotter>
        </>
    )
}

export default Contact