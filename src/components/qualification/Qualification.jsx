import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}  onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
                
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    {/* ---------------- Qualification data ---------------- */}
                    <div className="qualifiction__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* ---------------- Qualification data ---------------- */}
                    <div className="qualifiction__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>                        
                    </div>

                    {/* ---------------- Qualification data ---------------- */}
                    <div className="qualifiction__data">
                        

                        

                        <div>
                            <h3 className="qualification__title">Ux Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - 2020
                            </div>
                        </div>  
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>                      
                    </div>

                    {/* ---------------- Qualification data ---------------- */}
                    <div className="qualifiction__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Ux Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - 2020
                            </div>
                        </div>                        
                    </div>

                </div>

                {/* ----- Qualification content ----- */}

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    {/* ---------------- Qualification data ---------------- */}
                    <div className="qualifiction__data">
                        <div>
                            <h3 className="qualification__title">Web Designerasdasd</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* ---------------- Qualification data ---------------- */}
                    <div className="qualifiction__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>                        
                    </div>

                    {/* ---------------- Qualification data ---------------- */}
                    <div className="qualifiction__data">
                        

                        

                        <div>
                            <h3 className="qualification__title">Ux Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - 2020
                            </div>
                        </div>  
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>                      
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
