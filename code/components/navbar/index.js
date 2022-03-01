import React from "react";
import animations from "../../../assets/js/animations";
import images from "../../../assets/js/images";

const Navbar = ({ _relativeURL, _ID, navigation, gitUrl, logoText }) => {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  }
  return (
    <nav className="navbar" >
      <div className='navbar-grid' data-aos ={animations.fadeDown}>
        <a href='/#' className='navbar-logo'>
          <img src={handleUrl(images.logo)} />
          <p>{logoText}</p>
        </a>
        <button className='navbar-mobile-hamburger'></button>
        <div className='navbar-menu'>
          {navigation}
          <a href={gitUrl} target='_blank' className='navbar-github'>
            <img src={handleUrl(images.githubDark)} alt='github' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
