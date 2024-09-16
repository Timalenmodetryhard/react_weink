import React, { useEffect } from 'react';
import logo from '../dog-api-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    //Function to add CSS effects on the header
     useEffect(() => {
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (header) {
        if (window.scrollY > headerHeight) {
            header.classList.add("show-header");
            header.classList.remove("hide-header");
        } else {
          header.classList.remove("show-header");
          header.classList.add("hide-header");
        }
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="nav-header">
        <div className="nav-img">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="nav-item"><Link to="/"><span>Home</span></Link></div>
        <div className="nav-item"><Link to="/doggallery"><span>Gallery</span></Link></div>
        <div className="nav-item"><Link to="/dogbreedsearch"><span>Search</span></Link></div>
      </nav>
    </header>
  );
}

export default Header;
