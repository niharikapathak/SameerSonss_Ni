import React from 'react';
import './Rnd.css'; // Import the CSS file
import rdImage from '../images/R&D.png'; // Ensure the path is correct

const RD = () => {
    return (
        <div className="rd-container">
            <div className="rd-image-container">
                <img src={rdImage} alt="Research and Development" className="rd-img" />
            </div>
         <br></br>
         <br></br>
            <div className="rd-content">
             
                <div className="rd-list">
                    <li>➤ Development of new product ranges</li>
                    <li>➤ Improvement in product performance (Fastness properties, ease of dyeing, reproducibility etc.)</li>
                    <li>➤ Improvement in yields resulting in more cost effective dyes</li>
                    <li>➤ Green manufacturing initiatives</li>
                </div>
            </div>
        </div>
    );
};

export default RD;
