import React from 'react'

const Scrolldown = () => {
  return (
    <div className='home__scroll'>
      <a href="#about" className="home__scroll-button button-flex">
      <i class="uil uil-mouse-alt scroll__icon"></i>
      <span className="home__scroll-name">Scroll Down</span>
      <i class="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  )
}

export default Scrolldown
