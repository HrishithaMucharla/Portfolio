import React from 'react'
import './about.css'
import myImage from '../../assets/Designer.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'
// import { GrAchievement } from "react-icons/gr";


const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Computer Science and Enginnering(UG) <br /><i>Chaitanya Bharathi Institute of Technology.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current CGPA</h5>
                  <small>9.53</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Achievements</h5>
                  <small>
                    <ul>
                      <li>Winner in the Code For Good(2023) Hackathon</li>
                      <li>Mentee at Amazon ML Summer School(2024)</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Computer Science and Engineering Undergradute</b> at Chaitanya Bharathi Institute of Technology. 
                    I'm an enthusiastic and driven CSE student seeking a challenging internship opportunity to apply 
                    and expand my technical skills. 
                    With a strong academic foundation in Computer Science and hands-on experience in various programming languages,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About