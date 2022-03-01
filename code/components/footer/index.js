import React from "react";
import images from "../../../assets/js/images";

const Footer = ({ _body, defi, orbs, _relativeURL, _ID, socials }) => {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
}
  return <footer className="footer">
    <div className='footer-grid'>
      <section className='footer-top'>
        Proudly contributed by <a href={orbs} target='_blank'><img src={handleUrl(images.orbsLogoWhite)} /></a> to the
        {' '}<a href={defi} target='_blank'><img src={handleUrl(images.defiLogo)} /></a> accelerator
      </section>

      <div className='footer-socials'>
        {socials}
      </div>
      <section className='footer-bottom'>{_body}</section>
    </div>
  </footer>;
};

export default Footer;
