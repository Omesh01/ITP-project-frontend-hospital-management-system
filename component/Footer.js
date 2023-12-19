import React from "react";
import logo from '../images/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';



function Footer(){
    return (
        <div style={{backgroundColor: '#151E3D'}}>
          
<footer class="text-center text-lg-start bg-lightblue text-white">
 
 
  <section class="">
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <img  src={logo} width={"80%"} style={{ padding: '10px'}}/>
        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
        </div>
      
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4"></h6>
          <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3 text-secondary" />
          New Kandy Road, Malabe
        </p>
          <p>
          <FontAwesomeIcon icon={faPhone} className="me-3 text-secondary" />
          011-1234567
        </p>
        <p>
            <FontAwesomeIcon icon={faEnvelope} className="me-3 text-secondary" />
            info@example.com
          </p>
          
          <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
          <li style={{ margin: "0 10px" }}>
          <p>Social_Media</p>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a href="https://www.facebook.com/example">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a href="https://twitter.com/example">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a href="https://www.instagram.com/example">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a href="https://www.linkedin.com/example">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a href="https://www.youtube.com/example">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a href="https://www.google.com/example">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </li>
      </ul>
        </div>
       <hr/>
      </div>
    
    </div>
  </section>
  <ul style={{ display: "flex", listStyle: "none", padding: 0 , justifyContent: "center"}}>
    <li>
        <div class="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.025);"}}>
        <a class="text-reset fw-bold" href="#">About Us</a>
      </div>
    </li>
    <li>
        <div class="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.025);"}}>
        <a class="text-reset fw-bold" href="#">Contact Us</a>
      </div>
    </li>
    <li>
        <div class="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.025);"}}>
        <a class="text-reset fw-bold" href="#">Help</a>
      </div>
    </li>
    <li>
        <div class="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.025);"}}>
        <a class="text-reset fw-bold" href="#">Privacy Policy</a>
      </div>
    </li>
    <li>
        <div class="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.025);"}}>
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="#">WD03.02.T40</a>
      </div>
    </li>

  </ul>
 
 
</footer>
        </div>
    )
}

export default Footer;