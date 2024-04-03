import React from 'react'
/* icons */
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

/* Import css */

import "./Profile.css"

const Profile = () => {
  return (
    <div>

        <div className='profile-content'>
              {/* objetos */}
              <div className='profile-content__FirstBox'>
                <h2 className='profile-content__FirstBox-h2'>Nahuel Alexander Coronel</h2>
                <span className='profile-content__FirstBox-span'>Web Developer</span>
                <div className='profile-content__FirstBox-reds'>
                  <a href="#"><FaGithub color='black' /></a>
                  <a href="#"><FaLinkedin color='#0077ff' /></a>
                </div>
              </div>
              <div className='profile-content__SecondBox'>
                    <div className='profile-content__SecondBox-data'>
                      <div className='profile-content__SecondBox-dataIcon'><IoMdPhonePortrait /></div>
                      <div>
                        <span className='profile-content__SecondBox-dataSpan'>Phone</span>
                        <p>+54 12154815</p>
                      </div>
                    </div>
                    <div className='profile-content__SecondBox-data'>
                      <div className='profile-content__SecondBox-dataIcon'><MdEmail /></div>
                      <div>
                        <span className='profile-content__SecondBox-dataSpan'>Email</span>
                        <p>example@gmail.com</p>
                      </div>
                    </div>
                    <div className='profile-content__SecondBox-data'>
                      <div className='profile-content__SecondBox-dataIcon'><FaLocationDot /></div>
                      <div>
                        <span className='profile-content__SecondBox-dataSpan'>Location</span>
                        <p>san miguel, bs as</p>
                      </div>
                    </div>
              </div>
              <div>
                <button className='btnDownloadcv'>Download CV</button>
              </div>
        </div>
    </div>
  )
}

export default Profile