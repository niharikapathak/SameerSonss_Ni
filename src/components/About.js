import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'; // Create this file for custom styles

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
<div style={{ 
  backgroundColor: 'white', 
  backgroundImage: 'url("background_image.png")', 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat' 
}}>
  
    <div 
      style={{ 
        backgroundColor: '#ACDDDE', 
        marginLeft: '40px', 
        width: '1050px', 
        padding: '50px', 
        borderBottomLeftRadius: '50px',
        marginTop:'50px', 
        borderBottomRightRadius: '50px' 
      }} 
      data-aos="zoom-in" 
      className="s1 shadow"
    >
     
      
       <span className="s11">
        <span className="s5"><strong>&nbsp;About Us</strong></span>
      </span>
      <p className="s7">
        <strong>&#39;Sameer &amp; Sons&#39;</strong> is Superior in Dyestuff Supplier in India. As our tag line says
        &#39;Color Your Dreams&#39;, we make this beautiful world more beautiful by adding our
        colours to it. We are known for our wide range of products which are manufactured by our
        associated companies. We provide a full range of products which includes Reactive Cold Dyes,
        Reactive HE Dyes, Reactive ME Dyes, Vinyl Sulphone Dyed, Reactive Hot Dyes, Hi-Fast Printing Series, Sunfast Direct Dyes, Direct Dyes, Solo Series, Deep
        Black Series, Premium Series, Textile Auxiliaries and our newly launched product Cotton,
        Fluorescent LED Dyes. All our products can be applied in Textiles, Leather, Paper, Coating,
        Inks, Plastics, Soap, Towels and Chaddars.
      </p>
    </div>
 



  <br className="s9" />
  <div style={{ backgroundColor: '#ACDDDE', marginLeft: '40px', width: '700px',
     padding: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }} data-aos="zoom-in" data-aos-duration="2500" className="s1 shadow">
    <span className="s5"><strong>Company Profile</strong></span><br /><br />
    <span className="s10">Mr.Rajendra.P.Pathak Started Dyestuff Business in 1982 in Solapur. He started a
      sole proprietorship firm <strong>&#39;Sameer &amp; Sons&#39;</strong> after successfully
      growing business in India.</span><br className="s10" />
    <span className="s10">
      <strong>&#39;Sameer &amp; Sons&#39;</strong> also has a renowned name in international markets. With change in trend
      and to serve our stakeholders more efficiently and effectively, we decided to work
      in corporate style by the name of &#39;Sameer &amp; Sons&#39; to establish our own
      brand in the market. We provide a full range of Dyestuff and Chemicals and are
      constantly trying to satisfy our customers with the best quality at reasonable
      rates.</span><br className="s10" /><br className="s4" />
    <span className="s3"><strong>Vision</strong></span><br />
    <span className="s10">Our vision is to be identified and recognised as a dynamic modern and
      eco-friendly Dyes Company, enduring ethics and values and sharing success with
      our buyers and vendors.</span><br className="s10" /><br />
    <span className="s2"><strong>Mission</strong></span><br />
    <span className="s10">Our mission is to manage our business responsibly and sensitively, to strive for
      continuous improvement in performance, to measure results precisely, and to ensure
      company growth through innovations.</span>
  </div>
</div>
  
     
  );
};

export default About;