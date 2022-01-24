import React from "react";
import "./style.css";
import { Container,Row, col, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import slide1 from './assets/img/slide/Slide1.jpg';
import slide2 from './assets/img/slide/Slide2.jpg';
import slide3 from './assets/img/slide/slide3.jpg';

import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from "react-bootstrap/Offcanvas";
import { Nav } from "react-bootstrap";
import { faFacebookF,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
//import DropdownButton from 'react-bootstrap/DropdownButton'
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
  Box,
  
  
  Column,
  FooterLink,
  Heading,
  } from "./FooterStyles";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import {faPhoneAlt, faMapPin} from '@fortawesome/free-solid-svg-icons';




class Home extends React.Component{

  
    render(){

      

        return(


        
  <div >

    <div className="container1" >
                <header id="header" class="fixed-top d-flex align-items-center">

      <div className="Wrapper" class="col-lg-4 col-md-6 mt-4 mt-lg-0">


      {/* <h1 className="logo"  ><a href="index.html"><img src={require("./assets/img/logo.jpg")} width="150px" height="70px"/></a></h1> */}



      </div>

      <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">

      <Navbar  className="navv"   fixed="top"  bg="dark" variant="dark" expand={false} >
  <Container fluid>
    <Navbar.Brand className="brand" href="#">
      <img
      src={require("./assets/img/logo.png")}
      width="150"
      height="75"
      
      />
      
      
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="navTitle" id="offcanvasNavbarLabel">NAVIGATE</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link className="navLink" href="#about">About</Nav.Link>
          <Nav.Link className="navLink" href="#services">Services</Nav.Link>
          <Nav.Link className="navLink" href="#gallary">Gallary</Nav.Link>
          <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
          
          
        </Nav>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</div>

 <div class="col-lg-4 col-md-6 mt-4 mt-lg-0" className="call">
  <ul>
<li textAlign="Right"><a  href="tel:0814939267">Contact Us: 0814939267</a></li>
</ul>
</div> 

      
         {/* < div className="header-nav-area" class="container d-flex align-items-center justify-content-between" id="nav_container">

      
                   
      
     
                <nav id="navbar" class="navbar">
                  <ul>
                  
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">About</a></li>
                    <li><a className="nav-link scrollto" href="#services">Services</a></li>
                    <li><a className="nav-link scrollto " href="#gallary">Gallary</a></li> 
                    <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                    <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
                  </ul>
                  <i class="bi bi-list mobile-nav-toggle"></i>
                  <span className="menu-icon"></span>
                </nav>
                
                

              </div> */}
  </header> 
  </div>

  <main id="main">
  <section id="hero">



  <Carousel>
  <Carousel.Item interval={10000}>
    <img
      className="App"
      src="img/slide/Slide1.jpg"
      alt="First slide"
    />
    
    <Carousel.Caption>
      <h2>Welcome To</h2>
      <img src={require("./assets/img/logo.png")} width="270px" height="270px"/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
    <img
      className="App"
      src="img/slide/Slide2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2>Satellite TV Installers</h2>
      
      <p>Our Services include DSTV, OVHD and Star Satellite TV installations. </p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>

    
    <img
      className="App"
      src="img/slide/Slide3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2>Gallary</h2>
      <p>Take a look at some of our work</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>


















    {/* <div class="hero-container">
      <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          
          <div class="carousel-item active"   styles={{backgroundImage:`url(${slide1})`}} >
            <div class="carousel-container">
              <div class="carousel-content">

                <h2 class="animate__animated animate__fadeInDown">Welcome To</h2>
                <img src={require("./assets/img/logo.png")} width="500px" height="200px"/>
                
                
                <p class="animate__animated animate__fadeInUp">Satellite TV installations near you</p>
                <div>
                  <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>
          </div>

          
          <div class="carousel-item"  styles={{backgroundImage:`url(${slide2})`}}>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated animate__fadeInDown">Our Services</h2>
                <p class="animate__animated animate__fadeInUp">Our Services include DSTV, OVHD and Star Satellite TV installations. Take a look at the rest of our services. </p>
                <div>
                  <a href="#services" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>
          </div>

          
          <div class="carousel-item" styles={{backgroundImage:`url(${slide3})`}}>
            <div class="carousel-background"><img src="assets/img/slide/slide3.jpg" alt=""/></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated animate__fadeInDown">Gallary</h2>
                <p class="animate__animated animate__fadeInUp">Take a look at our recent work.</p>
                <div>
                  <a href="#gallary" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </div> */}
  </section>

  <section id="about" class="about">
      <div class="container">

        <div class="row no-gutters">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div class="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div class="content d-flex flex-column justify-content-center">
              <h3>GET TO KNOW US</h3>
              <p>
                We are highly trained DSTV technichians who specialize in DSTV installations, signal repairs, Extra view setup, TV wall mounting and point connections. We provide 24/7 service around Gauteng. Our offices are located at Roodepoort, Gauteng, South Africa.
              </p>
              <div class="row">
                <div class="col-md-6 icon-box">
                  <i class="bx bx-receipt"></i>
                  <h4>When we Started</h4>
                  <p>We began operation in 2018. </p>
                </div>
                <div class="col-md-6 icon-box">
                  <i class="bx bx-cube-alt"></i>
                  <h4>Where we operate</h4>
                  <p>We operate in and around Gauteng, Most of our work is done in Households, Hotels, guesthouses and lodges.</p>
                </div>
                
                <div class="col-md-6 icon-box">
                
                  <h4> <FontAwesomeIcon icon={faFacebookF} />  <a href="https://www.facebook.com/B.Master.SignalDS/">Follow us on Facebook</a> </h4>
                  <p>interact and get to know us more on our facebook page.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
          <p>Relocating to a new apartment and going to need DStv installation, sales and general Dstv repairs ? We
            are offering you the same day solution to all your Dstv needs. We offer quality services in and around Gauteng in a 24 hour basis and all 7 days of the week. Our services are provided to domestic households, hotels, guesthouses, apartments, lodges and complexes. Take a look at the services we provide. </p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box">
            
            <h4 class="title"><a href="">New DSTV, OVHD and STAR satellite tv installation</a></h4>
            <p class="description">Our dish installations include decoders such as DSTV Explora, HD PVR and OVHD decoders </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            
            <h4 class="title"><a href="">Mount LED TV wall brackets</a></h4>
            <p class="description">Dont break your back trying to mount your precious LED TV, We will do it for you. Book a call out now or come to our store and we will supply you with our mounting brackets</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
          
            <h4 class="title"><a href="">XtraView / third viewing installations</a></h4>
            <p class="description">XtraView is a cost effective and flexible solution which allows two XtraView capable DStv decoders to be linked together in one household, at the cost of a single subscription. Call us now or come to our offices and will install it for you</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            
            <h4 class="title"><a href="">Extra TV point connections</a></h4>
            <p class="description">Extra TV Points Installation setup is where by additional TV’s are connected to view the same picture being shown on the main TV room. This setup is mainly used on a house with many rooms and a TV is required in each every room. And also, in offices, hotels, and guest houses where Dstv decoders are being installed in a server room and all the TV’s are getting a feed from the same decoders. Contact us now for a quote.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
        
            <h4 class="title"><a href="">Single view upgrades to extra view</a></h4>
            <p class="description">Turn your single view Dstv decoder to an extra view and enjoy more entertaining sattelite TV with your family or business.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
          
            <h4 class="title"><a href="">DSTV relocation and re-installation</a></h4>
            <p class="description">Are you relocating and need your DSTV reinstalled? We got you covered. We are masters in DSTV Installations and DSTV repairs. We are the most trusted DSTV Installers for DSTV relocations in South Africa.</p>
          </div>

          <div class="col-lg-4 col-md-6 icon-box">
            
            <h4 class="title"><a href="">DSTV Upgrades</a></h4>
            <p class="description">Upgrade your existing single view installation to an EXPLORA decoder By changing the LNB to a SMART LNB.</p>
          </div>

          <div class="col-lg-4 col-md-6 icon-box">
            
            <h4 class="title"><a href="">Repairs and Signal loss correction</a></h4>
            <p class="description">Is your decoder struggling with signal loss or lost connection after a storm. Our highly trained technicians got your back. Give us a call</p>
          </div>

          <div class="col-lg-4 col-md-6 icon-box">
            
            <h4 class="title"><a href="">DSTV Migration</a></h4>
            <p class="description">Dstv or OVHD satellite installation or DStv and looking to upgrade or migration? Give our local Technicians for assistance promptly.</p>
          </div>
        </div>

      </div>
    </section>


    <section id="why-us" class="why-us">
      <div class="container">

        <div class="section-title">
          <h2>Why Us</h2>
          <p>Choosing us is a no brainer. We are highly trained DStv and various other satellite dish brand's technicians and installers. Take a look at a few reasons why you should choose B Master Signals Dstv Installers.</p>
        </div>

        <div class="row">

          <div class="col-lg-4">
            <div class="box">
              <span>01</span>
              <h4>Availability</h4>
              <p>We work around the clock. You can always get service at any time of the day and any day of the week</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box">
              <span>02</span>
              <h4>We Deliver</h4>
              <p>We have a 100% satisfaction rate with all our clients.</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box">
              <span>03</span>
              <h4> Our Experiance</h4>
              <p>We are a fairly young company with for years of expiriance but we have done work in high end facilities such as hotels, lodges and guesthouses </p>
            </div>
          </div>

        </div>

      </div>
    </section>


    <section id="gallary" class="portfolio">
      <div class="container">

        <div class="section-title">
          <h2>Gallary</h2>
          <p>We take pride in making sure that our work is neat. Take a look at some of the work we have done in recent months</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              {/* <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li> */}
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="img/Gallary/Gallary1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                
                <div class="portfolio-links">
                  <a href="assets/img/Gallary/Gallary1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="img/Gallary/Gallary2.jpg"  class="img-fluid" alt=""/>
              <div class="portfolio-info">
                
                <div class="portfolio-links">
                  <a href="assets/img/Gallary/Gallary2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="img/Gallary/Gallary3.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                
                <div class="portfolio-links">
                  <a href="assets/img/Gallary/Gallary3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="img/Gallary/Gallary4.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                
                <div class="portfolio-links">
                  <a href="assets/img/Gallary/Gallary4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="img/Gallary/Gallary5.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
               
                <div class="portfolio-links">
                  <a href="assets/img/Gallary/Gallary5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="img/Gallary/Gallary11.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                
                <div class="portfolio-links">
                  <a href="assets/img/Gallary/Gallary11.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="img/Gallary/Gallary12.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                
                <div class="portfolio-links">
                  <a href="assets/img/Gallary/Gallary12.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="img/Gallary/Gallary10.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                
                <div class="portfolio-links">
                  <a href="assets/img/Gallary/Gallary10.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="img/Gallary/Gallary13.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
               
                <div class="portfolio-links">
                  <a href="assets/img/Gallary/Gallary13.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>


    <section id="pricing" class="pricing">
      <div class="container">

        <div class="section-title">
          <h2>Pricing</h2>
          <p>We offer incredible services at reasonable prices. Take a look at some of our prices.</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="box">
              <h3>Smart LNB</h3>
              <h4><sup>R</sup>1200<span></span></h4>
              <ul>
                <li>The smart LNB makes it possible to watch the DSTV Explora</li>
                
              </ul>
              <div class="btn-wrap">
                <a href="tel:0814091934" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div class="box recommended">
              <h3>CALL OUT</h3>
              <h4><sup>R</sup>450<span> </span></h4>
              <ul>
                <li>Our standard call out fee,applies anywhere arount Gauteng</li>
                
              </ul>
              <div class="btn-wrap">
                <a href="tel:0814091934" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="box">
              <h3>Dish installation</h3>
              <h4><sup>R</sup>760<span> </span></h4>
              <ul>
                <li>Get our affordable dishes</li>
                
              </ul>
              <div class="btn-wrap">
                <a href="tel:0814091934" class="btn-buy">Buy Now</a>
              </div>
            </div>
            
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="box">
              <h3>Coaxile Cable (per meter)</h3>
              <h4><sup>R</sup>20<span> </span></h4>
              <ul>
                <li>Get your trusty coaxile cable for a low price of R20 per meter</li>
                
              </ul>
              <div class="btn-wrap">
                <a href="tel:0814091934" class="btn-buy">Buy Now</a>
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </section>


    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Out Contact lines are always open. You can choose between giving us a call or just sending us a message on Whatsapp</p>
        </div>

        <div class="row contact-info">

          <div class="col-md-4">
            <div class="contact-address">
            <FontAwesomeIcon icon={faMapPin} />
              <h3>Address</h3>
              <address>Roodepoort, Gauteng, South Africa, 1724 RoodePoort, South Africa</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
            <FontAwesomeIcon icon={faPhoneAlt} />
              <h3>Phone Number</h3>
              <p><a href="tel:0814091934">0814091934</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
            <FontAwesomeIcon icon={faWhatsapp} />
              <h3>Whatsapp number</h3>
              <p><a href="https://wa.me/<081 493 9267>">081 493 9267</a></p>
            </div>
          </div>



          {/* <div class="col-md-4">
            <div class="contact-email">
              <i class="bi bi-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div> */}

        </div>

        {/* <div class="form">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div> */}

      </div>
    </section>



  


{/* <section id="contact" class="contact"> 

<Box >
    <h1 style={{ color: "green",
          textAlign: "center",
          marginTop: "-50px" }}>
      GeeksforGeeks: A Computer Science Portal for Geeks
    </h1>
    <Container>
      <Row>
      <Column>
        <Heading>About Us</Heading>
        <FooterLink href="#">Aim</FooterLink>
        <FooterLink href="#">Vision</FooterLink>
        <FooterLink href="#">Testimonials</FooterLink>
      </Column>
      <Column>
        <Heading>Services</Heading>
        <FooterLink href="#">Writing</FooterLink>
        <FooterLink href="#">Internships</FooterLink>
        <FooterLink href="#">Coding</FooterLink>
        <FooterLink href="#">Teaching</FooterLink>
      </Column>
      <Column>
        <Heading>Contact Us</Heading>
        <FooterLink href="#">Uttar Pradesh</FooterLink>
        <FooterLink href="#">Ahemdabad</FooterLink>
        <FooterLink href="#">Indore</FooterLink>
        <FooterLink href="#">Mumbai</FooterLink>
      </Column>
      <Column>
        <Heading>Social Media</Heading>
        <FooterLink href="#">
        <i className="fab fa-facebook-f">
          <span style={{ marginLeft: "10px" }}>
          Facebook
          </span>
        </i>
        </FooterLink>
        <FooterLink href="#">
        <i className="fab fa-instagram">
          <span style={{ marginLeft: "10px" }}>
          Instagram
          </span>
        </i>
        </FooterLink>
        <FooterLink href="#">
        <i className="fab fa-twitter">
          <span style={{ marginLeft: "10px" }}>
          Twitter
          </span>
        </i>
        </FooterLink>
        <FooterLink href="#">
        <i className="fab fa-youtube">
          <span style={{ marginLeft: "10px" }}>
          Youtube
          </span>
        </i>
        </FooterLink>
      </Column>
      </Row>
    </Container>
    </Box>




</section> */}

</main>  









<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<script src="../assets/vendor/purecounter/purecounter.js"></script>
  <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="../assets/vendor/php-email-form/validate.js"></script>

  
  <script src="assets/js/main.js"></script>


              
              
              
              
             </div>


        )
        
    }
}







    // <Box>
    // <h1 style={{ color: "green",
    //       textAlign: "center",
    //       marginTop: "-50px" }}>
    //   GeeksforGeeks: A Computer Science Portal for Geeks
    // </h1>
    // <Container>
    //   <Roww>
    //   <Column>
    //     <Heading>About Us</Heading>
    //     <FooterLink href="#">Aim</FooterLink>
    //     <FooterLink href="#">Vision</FooterLink>
    //     <FooterLink href="#">Testimonials</FooterLink>
    //   </Column>
    //   <Column>
    //     <Heading>Services</Heading>
    //     <FooterLink href="#">Writing</FooterLink>
    //     <FooterLink href="#">Internships</FooterLink>
    //     <FooterLink href="#">Coding</FooterLink>
    //     <FooterLink href="#">Teaching</FooterLink>
    //   </Column>
    //   <Column>
    //     <Heading>Contact Us</Heading>
    //     <FooterLink href="#">Uttar Pradesh</FooterLink>
    //     <FooterLink href="#">Ahemdabad</FooterLink>
    //     <FooterLink href="#">Indore</FooterLink>
    //     <FooterLink href="#">Mumbai</FooterLink>
    //   </Column>
    //   <Column>
    //     <Heading>Social Media</Heading>
    //     <FooterLink href="#">
    //     <i className="fab fa-facebook-f">
    //       <span style={{ marginLeft: "10px" }}>
    //       Facebook
    //       </span>
    //     </i>
    //     </FooterLink>
    //     <FooterLink href="#">
    //     <i className="fab fa-instagram">
    //       <span style={{ marginLeft: "10px" }}>
    //       Instagram
    //       </span>
    //     </i>
    //     </FooterLink>
    //     <FooterLink href="#">
    //     <i className="fab fa-twitter">
    //       <span style={{ marginLeft: "10px" }}>
    //       Twitter
    //       </span>
    //     </i>
    //     </FooterLink>
    //     <FooterLink href="#">
    //     <i className="fab fa-youtube">
    //       <span style={{ marginLeft: "10px" }}>
    //       Youtube
    //       </span>
    //     </i>
    //     </FooterLink>
    //   </Column>
    //   </Roww>
    // </Container>
    // </Box>

  





export default Home

//export default Home;