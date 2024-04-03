import React from 'react'

import { MdWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa";

import "./About.css"

const About = () => {
  return (
    <div className='box-about'>
      <div className='box-about-me'>
        <h2 >Sobre Mi</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ab quisquam beatae dolorem aliquid! A ullam sequi ut ex laboriosam asperiores sit quam porro molestias corporis eum nisi debitis, modi, inventore minus culpa, officia distinctio rem sapiente! Minus, animi vero, illo expedita placeat consectetur quod tenetur obcaecati nulla, mollitia numquam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, neque?</p>
      </div>
      <br />
        <hr />
        <br />
      <div className='box-about-work'>
        <h2>¿En que Trabajo? </h2>
        <br />
        <div className='box-about-workAreasF'>
        <p className='box-about-workAreas__icon'><MdWeb color='#ff9292' font-size="25px" /> Front-End</p>
          <span>Front-End</span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur modi est impedit et tenetur quam quas dignissimos laborum accusamus. Cupiditate.</p>
        </div>
        <br />
        <br />
        <div className='box-about-workAreasC'>
          <p className='box-about-workAreas__icon'><FaCode color='#0077ff'font-size="25px" /> Back-End</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur modi est impedit et tenetur quam quas dignissimos laborum accusamus. Cupiditate.</p>
        </div>
      </div>
    </div>
  )
}

export default About