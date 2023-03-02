import React from 'react'
import './about.css'
import AboutImg from '../../assets/portfolio/pexels-photo-11908972.jpeg'
import Info from './Info'

const About = () => {
  return (
    <section className="section about" id='about'>
        

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
            <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
                <Info />

                <p className="about__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                <a href="" className="button button--flex">Download CV <i class="uil uil-file-blank"></i></a>
            </div>
        </div>
    </section>
  )
}

export default About
