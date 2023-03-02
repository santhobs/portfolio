import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [credentials, setCredentials] = useState({
        email:"",
        name:"",
        comments:""
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setCredentials({...credentials, [name]: value});
    }

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    if(!credentials.email || !credentials.name || !credentials.comments){
        alert("Enter Value")
    } else {
        emailjs
        .sendForm('service_meue6w5', 'template_obaic3z', form.current, 'RYwOppk8YabM4k9X-')
        .then(
            (result) => {
                console.log(result.text)
            },
            (error) => {
                console.log(error.text)
            }
        )
      e.target.reset();
      setCredentials({
        email:"",
        name:"",
        comments:""
    });
    toast.success("Form sent successfully!")
    return;
    }
    

    
  };

  return (
    <section className="contact section" id="contact">
        <ToastContainer />
         <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            {/* ----------------- Contact Content ----------------- */}
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info">
                    {/* --------------- contact card --------------- */}
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">user@gmail.com</span>

                        {/* <a href="" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
                    </div>

                    {/* --------------- contact card --------------- */}
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Phone</h3>
                        <span className="contact__card-data">98U35934589</span>

                        {/* <a href="" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
                    </div>

                    {/* --------------- contact card --------------- */}
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">asdsd</span>

                        {/* <a href="" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
                    </div>

                </div>
            </div>

            {/* ----------------- Contact Content ----------------- */}
            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">

                <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" value={credentials.email} onChange={handleInputChange} required/>
                    </div>


                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" value={credentials.name} onChange={handleInputChange} required/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Comments</label>
                        <textarea name="comments" id="" cols="30" rows="10" className="contact__form-input" placeholder="Insert your comments" value={credentials.comments} onChange={handleInputChange} required></textarea>
                    </div>
                    {/* <a href="#contact" className="button button__flex">
            Submit <i class="uil uil-location-arrow arrow-hello"></i>
        </a> */}
        <button type='submit' className="button button__flex"> Submit <i class="uil uil-location-arrow arrow-hello"></i></button>
                {/* <input type="submit" className="button button__flex" value="Submit"/> */}
                </form>

            </div>

        </div>
    </section>
  )
}

export default Contact
