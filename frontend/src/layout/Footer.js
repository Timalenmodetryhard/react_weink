import React from 'react'
import image_linkedin from '../linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp'
import image_logo from '../dog-api-logo.svg'

function Footer() {
    return (
       <footer class="footer">
            <div class="link">
                <a href="#"><img src={image_logo}></img></a>
                <p>Explore the numerous high-quality, free images shared by our talented community.</p>
                <a href="https://www.linkedin.com/in/leelian-serrant-874784252" target="_blank" rel="noopener noreferrer"><img src={image_linkedin}></img></a>
            </div>
       </footer>
    );
  }
  
  export default Footer;
  