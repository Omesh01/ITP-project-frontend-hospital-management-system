import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


export default function Home(){


    return (
       
     <div>
     
<html>

<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

  <title>Medilab Bootstrap Template - Index</title>
  <meta content="" name="description"/>
  <meta content="" name="keywords"/>


  <link href="assets/img/favicon.png" rel="icon"/>
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>


  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

 
  <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet"/>
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

 
  <link href="assets/css/style.css" rel="stylesheet"/>

 
</head>

<body style={{ backgroundSize:"container" , backgroundColor:"#e9f4f8"}}>

 

  <section id="hero" class="d-flex align-items-center">
    <div class="container">
       <br></br><center>
      <h1>Welcome to TJM Hospital</h1></center>
      
      <br></br>
        <img src="https://absolutecorporatesolutions.com/images/hospital-management-system-in-kenya.jpg" class="img-fluid" alt=""/>
           <center>
        <p><br></br>You and your loved ones are safe in our internationally accredited care. Our scope of healthcare services revolves around patient safety and we offer you highly specialized medical care including tertiary and super specialty care at our state-of-the-art facilities. At our hospitals in Wattala and Thalawathugoda, you can rest easy while our practiced and qualified medical staff works around the clock to ensure a superior patient experience. A panel of over 300 visiting and resident specialist consultants and our teams of care givers ensure you the best of care for all your health problems. This being the case, we have always been recognized as one of the leading healthcare providers in Sri Lanka bringing in international best practices ensuring superior outcomes..</p></center> 
    </div>
  </section>

  <main id="main">


    
    
    <section id="doctors" class="doctors">
        <center>
      <div class="container">
<br></br><center>
        <div class="section-title">
          <h2><br></br>Doctors<br></br> </h2>
           </div>

        <div class="row">
<br></br>
          <div class="col-lg-6"><br></br><br></br>
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="https://kevsbest.com/wp-content/uploads/2019/07/Dr.-George-Atia-282x300.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Medical Officer</span>
                <p>family physician or primary care physician, a GP provides comprehensive medical care for patients of all ages and manages a wide range of health conditions.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0"><br></br><br></br>
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="https://th.bing.com/th/id/OIP.RxhQ2nMqf7hwsx884qzCpAHaE8?pid=ImgDet&rs=1" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Anesthesiologist</span>
                <p>A specialist is a doctor who has advanced training in a specific area of medicine, such as cardiology, dermatology, oncology, or pediatrics. They provide specialized care for patients with specific health conditions</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="https://th.bing.com/th/id/OIP.nArHi8fJAapf4wCbjboouwAAAA?pid=ImgDet&rs=1" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>Cardiology</span>
                <p>Surgeons are doctors who specialize in performing surgical procedures to treat various diseases, injuries, or conditions. They may specialize in areas such as orthopedics, neurosurgery, or cardiothoracic surgery.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="https://dentist-telaviv.com/wp-content/uploads/2021/03/tmm490d2kv-1-1.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Neurosurgeon</span>
                <p>Pediatricians specialize in providing medical care to infants, children, and adolescents. They manage childhood illnesses, provide vaccinations, and monitor growth and development.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        </center>
      </div>
      </center>
    </section>
    
    <section id="gallery" class="gallery">
        <center>
      <div class="container">

        <div class="section-title">
          <h2><br></br>Gallery</h2>
          <p><br></br>It’s all about us at TJM
We invite you to take a moment to witness what we do as a respected corporate citizen in the areas of education, service, celebrations, sustainability, nurturing people’s talents, what others say about us and many more</p>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row g-0">

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-1.jpg" class="galelry-lightbox">
                <img src="https://th.bing.com/th/id/R.adffd44f00ca1bb5c02c76869ac61eb1?rik=nPKtzoLDqzenww&riu=http%3a%2f%2fwww.orzofflawoffices.com%2fwp-content%2fuploads%2f2015%2f06%2fpHospitalExterior3_Dollarphotoclub_68339986.jpg&ehk=Kuj3VR5mEVG%2bz5BYolcI4xpvB0vR%2fTqdd7YqjgaWid8%3d&risl=&pid=ImgRaw&r=0" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-2.jpg" class="galelry-lightbox">
                <img src="https://th.bing.com/th/id/R.979ef60883f05ef1a731419b0af8439d?rik=CLemTIRHb4v7Eg&pid=ImgRaw&r=0" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-3.jpg" class="galelry-lightbox">
                <img src="https://th.bing.com/th/id/OIP.NCXCZpB-edi7DW5ygE_PywHaE8?pid=ImgDet&rs=1" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-4.jpg" class="galelry-lightbox">
                <img src="https://th.bing.com/th/id/OIP.D2kS5oKnXDSQg8oezBzaAgHaE7?pid=ImgDet&rs=1" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-5.jpg" class="galelry-lightbox">
                <img src="https://th.bing.com/th/id/R.76a8252e44414e5356d6c7771fac7636?rik=%2bzau8m3aylXDgg&riu=http%3a%2f%2finteractives.dallasnews.com%2f2015%2fnew-parkland%2fimages%2fer-bed_1200.jpg&ehk=2ZLqpE0rsf9QXFdJ%2f4ajziZ3m3y2IIpmqhS1irsa3lg%3d&risl=&pid=ImgRaw&r=0" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" class="galelry-lightbox">
                <img src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-7.jpg" class="galelry-lightbox">
                <img src='https://lh6.googleusercontent.com/proxy/xwdyIZ-zHGjHXoD5BZ_xDcelwFxH8D93PcAGOjDUFdGDPX6DGj4SB_lXt9MTjhUPBsHjks40B7A26ZrPmfha2k9I96PJvfJGcPB1h7VspDr64BbZ28HtKPmPMJlUfOm-Kg=s0-d' alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-8.jpg" class="galelry-lightbox">
                <img src="https://i.pinimg.com/originals/4f/88/1a/4f881a110739c4ffd8bb92ddb8fd4204.jpg" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

        </div>

      </div>
      </center>
    </section>
    

  </main>
 
  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <script src="assets/js/main.js"></script>

</body>

</html>
        
    </div>
  );
}

