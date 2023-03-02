import React from 'react'
import './footer.css'

const Footer = () => {
    
  return (
    <footer className="footer">
        
        <div className="footer__container container">
            
        
            
            
            <ul className="footer__list">
                <li>
                    <a href="" className="footer__link">About</a>
                </li>
                <li>
                    <a href="" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="#" className="home__social-icon" target="_blank"><i class="uil uil-instagram"></i></a>
                <a href="#" className="home__social-icon" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                <a href="#" className="home__social-icon" target="_blank"><i class="uil uil-behance"></i></a>
            </div>

            <span className="footer__copy">Copyright 2023. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer
