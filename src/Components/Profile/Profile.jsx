import React, { Fragment } from 'react'
/* icons */
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import cv from "../../../public/assets/CV-DesarrolloWeb-Nahuel-Alexander-Coronel-2024-03-24.pdf"

/* Import css */

import "./Profile.css"

const Profile = () => {
  return (
    <Fragment>

        <div className='profile-content'>
              {/* objetos */}
              <div className='profile-content__FirstBox'>
                <h2 className='profile-content__FirstBox-h2'>Nahuel Alexander Coronel</h2>
                <span className='profile-content__FirstBox-span'>Web Developer</span>
                <div className='profile-content__FirstBox-reds'>
                  <a href="https://github.com/Nahuxc" target='_blank'><FaGithub color='black' /></a>
                  <a href="https://www.linkedin.com/in/nahuel-coronel-09a846229/" target='_blank'><FaLinkedin color='#0077ff' /></a>
                </div>
              </div>
              <div className='profile-content__SecondBox'>
                    <div className='profile-content__SecondBox-data'>
                      <div className='profile-content__SecondBox-dataIcon'><IoMdPhonePortrait /></div>
                      <div>
                        <span className='profile-content__SecondBox-dataSpan'>Phone</span>
                        <p>+54 9 11 2893-9674</p>
                      </div>
                    </div>
                    <div className='profile-content__SecondBox-data'>
                      <div className='profile-content__SecondBox-dataIcon'><MdEmail /></div>
                      <div>
                        <span className='profile-content__SecondBox-dataSpan'>Email</span>
                        <p>coronel98nahuel@gmail.com</p>
                      </div>
                    </div>
              </div>
              <div>
                <a href={cv} download="CV-DesarrolloWeb-Nahuel-Alexander-Coronel-2024-03-24.pdf" className='btnDownloadcv'>Download CV</a>
              </div>
        </div>
    </Fragment>
  )
}

export default Profile