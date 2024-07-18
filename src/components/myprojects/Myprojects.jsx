import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/chiccart.png'
import IMG2 from '../../assets/hexagon.png'
import IMG3 from '../../assets/spam.png'
import IMG4 from '../../assets/portfolio.png'
import IMG5 from '../../assets/CV.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>ChicCart</h3>
            <small className='text-light'>HTML | CSS | JavaScript</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/HrishithaMucharla/ChicCart" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Hexagon (Blogging Application)</h3>
            <small className='text-light'>Django | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/HrishithaMucharla/Blogging_Site-Hexagon-" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/HrishithaMucharla" target="_blank" rel='noreferrer' className='btn'>Github</a>
              {/* <a href="https://thakshila-bandara.github.io/my-portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   */}
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Multilingual  Spam  Detection Project</h3>
            <small className='text-light'>Machine Learning | NLP</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/HrishithaMucharla/MultiLanguage_Spam_Detection" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Rock-Paper-Scissor game</h3>
            <small className='text-light'>Computer Vision | OpenCV</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/HrishithaMucharla" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects