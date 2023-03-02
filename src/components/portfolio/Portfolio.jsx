import React, { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './portfolio.css';
import portApp1 from '../../assets/portfolio/brochure/thumbnail/enhance.jpg'
import { DataList } from '../../data/Data';
import { AnimatePresence } from 'framer-motion';
import {motion} from "framer-motion"

const Portfolio = () => {

    const [toggleState, setToggleState] = useState("mobile");
    const [toggleModalState, setToggleModalState] = useState(false);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [resId, setResId] = useState([]);

    useEffect(() => {
        loadDefault()
    }, [])

    
    // ______________________ Open Modal ______________________

    const toggleModal = (e, index) => {
        
        const curId = parseInt(e.currentTarget.id)
        setToggleModalState(index);
        console.log(typeof curId)

        const resultId = DataList.filter((currentId) => {
            return currentId.id === curId; 
            
          })         
          
          setResId(resultId)
          console.log("new Id", resultId)
    }

    const toggleTab = (index) => {
        setToggleState(index);
    }

    // ______________________ Toggle Class ______________________

    if(toggleModalState !== false) {
        console.log("not true");
        const body = document.body;
        body.classList.add ("no-scroll")
    } else {
        const body = document.body;
        body.classList.remove ("no-scroll")
    }


    // ______________________ Loading Default ______________________ 

    const loadDefault = () => {
        const baseResult = DataList.filter((currentCategory) => {
            return currentCategory.category === "mobile"
          })
          setFilteredProduct(baseResult)
    }
    
    // ______________________ Category Filter ______________________ 

    const filterCategory = async (categoryItem) => {
        const result = DataList.filter((currentCategory) => {
          return currentCategory.category === categoryItem;
        })
        setFilteredProduct(result);
        setToggleState(categoryItem)
    
      }

    // ______________________ ID Filter ______________________ 

    const filterId = async (categoryItem) => {
        const result = DataList.filter((currentCategory) => {
          return currentCategory.category === categoryItem;
        })
        setFilteredProduct(result);
        setToggleState(categoryItem)
    
      }


  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Recent Work</span>

        <div>
            
        </div>

        <div className="portfolio__container container">
            {/* <div className="portfolio__tabs">
                <button className={toggleState === 1 ? 'button portfolio__button portfolio__button-active' : 'button portfolio__button'} onClick={() => toggleTab(1)}>App</button>
                <button className={toggleState === 2 ? 'button portfolio__button portfolio__button-active' : 'button portfolio__button'} onClick={() => toggleTab(2)}>Web</button>
                <button className={toggleState === 3 ? 'button portfolio__button portfolio__button-active' : 'button portfolio__button'} onClick={() => toggleTab(3)}>Print</button>
            </div> */}

            <div className="portfolio__tabs">
                <button className={toggleState === "mobile" ? 'button portfolio__button portfolio__button-active' : 'button portfolio__button'} onClick={() => filterCategory('mobile')}>Mobile</button>
                <button className={toggleState === "web" ? 'button portfolio__button portfolio__button-active' : 'button portfolio__button'} onClick={() => filterCategory('web')}>Web</button>
                <button className={toggleState === "print" ? 'button portfolio__button portfolio__button-active' : 'button portfolio__button'} onClick={() => filterCategory('print')}>Print</button>
            </div>


            <div className="portfolio__section">
            <div className="portfolios__container container grid">
            <AnimatePresence>
                    {filteredProduct.map((item) => (
               <motion.div className="portfolio__content" key={item.id} layout
               initial={{opacity:0}}
               animate={{opacity:1}}
               exit={{opacity:0}}
               transition={{duration:0.5}}>
               {/* <img src={portApp1} onClick={() => toggleModal(1)}/> */}
               <img src={item.thumbnail} onClick={(e) => toggleModal(e, true)} id={item.id}/>
               <p className='portfolio__desc'>{item.title}</p>
               <span className="services__button"onClick={() => toggleModal(1)}>Read More 
               <i className="uil uil-arrow-right services__button-icon"></i>
               </span>

               <div className={toggleModalState === true ? "portfolio__modal active-modal" : "portfolio__modal"}>
                                <div className="portfolio__modal-content">
                                    
                                
                                    <Scrollbars className="portfolio__modal-scroll">
                                        {resId.map((clickedItem) => (
                                            
                                            <div>
                                            <div className="portfolio__modal-header">
                                        <h2 className="portfolio__modal-title">{clickedItem.title}</h2>
                                        <i className="uil uil-times portfolio__modal-close" onClick={(e) => toggleModal(e, false)}></i>
                                    </div>
                                            <img src={clickedItem.thumbnail} className="img_lrg"/>
                                            
                                             <div className="portfolio__modal-description">
                                                <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                                </div>
                                        ))}
                                    
                                    </Scrollbars>    
                                </div>
                            </div>
           </motion.div>
            ))}
            </AnimatePresence>
                    </div>
                {/* <div className={toggleState === 1 ? "portfolio__subsection-active" : "portfolio__subsection"}>
                    <div className="portfolios__container container grid">
                    {filteredProduct.map((item) => (
                <ul key={item.id}>
                    <li>{item.title}</li>
                </ul>
            ))}
                    <div className="portfolio__content">
                            <img src={portApp1} onClick={() => toggleModal(1)}/>
                            <p className='portfolio__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            <span className="services__button"onClick={() => toggleModal(1)}>Read More 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                        </div>

                        <div className="portfolio__content">
                            <img src={portApp1} onClick={() => toggleModal(1)}/>
                            <p className='portfolio__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            <span className="services__button"onClick={() => toggleModal(1)}>Read More 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                            <div className={toggleModalState === 1 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                                <div className="portfolio__modal-content">
                                    <div className="portfolio__modal-header">
                                        <h2 className="portfolio__modal-title">Title</h2>
                                        <i className="uil uil-times portfolio__modal-close" onClick={() => toggleModal(0)}></i>
                                    </div>
                                
                                    <Scrollbars className="portfolio__modal-scroll">
                                    
                                        <img src={portApp1} />
                                         <div className="portfolio__modal-description">
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                    </Scrollbars>    
                                </div>
                            </div>


                        </div>
                        <div className="portfolio__content">
                        <img src={portApp1} onClick={() => toggleModal(2)}/>
                        <p className='portfolio__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <span className="services__button" onClick={() => toggleModal(2)}>Read More 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                            <div className={toggleModalState === 2 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                                <div className="portfolio__modal-content">
                                    <div className="portfolio__modal-header">
                                        <h2 className="portfolio__modal-title">Title</h2>
                                        <i className="uil uil-times portfolio__modal-close" onClick={() => toggleModal(0)}></i>
                                    </div>
                                
                                    <Scrollbars className="portfolio__modal-scroll">
                                    
                                        <img src={portApp1} />
                                        <div className="portfolio__modal-description">
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                    </Scrollbars>    
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__content">
                            <img src={portApp1} onClick={() => toggleModal(3)}/>
                            <p className='portfolio__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            <span className="services__button" onClick={() => toggleModal(3)}>Read More 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                            <div className={toggleModalState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                                <div className="portfolio__modal-content">
                                    <div className="portfolio__modal-header">
                                        <h2 className="portfolio__modal-title">Title</h2>
                                        <i className="uil uil-times portfolio__modal-close" onClick={() => toggleModal(0)}></i>
                                    </div>
                                
                                    <Scrollbars className="portfolio__modal-scroll">
                                    
                                        <img src={portApp1} />
                                         <div className="portfolio__modal-description">
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                    </Scrollbars>    
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__content">
                            <img src={portApp1} onClick={() => toggleModal(4)}/>
                            <p className='portfolio__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            <span className="services__button" onClick={() => toggleModal(4)}>Read More 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>

                            <div className={toggleModalState === 4 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                                <div className="portfolio__modal-content">
                                    <div className="portfolio__modal-header">
                                        <h2 className="portfolio__modal-title">Title</h2>
                                        <i className="uil uil-times portfolio__modal-close" onClick={() => toggleModal(0)}></i>
                                    </div>
                                
                                    <Scrollbars className="portfolio__modal-scroll">
                                    
                                        <img src={portApp1} />
                                         <div className="portfolio__modal-description">
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                    </Scrollbars>    
                                </div>
                            </div>
                        </div>

                        <div className="portfolio__content">
                            <img src={portApp1} onClick={() => toggleModal(5)}/>
                            <p className='portfolio__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            <span className="services__button" onClick={() => toggleModal(5)}>Read More 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                            <div className={toggleModalState === 5 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                                <div className="portfolio__modal-content">
                                    <div className="portfolio__modal-header">
                                        <h2 className="portfolio__modal-title">Title</h2>
                                        <i className="uil uil-times portfolio__modal-close" onClick={() => toggleModal(0)}></i>
                                    </div>
                                
                                    <Scrollbars className="portfolio__modal-scroll">
                                    
                                        <img src={portApp1} />
                                         <div className="portfolio__modal-description">
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                    </Scrollbars>    
                                </div>
                            </div>
                        </div>

                        <div className="portfolio__content">
                            <img src={portApp1} onClick={() => toggleModal(6)}/>
                            <p className='portfolio__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            <span className="services__button" onClick={() => toggleModal(6)}>Read More 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                            <div className={toggleModalState === 6 ? "portfolio__modal active-modal" : "portfolio__modal"}>
                                <div className="portfolio__modal-content">
                                    <div className="portfolio__modal-header">
                                        <h2 className="portfolio__modal-title">Title</h2>
                                        <i className="uil uil-times portfolio__modal-close" onClick={() => toggleModal(0)}></i>
                                    </div>
                                
                                    <Scrollbars className="portfolio__modal-scroll">
                                    
                                        <img src={portApp1} />
                                         <div className="portfolio__modal-description">
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                    </Scrollbars>    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={toggleState === 2 ? "portfolio__subsection-active" : "portfolio__subsection"}>Web</div>
                <div className={toggleState === 3 ? "portfolio__subsection-active" : "portfolio__subsection"}>Print</div> */}
            </div>
        </div>
    </section>
  )
}

export default Portfolio
