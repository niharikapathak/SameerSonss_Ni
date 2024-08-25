import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container" data-aos="zoom-in" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="d-flex justify-content-center">
          <div
            style={{
              backgroundColor: '#ACDDDE',
              width: '530px',
              opacity: '0.9',
              height: '213px',
              borderRadius: '50px',
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
            className="style1"
            data-aos="zoom-in"
          >
            <span className="sty5" style={{ padding: '20px' }}>
              Sameer Pathak&nbsp; :&nbsp;&nbsp;&nbsp; <a href="tel:9822559360">9822559360</a><br />
              Rajendra Pathak :&nbsp; <a href="tel:9423592264">9423592264</a><br />
              Abhay Pathak&nbsp;&nbsp; :&nbsp; <a href="tel:7666117911">7666117911</a><br />
              Gmail :{' '}
              <a href="mailto:pathaksameer79@gmail.com">
                <span className="sty5">pathaksameer79@gmail.com</span>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-6" style={{ marginTop: '30px',   }}>
            <div className="address-container shadow" data-aos="zoom-in" data-aos-duration="2500" style={{   backgroundColor: '#ACDDDE',
               width: '530px',
               opacity: '0.9',
               height: '500px',
               borderRadius: '50px',
  
              
              
            }} >
              <span className="address-title" ><strong><center>Address</center></strong></span><br />
              <span className="address-details">
              <center> Rama Prem Nivas 34/a/46, New paccha peth, Solapur, Maharashtra 413006</center><br /><br />
               <center> B6/501, Suryanjali Residency, Amroli Cross Road <br></br>Surat , Gujarat</center><br /><br />
              <center>  Minara Mansion 3/57 Sant Sena Marg, Mumbai 400004, <br></br>Maharashtra</center>
              </span>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-md-6" style={{ marginTop: '30px' }}>
            <div className="map-container shadow" data-aos="zoom-in" data-aos-duration="2500">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="400"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=sameer%20and%20sons,solapur,maharashtra&t=k&z=19&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
