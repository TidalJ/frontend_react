import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href="https://github.com/TidalJ">
                <div>
                    <FaGithub />
                </div>
            </a>

            <a href="https://www.linkedin.com/in/jayjiang7/">
                <div>
                    <FaLinkedin />
                </div>
            </a>

            {/* 
            <div>

            </div> */}
        </div>
    )
}

export default SocialMedia
