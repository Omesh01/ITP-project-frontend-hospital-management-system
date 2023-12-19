import React from "react";
import logo from '../images/logo.jpeg';
import I1 from "../images/header.jpeg";

function Header(){
    return (
        <div style={{ display: 'flex',backgroundColor:"white", alignItems: 'center', justifyContent: 'flex-start',backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        opacity: 1.0, // Set the opacity of the image (0.0 to 1.0)
        filter: "brightness(90%)" }}>
         <img src={logo} width={"10%"} style={{ padding: '10px'}}/>
        <nav class="navbar navbar-expand-lg navbar-light bg-white" style={{ "border-radius": "10px", width: "85%" }}>
       
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav"  style={{ marginLeft: "10%" }}>
            <a class="nav-item nav-link active" href="/" style={{ padding: '0 30px' , color: 'black' }}>Home</a>
            <a class="nav-item nav-link active" href="/#" style={{ padding: '0 30px' , color: 'black' }}>Laboratory</a>
            <a class="nav-item nav-link" href="/#" style={{ padding: '0 30px',color: 'black' }}>Phamacy</a>
            <a class="nav-item nav-link " href="/contactus" style={{ padding: '0 30px' ,color: 'black' }}>Contcat Us</a>
            <a class="nav-item nav-link" href="/#" style={{ padding: '0 30px', color: 'black' }}>About Us</a>
            <a class="nav-item nav-link" href="/login" style={{ padding: '0 30px', color: 'black' }}>Staff Login</a>
            <a class="nav-item nav-link" href="#" style={{ padding: '0 30px', color: 'white', backgroundColor:"#151E3D","border-radius": "10px" }}>Login</a>
          </div>
        </div>
      </nav>
      </div>
    )
}

export default Header;