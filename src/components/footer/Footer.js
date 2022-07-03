import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>BEACHES.</h3>
                    <div className="social">
                        <a href="https://github.com/andykallian/" target='_blank' rel="noreferrer">
                            <FaGithub className='icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/andersonviana-/" target='_blank' rel="noreferrer">
                            <FaLinkedin className='icon' />
                        </a>
                        <a href="https://www.instagram.com/andyvianna_" target='_blank' rel="noreferrer">
                            <FaInstagram className='icon' />
                        </a>
                        <a href="https://www.facebook.com/ViannaAndy" target='_blank' rel="noreferrer">
                            <FaFacebook className='icon' />
                        </a>
                        <a href="https://twitter.com/kallianandy" target='_blank' rel="noreferrer">
                            <FaTwitter className='icon' />
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer