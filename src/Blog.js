import './App.css';
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Container} from 'react-bootstrap';
import Header from './Header';
import Blogus from './Blogus';
import Fotter from './fotter';

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
  

function Blog() {
    return (
       <>
       <Header></Header>
       <div class="site-breadcrumb">
            <div className="img-item justify-content-center text-center">
            Our Blog
            <div className="sub-name">Home // Our Blog</div>
            </div>
        </div>

       <Blogus></Blogus>
{/* ==================================================== */}
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
       <Fotter></Fotter>
       </>
    )
}

export default Blog