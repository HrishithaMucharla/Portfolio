import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/hrishitha-mucharla-a95966282/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/HrishithaMucharla" target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials